import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Overview - Slighty Techie Network",
  description: "CRM Application for Techies",
};

function Page() {
  return (
    <div>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      </div>
    </div>
  );
}

export default Page;
