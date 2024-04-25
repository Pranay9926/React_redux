import logo from "./logo.svg";
import "./App.css";
// import AddTodo from './component/AddTodo';
// import Todos from './component/Todos';
import Debouncing from "./component/Debouncing";
import React, { lazy, Suspense } from "react";
// import { useEffect, useState } from 'react';

function App() {
  const AddTodo = lazy(() => import("./component/AddTodo"));
  const Todos = lazy(() => import("./component/Todos"));
  return (
    <div className="App bg-gray-500 h-[100vh] ">
      <h1>Redux tool kit</h1>

      <Suspense fallback={<div>Please wait for AddTodo .... .... ...</div>}>
        <AddTodo />
      </Suspense>
      <Suspense fallback={<div>Please wait for Todos list .... .... ...</div>}>
        <Todos />
      </Suspense>
      <Debouncing />
    </div>
  );
}

export default App;
