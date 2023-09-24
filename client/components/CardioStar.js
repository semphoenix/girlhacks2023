import React from 'react';
import { Pressable, Image } from 'react-native';

const CardioStar = () => {
  return (
    <Pressable
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
      onPress={() => {
        console.log("cardio pressed");
      }}
    >
      <Image
        style={{
            width: 30,
            height: 30,
            left: 210,
            top: 750,
            position: "absolute",
        }}
        source={require("../assets/starButton.png")}
        tag="cardioStar"
      />
    </Pressable>
  );
};

export default CardioStar;
