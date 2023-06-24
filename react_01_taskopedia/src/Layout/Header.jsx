import logo from "../images/react.png";

function MainHeader() {
  return (
    <div  className="main-header p-1">
      <img src={logo} alt="logo"/>
      <h1 className="ms-2">React Course - TaskOPedia</h1>
    </div>
  );
}

const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "lightgray",
};

function SubHeader() {
  return (
    <p className="sub-header">
      
    </p>
  );
}

const Header = () => {
  return (
    <div className="header">
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  );
};

export default Header;
