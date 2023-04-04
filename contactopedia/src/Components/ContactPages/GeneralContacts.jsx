import Contact from "./Contact";
const GeneralContacts = (props) => {
  return (
    <div
      className="col-12 py-2"
      style={{ backgroundColor: "#323637", borderRadius: "10px" }}
    >
      <div className="text-center text-white-50">Other Contacts</div>
      <div className="p-2">
        {props.contacts.map((obj, index) => (
          <Contact
            contact={obj}
            key={index}
            favoriteClick={props.favoriteClick}
          />
        ))}
      </div>
    </div>
  );
};
export default GeneralContacts;
