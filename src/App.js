import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  WebView,
  Dimensions,
  Image,
  ImageBackground
} from "react-native";

import Swiper from "react-native-swiper";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
            height: 200,
            width: 200,
            resizeMode: "contain",
            top: 100,
            left: 90,
            opacity: 0.5
          }}
          source={require("./assets/player.png")}
        />
        <Swiper
          style={styles.wrapper}
          height={240}
          onMomentumScrollEnd={(e, state, context) =>
            console.log("index:", state.index)
          }
          dot={
            <View
              style={{
                backgroundColor: "rgba(0,0,0,.2)",
                width: 5,
                height: 5,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: "#000",
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          paginationStyle={{
            bottom: -23,
            left: null,
            right: 10
          }}
          loop
        >
          <View style={styles.slide}>
            <Text style={styles.label}>Youtube</Text>
            <View style={styles.videoContainer}>
              <WebView
                style={styles.WebViewContainer}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{
                  uri: "https://www.youtube.com/embed/l3UXhy-TiUk"
                }}
              />
            </View>
            <Text style={styles.swipeLabel}>Swipe right to see more</Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.label}>Twitch</Text>
            <View style={styles.videoContainer}>
              <WebView
                style={styles.WebViewContainer}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{
                  uri: "https://www.twitch.tv/videos/333362364"
                }}
              />
            </View>
            <Text style={styles.swipeLabel}>Swipe right to see more</Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.label}>Vimeo</Text>
            <View style={styles.videoContainer}>
              <WebView
                style={styles.WebViewContainer}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{
                  uri: "https://vimeo.com/296191192"
                }}
              />
            </View>
            <Text style={styles.swipeLabel}>Swipe right to see more</Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.label}>DailyMotion</Text>
            <View style={styles.videoContainer}>
              <WebView
                style={styles.WebViewContainer}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{
                  uri: "https://www.dailymotion.com/video/x6xg203"
                }}
              />
            </View>
            <Text style={styles.swipeLabel}> At the end of the videos</Text>
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151515"
  },
  label: {
    color: "#ffffff",
    fontSize: 25,
    left: 20
  },
  swipeLabel: {
    color: "#ffffff",
    fontSize: 15,
    left: 20
  },
  wrapper: {
    height: 100
  },
  videoContainer: {
    height: SCREEN_HEIGHT / 3,
    padding: 20
  },
  slide: {
    flex: 1,
    justifyContent: "center"
  },

  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },

  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },

  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  }
  // text: {
  //   color: "#fff",
  //   fontSize: 30,
  //   fontWeight: "bold"
  // }
});

export default App;
