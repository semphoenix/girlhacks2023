import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation/Index";
import { useTheme, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { AuthorizeProvider } from "./contexts/user";
import { MuscleProvider } from "./contexts/muscle";

export default function App() {
  const theme = useTheme();

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaProvider>
          <AuthorizeProvider>
            <MuscleProvider>
              <Navigation />
            </MuscleProvider>
          </AuthorizeProvider>
          <StatusBar />
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
}
