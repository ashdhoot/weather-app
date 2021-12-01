import React from "react";
import TempApp from "./components/TempApp";
import Memocards from "./components/Memocards";
import UseRefcomp from "./components/UseRefcomp";
import UserInputs from "./components/Hoc/UserInputs";
import TodoInputs from "./components/Hoc/TodoInputs";
import SearchTodos from "./components/Hoc/TodoInputs";
import SearchUser from "./components/Hoc/UserInputs";

const App = () => {
  return (
    <div className="d-flex">
      {/* <div>
      <TempApp />
   </div> */}
      {/* <div>
        <Memocards />
      </div> */}
      {/* <div>
        <UseRefcomp />
      </div> */}
      <div>
        <SearchUser />
      </div>
      <div>
        <SearchTodos />
      </div>
    </div>
  );
};

export default App;
