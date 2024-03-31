"use client";
import { CircleUser, Menu } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "@/components/ui/logo";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/constants/nav-links";
import { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

export function Navbar({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Logo />
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {NAV_LINKS.map((link) => {
                return (
                  <div key={link.title} className="my-3">
                    <p className="text-complementary font-bold text-xs mb-3 text-[#9EA1AB]">
                      {link.title}
                    </p>
                    <div className="flex flex-col gap-y-1">
                      {link.links.map((item) => {
                        // if (role === "user" && item.name === "Applicants") {
                        //   return <></>;
                        // }
                        return (
                          <Link
                            href={item.link}
                            key={item.id}
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                          >
                            {item.icon}
                            <p className="text-sm">{item.name}</p>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </nav>
          </div>
          <div className="mt-auto p-4">
            <ModeToggle />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                {NAV_LINKS.map((link) => {
                  return (
                    <div key={link.title} className="my-3">
                      <p className="text-complementary font-bold text-xs mb-3 text-[#9EA1AB]">
                        {link.title}
                      </p>
                      <div className="flex flex-col gap-y-1">
                        {link.links.map((item) => {
                          // if (role === "user" && item.name === "Applicants") {
                          //   return <></>;
                          // }
                          return (
                            <Link
                              href={item.link}
                              key={item.id}
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.icon}
                              <p className="text-sm">{item.name}</p>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </nav>
              <div className="mt-auto">
                <ModeToggle />
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div>{children}</div>
        </main>
      </div>
    </div>
  );
}
