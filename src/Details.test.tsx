import { FormProvider, useForm } from "react-hook-form";
import { screen, waitFor, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Details from "./Details";
import { FormValues } from "./Form";

const defaultValues: FormValues = {
  name: "",
  description: "",
};

describe("<Details />", () => {
  it("should show allow name to be entered", async () => {
    const user = userEvent.setup();
    const App = () => {
      const formMethods = useForm<FormValues>({ defaultValues });

      return (
        <FormProvider {...formMethods}>
          <Details />
        </FormProvider>
      );
    };

    render(<App />);

    const nameInput = screen.getByRole("textbox", { name: "name" });
    user.type(nameInput, "hello");
    user.tab();

    await waitFor(() => {
      expect(nameInput).toHaveValue("hello");
    });
  });

  it("should show error text if name field is focused and no name is entered", async () => {
    const user = userEvent.setup();
    const App = () => {
      const formMethods = useForm<FormValues>({ defaultValues });

      return (
        <FormProvider {...formMethods}>
          <Details />
        </FormProvider>
      );
    };

    render(<App />);

    const nameInput = screen.getByRole("textbox", { name: "name" });
    await user.click(nameInput);
    await user.tab();

    await waitFor(() => {
      expect(screen.getByText("A name is required")).toBeInTheDocument();
    });
  });
});
