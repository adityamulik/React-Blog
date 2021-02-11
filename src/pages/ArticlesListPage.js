import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from './article-content';

const ArticlesListPage = () => (
  <div>
    <h1>This is the articles list page</h1>
    {articles.map(article => (
      <Link to={`/articles/${article.name}`} className="article-list" key={article.name}>
        <h4>{article.title}</h4>
        <p>{article.content[0].substring(0, 150)}....</p>
      </Link>
    ))}

  </div>
)

export default ArticlesListPage;