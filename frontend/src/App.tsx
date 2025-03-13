import { useState, useEffect } from "react";
import { fetchHello } from "./services/api";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHello = async () => {
      try {
        const data = await fetchHello();
        setMessage(data.message);
      } catch (error) {
        setMessage("Error connecting to backend");
      } finally {
        setLoading(false);
      }
    };

    getHello();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          React + Vite + Tailwind Frontend
        </h1>
        <div className="bg-gray-50 p-4 rounded border">
          {loading ? (
            <p className="text-gray-500">Loading message from backend...</p>
          ) : (
            <p className="text-indigo-600 font-medium">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
