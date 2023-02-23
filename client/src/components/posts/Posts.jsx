import React, { useState } from 'react';
import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  const [noOfElement, setnoOfElement] = useState(9);
  const [filter, setFilter] = useState('');

  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement)
  }

  const slice = posts.slice(0, noOfElement);

  const search = slice.filter(item => { return item.title.toLowerCase().includes(filter.toLowerCase()) })

  return (
    <div className="mainPost">

      <div class="input-icons">
        <i className="fas fa-search"></i>
        <input class="search_input" type="text" placeholder="Search" value={filter} onChange={(e) => setFilter(e.target.value)}/>
      </div>

      <div className="posts">
        {search.map((p, i) => (
          <Post post={p} key={i} />
        ))}
      </div>
      <button className="pagination" onClick={() => loadMore()}>Load More</button>
    </div>
  );
}
