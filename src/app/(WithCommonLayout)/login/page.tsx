"use client";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { Button } from "@heroui/button";
import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidation } from "@/src/schemas/login.schema";
import Link from "next/link";

const LoginPage = () => {
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-center text-2xl pt-24">Login here</h1>
      <div className="w-96 mx-auto pt-6">
        <FXForm onSubmit={onSubmit} resolver={zodResolver(loginValidation)}>
          <FXInput
            label="Email"
            name="email"
            type="email"
            size="md"
            variant="bordered"
          />
          <FXInput
            label="Password"
            name="password"
            type="password"
            size="md"
            variant="bordered"
          />
          <Button type="submit">Login</Button>
        </FXForm>
        <p>
          Dont have an account? <Link href="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
