import { DatePicker } from "@heroui/date-picker";
import React from "react";
import { Controller } from "react-hook-form";

type TDatePicker = {
  label: string;
  name: string;
  required?: boolean;
  variant?: "flat" | "bordered" | "underlined" | "faded";
};

const FXDatePicker = ({ label, name, variant, required }: TDatePicker) => {
  return (
    <Controller
      name={name}
      render={({ field: { value, ...fileds } }) => (
        <DatePicker variant={variant} label={label} {...fileds} />
      )}
    ></Controller>
  );
};

export default FXDatePicker;
