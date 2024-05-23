
import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

function App() {
  const nav=useNavigate();
  const view = () => {
    nav("/viewArticle");
  };
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_server}/art`, { title, content, author });
      alert('Article created successfully');
      setTitle('');
      setContent('');
      setAuthor('');
    } catch (error) {
      console.error('Error creating article:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  
  
  return (
    <div className="back">
    <div className='align' style={{  minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ maxWidth: '600px', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px', background: '#fff' }}>
        <h1 className="font-weight-bold">Content Management System</h1>
        <br />
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
          <input className='form-control' type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <br /><br />
          <textarea className='form-control' placeholder="Content" rows="5" value={content} onChange={(e) => setContent(e.target.value)} required />
          <br /><br />
          <input className='form-control' type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
          <br /><br />
          <button style={{marginLeft:'36.5%'}}className='btn btn-primary' type="submit">Create Article</button>
          <br />
        </form>
        <h3>
          <br />
          <button style={{marginLeft:'40%'}}className="btn btn-outline-primary" onClick={view}>View Articles</button>
        </h3>
      </div>
    </div>
    </div>
  );
  

}

export default App;





