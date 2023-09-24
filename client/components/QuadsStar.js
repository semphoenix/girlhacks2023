import React from 'react';
import { Pressable, Image } from 'react-native';

const QuadsStar = () => {
  return (
    <Pressable
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
      onPress={() => {
        console.log("quads pressed");
      }}
    >
      <Image
        style={{
            width: 30,
            height: 30,
            left: 170,
            top: 540,
            position: "absolute",
        }}
        source={require("../assets/starButton.png")}
        tag="quadsStar"
      />
    </Pressable>
  );
};

export default QuadsStar;
