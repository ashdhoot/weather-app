import React from "react";
import HigherComponents from "./HigherComponents";

const TodoInputs = ({ data }) => {
  //   const getTodos = async () => {
  //     try {
  //       let response = await axios.get(
  //         "https://jsonplaceholder.typicode.com/todos"
  //       );
  //       setTodos(response.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   useEffect(() => {
  //     let data = todos.filter((todo) =>
  //       todo.title.toLowerCase().match(search.toLowerCase())
  //     );
  //     setTodos([...data]);
  //   }, [search]);

  //   useEffect(() => getTodos(), []);
  return (
    <div>
      <div className="my__data">
        <div className="row">
          {data.slice(0, 10).map((todo) => (
            <h5>{todo.title}</h5>
          ))}
        </div>
      </div>
    </div>
  );
};

const SearchTodos = HigherComponents(TodoInputs, "todos");

export default SearchTodos;
