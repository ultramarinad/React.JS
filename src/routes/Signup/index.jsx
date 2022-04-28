import { useState } from "react";
import { auth } from "../../firebase";
import { SignupPre } from "./SignupPre";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const signup = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(email, password);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <SignupPre
      handlePassChange={handlePassChange}
      handleEmailChange={handleEmailChange}
      handleSubmit={handleSubmit}
      error={error}
    ></SignupPre>
  );
};
