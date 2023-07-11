// import React, { useState } from "react";
// import { useRegisterUserMutation } from "../Apis/authApi";
// import { inputHelper, toastNotify } from "../Helper";
// import { apiResponse } from "../Interfaces";
// import { SD_Roles } from "../Utility/SD";
// import { useNavigate } from "react-router-dom";
// import { MainLoader } from "../Components/Page/Common";

// function Register() {
//   const [registerUser] = useRegisterUserMutation();
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const [userInput, setUserInput] = useState({
//     userName: "",
//     password: "",
//     role: "",
//     name: "",
//   });

//   const handleUserInput = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const tempData = inputHelper(e, userInput);
//     setUserInput(tempData);
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     const response: apiResponse = await registerUser({
//       userName: userInput.userName,
//       password: userInput.password,
//       role: userInput.role,
//       name: userInput.name,
//     });
//     if (response.data) {
//       toastNotify("Registeration successful! Please login to continue.");
//       navigate("/login");
//     } else if (response.error) {
//       toastNotify(response.error.data.errorMessages[0], "error");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="container text-center">
//       {loading && <MainLoader />}
//       <form method="post" onSubmit={handleSubmit}>
//         <h1 className="mt-5">Register</h1>
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
//               type="text"
//               className="form-control"
//               placeholder="Enter Name"
//               required
//               name="name"
//               value={userInput.name}
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
//           <div className="col-sm-6 offset-sm-3 col-xs-12 mt-4">
//             <select
//               className="form-control form-select"
//               required
//               value={userInput.role}
//               name="role"
//               onChange={handleUserInput}
//             >
//               <option value="">--Select Role--</option>
//               <option value={`${SD_Roles.CUTOMER}`}>Customer</option>
//               <option value={`${SD_Roles.ADMIN}`}>Admin</option>
//             </select>
//           </div>
//         </div>
//         <div className="mt-5">
//           <button type="submit" className="btn btn-success" disabled={loading}>
//             Register
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Register;

import React, { useState } from "react";
import { inputHelper, toastNotify } from "../Helper/index";
import { SD_Roles } from "../Utility/SD";
import { useRegisterUserMutation } from "../Apis/authApi";
import { apiResponse } from "../Interfaces";
import { MiniLoader } from "../Components/Page/Common";
import { useNavigate } from "react-router-dom";
import { MainLoader } from "../Components/Page/Common";

function Register() {
  const [registerUser] = useRegisterUserMutation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
    role: "",
    name: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const response: apiResponse = await registerUser({
      username: userInput.username,
      password: userInput.password,
      role: userInput.role,
      name: userInput.name,
    });

    if (response.data && response.data.isSuccess) {
      console.log(response.data);

      if (response.data.result !== null) {
        const { token } = response.data.result;
        localStorage.setItem("token", token);
      }

      toastNotify("Registeration successful! Please login to continue.");

      navigate("/login");
    } else if (response.error) {
      console.log(response.error.data.errorMessages[0]);

      toastNotify(response.error.data.errorMessages[0], "error");
    }

    setLoading(false);
  };

  const handleUserInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const tempData = inputHelper(e, userInput);
    setUserInput(tempData);
  };

  return (
    <div className="container text-center">
      {loading && <MainLoader />}
      <form method="post" onSubmit={handleSubmit}>
        <h1 className="mt-5">Register</h1>
        <div className="col-sm-6 offset-sm-3 col-xs-12 mt-4">
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Enter Username"
            required
            value={userInput.username}
            onChange={handleUserInput}
          />
        </div>
        <div className="col-sm-6 offset-sm-3 col-xs-12 mt-2">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Enter Name"
            required
            value={userInput.name}
            onChange={handleUserInput}
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
            onChange={handleUserInput}
          />
        </div>
        <div className="col-sm-6 offset-sm-3 col-xs-12 mt-2">
          <select
            className="form-control form-select"
            name="role"
            required
            value={userInput.role}
            onChange={handleUserInput}
          >
            <option value="">--Select Role--</option>
            <option value={`${SD_Roles.CUTOMER}`}>Customer</option>
            <option value={`${SD_Roles.ADMIN}`}>Admin</option>
          </select>
        </div>
        <div
          className="col-sm-6 offset-sm-3 col-xs-12 mt-3 mx-auto"
          style={{ width: "200px" }}
        >
          <button
            type="submit"
            className="btn btn-sm btn-success form-control"
            disabled={loading}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
