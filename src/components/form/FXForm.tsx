"use client";
import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface TProps extends TFormConfig {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
}

interface TFormConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

const FXForm = ({ children, onSubmit, defaultValues, resolver }: TProps) => {
  const formConfig: TFormConfig = {};
  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }
  const methods = useForm(formConfig);
  const submitHandler = methods.handleSubmit;

  return (
    <FormProvider {...methods}>
      <form onSubmit={submitHandler(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default FXForm;
