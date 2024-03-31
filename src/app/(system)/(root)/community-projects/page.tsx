import ProjectsTable from "@/components/root/tables/projects-table";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Community Projects - Slighty Techie Network",
  description: "CRM Application for Techies",
};

function Page() {
  return (
    <div>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">
          Community Projects
        </h1>
      </div>
      <div className="my-5">
        <ProjectsTable />
      </div>
    </div>
  );
}

export default Page;
