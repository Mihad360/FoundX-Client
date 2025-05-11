"use client";

import FXInput from "@/src/components/form/FXInput";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import {
  FieldValues,
  FormProvider,
  useFieldArray,
  useForm,
} from "react-hook-form";

const page = () => {
  const methods = useForm();
  const { control, handleSubmit } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit = (data: FieldValues) => {
    const postData = {
      ...data,
      questions: data?.questions.map(item => item.value)
    }
    console.log(postData);
  };

  const handleQuestions = () => {
    append({ name: "questions" });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FXInput label="Questions" name="title"></FXInput>
        <Divider className="my-5"></Divider>
        <div className="flex items-center justify-between">
          <h1>Owner verification Questions</h1>
          <Button onClick={handleQuestions} className="">
            Append
          </Button>
        </div>

        {fields.map((field, index) => (
          <div key={field.id}>
            <FXInput
              label="Questions"
              name={`questions.${index}.value`}
            ></FXInput>
            <Button onClick={() => remove(index)}>Remove</Button>
          </div>
        ))}
        <Divider className="my-5"></Divider>
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export default page;
