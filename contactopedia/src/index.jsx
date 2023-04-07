import ReactDOM from "react-dom/client";
import ContactIndex from "./Components/ContactPages/ContactIndex.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div style={{minBlockSize: "100vh", backgroundColor: "black"}}>
        <ContactIndex />
    </div>
);
