import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [ name, setName ] = useState("John Doe");
  const [ heading, setHeading ] = useState("Hello World");
  const [ message, setMessage ] = useState("Hey I want to share my...");
  const [ List, setList ] = useState([]);
  
  const handleSubmit = () => {
    // const data = [name,message]
    // alert(data);
    if(name!=="John Doe" && message!=="Hello World" && heading!=="Hey I want to share my...")
    {
      axios.post(`https://sheet.best/api/sheets/f976b48e-d9aa-4abe-8bb6-4bb53d7273d5`,
      {
        name,message,heading
      }
      );
    }
    else{
      alert("Give other than example")
    }
    
  };

  useEffect(() => {
    axios.get(`https://sheet.best/api/sheets/f976b48e-d9aa-4abe-8bb6-4bb53d7273d5`)
    .then((incomingData) => {
      setList(incomingData.data)
      // console.log(List);
    })
  }, []);


  return (
    <div className="App">
      <h1 id="top" className="Main" style={{color: "white", margin:"auto", marginLeft:"43.5%", marginTop:"50px" }}>Uni Connect</h1>
      <span className="desc" style={{color: "white"}}>Uni Connect is an open blog/confession posts site. Here you can post anything and it will be visible to anyone and also you donot need any account creation for this.</span>
      <div className="Create_Post">
        <h1>Create Post</h1>
        <form>
          <label htmlFor="Name">Name </label>
          <input type="text" id="Name" name="Name" placeholder={name} onChange={e => setName(e.target.value)} required/><br />
          <label htmlFor="Heading">Heading</label>
          <input type="text" id="Heading" name="Heading" placeholder={heading} onChange={e => setHeading(e.target.value)} required/><br />
          <label htmlFor="Message">Message</label><br />
          <textarea style={{width: "80%",height:"150px"}} id="Message" name="Message" placeholder={message} onChange={e => setMessage(e.target.value)} required/><br />
          <button type="submit" onClick={handleSubmit}>Submit </button>
        </form>
      </div>
      <span style={{color:"white",position:"relative",left:"42%",top:"100px"}}><a href="#Posts">Scroll Down to see the posts</a></span>
      <h1 id="Posts" style={{color:"white", position: "relative", top: "140px", left: "47%",width: "fit-content"}}>Posts</h1>
      <div className="listitems"  style={{color: "white"}}>
        {List.map(post => (
          <div className="PostListItem">
            <h2>{post.heading}</h2>
            <p>{post.message}</p>
            <span style={{fontSize: "10px"}}>By: {post.name}</span>
          </div>
        ))}
      </div>
      <a style={{position:"fixed",bottom: "15%", right: "5%", color: "white" }} href="#top">Up</a>
      <div style={{ position: "fixed", bottom: "2%", right: "2%", color: "white" }} className="signature">By <i>Hemanth Kumar</i></div>
    </div>
  );
}

export default App;
