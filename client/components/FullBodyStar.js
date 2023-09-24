import React from 'react';
import { Pressable, Image } from 'react-native';

const FullBodyStar = () => {
  return (
    <Pressable
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
      onPress={() => {
        console.log("full body pressed");
      }}
    >
      <Image
        style={{
          width: 40,
          height: 40,
          left: 188,
          top: 170,
          position: "absolute",
        }}
        source={require("../assets/starButton.png")}
        tag="fullbodyStar"
      />
    </Pressable>
  );
};

export default FullBodyStar;
