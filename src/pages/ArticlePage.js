import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { articles } from './article-content';

const ArticlePage = () => {
  const [upvotes, setUpvotes] = useState(0);
  const [comments, setComments] = useState([]);

  const { name } = useParams();
  const matchingArticle = articles.find(article => article.name === name);

  useEffect(() => {
    const loadArticleInfo = async () => {
      const response = await fetch(`/api/articles/${name}`);
      const articleInfo = await response.json();
      setUpvotes(articleInfo.upvotes);
      setComments(articleInfo.comments);
    }
    loadArticleInfo();
  }, [name]);


  const upvoteArticle = async () => {
    const response = await fetch(`/api/articles/${name}/upvote`, {
      method: 'post',
    });
    const updatedArticleInfo = await response.json();
    setUpvotes(updatedArticleInfo.upvotes);
    setComments(updatedArticleInfo.comments);
  }

  return matchingArticle ? (    
    <React.Fragment>
      <h1>{matchingArticle.title}</h1>
      <div id="upvotes-section">
        <button onClick={upvoteArticle}>Add Upvote</button>
        <p>This article has {upvotes} upvotes.</p>
      </div>
      {matchingArticle.content.map(paragraph => (
        <p key={paragraph}>{paragraph}</p>
      ))}      
    </React.Fragment>
  ): (
    <h1>Look's like you don't have article called {name}</h1>
  );  
}

export default ArticlePage;