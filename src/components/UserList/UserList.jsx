import React from "react";
import UserItem from "../UserItem/UserItem";

import pic1 from "../../assets/user1.jpg";
import pic2 from "../../assets/user2.jpg";
import pic3 from "../../assets/user3.jpg";

const pictures = [pic1, pic2, pic3];

const UserList = (props) => {
  const removeUser = props.removeUser;
  const users = props.data;

  return (
    <>
      {users.length === 0 ? (
        <h4>No users added yet.</h4>
      ) : (
        users.map((user, index) => (
          <UserItem
            key={index}
            index={index}
            name={user.name}
            email={user.email}
            salary={user.salary}
            picture={pictures[index % 3]}
            isGold={user.isGold}
            removeUser={removeUser}
          />
        ))
      )}
    </>
  );
};

export default UserList;
