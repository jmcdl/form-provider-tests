/* eslint-disable @appcues/jsx-props-no-spreading */
import { useForm, FormProvider } from "react-hook-form";
import Details from "./Details";

export type FormValues = {
  name: string;
  description: string;
};

type Props = {
  formValues?: FormValues;
  onSubmit: () => void;
}

export default function Form({ formValues, onSubmit }: Props) {
  const defaultValues: FormValues = {
    name: "",
    description: ""
  };

  const formMethods = useForm<FormValues>({
    defaultValues: formValues ?? defaultValues,
    mode: "onTouched"
  });

  return (
    <div>
      <FormProvider {...formMethods}>
        <header>
          <h1>form</h1>
        </header>
        <form id="form" onSubmit={formMethods.handleSubmit(onSubmit)}>
          <Details />
        </form>
      </FormProvider>
    </div>
  );
}
