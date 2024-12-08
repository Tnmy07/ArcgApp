import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { HOME, SPLASHTWO, SPLASHTHREE, INTRO } from "../../constants/router";
import { BottomSection } from "../../components/splash/bottomSection";

export default function SplashTwo() {
  const pagerInfo = {
    prevLink: HOME,
    nextLink: SPLASHTHREE,
    introLink: INTRO,
    dot: [
      {
        actvlink: false,
        path: HOME,
      },
      {
        actvlink: true,
        path: SPLASHTWO,
      },
      {
        actvlink: false,
        path: SPLASHTHREE,
      },
    ],
  };

  return (
    <View style={styles.page_wrapper}>
      <View style={styles.content_wrap}>
        <Text style={styles.text_splash}>
          Keep multiple Bird DNA certificates in one place and free our packet.
          It's FREE, SAFE, SECURE and EASY TO USE
        </Text>
        <Text style={styles.text_splash}>
          Now your Bird DNA certificates from multiple Laboratories can be
          stored in one single account.
        </Text>
      </View>
      <View style={styles.image_center}>
        <Image
          style={styles.cert_img}
          source={require("../../assets/images/cert.png")}
        />
      </View>
      <BottomSection pagerInfo={pagerInfo} />
    </View>
  );
}

const styles = StyleSheet.create({
  page_wrapper: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.bgcolor,
  },
  content_wrap: {
    padding: 18,
  },
  text_splash: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    lineHeight: 23,
    color: Colors.white,
  },
  image_center: {
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  cert_img: {
    width: 340,
    height: 354,
  },
});
