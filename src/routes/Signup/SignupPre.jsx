import * as React from "react";
import { TextField, Button, Box } from "@mui/material";
import { getLoginLink } from "../../navigation";
import { Link } from "react-router-dom";

export const SignupPre = ({
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
      <TextField
        required
        id="outlined-required"
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
      <Button type="submit" variant="contained">
        submit
      </Button>
      <hr />
      <p>
        Already have an account? <Link to={getLoginLink()}>Sign in</Link>
      </p>
    </Box>
  );
};
