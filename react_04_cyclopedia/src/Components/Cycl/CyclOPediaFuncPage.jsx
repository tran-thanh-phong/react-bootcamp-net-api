import React, { useState, useEffect, useRef, useId } from "react";
import { getRandomUser } from "../../Utility/api";
import InstructorFunc from "./InstructorFunc";

const CyclOPediaFuncPage = () => {
  const [state, setState] = useState({
    instructor: undefined,
    studentList: [],
    studentCount: 0,
    hideInstructor: false,
  });

  const [inputName, setInputName] = useState("");
  const [inputFeedback, setInputFeedback] = useState("");

  const totalRenders = useRef(0);
  const prevStudentCount = useRef(0);
  const feedbackInputRef = useRef(null);

  const id = useId();

  useEffect(() => {
    //console.log("This will be called on EVERY Render");

    totalRenders.current = totalRenders.current + 1;
    console.log("Total Renders: ", totalRenders.current);
  });

  useEffect(() => {
    //console.log("This will be called on whenever value of hideInstructor changes");

    const getUser = async () => {
      const response = await getRandomUser();
      const instructor = {
        name: response.data.first_name + " " + response.data.last_name,
        email: response.data.email,
        phone: response.data.phone_number,
      };

      setState((prevState) => {
        return {
          ...prevState,
          instructor: instructor,
        };
      });
    };

    if (!state.hideInstructor) {
      getUser();
    }
  }, [state.hideInstructor]);

  useEffect(() => {
    console.log("Main - Update - studentCount");

    const getUser = async () => {
      const response = await getRandomUser();
      const student = {
        name: response.data.first_name + " " + response.data.last_name,
      };

      setState((prevState) => {
        return {
          ...prevState,
          studentList: [...prevState.studentList, student],
        };
      });
    };

    if (prevStudentCount.current < state.studentCount) {
      getUser();
    } else if (prevStudentCount.current > state.studentCount) {
      setState((prevState) => {
        return {
          ...prevState,
          studentList: [],
        };
      });
    }
  }, [state.studentCount]);

  useEffect(() => {
    //console.log("This will be called on Initial/First Render/Mount");

    console.log('Prev Count', prevStudentCount.current);
    console.log('Current Count', state.studentCount);

    prevStudentCount.current = state.studentCount;

    console.log('Prev Count', prevStudentCount.current);
    console.log('Current Count', state.studentCount);
    
  }, [state.studentCount]);

  useEffect(() => {
    //console.log("This will be called on Initial/First Render/Mount");
    feedbackInputRef.current.focus();

    return () => {
      //console.log("This will be called on when component will be UNMOUNTED");
    };
  }, []);

  const handleAddStudent = () => {
    setState((prevState) => {
      return {
        ...prevState,
        studentCount: prevState.studentCount + 1,
      };
    });
  };

  const handleRemoveAllStudent = () => {
    setState((prevState) => {
      return {
        ...prevState,
        studentCount: 0,
      };
    });
  };

  const handleToggleInstructor = () => {
    console.log("handleToggleInstructor", state);
    setState((prevState) => {
      return {
        ...prevState,
        hideInstructor: !prevState.hideInstructor,
      };
    });
  };

  return (
    <div>
      <div className="p-3">
        <span className="h4 text-success">Instructor &nbsp;</span>
        <i
          className={`bi ${
            state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"
          } btn btn-sm btn-success`}
          onClick={handleToggleInstructor}
        ></i>
        {!state.hideInstructor && state.instructor ? (
          <InstructorFunc instructor={state.instructor} />
        ) : null}

        <br />
        Total renders: {totalRenders.current} 
        <br />
        Prev Student Count: {prevStudentCount.current}
      </div>

      <div className="p-3">
        <span className="h4 text-success">Feedback</span>
        <br />
        <label htmlFor={`${id}-inputName`}>Name:</label><br />
        <input
          id={`${id}-inputName`}
          type="text"
          placeholder="Name..."
          value={state.inputName}
          onChange={(e) => setInputName(e.target.value)}
        ></input>{" "}
        &nbsp; Value: {inputName}<br />
        <label htmlFor={`${id}-inputFeedback`}>Feedback:</label><br />
        <textarea
          id={`${id}-inputFeedback`}
          placeholder="Feedback..."
          ref={feedbackInputRef}
          value={state.inputFeedback}
          onChange={(e) => setInputFeedback(e.target.value)}
        ></textarea>{" "}
        &nbsp; Value:{inputFeedback}
      </div>

      <div className="p-3">
        <span className="h4 text-success">Students</span>
        <br />
        Student Count: {state.studentCount}
        <br />
        <button className="btn btn-sm btn-success" onClick={handleAddStudent}>
          Add Student
        </button>{" "}
        &nbsp;
        <button
          className="btn btn-sm btn-danger"
          onClick={handleRemoveAllStudent}
        >
          Remove All Student
        </button>
        {state.studentList.map((student, index) => {
          return (
            <div className="text-white" key={index}>
              - {student.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CyclOPediaFuncPage;
