import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
const BACKEND_URL = "http://localhost:5174";

const Login = () => {
  const navigate = useNavigate();
  const google = () => {
    window.open(`${BACKEND_URL}/auth/google`, "_self");
  };

  return (
    <div className="flex flex-col justify-center items-center  h-screen bg-gray-900 text-white">
      <div className=" text-green-500 text-4xl font-bold mb-8 drop-shadow-lg">
        Enter the Game World
      </div>
      <div className="p-8 bg-gray-800 flex flex-col  md:flex-row rounded-lg shadow-lg">
        <div className="mb-8 md:mb-0 md:mr-8 justify-center flex flex-col">
          <div
            className="flex items-center justify-center px-4 py-2 bg-gray-700 text-white mb-4 cursor-pointer hover:bg-gray-600 transition-colors duration-300 rounded-md"
            onClick={google}
          >
            <img className=" w-8 h-8 mr-4" src="/google.svg" alt="google" />
            Sign in with Google
          </div>
          <div className="flex items-center justify-center px-4 py-2 bg-gray-700 text-white mb-4 cursor-pointer hover:bg-gray-600 transition-colors duration-300 rounded-md">
            <img className=" w-8 h-8 mr-4" src="/github.svg" alt="google" />
            Sign in with GitHub
          </div>
        </div>

        <div className="flex flex-col items-center px-2">
          <div className="flex items-center mb-4">
            <div className="bg-gray-600 h-1 w-12 mr-2"></div>
            <span className="text-gray-400">OR</span>
            <div className="bg-gray-600 h-1 w-12 ml-2"></div>
          </div>
          <input
            className="px-4 py-2 bg-gray-700 text-white rounded-md mb-4 w-full md:w-64"
            type="text"
            placeholder="Username"
          />
          <Button onClick={() => navigate("/game/random")}>
            Enter as a Guest
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
