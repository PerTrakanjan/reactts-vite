import React, { useState } from "react";

type Props = {};

export default function Login({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <>
      <div className=" bg-slate-50 py-2 ">
        <h3 className="">Welcome to My App</h3>
      </div>
    </>
  );
}
