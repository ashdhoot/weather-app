import React, { useMemo, useState } from "react";

const Memocards = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(5);

  const multiCountMemo = useMemo(
    function multicount() {
      console.log("multicount rendered");
      return count * 5;
    },
    [count]
  );

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "500px" }}
    >
      <h2>{count}</h2>
      <h2>{item}</h2>
      <h3>{multiCountMemo}</h3>
      <div className="mt-2">
        <button onClick={() => setCount(count + 5)}>Count</button>
      </div>
      <div className="mt-2">
        <button onClick={() => setItem(item * 10)}>Items</button>
      </div>
    </div>
  );
};

export default Memocards;
