import { useState } from "react";
import "./App.css";

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

function Head() {
  return (
    <>
      <hr color="#eee" size="3"></hr>
      <div className="css-head-box">
        <div style={{float:"left"}}>&nbsp;엽's Todo List</div>
        <div style={{float:"right"}}>Sparta React&nbsp;</div>
      </div>
    </>
  )
}

///////////////////////////////////////////////////////

function TodoList() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      tdTitle: "리액트를 배우자",
      tdBody: "스파르타에 가입해서 항해99 2주 단기 과정을 통하여 간단한 'to do list'를 만들어 리액트기초 공부하기",
      isDone: true,
    },
    {
      id: 2,
      tdTitle: "자바스크립트 기초 공부",
      tdBody: "간단한 자바스크립트 문법을 연습하자",
      isDone: false,
    },
  ]);
  const del = (todoList) => {
    setTodos(todos.filter((todos) => todos.id !== todoList.id));
  }
  const change = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  }
  
  return (
    <>
      <div className="css-input-box">
        제목 <input
          className="add-input"
          placeholder="제목을 입력하세요"
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        내용 <input
          className="add-input"
          placeholder="내용을 입력하세요"
          type="text"
          value={body}
          onChange={(event) => {
            setBody(event.target.value);
          }}
        />
        <button
          className="add-button"
          onClick={() => {
            setTodos([...todos, {
              id: todos.length + 1,
              tdTitle: title,
              tdBody: body,
              isDone: true
            }]);
          }}
        >
          추가하기
        </button>
      </div>

      <h3>Working.. 🔥</h3>
      <div className="css-todos-container">
        {todos.map((todo) => (
          todo.isDone ?
          <div className="css-todo1" key={todo.id}>
            <div className="todos-title">{todo.tdTitle}</div>
            <hr />
            {todo.tdBody}
            {/* <br/>
            ID : {todo.id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            isDone : {todo.isDone ? "true" : "false"} */}
            <br />
            <div className="button-set">
              <button 
                className="todo-delete-button"
                onClick={() => {
                del(todo)
                }}>
                삭제
              </button>
              <button
                className="todo-complete-button"
                onClick={() => {
                change(todo.id)
              }}>
                완료
              </button>
            </div>
          </div>
        :null))}
      </div>

      <h3>Done..! 🎉</h3>
      <div className="css-todos-container">
        {todos.map((todo) => (
          todo.isDone === false ?
          <div className="css-todo2" key={todo.id}>
            <div className="todos-title">{todo.tdTitle}</div>
            <hr />
            {todo.tdBody}
            {/* <br/>
            ID : {todo.id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            isDone : {todo.isDone ? "true" : "false"} */}
            <br />
            <div className="button-set">
              <button
                className="todo-delete-button"
                onClick={() => {
                del(todo)
                }}>
                삭제
              </button>
              <button
                className="todo-complete-button"
                onClick={() => {
                change(todo.id)
                }}>
                미완료
              </button>
            </div>
          </div>
        :null))}
      </div>
    </>
  )
}


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

function App() {

  return (
  <div className="layout">
    <Head />
    <TodoList />
  </div>
  )
}


export default App;