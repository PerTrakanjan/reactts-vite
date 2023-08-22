import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { Alert, FormControl, FormGroup } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

type Props = {};

export default function Login({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useUserAuth();

  let navigate = useNavigate();

  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // avoid page refresh
    setError("");
    try {
      await login(email, password);
      navigate("/home");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className=" grid grid-rows-1">
        <div className=" grid-cols-6 mx-auto">
          <h2 className=" my-3 dark:text-white">Log In</h2>
          {error && (
            <Alert
              variant="danger"
              className="my-2 bg-red-200 text-red-800 rounded-sm p-1"
            >
              {error}
            </Alert>
          )}
          <Form onSubmit={handleSumbit}>
            <FormGroup className=" mb-3" controlId="formBasicEmail">
              <FormControl
                type="email"
                placeholder="Email address"
                onChange={(e: any) => setEmail(e.target.value)}
                className="rounded w-full"
              ></FormControl>
            </FormGroup>
            <FormGroup className=" mb-3" controlId="formBasicPassword">
              <FormControl
                type="password"
                placeholder="Enter password"
                onChange={(e: any) => setPassword(e.target.value)}
                className=" rounded w-full"
              ></FormControl>
            </FormGroup>

            <div>
              <button
                className=" dark:bg-slate-50 hover:bg-cyan-50 p-1 rounded-lg"
                type="submit"
                dark:text-white
              >
                Sign In
              </button>
            </div>
          </Form>
          <div className="p-3 text-white">
            Don't have an account?
            <Link
              to="/register"
              className=" text-cyan-400 dark:text-cyan-100 mx-1"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
