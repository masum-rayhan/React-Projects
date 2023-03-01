const mainHeaderStyle = {
    color : "blueviolet",
    backgroundColor : "lightgray"
  }
  function MainHeader(){
    return <h1 style ={mainHeaderStyle}>REACT COURSE</h1>;
  }
  function SubHeader(){
    return <p style={{color:"gray",backgroundColor:"black"}}>This will be an exciting course!</p>;
  }
  function Header(){
    return (
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
    );
  }

  export default Header;