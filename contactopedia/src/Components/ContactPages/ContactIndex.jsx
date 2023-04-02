import React from "react";
import Header from "../Layout/Header";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import Footer from "../Layout/Footer";

class ContactIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "John Doe",
          email: "john@gmail.com",
          phone: "123-456-7890",
          isFavorite: false,
        },
        {
          id: 2,
          name: "Kathy Patrick",
          email: "kathy@gmail.com",
          phone: "548-456-7890",
          isFavorite: true,
        },
        {
          id: 3,
          name: "Shawn Pawl",
          email: "shawn@gmail.com",
          phone: "658-456-7890",
          isFavorite: true,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2">
              <AddRandomContact />
            </div>
            <div className="col-4">
              <RemoveAllContact />
            </div>
            <div className="row py-2">
              <AddContact />
            </div>
            <div className="row py-2">
              <FavoriteContacts
                contacts={this.state.contactList.filter(
                  (u) => u.isFavorite === true
                )}
              />
            </div>
            <div className="row py-2">
              <GeneralContacts
                contacts={this.state.contactList.filter(
                  (u) => u.isFavorite === false
                )}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default ContactIndex;
