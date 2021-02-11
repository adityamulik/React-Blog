import React from 'react';
import { useParams } from 'react-router-dom';
import { articles } from './article-content';

const ArticlePage = () => {
  const { name } = useParams();
  const matchingArticle = articles.find(article => article.name === name);

  return (
    <React.Fragment>
      <h1>{matchingArticle.title}</h1>
      {matchingArticle.content.map(paragraph => (
        <p key={paragraph}>{paragraph}</p>
      ))}      
    </React.Fragment>
  );  
}

export default ArticlePage;