// import React, { useState } from "react";
// import { useLoginUserMutation } from "../Apis/authApi";
// import { inputHelper } from "../Helper";
// import { apiResponse, userModel } from "../Interfaces";
// import jwt_decode from "jwt-decode";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { setLoggedInUser } from "../Storage/Redux/userAuthSlice";
// import { MainLoader } from "../Components/Page/Common";

// function Login() {
//   const [error, setError] = useState("");
//   const [loginUser] = useLoginUserMutation();
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [userInput, setUserInput] = useState({
//     userName: "",
//     password: "",
//   });

//   const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const tempData = inputHelper(e, userInput);
//     setUserInput(tempData);
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     const response: apiResponse = await loginUser({
//       userName: userInput.userName,
//       password: userInput.password,
//     });
//     if (response.data) {
//       const { token } = response.data.result;
//       const { fullName, id, email, role }: userModel = jwt_decode(token);
//       localStorage.setItem("token", token);
//       dispatch(setLoggedInUser({ fullName, id, email, role }));
//       navigate("/");
//     } else if (response.error) {
//       setError(response.error.data.errorMessages[0]);
//     }

//     setLoading(false);
//   };
//   return (
//     <div className="container text-center">
//       {loading && <MainLoader />}
//       <form method="post" onSubmit={handleSubmit}>
//         <h1 className="mt-5">Login</h1>
//         <div className="mt-5">
//           <div className="col-sm-6 offset-sm-3 col-xs-12 mt-4">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter Username"
//               required
//               name="userName"
//               value={userInput.userName}
//               onChange={handleUserInput}
//             />
//           </div>

//           <div className="col-sm-6 offset-sm-3 col-xs-12 mt-4">
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Enter Password"
//               required
//               name="password"
//               value={userInput.password}
//               onChange={handleUserInput}
//             />
//           </div>
//         </div>

//         <div className="mt-2">
//           {error && <p className="text-danger">{error}</p>}
//           <button
//             type="submit"
//             className="btn btn-success"
//             style={{ width: "200px" }}
//           >
//             Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { inputHelper } from "../Helper";
import { useLoginUserMutation } from "../Apis/authApi";
import { apiResponse, userModel } from "../Interfaces";
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { setLoggedInUser } from '../Storage/Redux/userAuthSlice';
import { isParameter } from "typescript";
import {useNavigate} from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempData = inputHelper(e, userInput);
    setUserInput(tempData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log(userInput);

    const response: apiResponse = await loginUser({
      userName: userInput.username,
      password: userInput.password,
    });

    if (response.data) {
      console.log(response.data);
      const {token} = response.data.result;
      const { fullName, id, email, role }: userModel = jwt_decode(token);

      localStorage.setItem("token", token);
      dispatch(setLoggedInUser({ fullName, id, email, role }));
      navigate('/');
    } else if (response.error) {
      console.log(response.error.data.errorMessages[0]);
      setError(response.error.data.errorMessages[0]);
    }

    setLoading(false);
  };

  return (
    <div className="container text-center">
      <form method="post" onSubmit={handleSubmit}>
        <h1 className="mt-5">Login</h1>
        <div className="col-sm-6 offset-sm-3 col-xs-12 mt-4">
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Enter Username"
            required
            value={userInput.username}
            onChange={handleChange}
          />
        </div>
        <div className="col-sm-6 offset-sm-3 col-xs-12 mt-2">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter Password"
            required
            value={userInput.password}
            onChange={handleChange}
          />
        </div>
        <div
          className="col-sm-6 offset-sm-3 col-xs-12 mt-3 mx-auto"
          style={{ width: "200px" }}
        >
          {error && <p className="text-danger">{error}</p>}
          <button type="submit" className="btn btn-sm btn-success form-control">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
