import React, { useState } from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import Form from "./components/Form";
import Layout from "./components/Layout";
import List from "./components/List";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "props",
      body: "크흠..",
      isDone: false,
    },
    {
      id: 2,
      title: "state",
      body: "흐음..",
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
