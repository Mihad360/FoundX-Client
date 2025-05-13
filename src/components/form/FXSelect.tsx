import { Select, SelectItem } from "@heroui/select";
import React from "react";
import { useFormContext } from "react-hook-form";

type TSelect = {
  options: {
    key: string;
    label: string;
  }[];
  name: string;
  label: string;
};

const FXSelect = ({ options, name, label }: TSelect) => {
  const { register } = useFormContext();

  return (
    <Select {...register(name)} label={label}>
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
};

export default FXSelect;
