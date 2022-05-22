import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const onClickButton = () => alert();
  function Content() {
    const [post, setPosts] = useState([]);
    const response = "hoge";

    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          setPosts(response.data);
        });
    }, []);

    if (!post) return null;
    return (
      <>
        <p>{response}</p>
      </>
    );
  }

  return (
    <div className="App">
      <h2>Yahoo Price Checker</h2>
      <h3>Choose code type</h3>
      <select>
        <option value="RakutenUrl" selected>
          楽天URLコード
        </option>
        <option value="JAN">JAN</option>
        <option value="RakutenItemCD">楽天商品番号</option>
      </select>
      <h3>Input codes</h3>
      <input placeholder="Yahoo商品番号を入力"></input>
      <button onClick={onClickButton}>Search</button>
      <h3>result</h3>
      {Content()}
    </div>
  );
}
