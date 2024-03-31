import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Techies - Slighty Techie Network",
  description: "CRM Application for Techies",
};

function Page() {
  return (
    <div>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Techies</h1>
      </div>
    </div>
  );
}

export default Page;
