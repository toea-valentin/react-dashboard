import React from "react";
import "./UserAddForm.css";

const emptyState = {
  name: "",
  email: "",
  salary: "",
  isGold: false,
};

class UserAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmitForm = props.onSubmitForm;
    this.state = {
      ...emptyState,
    };
  }

  onChangeInput(event) {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState({ [event.target.name]: value });
  }

  render() {
    return (
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          //if( this.state.name.length > 0 ) {
          this.onSubmitForm(this.state);
          this.setState({ ...emptyState });
          // }
        }}
      >
        <label htmlFor="name">
          <p>Name</p>
        </label>
        <input
          className="input"
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={(e) => this.onChangeInput(e)}
        />
        <label htmlFor="email">
          <p>Email</p>
        </label>
        <input
          className="input"
          type="text"
          name="email"
          id="email"
          value={this.state.email}
          onChange={(e) => this.onChangeInput(e)}
        />
        <label htmlFor="salary">
          <p>Salariu</p>
        </label>
        <input
          className="input"
          type="number"
          name="salary"
          id="salary"
          value={this.state.salary}
          onChange={(e) => this.onChangeInput(e)}
        />
        <div className="checkbox-holder">
          <label htmlFor="isGold">Client Gold</label>
          <input
            className="input"
            type="checkbox"
            name="isGold"
            id="isGold"
            checked={this.state.isGold}
            onChange={(e) => this.onChangeInput(e)}
          />
        </div>
        <input className="button" type="submit" value="Add User" />
      </form>
    );
  }
}

export default UserAddForm;
