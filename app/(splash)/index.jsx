import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { HOME, SPLASHTWO, SPLASHTHREE, INTRO } from "../../constants/router";
import { BottomSection } from "../../components/splash/bottomSection";

export default function Index() {
  const pagerInfo = {
    prevLink: null,
    nextLink: SPLASHTWO,
    introLink: INTRO,
    dot: [
      {
        actvlink: true,
        path: HOME,
      },
      {
        actvlink: false,
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
          ARCH stands for Avian &amp; Certificate Hyperloop. This is the next
          generation of certificates that will take the field of aviculture to a
          whole new level.
        </Text>
        <Text style={styles.text_splash}>
          With our state of the art Hyperloop Algorithm and User Interface,
          paper certificates will now become a thing of the part. With Arch you
          will be able to store and catalog all of your bird's DNA certificates
          in one place, and send certificates available to you with the click of
          a button.
        </Text>
      </View>
      <View style={styles.image_center}>
        <Image
          style={styles.cert_img}
          source={require("../../assets/images/certificate.png")}
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
    width: 280,
    height: 186,
  },
});
