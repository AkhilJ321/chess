const Login = () => {
  return (
    <div className="flex justify-center  h-screen">
      <div>
        <div className=" text-green-600 text-4xl font-semibold">
          Enter the Game World
        </div>
        <div>
          <div>
            <button>Sign in with Google</button>
          </div>
          <div>
            <button>Sign in with GitHub</button>
          </div>
          <div>
            <input type="text" placeholder="Username" />
            <button>Enter as guest</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
