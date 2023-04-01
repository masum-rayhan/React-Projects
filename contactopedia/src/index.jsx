import ReactDOM from "react-dom/client";
import Header from "./Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div style={{minBlockSize: "100vh", backgroundColor: "black"}}>
        <Header />
    </div>
);
