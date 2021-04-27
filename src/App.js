import React from "react";
import "./App.css";

import UserList from "./components/UserList/UserList";
import UserAddForm from "./components/UserAddForm/UserAddForm";
import PostList from "./components/PostList/PostList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: "",
      textColor: "",
      users: [],
      showUsers: true,
    };
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  handleBackgroundColorChange = (event) => {
    this.setState({ background: event.target.value });
  };

  handleTextColorChange = (event) => {
    this.setState({ textColor: event.target.value });
  };

  removeUser = (index) => {
    const newUsers = [...this.state.users];
    newUsers.splice(index, 1);
    this.setState({ users: newUsers });
  };

  onSubmitForm = (user) => {
    const newUsers = [...this.state.users];
    newUsers.push(user);
    this.setState({ users: newUsers });
  };

  render() {
    return (
      <div
        className="App"
        style={{
          background: this.state.background,
          color: this.state.textColor,
        }}
      >
        <div className="appBar">
          <h1 style={{ margin: "0", padding: "1.5rem", flex: 1 }}>Dashboard</h1>
          <div className="buttons">
            <button
              className="headerButton"
              onClick={() => this.setState({ showUsers: true })}
            >
              Show Users
            </button>
            <button
              className="headerButton"
              onClick={() => this.setState({ showUsers: false })}
            >
              Show Posts
            </button>
          </div>
        </div>
        <div className="content">
          <div className="leftContent">
            <h2>Form</h2>
            {this.state.showUsers ? (
              <UserAddForm onSubmitForm={this.onSubmitForm} />
            ) : "Form is only available for the Users Page!"}
            <div className="colors">
              <div className="colorPickerBody">
                <div className="colorPicker">
                  <input
                    className="colorPickerInput"
                    type="color"
                    onChange={(event) =>
                      this.handleBackgroundColorChange(event)
                    }
                  />
                </div>
                <span>Background</span>
              </div>
              <div className="colorPickerBody">
                <div className="colorPicker">
                  <input
                    className="colorPickerInput"
                    type="color"
                    onChange={(event) => this.handleTextColorChange(event)}
                  />
                </div>
                <span>Text Color</span>
              </div>
            </div>
          </div>
          <div className="rightContent">
            <h2>{this.state.showUsers ? "Users List" : "Posts List"}</h2>
            {this.state.showUsers ? (
              <UserList data={this.state.users} removeUser={this.removeUser} />
            ) : (
              <PostList />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
