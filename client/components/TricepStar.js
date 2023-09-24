import React from 'react';
import { Pressable, Image } from 'react-native';

const TricepStar = () => {
  return (
    <Pressable
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
      onPress={() => {
        console.log("tricep pressed");
      }}
    >
      <Image
        style={{
            width: 30,
            height: 30,
            left: 130,
            top: 340,
            position: "absolute",
        }}
        source={require("../assets/starButton.png")}
        tag="tricepStar"
      />
    </Pressable>
  );
};

export default TricepStar;
