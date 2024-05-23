
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArticleListPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_server}/articls`);
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    }
    fetchArticles();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/art/${id}`);
      setArticles(articles.filter(article => article.id !== id));
      alert('Article deleted successfully');
    } catch (error) {
      console.error('Error deleting article:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      await axios.put(`${process.env.REACT_APP_server}/art/${id}`, updatedData);
      const updatedArticles = articles.map(article => {
        if (article.id === id) {
          return { ...article, ...updatedData };
        }
        return article;
      });
      setArticles(updatedArticles);
      alert('Article updated successfully');
    } catch (error) {
      console.error('Error updating article:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="full-page-background" style={{ backgroundColor: "#F0F0F0" }}>
      <div className='viewarticle' style={{ padding: '50px 0' }}>
        <h1 className="text-center" style={{ fontFamily: "monospace", fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Articles</h1>
        <div className="container">
          <div className="row">
            {articles.map(article => (
              <div key={article.id} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h3 style={{ fontSize: "1.5rem", fontWeight: 'bold', fontFamily: 'cursive' }} className="card-title">{article.title}</h3>
                    <div className="card-text">
                      <p style={{ fontFamily: 'cursive' }}>{article.content}</p>
                    </div>
                    <p className="card-text" style={{ fontFamily: 'cursive' }}>Author: {article.author}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(article.id)}>Delete</button>
                    <UpdateButton article={article} handleUpdate={handleUpdate} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const UpdateButton = ({ article, handleUpdate }) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updatedData, setUpdatedData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(article.id, updatedData);
    setUpdatedData({});
    setShowUpdateForm(false);
  };

  return (
    <div>
      <button className='btn btn-primary btn-sm' onClick={() => setShowUpdateForm(true)}>Update</button>
      {showUpdateForm && (
        <form onSubmit={handleSubmit} className="mt-3">
          <div className="form-group">
            <input type="text" className="form-control" value={updatedData.title || article.title} onChange={e => setUpdatedData({ ...updatedData, title: e.target.value })} />
          </div>
          <div className="form-group">
            <textarea className="form-control" rows="3" value={updatedData.content || article.content} onChange={e => setUpdatedData({ ...updatedData, content: e.target.value })} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" value={updatedData.author || article.author} onChange={e => setUpdatedData({ ...updatedData, author: e.target.value })} />
          </div>
          <button type="submit" className="btn btn-success">Save</button>
        </form>
      )}
    </div>
  );
}

export default ArticleListPage;


