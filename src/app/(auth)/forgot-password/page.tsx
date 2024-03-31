import ForgotPasswordForm from "@/components/forms/auth/forgot-password";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slightly Techie Network | Forgot Password",
  description: "Recover your account",
};

function Page() {
  return <ForgotPasswordForm/>;
}

export default Page;
