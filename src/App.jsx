import React, { useState } from "react";
import "./App.css"; // π₯ λ°λμ App.css νμΌμ import ν΄μ€μΌ ν©λλ€.
import Form from "./components/Form";
import Layout from "./components/Layout";
import List from "./components/List";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "props",
      body: "ν¬ν ..",
      isDone: false,
    },
    {
      id: 2,
      title: "state",
      body: "νμ..",
      isDone: true,
    },
  ]);

  return (
    <Layout>
      <Form setTodos={setTodos} todos={todos} />
      <List todos={todos} setTodos={setTodos} />
    </Layout>
  );
};

export default App;
