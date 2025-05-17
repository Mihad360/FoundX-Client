"use client";
import { Input } from "@heroui/input";
import { SearchIcon } from "../../icons";
import { useForm } from "react-hook-form";
import { useDebouce } from "@/src/hooks/debouce.hook";
import { useSearchTerm } from "@/src/hooks/search.hook";
import { useEffect } from "react";

const Landing = () => {
  const { register, handleSubmit, watch } = useForm();
  const { mutate: handleSearch, data } = useSearchTerm();
console.log(data)
  const searchTerm = useDebouce(watch("search"));
  useEffect(() => {
    if (searchTerm) {
      handleSearch(searchTerm);
    }
  }, [searchTerm]);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="h-screen bg-cover bg-center bg-[url('/glass.jpg')]">
      <h1>Found X</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("search")}
          className="w-96 mx-auto"
          placeholder="Search..."
          classNames={{ inputWrapper: "bg-default-100" }}
          endContent={<SearchIcon />}
        ></Input>
      </form>
    </div>
  );
};

export default Landing;
