// import React from "react";
// import "../style/TempApp.css";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const TempApp = () => {
//   const [city, setCity] = useState(null);
//   const [search, setSearch] = useState("Mumbai");
//   const [detail, setDetail] = useState(null);

//   useEffect(() => {
//     const fetchApi = async () => {
//       const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f3545bca1a700b3e2bbd6773ab6b8721`;
//       const response = await fetch(url);
//       const resJson = await response.json();
//       setCity(resJson.main);
//     };

//     fetchApi();
//   }, [search]);

//   return (
//     <>
//       <div className="box">
//         <div className="container">
//           <div className="card temp__card">
//             <div className="inputData">
//               <input
//                 type="search"
//                 className="input-field"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//               />
//             </div>
//             {!city ? (
//               <p>No Data Found</p>
//             ) : (
//               <>
//                 <div className="info">
//                   <h2 className="location">
//                     <i className="fas fa-street-view"></i>
//                     {search}
//                   </h2>
//                   <h1 className="temp">{city.temp}°Cel</h1>
//                   <h3 className="tempmin__max">
//                     Min:{city.temp_min}°Cel | Max : {city.temp_max}°Cel
//                   </h3>
//                 </div>

//                 <div className="wave-one"></div>
//                 <div className="wave-two"></div>
//                 <div className="wave-three"></div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TempApp;
