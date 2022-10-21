import './App.css';

function App() {
  const todoList = [
    {
      todo: '아침먹기',
    },
    {
      todo: '점심먹기',
    },
    {
      todo: '저녁먹기',
    },
  ];

  return (
    <div className="App">
      <h3>오늘 할 일</h3>
      <form>
        <input className="add_todo" type="textbox"></input>
      </form>
      <ul className="todoList">
        {todoList.map((el) => {
          return (
            <li className="todo" key={el.index}>
              {el.todo}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
