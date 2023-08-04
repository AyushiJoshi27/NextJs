/* eslint-disable jsx-a11y/alt-text */
"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SignInBtn() {
  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center gap-4 shadow-xl rounded-lg pl-3"
    >
      <Image src="/google-logo.png" height={30} width={30} alt='google-logo'/>
      <span className="bg-blue-500 text-white px-4 py-3">
        Sign in with Google
      </span>
    </button>
  );
}
