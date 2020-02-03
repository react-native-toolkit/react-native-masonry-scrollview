import React from "react";
import { Text } from "react-native";
import { render } from "@testing-library/react-native";
import RNMasonryScrollView, { generateMasonryGrid } from "../index";

const column1Text = "Text 1";
const column2Text = "Text 2";

const MasonryTestComponent = (
  {
    isHorizontal = true
  }: {
    isHorizontal?: boolean;
  } = { isHorizontal: true }
) => {
  return (
    <RNMasonryScrollView horizontal={isHorizontal}>
      {[<Text key={1}>{column1Text}</Text>, <Text key={2}>{column2Text}</Text>]}
    </RNMasonryScrollView>
  );
};

it("Renders Vertical Masonry", () => {
  const { queryByText } = render(<MasonryTestComponent isHorizontal={false} />);

  const text1 = queryByText(column1Text);
  expect(text1).toBeTruthy();
  const text2 = queryByText(column2Text);
  expect(text2).toBeTruthy();
});

it("Renders Horizontal Masonry", () => {
  const { queryByText } = render(<MasonryTestComponent />);

  const text1 = queryByText(column1Text);
  expect(text1).toBeTruthy();
  const text2 = queryByText(column2Text);
  expect(text2).toBeTruthy();
});

it("Masonry gets generated properly", () => {
  const masonryArray = generateMasonryGrid([1, 2, 3, 4], 2);
  expect(masonryArray[0]).toStrictEqual([1, 3]);
  expect(masonryArray[1]).toStrictEqual([2, 4]);

  const masonryArray2 = generateMasonryGrid([], 2);
  expect(masonryArray2).toStrictEqual([]);

  const masonryArray3 = generateMasonryGrid([1, 2, 3, 4, 5, 6, 7], 3);
  expect(masonryArray3[0]).toStrictEqual([1, 4, 7]);
  expect(masonryArray3[1]).toStrictEqual([2, 5]);
  expect(masonryArray3[2]).toStrictEqual([3, 6]);
});
