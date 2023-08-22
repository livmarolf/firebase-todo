import AuthComponent from "./AuthComponent";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthComponent />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
