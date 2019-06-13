import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactName: "",
      contacts: [],
      searchValues: [],
      searchInput: ""
    };
    this.captureInput = this.captureInput.bind(this);
    this.addContact = this.addContact.bind(this);
    this.searchContacts = this.searchContacts.bind(this);
  }
  captureInput(event) {
    event.persist();
    this.setState({
      contactName: event.target.value
    });
  }
  addContact(event) {
    event.preventDefault();
    const list = this.state.contacts.concat(this.state.contactName);
    this.setState({
      contacts: list,
      contactName: ""
    });
  }
  searchContacts(event) {
    this.setState({
      searchValues:
        event.target.value === ""
          ? []
          : this.state.contacts.filter(
              el => el.indexOf(event.target.value) > -1
            ),
      searchInput: event.target.value
    });
  }
  render() {
    return (
      <div>
        <section>
          <label>
            Contact Name:{" "}
            <input
              value={this.state.contactName}
              onChange={this.captureInput}
            />
          </label>
          <button onClick={this.addContact}>Add Contact</button>
        </section>
        <br />
        <section>
          <label>
            Search Contact Name:{" "}
            <input
              value={this.state.searchInput}
              onChange={this.searchContacts}
            />
          </label>
        </section>
        <section>
          <h5>Contacts</h5>
          {this.state.contacts.map(el => {
            return <p>{el}</p>;
          })}
        </section>
        <br />
        <section>
          <h5>Search Values:</h5>
          {this.state.searchValues.map(el => {
            return <p>{el}</p>;
          })}
        </section>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Contacts />, rootElement);
