"use client";

import FXInput from "@/src/components/form/FXInput";
import { Button } from "@heroui/button";
import {
  FieldValues,
  FormProvider,
  useFieldArray,
  useForm,
} from "react-hook-form";

const page = () => {
  const methods = useForm();
  const { control, handleSubmit } = methods;
  const { append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FXInput label="Questions" name="title"></FXInput>
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export default page;
