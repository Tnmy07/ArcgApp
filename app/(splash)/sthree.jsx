import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { HOME, SPLASHTWO, SPLASHTHREE, INTRO } from "../../constants/router";
import { BottomSection } from "../../components/splash/bottomSection";

export default function SplashThree() {
  const pagerInfo = {
    prevLink: SPLASHTWO,
    nextLink: null,
    introLink: INTRO,
    dot: [
      {
        actvlink: false,
        path: HOME,
      },
      {
        actvlink: false,
        path: SPLASHTWO,
      },
      {
        actvlink: true,
        path: SPLASHTHREE,
      },
    ],
  };

  return (
    <View style={styles.page_wrapper}>
      <View style={styles.content_wrap}>
        <Text style={styles.text_splash}>
          Use our one of a kind Breeder's Certificate to promote your aviary and
          establish a well reputation across the platform.
        </Text>
        <Text style={styles.text_splash}>
          ARCH helps you to provide a more professional approach to your hobby
          where you can now create your own breeder's certificate to
          authenticate D.O.B., mutation and Parental Lineage of your birds as
          well.
        </Text>
      </View>
      <View style={styles.image_center}>
        <Image
          style={styles.cert_img}
          source={require("../../assets/images/cert1.png")}
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
    width: 300,
    height: 200,
  },
});
