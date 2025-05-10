"use client";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { Button } from "@heroui/button";
import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidation } from "@/src/schemas/login.schema";
import Link from "next/link";
import { useUserLogin } from "@/src/hooks/auth.hook";
import { TLogin } from "@/src/types/auth.types";
import Loading from "@/src/components/UI/Loading";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useUser } from "@/src/context/user.provider";
import { useEffect } from "react";

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const { mutate: loginUser, isPending, isSuccess } = useUserLogin();
  const { setIsLoading } = useUser();

  const onSubmit = (data: FieldValues) => {
    const userData = {
      ...data,
    };
    loginUser(userData as TLogin);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess, redirect, router]);

  return (
    <>
      {isPending && <Loading />}
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
    </>
  );
};

export default LoginPage;
