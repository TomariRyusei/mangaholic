import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      setUsers(res.data);
      console.log(users);
    };
    fetchUsers();
  }, []);
  return (
    <div className="container-bg-color min-h-screen text-center py-10">
      <p className="text-blue-600 text-2xl">Hello Tailwind CSS</p>
    </div>
  );
}

export default App;
