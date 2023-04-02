import Contact from "./Contact";
const GeneralContacts = (props) => {
    return(
        <div>
            {props.contacts.map((obj, index) => (
                <Contact contact = {obj} key={index}/>
            ))}
        </div>
    )
}
export default GeneralContacts;