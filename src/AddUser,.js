import React from "react";

const AddUser = ({ onAdd }) => {
  console.log(onAdd);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value, e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = "";
  };

  return (
    <div>
      <from onSubmit={handleOnSubmit}>
        <input placeholder="name" name="name" />
        <input placeholder="email" name="email" />
        <button onSubmit={handleOnSubmit}>Add</button>
      </from>
    </div>
  );
};

export default AddUser;
