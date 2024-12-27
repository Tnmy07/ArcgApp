import { View, Text, Image, StyleSheet } from "react-native";
import { Link, ExpoRouterLink  } from "expo-router";
import { Colors } from "../../constants/colors";
import { INTRO } from "../../constants/router";
import { useNavigation } from '@react-navigation/native';

export const BottomSection = ({ pagerInfo }) => {
 // const navigation = useNavigation();
   // const handleSkip = () => {
    // Navigate to the INTRO screen
    //navigation.navigate(INTRO);
  //};
  return (
    <View style={styles.pager_dots}>
      {pagerInfo.prevLink !== null ? (
        <ExpoRouterLink  href={pagerInfo.prevLink} style={styles.arrow_box}>
          <Image
            style={styles.arrow}
            source={require("../../assets/images/arrow1.png")}
          />
        </ExpoRouterLink>
      ) : (
        <View style={styles.arrow_box}></View>
      )}
      <View style={styles.dot_cover}>
        {pagerInfo.dot.map((item) => (
          <ExpoRouterLink key={item.path} href={item.path} style={styles.dot_box}>
            {item.actvlink ? (
              <Image
                style={styles.dot_spl}
                source={require("../../assets/images/dot_blue.png")}
              />
            ) : (
              <Image
                style={styles.dot_spl}
                source={require("../../assets/images/dot_white.png")}
              />
            )}
          </ExpoRouterLink>
        ))}

       
       <ExpoRouterLink href={INTRO} style={styles.skip_text}>
          <Text style={styles.skip}>Skip1</Text>
        </ExpoRouterLink>
      </View>
      {pagerInfo.nextLink !== null ? (
        <ExpoRouterLink href={pagerInfo.nextLink} style={styles.arrow_box}>
          <Image
            style={styles.arrow}
            source={require("../../assets/images/arrow2.png")}
          />
        </ExpoRouterLink>
      ) : (
        <View style={styles.arrow_box}></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pager_dots: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 50,
  },
  arrow_box: {
    width: 30,
    height: 30,
  },
  arrow: {
    width: 30,
    height: 30,
  },
  dot_cover: {
    display: "flex",
    flexDirection: "row",
  },
  dot_box: {
    width: 16,
    height: 16,
    marginHorizontal: 4,
  },
  dot_spl: {
    width: 16,
    height: 16,
  },
  skip_text: {
    marginLeft: 8,
    marginTop: -2,
  },
  skip: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: "bold",
  },
});
