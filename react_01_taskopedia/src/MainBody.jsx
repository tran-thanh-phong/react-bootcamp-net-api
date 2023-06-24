import React from "react";
import Student from "./Compoenets/Student/Student";
import StudentReview from "./Compoenets/Student/StudentReview";
import { faker } from "@faker-js/faker";
class MainBody extends React.Component {
  render() {
    return (
      <div className="main-body ms-4">
        <div className="row">
          <p>In this course, we will learn React JS by building TaskOPedia!</p>
          <p>Total Lecture - 3</p>
          <ul>
            <li>Basic Foundation</li>
            <li>Functional and Class Components</li>
          </ul>
        </div>
        <div className="row">
          <p>Students Enrolled</p>
          <Student name={faker.person.fullName()} experiences={faker.person.jobArea()} children={<StudentReview/>}/>
          <Student name={faker.person.fullName()} experiences={faker.person.jobArea()} children={<StudentReview/>}/>
          <Student name={faker.person.fullName()} experiences={faker.person.jobArea()} children={<StudentReview/>}/>
        </div>
      </div>
    );
  }
}

export default MainBody;
