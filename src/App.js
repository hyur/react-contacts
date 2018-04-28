import React, { Component } from "react";
import { Route } from "react-router-dom";
import ListContacts from "./ListContacts";
import CreateContact from "./CreateContact";
import * as ContactsAPI from "./utils/ContactsAPI";
class App extends Component {
  state = {
    contacts: []
  };
  componentDidMount() {
    ContactsAPI.getAll().then(contacts => {
      this.setState({ contacts });
    });
  }
  // 删除通讯录
  removeContact = contact => {
    this.setState(state => ({
      contacts: state.contacts.filter(c => c.id !== contact.id)
    }));
    ContactsAPI.remove(contact);
  };
  //   添加通讯录
  CreateContact=(contact)=>{
    ContactsAPI.create(contact).then((contact)=>{
        this.setState(state=>({
            contacts:state.contacts.concat([contact])
        }))
    })
  }
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <ListContacts
              contacts={this.state.contacts}
              onRemoveContact={this.removeContact}
            />
          )}
        />
        <Route
          path="/create"
          render={({history}) => (
            <CreateContact onCreateContact={(contact)=>{
                this.CreateContact(contact);
                history.push('/');
            }} />
          )}
        />
      </div>
    );
  }
}
export default App;
