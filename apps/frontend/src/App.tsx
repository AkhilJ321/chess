import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./screens/Landing";
import { Game } from "./screens/Game";
import { useState, useEffect } from "react";
import Login from "./screens/Login";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      fetch("http://localhost:5173/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          throw new Error("failed to authenticate user");
        })
        .then((responseJson) => {
          setUser(responseJson.user);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getUser();
  }, []);
  return (
    <div className="h-screen bg-slate-950 ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={user ? <Game /> : <Login />} />
          <Route path="/game" element={user ? <Game /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
