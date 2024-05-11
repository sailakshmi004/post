

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Article() {
//   const nav = useNavigate();

//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [author, setAuthor] = useState('');
//   const [image, setImage] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append('title', title);
//       formData.append('content', content);
//       formData.append('author', author);
//       formData.append('image', image);

//       await axios.post('http://localhost:8000/articles', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       alert('Article created successfully');
//       setTitle('');
//       setContent('');
//       setAuthor('');
//       setImage(null);
//       nav("/viewArticle");
//     } catch (error) {
//       console.error('Error creating article:', error);
//       alert('An error occurred. Please try again later.');
//     }
//   };

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

  // const view = () => {
  //   nav("/viewArticle");
  // };

//   return (
//     <div>
//       <h1>Content Management System</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required /><br />
//         <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required /><br />
//         <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required /><br />
//         <input type="file" onChange={handleImageChange} /><br />
//         <button type="submit">Create Article</button>
//       </form>
//       <h3>
//         <button onClick={view}>View Articles</button>
//       </h3>
//     </div>
//   );
// }

// export default Article;


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
      await axios.post('http://localhost:8000/art', { title, content, author });
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





// return (
  //   <div className='align'>
  //   <div >
  //     <h1 style={{fontFamily:"sans-serif"}}>Content Management System</h1><br/><br/><br/>
  //     <form onSubmit={handleSubmit}>
  //       <input className='textarea'type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required /><br /><br/>
  //       <textarea  className='textarea'  placeholder="Content" rows="5" cols="100"  value={content} onChange={(e) => setContent(e.target.value)} required /><br /><br/>
  //       <input className='textarea'type="text" placeholder="Author"value={author} onChange={(e) => setAuthor(e.target.value)} required /><br /><br/><br/>
  //       <button className='btns'  type="submit">Create Article</button><br/>
  //     </form>
  //     <h3><br/>
  //     <button style={{borderBlockColor:"ActiveBorder", borderRadius:"6px", borderColor:"violet"}}onClick={view}>View Articles</button>
  //   </h3>
  //   </div>
  //   </div>
  // );






// import React, { useState} from 'react';
// import axios from 'axios';

// function App() {
//   // const [articles, setArticles] = useState([]);
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [author, setAuthor] = useState('');
//   const [image, setImage] = useState(null);

//   // useEffect(() => {
//   //   async function fetchArticles() {
//   //     try {
//   //       const response = await axios.get('http://localhost:8000/articles');
//   //       setArticles(response.data);
//   //     } catch (error) {
//   //       console.error('Error fetching articles:', error);
//   //     }
//   //   }
//   //   fetchArticles();
//   // }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append('title', title);
//       formData.append('content', content);
//       formData.append('author', author);
//       formData.append('image', image);

//       await axios.post('http://localhost:8000/articles', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       alert('Article created successfully');
//       setTitle('');
//       setContent('');
//       setAuthor('');
//       setImage(null);
//     } catch (error) {
//       console.error('Error creating article:', error);
//       alert('An error occurred. Please try again later.');
//     }
//   };

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   return (
//     <div>
//       <h1>Content Management System</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required /><br />
//         <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required /><br />
//         <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required /><br />
//         <input type="file" onChange={handleImageChange} accept="image/*" />
//         <button type="submit">Create Article</button>
//       </form>
//     </div>
//   );
// }

// export default App;
