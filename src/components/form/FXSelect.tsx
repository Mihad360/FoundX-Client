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
  disabled?: boolean;
};

const FXSelect = ({ options, name, label, disabled }: TSelect) => {
  const { register } = useFormContext();

  return (
    <Select {...register(name)} label={label} isDisabled={disabled}>
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
};

export default FXSelect;
