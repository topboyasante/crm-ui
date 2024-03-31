import ApplicantsTable from "@/components/root/tables/applicants-table";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Applicants - Slighty Techie Network",
  description: "CRM Application for Techies",
};

function Page() {
  return (
    <div>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Applicants</h1>
      </div>
      <div className="my-5">
        <ApplicantsTable/>
      </div>
    </div>
  );
}

export default Page;
