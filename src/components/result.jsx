import React, { useState, useEffect } from "react";
import axios from "axios";

function checkPrice() {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);
}

export default checkPrice;
