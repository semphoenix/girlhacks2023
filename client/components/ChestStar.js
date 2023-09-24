import React from 'react';
import { Pressable, Image } from 'react-native';

const ChestStar = () => {
  return (
    <Pressable
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
      onPress={() => {
        console.log("chest pressed");
      }}
    >
      <Image
        style={{
            width: 30,
            height: 30,
            left: 195,
            top: 340,
            position: "absolute",
        }}
        source={require("../assets/starButton.png")}
        tag="chestStar"
      />
    </Pressable>
  );
};

export default ChestStar;
