import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import { createMockStore, initialAuthState, initialCommentState } from "../utils/createMockStore";



describe("App Component", () => {
  it("renders layout and comments component correctly with authenticated user", () => {
    
    const store = createMockStore(initialAuthState, initialCommentState);

    render(
      <Provider store={store}>
          <MemoryRouter initialEntries={["/comments"]}>
            <App />
          </MemoryRouter>
      </Provider>
    );

    //compare the email of the displayed comments List
    expect(
      screen.getByText(/Nikita@garfield.biz/i)
    ).toBeInTheDocument();
  });
});
