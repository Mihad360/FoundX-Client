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
import FXDatePicker from "./FXDatePicker";
import dayjs from "dayjs";

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
      questions: data?.questions.map((item) => item.value),
      dateFound: dayjs(data?.dateFound).format("MM-DD-YYYY"),
    };
    console.log(postData);
  };

  const handleQuestions = () => {
    append({ name: "questions" });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center gap-5">
          <FXInput label="Questions" name="title"></FXInput>
          <FXInput label="Location" name="location"></FXInput>
        </div>
        <div className="flex items-center gap-5 pt-5">
          <FXInput label="City" name="city"></FXInput>
          <FXDatePicker label="Found Date" name="dateFound"></FXDatePicker>
        </div>
        <Divider className="my-5"></Divider>
        <div className="flex items-center gap-5">
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

// {
//   "title": "Wallet",
//   "description": "A black leather wallet with a few cards inside.",
//   "location": "Central Park",
//   "city": "Dhaka",
//   "dateFound": "2023-06-15T00:00:00.000Z",
//   "category": "667ee6ad6635bacba3b633f3",
//   "user": "6682899b5c4ebb0dadc7b3bf",
//   "questions": ["What brand is the wallet?", "What cards are inside?"]
// }

export default page;
