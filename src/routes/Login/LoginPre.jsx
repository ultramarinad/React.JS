import * as React from "react";
import { TextField, Button, Box } from "@mui/material";
import { getSingupLink } from "../../navigation";
import { Link } from "react-router-dom";

export const LoginPre = ({
  handlePassChange,
  handleEmailChange,
  handleSubmit,
  error,
}) => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <p>Fill in the form below to login to your account.</p>
      <TextField
        id="outlined-required"
        inputProps={{ "data-testid": "content-input" }}
        label="Email"
        onChange={handleEmailChange}
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        onChange={handlePassChange}
      />
      {error && <p>{error}</p>}
      <Button data-testid="submitBtn" type="submit" variant="contained">
        Login
      </Button>
      <hr />
      <p>
        Don't have an account? <Link to={getSingupLink()}>Sign up</Link>
      </p>
    </Box>
  );
};
