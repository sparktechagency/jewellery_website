"use client";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Home = () => {
  return (
    <div className="h-screen grid place-content-center">
      <SignUp />
    </div>
  );
};

export default Home;

const SignUp = () => {
  const form = useForm();
  return (
    <div className="shadow rounded w-[400px] p-8">
      <h1 className="font-semibold text-3xl text-center mb-6">SIGN UP</h1>
      <Form {...form}>
        <FormField
          name="name"
          render={() => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <Input
                className="rounded-none"
                id="name"
                type="text"
                placeholder="Enter your full name"
              />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          render={() => (
            <FormItem className="mt-4">
              <FormLabel>Email</FormLabel>
              <Input
                className="rounded-none"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          render={() => (
            <FormItem className="mt-4">
              <FormLabel>Password</FormLabel>
              <Input
                className="rounded-none"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </FormItem>
          )}
        />
        <Button className="w-full mt-6 rounded-none">SIGN UP</Button>
      </Form>
      <p className="mt-8 text-center">
        Already have an account?{" "}
        <Link className="font-bold" href="">
          Log in
        </Link>
      </p>
    </div>
  );
};
