import React, { ReactElement } from "react";
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

const testSnapShot = (Component: ReactElement) => {
  const tree = renderer.create(Component).toJSON();
  expect(tree).toMatchSnapshot();
};

it("Renders Vertical Masonry with 2 columns", () => {
  testSnapShot(<VMasonryComponentTwoColumns />);
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
  testSnapShot(<VMasonryComponentThreeColumns />);
});

const HMasonryComponentTwoColumns = () => {
  return (
    <RNMasonryScrollView horizontal={true}>
      {[<Text key={1}>{column1Text}</Text>, <Text key={2}>{column2Text}</Text>]}
    </RNMasonryScrollView>
  );
};

it("Renders Horizontal Masonry with 2 columns", () => {
  testSnapShot(<HMasonryComponentTwoColumns />);
});

const HMasonryComponentThreeColumns = () => {
  return (
    <RNMasonryScrollView horizontal={true}>
      {[
        <Text key={1}>{column1Text}</Text>,
        <Text key={2}>{column2Text}</Text>,
        <Text key={3}>{column3Text}</Text>
      ]}
    </RNMasonryScrollView>
  );
};

it("Renders Horizontal Masonry with 3 columns", () => {
  testSnapShot(<HMasonryComponentThreeColumns />);
});
