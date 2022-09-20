import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, ScrollView, Alert } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import Users from "../users";

const SignInScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkValidUsername, setCheckValidUsername] = useState(false);
 
  const onSignInPressed = () => {
    console.warn("Sign in");

    console.log(username, password);
    // validate user
   
    const checkPassword = checkPasswordValidity(password);
    if (checkPassword) {
      navigation.navigate("Main")}
      else {null};
    
  };
  const onForgotPasswordPressed = () => {
    console.warn("forgot password");

    navigation.navigate("Forgot Password"); // here you will pass a name from navigation container
  };

  const onSignUpPressed = () => {
    console.warn("create an account");

    navigation.navigate("Sign Up");
  };

  const handleCheckUsername = (text) => {
    
    if (setUsername(text) > 3) {
      setCheckValidUsername(false);
    } else {
      setCheckValidUsername(true);
    }
  };

  const checkPasswordValidity = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return "Password must not contain Whitespaces.";
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return "Password must have at least one UpperCase character.";
    }
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (isContainsLowercase.test(value)) {
      return "Password must not contain Whitespaces.";
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return 'Password must contain at least one Digit.'
    }

    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      return "Password must be 8-16 characters Long.";
    }
    return null;
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <StatusBar style="auto" />
        <Text style={styles.text}>Sign in screen!</Text>

        <CustomInput
          placeholder="Username"
          value={username}
          autocapitalize="none"
          setValue={setUsername}
          onChangeText={(text)=>handleCheckUsername(text)}
        />
        {checkValidUsername ? (
          <Text style={styles.errormsg}>Username is invalid.</Text>
        ) : (
          <Text style={styles.errormsg}></Text>
        )}

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          autocapitalize="none"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        

        <CustomButton text="Sign In" onPress={onSignInPressed} />
        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <CustomButton
          text="Don't you an account? Create it"
          onPress={onSignUpPressed}
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
  text: {
    paddingTop: 30,
    paddingBottom: 50,
  },
  errormsg: {
    color: "red",
    fontSize: 10,
  },
});

export default SignInScreen;
