import React, { Component } from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";

function Huruf(props) {
  return (
    <View style={styles.container}>
        <ScrollView>
      <View style={styles.imageStack}>
        <Image
          source={require("../assets/images/ab.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Image
          source={require("../assets/images/cd.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <Image
          source={require("../assets/images/ef.png")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
        <Image
          source={require("../assets/images/gh.png")}
          resizeMode="contain"
          style={styles.image4}
        ></Image>
        <Image
          source={require("../assets/images/ij.png")}
          resizeMode="contain"
          style={styles.image5}
        ></Image>
        <Image
          source={require("../assets/images/kl.png")}
          resizeMode="contain"
          style={styles.image6}
        ></Image>
        <Image
          source={require("../assets/images/mn.png")}
          resizeMode="contain"
          style={styles.image7}
        ></Image>
        <Image
          source={require("../assets/images/op.png")}
          resizeMode="contain"
          style={styles.image8}
        ></Image>
        <Image
          source={require("../assets/images/qr.png")}
          resizeMode="contain"
          style={styles.image9}
        ></Image>
        <Image
          source={require("../assets/images/tu.png")}
          resizeMode="contain"
          style={styles.image10}
        ></Image>
        <Image
          source={require("../assets/images/vw.png")}
          resizeMode="contain"
          style={styles.image11}
        ></Image>
        <Image
          source={require("../assets/images/xy.png")}
          resizeMode="contain"
          style={styles.image12}
        ></Image>
        <Image
          source={require("../assets/images/z.png")}
          resizeMode="contain"
          style={styles.image13}
        ></Image>
      </View>
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
    top: 0,
    left: 0,
    width: 310,
    height: 247,
    position: "absolute"
  },
  image2: {
    top: 194,
    left: 0,
    width: 310,
    height: 247,
    position: "absolute"
  },
  image3: {
    top: 396,
    left: 0,
    width: 310,
    height: 247,
    position: "absolute"
  },
  image4: {
    top: 602,
    left: 0,
    width: 310,
    height: 247,
    position: "absolute"
  },
  image5: {
    top: 794,
    left: 0,
    width: 310,
    height: 247,
    position: "absolute"
  },
  image6: {
    top: 996,
    left: 0,
    width: 310,
    height: 247,
    position: "absolute"
  },
  image7: {
    top: 1179,
    left: 0,
    width: 310,
    height: 247,
    position: "absolute"
  },
  image8: {
    top: 1382,
    left: 0,
    width: 310,
    height: 247,
    position: "absolute"
  },
  image9: {
    top: 1569,
    left: 0,
    width: 310,
    height: 247,
    position: "absolute"
  },
  image10: {
    top: 1771,
    left: 0,
    width: 310,
    height: 247,
    position: "absolute"
  },
  image11: {
    top: 1963,
    left: 0,
    width: 310,
    height: 247,
    position: "absolute"
  },
  image12: {
    top: 2167,
    left: 0,
    width: 310,
    height: 247,
    position: "absolute"
  },
  image13: {
    top: 2353,
    left: 0,
    width: 310,
    height: 247,
    position: "absolute"
  },
  imageStack: {
    width: 310,
    height: 2600,
    marginTop: 58,
    marginLeft: 33
  }
});

export default Huruf;
