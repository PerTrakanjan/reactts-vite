import React, { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { Form, Link, useNavigate } from "react-router-dom";
import { Alert, FormControl, FormGroup } from "react-bootstrap";

type Props = {};

export default function Register({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signup }: any = useUserAuth();

  let navigate = useNavigate();

  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // avoid page refresh
    setError("");
    try {
      await signup(email, password);
      navigate("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className=" grid grid-rows-1">
        <div className=" grid-cols-6 mx-auto">
          <h2 className=" my-3 dark:text-white">Register</h2>
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
                Sign Up
              </button>
            </div>
          </Form>
          <div className="p-3 text-white">
            Already have an account?
            <Link
              to="/login"
              className=" text-cyan-400 dark:text-cyan-100 mx-1"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
