import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchApi = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <div>
      <p>{props.codeType}</p>
      <p>{props.codes}</p>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}> {post.title} </li>
        ))}
      </ul> */}
    </div>
  );
};
export default FetchApi;
