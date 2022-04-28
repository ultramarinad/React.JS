import React from "react";
import { Router } from "react-router-dom";
import { render, fireEvent, act, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";
import { Profile } from "../index";
import { Provider } from "react-redux";
import { store } from "../../../store";

const history = createMemoryHistory({ initialEntries: ["/home"] });

describe("Profile container", () => {
  it("Отрисовка children", () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Profile />;
        </Router>
      </Provider>
    );
    expect(screen.getByText(/Status/gi)).toBeInTheDocument();
  });
  it("Проверка checkbox children", () => {
    const component = render(
      <Provider store={store}>
        <Router history={history}>
          <Profile />;
        </Router>
      </Provider>
    );
    const checkbox = component.getByTestId("inputTextId");
    expect(checkbox.checked).toEqual(false);

    act(() => {
      fireEvent.click(screen.getByText(/Status/gi));
    });

    expect(checkbox.checked).toEqual(true);
  });
});
