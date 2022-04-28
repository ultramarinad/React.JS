import React from "react";
import { Router } from "react-router-dom";
import { render, fireEvent, act } from "@testing-library/react";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";
import { LoginPre } from "../LoginPre";

const history = createMemoryHistory({ initialEntries: ["/home"] });

describe("LoginForm", () => {
  it("вызов handleSubmit", () => {
    const handleSubmit = jest.fn();
    const component = render(
      <Router history={history}>
        <LoginPre handleSubmit={handleSubmit} />;
      </Router>
    );

    act(() => {
      fireEvent.click(component.queryByTestId("submitBtn"));
    });

    expect(handleSubmit).toBeCalled();
  });
  it("ввод данных в поле Login", () => {
    const handleEmailChange = jest.fn();
    const component = render(
      <Router history={history}>
        <LoginPre handleEmailChange={handleEmailChange} />;
      </Router>
    );

    const loginField = component.queryByTestId("content-input");

    act(() => {
      fireEvent.change(loginField, {
        target: {
          value: "asd",
        },
      });
    });

    expect(handleEmailChange).toHaveBeenCalled();
  });
});
