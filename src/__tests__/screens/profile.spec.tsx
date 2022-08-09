import React from "react";
import { render } from "@testing-library/react-native";

import { Profile } from "../../screens/Profile";

test("check if show correctly user input name placeholder", () => {
  const { getByPlaceholderText } = render(<Profile />);

  const inputName = getByPlaceholderText("Nome");

  expect(inputName.props.placeholder).toBeTruthy(); // verifica se existe na tela
});

test("check if user dat has been loaded", () => {
  const { getByTestId } = render(<Profile />);

  const inputName = getByTestId("input-name");
  const inputSurname = getByTestId("input-surname");

  expect(inputName.props.value).toEqual("William");
  expect(inputSurname.props.value).toEqual("Moraes");
});

test("check if title render correctly", () => {
  const { getByTestId } = render(<Profile />);

  const textTitle = getByTestId("text-title");

  expect(textTitle.props.children).toContain("Perfil");
});
