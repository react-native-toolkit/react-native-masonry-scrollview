import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import RNMasonryScroll from "react-native-masonry-scrollview";

const { createAnimatableComponent } = Animatable;

const AnimatableView = createAnimatableComponent(View);

const images = [
  "https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1580502734537-c6a7ee0bdb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1580500325788-5012abe74ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1580524764764-284c2a54b185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1580502734537-c6a7ee0bdb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1580500325788-5012abe74ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1580524764764-284c2a54b185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1580502734537-c6a7ee0bdb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1580500325788-5012abe74ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1580524764764-284c2a54b185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1580502734537-c6a7ee0bdb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1580500325788-5012abe74ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1580524764764-284c2a54b185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1580502734537-c6a7ee0bdb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1580500325788-5012abe74ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1580524764764-284c2a54b185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1580502734537-c6a7ee0bdb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1580500325788-5012abe74ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1580524764764-284c2a54b185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
];

export default function App() {
  return (
    <RNMasonryScroll
      columns={3}
      evenColumnStyle={{}}
      oddColumnStyle={{ marginTop: 60 }}
    >
      {images.map((image, imageIndex) => {
        return (
          <AnimatableView
            animation="fadeInUp"
            delay={100 * imageIndex}
            style={{
              height: 300,
              width: 300,
              margin: 10,
              borderRadius: 10,
              overflow: "hidden",
              backgroundColor: "silver"
            }}
          >
            <Image
              style={{ flex: 1 }}
              source={{ uri: image }}
              key={imageIndex}
            />
          </AnimatableView>
        );
      })}
    </RNMasonryScroll>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
