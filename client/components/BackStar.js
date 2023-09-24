import React, { useContext } from "react";
import { Pressable, Image } from "react-native";
import { MuscleContext } from "../contexts/muscle";
const BackStar = ({ navigation }) => {
  const { setMuscle } = React.useContext(MuscleContext);
 
  return (
    <Pressable
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
      onPress={() => {
        setMuscle("Back");
        navigation.navigate("GenWorkouts");
      }}
    >
      <Image
        style={{
          width: 30,
          height: 30,
          left: 185,
          top: 390,
          position: "absolute",
        }}
        source={require("../assets/starButton.png")}
        tag="backStar"
      />
    </Pressable>
  );
};

export default BackStar;
