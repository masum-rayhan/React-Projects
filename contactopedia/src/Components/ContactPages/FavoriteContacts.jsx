import Contact from "./Contact";
const FavoriteContacts = (props) => {
    return(
        <div>
            {props.contacts.map((obj, index) => (
                <Contact contact = {obj} key={index}/>
            ))}
        </div>
    )
}
export default FavoriteContacts;