import Contact from "./Contact";

const ContactList = (props) => {
  return (
    <div
      className="col-12 py-2"
      style={{
        backgroundColor: "#323637",
        borderRadius: "10px",
      }}
    >
      <div className="text-center text-white-50">{props.title}</div>
      <div className="p-2 px-4">
        {props.contacts.map((contact, index) => (
          <Contact
            contact={contact}
            key={index}
            handleSetFavorite={props.handleSetFavorite}
            handleDelete={props.handleDelete}
            handleUpdateClick={props.handleUpdateClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
