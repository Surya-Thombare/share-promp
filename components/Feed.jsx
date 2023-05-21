"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard 
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {

  const [serachText, setSerachText] = useState('');
  const [posts, setPosts] = useState([])

  const handleSearchChange = (e) => {
    e.preventDefault();
  }

  const fetchPosts = async () => {
    const response = await fetch('/api/prompt');
    const data = await response.json();
    setPosts(data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
      <section className="feed">
        <form className="realtive w-full felx-center">
          <input
            type="text"
            placeholder="Search For a tag or a username"
            value={serachText}
            onChange={handleSearchChange}
            required
            className="search_input peer"
          />
        </form>

        <PromptCardList
          data={posts}
          handleTagClick={() => {}}
        />
      </section>
    )
};

export default Feed;
