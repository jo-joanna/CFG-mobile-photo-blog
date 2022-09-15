import React from "react";
import { View, StyleSheet } from "react-native";
// import {Card} from 'react-native-paper';

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        {props.children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    elevation: 8,
    backgroundColor: "#FB8500",
    shadowOffset: { width: 10, height: 6 },
    shadowColor: "#023047",
    shadowOpacity: 0.2,
    margin: 25,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});
