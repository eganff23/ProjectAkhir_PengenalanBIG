import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

function Screen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.pohonStackStack}>
        <View style={styles.pohonStack}>
          <Image
            source={require("../assets/images/pohon.png")}
            resizeMode="contain"
            style={styles.pohon}
          ></Image>
          <Image
            source={require("../assets/images/jerapah.png")}
            resizeMode="contain"
            style={styles.jerapah}
          ></Image>
          <View style={styles.bayang}>
            <Text style={styles.letsLearnAndPlay}>
              let&#39;s learn and{"\n"} play
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Home")}
              style={styles.btplay}
            >
              <Text style={styles.play}>PLAY</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.awanStack}>
          <Image
            source={require("../assets/images/awan2.png")}
            resizeMode="contain"
            style={styles.awan}
          ></Image>
          <Image
            source={require("../assets/images/awan2.png")}
            resizeMode="contain"
            style={styles.awann}
          ></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(194,213,228,1)"
  },
  pohon: {
    top: 442,
    left: 97,
    width: 271,
    height: 298,
    position: "absolute"
  },
  jerapah: {
    top: 552,
    left: 0,
    width: 223,
    height: 197,
    position: "absolute"
  },
  bayang: {
    top: 0,
    left: 18,
    width: 400,
    height: 800,
    position: "absolute",
    backgroundColor: "rgba(74,74,74,0.41)"
  },
  letsLearnAndPlay: {
    fontFamily: "poppins-700",
    color: "rgba(255,255,255,1)",
    fontSize: 46,
    textAlign: "center",
    marginTop: 241,
    marginLeft: 10
  },
  btplay: {
    width: 199,
    height: 62,
    backgroundColor: "rgba(55,140,210,1)",
    overflow: "visible",
    borderRadius: 21,
    marginTop: 171,
    marginLeft: 81
  },
  play: {
    fontFamily: "poppins-700",
    color: "rgba(255,255,255,1)",
    fontSize: 35,
    marginTop: 4,
    marginLeft: 60
  },
  pohonStack: {
    top: 0,
    left: 0,
    width: 378,
    height: 749,
    position: "absolute"
  },
  awan: {
    top: 28,
    left: 0,
    width: 235,
    height: 233,
    position: "absolute",
    transform: [
      {
        rotate: "-3.00deg"
      }
    ]
  },
  awann: {
    top: 0,
    left: 200,
    width: 222,
    height: 216,
    position: "absolute",
    transform: [
      {
        rotate: "-5.00deg"
      }
    ]
  },
  awanStack: {
    top: 42,
    left: 41,
    width: 422,
    height: 261,
    position: "absolute"
  },
  pohonStackStack: {
    width: 463,
    height: 749,
    marginTop: -9,
    marginLeft: -18
  }
});

export default Screen;