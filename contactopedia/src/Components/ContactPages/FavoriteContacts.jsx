import Contact from "./Contact";
const FavoriteContacts = (props) => {
  return (
    <div
      className="col-12 py-2"
      style={{ backgroundColor: "#323637", borderRadius: "10px" }}
    >
      <div className="text-center text-white-50">Favorites</div>
      <div className="p-2">
        {props.contacts.map((obj, index) => (
          <Contact contact={obj} key={index} />
        ))}
      </div>
    </div>
  );
};
export default FavoriteContacts;
