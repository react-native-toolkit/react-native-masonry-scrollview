import React, { ReactNode } from "react";
import {
  ScrollView,
  ScrollViewProps,
  View,
  StyleProp,
  ViewStyle,
  StyleSheet
} from "react-native";

export interface RNMasonryScrollViewProps extends ScrollViewProps {
  children: ReactNode[];
  columns?: number;
  columnStyle?: StyleProp<ViewStyle>;
  oddColumnStyle?: StyleProp<ViewStyle>;
  evenColumnStyle?: StyleProp<ViewStyle>;
}

export function generateMasonryGrid<T>(data: T[], columns: number): T[][] {
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
  horizontal,
  ...otherProps
}: RNMasonryScrollViewProps) => {
  const masonryGrid = generateMasonryGrid(children, columns);

  return (
    <ScrollView
      contentContainerStyle={
        horizontal ? styles.horizontalColumnStyle : styles.verticalColumnStyle
      }
      horizontal={horizontal}
      {...otherProps}
    >
      {masonryGrid.map((column, columnIndex) => {
        return (
          <View
            key={columnIndex}
            style={[
              !horizontal
                ? styles.horizontalColumnStyle
                : styles.verticalColumnStyle,
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

const styles = StyleSheet.create({
  verticalColumnStyle: { flexDirection: "row" },
  horizontalColumnStyle: { flexDirection: "column" }
});

export default RNMasonryScrollView;
