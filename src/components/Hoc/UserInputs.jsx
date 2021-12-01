import React from "react";
import HigherComponents from "./HigherComponents";

const UserInputs = ({ data }) => {
  //   const [users, setUsers] = useState([]);
  //   const [search, setSearch] = useState("");

  //   const getUsers = async () => {
  //     try {
  //       let response = await axios.get(
  //         "https://jsonplaceholder.typicode.com/users"
  //       );
  //       setUsers(response.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   useEffect(() => {
  //     let data = users.filter(
  //       (user) =>
  //         //   user.name.toLowerCase().match(search.toLowerCase())
  //         user.name.indexOf(search) >= 0
  //     );
  //     setUsers([...data]);
  //   }, [search]);

  //   useEffect(() => getUsers(), []);
  return (
    <div>
      <div className="my__data">
        <div className="row">
          {data.map((user) => (
            <h5>{user.name}</h5>
          ))}
        </div>
      </div>
    </div>
  );
};
const SearchUser = HigherComponents(UserInputs, "users");

export default SearchUser;
