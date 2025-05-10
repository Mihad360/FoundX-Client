"use client";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import Loading from "@/src/components/UI/Loading";
import { useUser } from "@/src/context/user.provider";
import { useUserRegistration } from "@/src/hooks/auth.hook";
import { registerValidation } from "@/src/schemas/login.schema";
import { TRegister } from "@/src/types/auth.types";
import { Button } from "@heroui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { FieldValues } from "react-hook-form";

const RegisterPage = () => {
  const { mutate: register, isPending } = useUserRegistration();
  const {setIsLoading} = useUser()
  const onSubmit = (data: FieldValues) => {
    const userData = {
      ...data,
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };
    register(userData as TRegister);
    setIsLoading(true)
  };

  return (
    <div>
      {isPending && <Loading />}
      <h1 className="text-center text-2xl pt-24">Login here</h1>
      <div className="w-96 mx-auto pt-6">
        <FXForm onSubmit={onSubmit} resolver={zodResolver(registerValidation)}>
          <FXInput
            label="Name"
            name="name"
            type="text"
            size="md"
            variant="bordered"
          />
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
          <FXInput
            label="Mobile Number"
            name="mobileNumber"
            type="text"
            size="md"
            variant="bordered"
          />
          <Button type="submit">Register</Button>
        </FXForm>
        <p>
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
