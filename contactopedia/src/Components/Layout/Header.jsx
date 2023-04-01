import logo from "./images/react.png";

const Header = () => {
  return (
    <div className="text-center">
      <div className="pt-2 py-1 pl-2" style={{ borderBottom: "1px solid #777" }}>
        <img src={logo} style={{height: "35px", verticalAlign: "top"}} alt="react logo"></img>
        <span className="h2 pt-4 text-white-50 m-2">ContactOPedia</span>
        <div style={{overflow:"auto", whiteSpace: "nowrap"}}></div>
      </div>
    </div>
  );
};
export default Header;
