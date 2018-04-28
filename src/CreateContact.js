import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageInput from "./ImageInput";
import serializeForm from "form-serialize";
class CreateContact extends Component {
  handleSubmit = e => {
    //阻止浏览器的默认提交功能
    e.preventDefault();
    const value = serializeForm(e.target, { hash: true });
    this.props.onCreateContact(value);
  };
  render() {
    return (
      <div>
        <Link className="close-create-contact" to="/">
          Close
        </Link>
        <form onSubmit={this.handleSubmit} className="create-contact-form">
          <ImageInput
            className="create-contact-avatar-input"
            name="avatarURL"
            maxHeight={60}
          />
          <div className="create-contact-details">
            <input type="text" name="name" placeholder="name" />
            <input type="text" name="email" placeholder="email" />
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    );
  }
}
export default CreateContact;
