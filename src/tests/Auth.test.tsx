import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import store from "../store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "../App";

test("validates email and password fields on blur", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  
  const emailInput = screen.getByLabelText(/Email/i);
  const passwordInput = screen.getByLabelText(/Password/i);

  fireEvent.change(emailInput, { target: { value: "prolorologin.com" } });
  fireEvent.blur(emailInput);

  await waitFor(() => {
    expect(
      screen.getByText("Please enter a valid email address!")
    ).toBeInTheDocument();
  });

  fireEvent.change(passwordInput, { target: { value: "1" } });
  fireEvent.blur(passwordInput);

  await waitFor(() => {
    expect(
      screen.getByText("Password must be at least 6 characters long and contain only letters and numbers!")
    ).toBeInTheDocument();
  });
});
