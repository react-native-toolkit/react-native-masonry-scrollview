import React, { ReactNode } from "react";
import {
  ScrollView,
  ScrollViewProps,
  View,
  StyleProp,
  ViewStyle
} from "react-native";

export interface RNMasonryScrollViewProps extends ScrollViewProps {
  children: ReactNode[];
  columns?: number;
  columnStyle?: StyleProp<ViewStyle>;
  oddColumnStyle?: StyleProp<ViewStyle>;
  evenColumnStyle?: StyleProp<ViewStyle>;
}

function generateMasonryGrid<T>(data: T[], columns: number): T[][] {
  return data.reduce((collection: T[][], child: T, childIndex: number) => {
    const itemIndex = childIndex % columns;
    if (collection[itemIndex]) {
      collection[itemIndex].push(child);
    } else {
      collection[itemIndex] = [];
      collection[itemIndex].push(child);
    }
    return collection;
  }, []);
}

const RNMasonryScrollView = ({
  children = [],
  columns = 2,
  columnStyle = null,
  oddColumnStyle = null,
  evenColumnStyle = null,
  ...otherProps
}: RNMasonryScrollViewProps) => {
  const masonryGrid = generateMasonryGrid(children, columns);

  return (
    <ScrollView {...otherProps}>
      {masonryGrid.map((column, columnIndex) => {
        return (
          <View
            key={columnIndex}
            style={[
              columnStyle,
              columnIndex % 2 === 0 ? evenColumnStyle : oddColumnStyle
            ]}
          >
            {column.map(item => item)}
          </View>
        );
      })}
    </ScrollView>
  );
};

export default RNMasonryScrollView;
