import React from 'react';
import { Pressable, Image } from 'react-native';

const GlutesStar = () => {
  return (
    <Pressable
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
      onPress={() => {
        console.log("glutes pressed");
      }}
    >
      <Image
        style={{
            width: 30,
            height: 30,
            left: 250,
            top: 470,
            position: "absolute",
        }}
        source={require("../assets/starButton.png")}
        tag="glutesStar"
      />
    </Pressable>
  );
};

export default GlutesStar;
