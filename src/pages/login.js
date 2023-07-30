import { signIn } from "next-auth/react";
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <button onClick={() => signIn("github")} className="btn btn-outline">
        GitHub Login
      </button>
    </div>
  );
};

export default LoginPage;
