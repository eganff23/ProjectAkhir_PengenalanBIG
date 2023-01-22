import React, { Component } from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";

function Angka(props) {
  return (
    <View style={styles.container}>
        <ScrollView>
      <Image
        source={require("../assets/images/adasf.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Image
        source={require("../assets/images/scsc.png")}
        resizeMode="contain"
        style={styles.image2}
      ></Image>
      <Image
        source={require("../assets/images/dvsdv.png")}
        resizeMode="contain"
        style={styles.image3}
      ></Image>
      <Image
        source={require("../assets/images/dcsc.png")}
        resizeMode="contain"
        style={styles.image4}
      ></Image>
      <Image
        source={require("../assets/images/dvsv.png")}
        resizeMode="contain"
        style={styles.image6}
      ></Image>
      <Image
        source={require("../assets/images/cdcd.png")}
        resizeMode="contain"
        style={styles.image7}
      ></Image>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(194,213,228,1)"
  },
  image: {
    width: 310,
    height: 247,
    marginTop: 30,
    marginLeft: 40
  },
  image2: {
    width: 310,
    height: 247,
    marginLeft: 40
  },
  image3: {
    width: 310,
    height: 247,
    marginLeft: 40
  },
  image4: {
    width: 310,
    height: 247,
    marginLeft: 40
  },
  image6: {
    width: 310,
    height: 247,
    marginLeft: 40
  },
  image7: {
    width: 310,
    height: 247,
    marginLeft: 40
  }
});

export default Angka;
