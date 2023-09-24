import React from 'react';
import { Pressable, Image } from 'react-native';

const CoreStar = () => {
  return (
    <Pressable
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
      onPress={() => {
        console.log("core pressed");
      }}
    >
      <Image
        style={{
            width: 30,
            height: 30,
            left: 210,
            top: 430,
            position: "absolute",
        }}
        source={require("../assets/starButton.png")}
        tag="coreStar"
      />
    </Pressable>
  );
};

export default CoreStar;
