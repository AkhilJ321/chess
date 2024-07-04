import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./screens/Landing";
import { Game } from "./screens/Game";
import { useState, useEffect } from "react";
import Login from "./screens/Login";

function App() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const res = await fetch("http://localhost:5174/auth/auth/refresh", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.ok) {
          setAuthenticated(true);
          localStorage.setItem("token", (await res.json()).token);
        } else {
          throw new Error("Failed to authenticate");
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchToken();
  }, []);
  return (
    <div className="h-screen bg-slate-950 ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={authenticated ? <Game /> : <Login />} />
          <Route path="/game" element={authenticated ? <Game /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
