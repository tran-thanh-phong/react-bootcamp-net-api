import React, {useEffect} from "react";
const InstructorFunc = (props) => {

  useEffect(() => {
    console.log("InstructorFunc - This will be called on EVERY Render");
  });

  useEffect(() => {
    console.log("InstructorFunc - This will be called on Initial/First Render/Mount");
  }, []);

  useEffect(() => {
    console.log("InstructorFunc - This will be called on whenever value of hideInstructor changes");
  }, [props.instructor]);

  useEffect(() => {
    console.log("InstructorFunc - This will be called on Initial/First Render/Mount");

    return () => {
      console.log("InstructorFunc - This will be called on when component will be UNMOUNTED");
    };
  }, []);

  return (
    <div>
      <span>Name: {props.instructor?.name}</span>
      <br />
      <span>Email: {props.instructor?.email}</span>
      <br />
      <span>Phone: {props.instructor?.phone}</span>
    </div>
  );
}

export default InstructorFunc;