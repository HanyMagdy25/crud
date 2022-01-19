import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/action";

const AddUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const { name, email, contact, address } = state;
  const [error, setError] = useState("");
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact || !address) {
      setError("please fill the form");
    } else {
      dispatch(addUser(state));
      navigate("/");
      setError("");
    }
  };

  return (
    <div>
      <Button
        style={{ marginTop: "50px" }}
        variant="contained"
        color="error"
        onClick={() => navigate("/")}
      >
        Go Back
      </Button>
      <h2>Add User</h2>
      {error && <h5>{error}</h5>}
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          style={{ width: "400px", marginTop: "30px" }}
          id="standard-basic"
          label="Name"
          name="name"
          variant="standard"
          value={name}
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          style={{ width: "400px", marginTop: "30px" }}
          id="standard-basic"
          label="Email"
          name="email"
          variant="standard"
          value={email}
          type="email"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          style={{ width: "400px", marginTop: "30px" }}
          id="standard-basic"
          label="Contact"
          name="contact"
          variant="standard"
          value={contact}
          type="number"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          style={{ width: "400px", marginTop: "30px" }}
          id="standard-basic"
          label="Address"
          name="address"
          variant="standard"
          value={address}
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <Button
          style={{ marginTop: "50px" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddUser;
