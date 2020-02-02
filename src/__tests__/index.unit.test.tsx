import React from "react";
import { Text } from "react-native";
import { fireEvent, render, wait } from "@testing-library/react-native";
import RNMasonryScrollView, { generateMasonryGrid } from "../index";

const column1Text = "Text 1";
const column2Text = "Text 2";

const MasonryTestComponent = () => {
  return (
    <RNMasonryScrollView>
      {[<Text key={1}>{column1Text}</Text>, <Text key={2}>{column2Text}</Text>]}
    </RNMasonryScrollView>
  );
};

it("Renders Vertical Masonry", () => {
  const {
    getByTestId,
    getByText,
    queryByTestId,
    baseElement,
    queryByText
  } = render(<MasonryTestComponent />);

  const text1 = queryByText(column1Text);
  expect(text1).toBeTruthy();
  const text2 = queryByText(column2Text);
  expect(text2).toBeTruthy();
});

it("Masonry gets generated properly", () => {
  const masonryArray = generateMasonryGrid([1, 2, 3, 4], 2);
  expect(masonryArray[0]).toStrictEqual([1, 3]);
  expect(masonryArray[1]).toStrictEqual([2, 4]);
});
