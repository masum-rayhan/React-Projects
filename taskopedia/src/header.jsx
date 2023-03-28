function MainHeader() {
    return <h1 className="heading1">React Course</h1>;
  }
  
  const subHeaderStyle = {
    color: "blueviolet",
    backgroundColor: "lightgray",
  };
  
  function SubHeader() {
    return <p style={subHeaderStyle}>This will be an exciting course.</p>;
  }
  
  export default function Header() {
    return (
      <div>
        <MainHeader />
        <SubHeader />
      </div>
    );
  }

  //export default Header;