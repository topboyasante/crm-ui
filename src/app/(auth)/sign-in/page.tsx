import SignInForm from "@/components/forms/auth/sign-in";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Slightly Techie Network | Sign In",
  description: "Sign in to your CRM account",
};

function Page() {
  return <SignInForm />;
}

export default Page;
