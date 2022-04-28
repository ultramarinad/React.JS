import { useState } from "react";
import { auth } from "../../firebase";
import { LoginPre } from "./LoginPre";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const login = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

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
      await login(email, password);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <LoginPre
      handlePassChange={handlePassChange}
      handleEmailChange={handleEmailChange}
      handleSubmit={handleSubmit}
      error={error}
    ></LoginPre>
  );
};
