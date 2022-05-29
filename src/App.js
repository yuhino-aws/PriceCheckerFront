import "./styles.css";
import React, { useState, useEffect } from "react";
import FetchApi from "./components/FetchApi";

export default function App() {
  const [codeType, setCodeType] = useState([]);
  const [codes, setCodes] = useState([]);

  return (
    <div className="App">
      <h2>Yahoo Price Checker</h2>
      <h3>Choose code type</h3>
      <select
        defaultValue="RakutenUrl"
        onChange={(event) => setCodeType(event.target.value)}
      >
        <option value="RakutenUrl">楽天URLコード</option>
        <option value="JAN">JAN</option>
        <option value="RakutenItemCD">楽天商品番号</option>
      </select>
      <h3>Input codes</h3>
      <textarea
        placeholder="Yahoo商品番号を入力"
        onChange={(event) => setCodes(event.target.value)}
      ></textarea>
      <h3>rexults</h3>
      <FetchApi codeType={codeType} codes={codes} />
    </div>
  );
}
