import React from 'react';
import { Pressable, Image } from 'react-native';

const CalvesStar = () => {
  return (
    <Pressable
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
      onPress={() => {
        console.log("calves pressed");
      }}
    >
      <Image
        style={{
            width: 30,
            height: 30,
            left: 220,
            top: 650,
            position: "absolute",
        }}
        source={require("../assets/starButton.png")}
        tag="calvesStar"
      />
    </Pressable>
  );
};

export default CalvesStar;
