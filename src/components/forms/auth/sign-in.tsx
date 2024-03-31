"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().min(1, {
    message: "This is a required field.",
  }),
  password: z.string().min(1, {
    message: "This is a required field.",
  }),
});

export default function SignInForm() {
  const router = useRouter();
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmittingForm(true);
  }
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-screen">
      <div className="hidden lg:block relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#303030_1px,transparent_1px)] [background-size:50px_50px] "></div>
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[400px] gap-6">
          <div className="w-full">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Welcome to CRM
            </h3>
            <p className="text-sm text-neutral-600 mt-2">
              Don&apos;t have an account?{" "}
              <span className="font-semibold text-black dark:text-white">
                <Link href={`sign-up`}>Sign Up</Link>
              </span>
            </p>
            <br />
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <br />
                <Link href={`/forgot-password`}>
                  <p className="text-sm text-neutral-600 underline underline-offset-4">
                    Forgot Password?
                  </p>
                </Link>
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
