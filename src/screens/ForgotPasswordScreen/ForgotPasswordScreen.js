import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState("");
  const navigation = useNavigation();

  const onResetPasswordPressed = () => {
    console.warn("resent!");
    navigation.navigate("New Password");
  };

  const onReturnPressed = () => {
    console.warn("return");
    navigation.navigate("Sign In");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <StatusBar style="auto" />
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <CustomButton text="Reset Password" onPress={onResetPasswordPressed} />
        <CustomButton
          text="Back to Sign in"
          onPress={onReturnPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 30,
  },
  text: {
    color: "grey",
    marginVertical: 10,
  },
  link: {
    color: "red",
  },
});

export default ForgotPasswordScreen;
