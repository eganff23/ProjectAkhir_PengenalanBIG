import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";

function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <Image
          source={require("../assets/images/pohon.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Image
          source={require("../assets/images/jerapah.png")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
        <ImageBackground
          source={require("../assets/images/dfsef.png")}
          resizeMode="contain"
          style={styles.image6}
          imageStyle={styles.image6_imageStyle}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Huruf")}
            style={styles.button2}
          ></TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.image2Stack}>
        <Image
          source={require("../assets/images/awan2.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <Image
          source={require("../assets/images/awan2.png")}
          resizeMode="contain"
          style={styles.image4}
        ></Image>
        <ImageBackground
          source={require("../assets/images/fff.png")}
          resizeMode="contain"
          style={styles.image5}
          imageStyle={styles.image5_imageStyle}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Angka")}
            style={styles.button}
          ></TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(194,213,228,1)"
  },
  image: {
    top: 100,
    left: 98,
    width: 271,
    height: 298,
    position: "absolute"
  },
  image3: {
    top: 210,
    left: 0,
    width: 223,
    height: 197,
    position: "absolute"
  },
  image6: {
    top: 0,
    left: 109,
    width: 200,
    height: 200,
    position: "absolute"
  },
  image6_imageStyle: {},
  button2: {
    width: 153,
    height: 138,
    backgroundColor: "#E6E6E6",
    opacity: 0,
    marginTop: 11,
    marginLeft: 24
  },
  imageStack: {
    width: 369,
    height: 407,
    marginTop: 333,
    marginLeft: -18
  },
  image2: {
    top: 27,
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
  image4: {
    top: 0,
    left: 198,
    width: 222,
    height: 216,
    position: "absolute",
    transform: [
      {
        rotate: "-5.00deg"
      }
    ]
  },
  image5: {
    top: 83,
    left: 67,
    width: 200,
    height: 200,
    position: "absolute"
  },
  image5_imageStyle: {},
  button: {
    width: 153,
    height: 161,
    backgroundColor: "#E6E6E6",
    opacity: 0,
    marginLeft: 25
  },
  image2Stack: {
    width: 420,
    height: 283,
    marginTop: -707,
    marginLeft: 23
  }
});

export default Home;
