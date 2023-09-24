import React from 'react';
import { Pressable, Image } from 'react-native';

const BicepStar = () => {
  return (
    <Pressable
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
      onPress={() => {
        console.log("bicep pressed");
      }}
    >
      <Image
        style={{
            width: 30,
            height: 30,
            left: 250,
            top: 360,
            position: "absolute",
        }}
        source={require("../assets/starButton.png")}
        tag="bicepStar"
      />
    </Pressable>
  );
};

export default BicepStar;
