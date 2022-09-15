import * as React from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";

export default function Granada() {
  return (
    <ScrollView style={{ backgroundColor: "#FFB703" }}>
      <View style={styles.containerImagesText}>
        <Text style={styles.subtitle}>Granada</Text>
        <Text style={styles.text}>
          Spain is generally very monocultural in comparison to most of the
          other developed countries. During the years of Franco there was very
          little immigration and 95% of the population are white Catholics. For
          centuries Spain was host to Arabic culture and this has left many
          strong imprints both genetically and culturally.
        </Text>
        <Text style={styles.text}>
          The Alhambra: Granada has its usual quotient of churches, museums etc.
          typical for a southern European city. However, Granada has the
          Alhambra which is considered by some to be one of the 10 wonders of
          the world. In case you don't know, the Alhambra is a massive castle
          constructed over many centuries.{"\n"}
          The Albaicín: The Albaicín is the old Arabic quarter located on the
          hill opposite the Alhambra. It is characterised by cobble stoned
          streets with white washed houses. Despite several centuries of neglect
          and architectural barbarities allowed by the town council it still
          retains a a strong Arabic feeling (the Arabic population was
          ethnically cleansed just over 500 years ago). There are many squares
          with terrazas and places to laze about and have a bite to eat. The
          Albaicín is an oil painter's paradise and almost at every turn of the
          head there is an attractive view, almost always involving glimpses of
          the Alhambra.{"\n"}
          Granada is the opposite of most cities in that in the holidays it is
          much quieter than at other times. The reason for this is that the
          students go home to their pueblos and in the summer many people go to
          the beach. All Spanish cities have a vibrant nightlife usually
          involving consuming copious quantities of cubatas (spirits mixed with
          a long drink) and staying up late, Granada is no exception.
        </Text>
        <Image
          source={{
            uri: "https://media.istockphoto.com/photos/ancient-arabic-fortress-of-alhambra-granada-spain-picture-id532188731?k=20&m=532188731&s=612x612&w=0&h=Jj98gT0K4UFt2PzCDt1XtzmDH8rCtIjtHpOtyF16KXg=",
          }}
          style={[styles.boxImage, { marginTop: 20 }]}
        />
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/4/49/Granada%2C_Spain._HDR_Panorama.jpg",
          }}
          style={styles.boxImage}
        />
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Granada_from_above.jpg",
          }}
          style={styles.boxImage}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerImagesText: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
    padding: 20,
  },

  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: "underline",
    paddingTop: 10,
    paddingLeft: 20,
    paddingBottom: 10,
    alignSelf: "flex-start",
  },

  boxImage: {
    width: 250,
    height: 300,
    marginBottom: 20,
  },
  text: {
    lineHeight: 25,
  },
});
