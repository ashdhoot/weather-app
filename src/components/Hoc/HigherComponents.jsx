import axios from "axios";
import React from "react";

const HigherComponents = (WrappedComponent, entity) => {
  return class extends React.Component {
    state = {
      data: [],
      search: "",
    };

    componentDidMount() {
      const getData = async () => {
        try {
          let response = await axios.get(
            `https://jsonplaceholder.typicode.com/${entity}`
          );
          this.setState({ ...this.state, data: response.data });
        } catch (err) {
          console.log(err);
        }
      };
      getData();
    }

    render() {
      let { search, data } = this.state;
      let filteredData = data.filter((d) => {
        if (entity === "users") {
          const { name } = d;
          return name.toLowerCase().match(search.toLowerCase());
        }
        if (entity === "todos") {
          const { title } = d;
          return title.toLowerCase().match(search.toLowerCase(d));
        }
      });
      return (
        <>
          <div className="search-bar">
            <input
              type="text"
              className="form-control"
              value={search}
              onChange={(e) =>
                this.setState({ ...this.state, search: e.target.value })
              }
            />
          </div>
          <WrappedComponent data={filteredData} />;
        </>
      );
    }
  };
};

export default HigherComponents;
