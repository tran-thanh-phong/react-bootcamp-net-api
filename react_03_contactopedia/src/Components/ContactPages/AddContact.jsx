import React from "react";

class AddContact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      successMessage: undefined,
      errorMessage: undefined,
    };
  }

  handleAddContactFormSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.contactName.value?.trim();
    const email = e.target.elements.contactEmail.value?.trim();
    const phone = e.target.elements.contactPhone.value?.trim();
    const id = e.target.elements.contactId.value?.trim();

    let response = undefined;

    if (this.props.isUpdating) {
      response = this.props.handleUpdateContact({
        id: id,
        name: name,
        email: email,
        phone: phone,
      });
    } else {
      response = this.props.handleAddContact({
        name: name,
        email: email,
        phone: phone,
      });
    }

    if (response.status === "success") {
      this.setState({
        successMessage: response.msg,
        errorMessage: undefined,
      });

      document.querySelector(".contact-form").reset();
    } else {
      this.setState({
        successMessage: undefined,
        errorMessage: response.msg,
      });
    }
  };

  render() {
    return (
      <div className="p-2 rounded" style={{ border: "1px solid white" }}>
        <form
          className="contact-form"
          onSubmit={this.handleAddContactFormSubmit}
        >
          <div className="row p-2">
            <div className="col-12 text-white-50">
              {this.props.isUpdating ? "Update a contact" : "Add a new contact"}{" "}
            </div>
            <input
              type="hidden"
              name="contactId"
              value={this.props.selectedContact?.id}
            />

            <div className="col-12 col-md-4 p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Name..."
                name="contactName"
                defaultValue={this.props.selectedContact?.name}
              />
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Email..."
                name="contactEmail"
                defaultValue={this.props.selectedContact?.email}
              />
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Phone..."
                name="contactPhone"
                defaultValue={this.props.selectedContact?.phone}
              />
            </div>

            {this.state.errorMessage && (
              <div className="col-12 text-center text-danger">
                {this.state.errorMessage}
              </div>
            )}
            {this.state.successMessage && (
              <div className="col-12 text-center text-success">
                {this.state.successMessage}
              </div>
            )}

            {!this.props.isUpdating && (
              <div className="col-6 offset-3">
                <button className="btn btn-primary btn-sm form-control">
                  Create
                </button>
              </div>
            )}

            {this.props.isUpdating && (
              <div className="row">
                <div className="col-5 offset-1">
                  <button className="btn btn-primary btn-sm form-control">
                    Update
                  </button>
                </div>
                <div className="col-5">
                  <button className="btn btn-secondary btn-sm form-control"
                    onClick={() => this.props.handleUpdateReset()}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
