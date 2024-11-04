import React from "react";
import "./App.css";
import Newspaper from "./components/Newspaper";
import NameList from "./components/NameList";
import UserList from "./components/Users";
import ItemList from "./components/Shop";
import Greet from "./components/hi";
import Tasks from "./components/Tasks";
function App() {
  return (
    <div className="App">
      <Tasks />
      <Greet />
      <UserList />
      <ItemList />
      <Newspaper />
      <NameList />
    </div>
  );
}

export default App;
