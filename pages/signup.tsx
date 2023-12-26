import React, { useState } from "react";
import Router from "next/router";
import { useSignupUserMutation } from "../graphql/generated/collection";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [signupUser] = useSignupUserMutation();

  return (
    <div className="page">
      <form
        onSubmit={async () => {
          await signupUser({
            variables: {
              name: name,
              email: email,
            },
          });
          Router.push("/");
        }}
      >
        <h1>Sign Up</h1>
        <input
          autoFocus
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          type="text"
          value={name}
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address)"
          type="text"
          value={email}
        />
        <input disabled={!name || !email} type="submit" value="Signup" />
      </form>
    </div>
  );
}
