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
import FXDatePicker from "../../../../../components/form/FXDatePicker";
import dayjs from "dayjs";
import FXSelect from "@/src/components/form/FXSelect";
import { allDistict } from "@bangladeshi/bangladesh-address";
import { useGetCategories } from "@/src/hooks/categories.hook";
import { selectCategories } from "@/src/hooks/select";
import { ChangeEvent, useState } from "react";
import TrashIcon from "@/src/components/UI/TrashIcon";
import AddIcon from "@/src/components/UI/AddIcon";
import { useUser } from "@/src/context/user.provider";
import { useCreatePost } from "@/src/hooks/posts.hook";
import Loading from "@/src/components/UI/Loading";
import { useRouter } from "next/navigation";

const cityOptions = allDistict()
  .sort()
  .map((dis: string) => ({
    key: dis,
    label: dis,
  }));

const page = () => {
  const [images, setImages] = useState<File[] | []>([]);
  const [imagePrev, setImagePrev] = useState<string[] | []>([]);
  const { data: categories, isSuccess: categorySuccess } = useGetCategories();
  const { user } = useUser();
  const {
    mutate: createPost,
    isPending: postPending,
    isSuccess: postSuccess,
  } = useCreatePost();
  const router = useRouter();

  const categoryOptions = selectCategories(categories?.data || []);

  const methods = useForm();
  const { control, handleSubmit } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit = (data: FieldValues) => {
    const formData = new FormData();
    const postData = {
      ...data,
      questions: data?.questions.map((item) => item.value),
      dateFound: dayjs(data?.dateFound).format("MM-DD-YYYY"),
      user: user?._id,
    };
    formData.append("data", JSON.stringify(postData));
    for (let image of images) {
      formData.append("itemImages", image);
    }
    // console.log(formData.get("data"));
    // console.log(formData.get("itemImages"));
    createPost(formData);
    // if (postSuccess) {
    //   router.push("/");
    // }
  };

  const handleQuestions = () => {
    append({ name: "questions" });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setImages((prev) => [...prev, file]);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePrev((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {postPending && <Loading />}
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center gap-5">
            <FXInput label="Title" name="title"></FXInput>
            <FXInput label="Location" name="location"></FXInput>
          </div>
          <div className="flex items-center gap-5 pt-5">
            <FXSelect options={cityOptions} label="City" name="city"></FXSelect>
            <FXDatePicker label="Found Date" name="dateFound"></FXDatePicker>
          </div>
          <div className="flex items-center gap-5 pt-5">
            <FXSelect
              disabled={!categorySuccess}
              options={categoryOptions}
              label="Category"
              name="category"
            ></FXSelect>
          </div>
          <div className="flex flex-col gap-2 w-full border bg-gray-600 rounded-xl py-3 mt-3">
            <label htmlFor="Upload Image" className="block">
              Upload Multiple Image
            </label>
            <input
              className="hidden"
              multiple
              type="file"
              id="Upload Image"
              onChange={(e) => handleImageChange(e)}
            />
          </div>
          <div>
            {imagePrev.length > 0 &&
              imagePrev.map((image) => <p>{image.slice(0, 50)}</p>)}
          </div>
          <div className="pt-5">
            <FXInput
              label="Description"
              name="description"
              type="text"
            ></FXInput>
          </div>
          <Divider className="my-5"></Divider>
          <div className="flex items-center gap-5">
            <h1>Owner verification Questions</h1>
            <Button isIconOnly onClick={handleQuestions} className="">
              <AddIcon />
            </Button>
          </div>

          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-3 items-center">
              <FXInput
                label="Questions"
                name={`questions.${index}.value`}
              ></FXInput>
              <Button isIconOnly onClick={() => remove(index)}>
                <TrashIcon />
              </Button>
            </div>
          ))}
          <Divider className="my-5"></Divider>
          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
    </>
  );
};

export default page;
