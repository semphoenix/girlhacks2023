import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  ImageBackground,
} from "react-native";
import React, { Component, useState } from "react";

import FullBodyStar from "../components/FullBodyStar";
import ChestStar from "../components/ChestStar";
import BicepStar from "../components/BicepStar";
import BackStar from "../components/BackStar";
import CoreStar from "../components/CoreStar";
import GlutesStar from "../components/GlutesStar";
import QuadsStar from "../components/QuadsStar";
import CalvesStar from "../components/CalvesStar";
import CardioStar from "../components/CardioStar";
import TricepStar from "../components/TricepStar";
import ForearmStar from "../components/ForearmStar";

export default BodyScreen = ({ navigation }) => {
    
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.humanPic}
        source={require("../assets/bodyGlowWhite.png")}
      >
        {/* FULL STAR */}
        <FullBodyStar />

        {/* BICEP STAR */}
        <BicepStar />

        {/* CHEST STAR */}
        <ChestStar />

        {/* BACK STAR */}
        <BackStar navigation={navigation} />

        {/* CORE STAR */}
        <CoreStar />

        {/* GLUTES STAR */}
        <GlutesStar />

        {/* QUADS STAR */}
        <QuadsStar />

        {/* CALVES STAR */}
        <CalvesStar />

        {/* CARDIO STAR */}
        <CardioStar />

        {/* TRICEPS STAR */}
        <TricepStar />

        {/* FOREARM STAR */}
        <ForearmStar />

        <Image style={styles.lines} source={require("../assets/lines.png")} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  humanPic: {
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
  lines: {
    width: "80%",
    height: "80%",
    zIndex: 1,
    top: 110,
    left: 40,
    position: "absolute",
    zIndex: -1,
  },
});
