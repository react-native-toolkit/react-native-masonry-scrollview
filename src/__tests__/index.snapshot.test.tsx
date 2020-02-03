import React from "react";
import renderer from "react-test-renderer";
import RNMasonryScrollView from "../index";
import { Text } from "react-native";

const column1Text = "Text 1";
const column2Text = "Text 2";
const column3Text = "Text 3";

const VMasonryComponentTwoColumns = () => {
  return (
    <RNMasonryScrollView>
      {[<Text key={1}>{column1Text}</Text>, <Text key={2}>{column2Text}</Text>]}
    </RNMasonryScrollView>
  );
};

it("Renders Vertical Masonry with 2 columns", () => {
  const tree = renderer.create(<VMasonryComponentTwoColumns />).toJSON();
  expect(tree).toMatchSnapshot();
});

const VMasonryComponentThreeColumns = () => {
  return (
    <RNMasonryScrollView>
      {[
        <Text key={1}>{column1Text}</Text>,
        <Text key={2}>{column2Text}</Text>,
        <Text key={3}>{column3Text}</Text>
      ]}
    </RNMasonryScrollView>
  );
};

it("Renders Vertical Masonry with 3 columns", () => {
  const tree = renderer.create(<VMasonryComponentThreeColumns />).toJSON();
  expect(tree).toMatchSnapshot();
});

const HMasonryComponentTwoColumns = () => {
  return (
    <RNMasonryScrollView>
      {[<Text key={1}>{column1Text}</Text>, <Text key={2}>{column2Text}</Text>]}
    </RNMasonryScrollView>
  );
};

it("Renders Horizontal Masonry with 2 columns", () => {
  const tree = renderer.create(<HMasonryComponentTwoColumns />).toJSON();
  expect(tree).toMatchSnapshot();
});

const HMasonryComponentThreeColumns = () => {
  return (
    <RNMasonryScrollView>
      {[
        <Text key={1}>{column1Text}</Text>,
        <Text key={2}>{column2Text}</Text>,
        <Text key={3}>{column3Text}</Text>
      ]}
    </RNMasonryScrollView>
  );
};

it("Renders Horizontal Masonry with 3 columns", () => {
  const tree = renderer.create(<HMasonryComponentThreeColumns />).toJSON();
  expect(tree).toMatchSnapshot();
});
