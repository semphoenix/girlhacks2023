import React from 'react';
import { Pressable, Image } from 'react-native';

const ForearmStar = () => {
  return (
    <Pressable
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
      onPress={() => {
        console.log("forearm pressed");
      }}
    >
      <Image
        style={{
            width: 30,
            height: 30,
            left: 100,
            top: 440,
            position: "absolute",
        }}
        source={require("../assets/starButton.png")}
        tag="forearmStar"
      />
    </Pressable>
  );
};

export default ForearmStar;
