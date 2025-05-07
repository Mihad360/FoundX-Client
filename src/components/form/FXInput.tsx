"use client";
import { Input } from "@heroui/input";
import { useFormContext } from "react-hook-form";

interface IProps {
  variant?: "flat" | "bordered" | "underlined" | "faded";
  size?: "sm" | "md" | "lg";
  isRequired?: boolean;
  type?: string;
  label: string;
  name: string;
}

const FXInput = ({ variant, size, isRequired, type, label, name }: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Input
      {...register(name)}
      errorMessage={errors[name] ? (errors[name].message as string) : ""}
      isInvalid={errors[name] ? true : false}
      variant={variant}
      size={size}
      isRequired={isRequired}
      type={type}
      label={label}
    ></Input>
  );
};

export default FXInput;
