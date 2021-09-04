import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get<User[]>(
        `https://jsonplaceholder.typicode.com/users`
      );
      setUsers(res.data);
      setLoading(false);
    };
    fetchUsers();
  }, []);
  return (
    <div className="container-bg-color min-h-screen text-center py-10">
      <p className="text-blue-600 text-2xl">Hello Tailwind CSS</p>
      {!loading && (
        <ul>
          {users.map((user) => {
            return <li key={user.id}>{user.username}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
