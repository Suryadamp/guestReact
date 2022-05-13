import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link,Route,Routes } from 'react-router-dom';
import Blog from './Blog';
import BlogOne from './BlogOne';
import BlogTwo from './BlogTwo';
import BlogThree from './BlowThree';
import Home from './Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<  Blog/>} />
        <Route path="/Blog" element={< Blog />}   />
        <Route path="/BlogOne" element={< BlogOne />}   />
        <Route path="/BlogTwo" element={< BlogTwo />}   />
        <Route path="/BlogThree" element={< BlogThree />}   />
        <Route path="/Home" element={< Home />}   />
        </Routes>
      </Router>
    {/* <Blog /> */}
    </div>
  );
}

export default App;

import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">

            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>

        </div>
      </div>
    </Router>
  );
}

export default App;
// import React, { useState, useEffect } from "react";
// import AddUser from "./AddUser,";
// import User from "./User";

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchUsers();
//   }, []);
//   const fetchUsers = async () => {
//     await fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data))
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   console.log(users);
//   const onAdd = async (name, email) => {
//     await fetch("https://jsonplaceholder.typicode.com/users", {
//       method: "Post",
//       body: JSON.stringify({
//         name: name,
//         email: email,
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .then((res) => {
//         if (res.status !== 201) {
//           return;
//         } else {
//           return res.json();
//         }
//       })
//       .then((data) => {
//         setUsers((users) => [...users, data]);
        
//       })
//       // .catch((err) => {
//       //   console.log(err);
//       // });
//   };
//   console.log(onAdd)
//   return (
//     <div>
//       <p>Start editing to see some magic happen :)</p>
//       <AddUser onAdd={onAdd} />
//       <User users={users} />
//     </div>
//   );
// }

export default App;
