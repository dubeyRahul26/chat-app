import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { useState } from "react";

const Login = () => {
  const { login, loading } = useLogin();
  const [inputs, setInputs] = useState({ username: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        {/* Heading */}
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          {/* Username  feild*/}
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          {/* Password feild */}
          <div>
            <label className="label">
              <span className="text-base label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          {/* Link to Sign up page  */}
          <Link
            to={"/signup"}
            className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block text-white"
          >
            {"Don't"} have an account?
          </Link>

          {/* Submit butoon */}
          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner "></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
