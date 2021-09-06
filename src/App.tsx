import axios from "axios";
import { useState, useEffect } from "react";

import { RegisterForm } from "./components/organisms/form/RegisterForm";
import { LoginForm } from "./components/organisms/form/LoginForm";

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
    <div className="bg-grayA">
      {/* <div className="bg-white"> */}
      <main className="flex items-center justify-center min-h-screen">
        {/* <RegisterForm /> */}
        <LoginForm />
      </main>
    </div>
  );
}

export default App;
