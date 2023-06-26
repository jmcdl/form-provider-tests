import { vi } from "vitest";
import { screen, waitFor, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Form from "./Form";

const onSubmit = vi.fn();

describe("<Form />", () => {
  it("should show error text if name field is focused and no name is entered", async () => {
    const user = userEvent.setup();

    render(<Form onSubmit={onSubmit} />);

    const nameInput = screen.getByRole("textbox", { name: "name" });
    await user.click(nameInput);
    await user.tab();

    await waitFor(() => {
      expect(screen.getByText("A name is required")).toBeInTheDocument();
    });
  });
});
