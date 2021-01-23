import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LandingPage() {
  return (
    <View style={styles.container}>
      <Text>Landing Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
