import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  // Tracking the changes in the sign up inputs
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  // Handle check box change
  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender: gender });
  };

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputs);
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-80 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        {/* Heading */}
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> ChatApp</span>
        </h1>

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit}>
          {/* Fullname input feild */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="@eg. John Doe"
              className="w-full input input-bordered  h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          {/* Username input feild */}
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text  text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="@eg. johndoe123"
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
              <span className="text-base label-text  text-white">Password</span>
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

          {/* Confirm Password feild */}
          <div>
            <label className="label">
              <span className="text-base label-text  text-white">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          {/* Gender Checkboxes Component */}
          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          {/* Link to Login page */}
          <Link
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block  text-white"
            to={"/login"}
          >
            Already have an account?
          </Link>

          {/* Sign Up Button */}
          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">
            {loading ? (
                <span className="loading loading-spinner "></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
