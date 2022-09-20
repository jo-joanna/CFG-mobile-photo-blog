import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const NewPasswordScreen = () => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigation = useNavigation();

  const onSubmitPressed = () => {
    console.warn("SENT!");
    navigation.navigate("Sign In");
  };

  const onReturnPressed = () => {
    console.warn("return");
    navigation.navigate("Sign In");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <StatusBar style="auto" />
        <Text style={styles.title}>Create a new password</Text>

        <CustomInput placeholder="Code" value={code} setValue={setCode} />
        <CustomInput
          placeholder="New Password"
          value={newPassword}
          setValue={setNewPassword}
        />

        <CustomButton text="Submit" onPress={onSubmitPressed} />
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
    marginVertical: 30,
  },
  text: {
    color: "grey",
    marginVertical: 10,
  },
  link: {
    color: "red",
  },
});

export default NewPasswordScreen;
