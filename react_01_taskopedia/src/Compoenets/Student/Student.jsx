import React from "react";

class Student extends React.Component {
  render() {
    return (
      <div className="student col-4 col-sm-8 p-1">
        <div className="row"> 
          <div className="col-2">
            <img src="https://ui-avatars.com/api/?background=random" alt="avatar" />
          </div>
          <div className="col-8">
            <p>
              {this.props.name}
              <br/>
              {this.props.experiences}
            </p>
          </div>
          <div className="col-2">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Student;
