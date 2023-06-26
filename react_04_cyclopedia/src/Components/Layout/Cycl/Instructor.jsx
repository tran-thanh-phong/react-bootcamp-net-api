import React from "react";
export default class Instructor extends React.Component {
  componentDidMount() {
    console.log("Instructor Did Mount");
  }

  componentDidUpdate() {
    console.log("Instructor Did Update");
  }

  componentWillUnmount() {
    console.log("Instructor Will Unmount");
  }

  render() {
    console.log("Instructor Render");
    return (
      <div className={this.props.hideInstructor ? "d-none" : ""}>
        <span>Name: {this.props.instructor?.name}</span>
        <br />
        <span>Email: {this.props.instructor?.email}</span>
        <br />
        <span>Phone: {this.props.instructor?.phone}</span>
      </div>
    );
  }
}
