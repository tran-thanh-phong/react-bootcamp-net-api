import React from "react";
import RemoveAllContact from "./RemoveAllContact";
import AddRandomContact from "./AddRandomContact";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

class ContactIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contactList: [
        {
          id: 1,
          name: "Ben Parker",
          phone: "666-666-7770",
          email: "ben@dotnetmastery.com",
          isFavorite: false,
        },
        {
          id: 2,
          name: "Kathy Patrick",
          phone: "111-222-0000",
          email: "kathy@dotnetmastery.com",
          isFavorite: true,
        },
        {
          id: 3,
          name: "Paul Show",
          phone: "999-222-1111",
          email: "paul@dotnetmastery.com",
          isFavorite: true,
        },
      ],
      selectedContact: undefined,
      isUpdating: false,
    };
  }

  handleAddContact = (contact) => {
    // Validate
    if (contact.name === "") {
      return {
        status: "failure",
        msg: "Please Enter a valid Name.",
      };
    } else if (contact.email === "") {
      return {
        status: "failure",
        msg: "Please Enter a valid Email.",
      };
    }

    const dulicatedRecords = this.state.contactList.filter(
      (c) => c.name === contact.name && c.email === contact.email
    );
    if (dulicatedRecords.length > 0) {
      return {
        status: "failure",
        msg: "Duplicated records.",
      };
    }

    // Adding new contact
    const newContact = {
      ...contact,
      id:
        this.state.contactList.length <= 0
          ? 1
          : this.state.contactList[this.state.contactList.length - 1].id + 1,
      isFavorite: false,
    };

    this.setState((prevState) => {
      return {
        contactList: [...prevState.contactList, newContact],
        selectedContact: undefined,
        isUpdating: false,
      };
    });

    return {
      status: "success",
      msg: "Contact was added successfully.",
    };
  };

  handleUpdateContact = (contact) => {
    // Validate
    if (contact.name === "") {
      return {
        status: "failure",
        msg: "Please Enter a valid Name.",
      };
    } else if (contact.email === "") {
      return {
        status: "failure",
        msg: "Please Enter a valid Email.",
      };
    }

    const dulicatedRecords = this.state.contactList.filter(
      (c) =>
        c.name === contact.name &&
        c.email === contact.email &&
        c.id !== contact.id
    );
    if (dulicatedRecords.length > 0) {
      return {
        status: "failure",
        msg: "Duplicated records.",
      };
    }

    console.log(contact);

    // Update the given contact
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((c) =>
          c.id == contact.id 
          ? {
            ...contact,
            isFavorite: c.isFavorite
          } 
          : c
        ),
        selectedContact: undefined,
        isUpdating: false,
      };
    });

    console.log(this.state);

    return {
      status: "success",
      msg: "Contact was updated successfully.",
    };
  };

  handleSetFavorite = (contact) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((c) =>
          c.id === contact.id
            ? {
                ...c,
                isFavorite: !c.isFavorite,
              }
            : c
        ),
        selectedContact: undefined,
        isUpdating: false,
      };
    });
  };

  handleDelete = (contactId) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.filter((c) => c.id !== contactId),
        selectedContact: undefined,
        isUpdating: false,
      };
    });
  };

  handleDeleteAll = () => {
    this.setState(() => {
      return {
        contactList: [],
        selectedContact: undefined,
        isUpdating: false,
      };
    });
  };

  handleUpdateClick = (contact) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isUpdating: true,
        selectedContact: contact,
      };
    });
  };

  handleUpdateReset = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isUpdating: false,
        selectedContact: undefined,
      };
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row py-3">
          <div className="col-4 offset-2">
            <AddRandomContact handleAddContact={this.handleAddContact} />
          </div>
          <div className="col-4">
            <RemoveAllContact handleDeleteAll={this.handleDeleteAll} />
          </div>
        </div>
        <div className="row py-2">
          <div className="col-8 offset-2">
            <AddContact
              isUpdating={this.state.isUpdating}
              selectedContact={this.state.selectedContact}
              handleAddContact={this.handleAddContact}
              handleUpdateReset={this.handleUpdateReset}
              handleUpdateContact={this.handleUpdateContact}
            />
          </div>
        </div>
        <div className="row py-2">
          <div className="col-8 offset-2">
            <ContactList
              title="Favorites"
              contacts={this.state.contactList.filter(
                (contact) => contact.isFavorite
              )}
              handleSetFavorite={this.handleSetFavorite}
              handleDelete={this.handleDelete}
              handleUpdateClick={this.handleUpdateClick}
            />
          </div>
        </div>
        <div className="row py-2">
          <div className="col-8 offset-2">
            <ContactList
              title="Other contacts"
              contacts={this.state.contactList.filter(
                (contact) => !contact.isFavorite
              )}
              handleSetFavorite={this.handleSetFavorite}
              handleDelete={this.handleDelete}
              handleUpdateClick={this.handleUpdateClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactIndex;
