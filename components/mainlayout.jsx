import React from "react";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, Image } from "react-native";
import { Colors } from "../constants/colors";
import { Header } from "./header";
import {
  DASHBOARD,
  USER,
  FILTER,
  DEDICATESENDCERTFUNCTION,
  RECENTACTIVITY,
  HOMETAB,
  HOMETABPOP,
  HOMETABCERTIFICATE,
} from "../constants/router";

export const MainLayout = ({ children }) => {
  return (
    <View style={styles.page_wrapper}>
      <Header />
      {children}
      <View style={styles.pos_row}>
        <LinearGradient
          colors={[Colors.headbg, Colors.dbgcolor]}
          style={styles.head_bottom}
        >
          <View style={styles.bottom_tab}>
            <Link style={styles.bottom_link} href={DASHBOARD}>
              <Image style={styles.img_ic} source={require("../assets/images/b1.png")} />
            </Link>
            <Link style={styles.bottom_link} href={DEDICATESENDCERTFUNCTION}>
              <Image style={styles.img_ic} source={require("../assets/images/b2.png")} />
            </Link>
            <Link style={styles.bottom_link} href={USER}>
              <Image style={styles.img_ic} source={require("../assets/images/b3.png")} />
            </Link>
            <Link style={styles.bottom_link_new} href={'/'}>
            </Link>
            <Link style={styles.bottom_link} href={HOMETAB}>
              <Image style={styles.img_ic} source={require("../assets/images/b4.png")} />
            </Link>
            <Link style={styles.bottom_link} href={DASHBOARD}>
              <Image style={styles.img_ic} source={require("../assets/images/b5.png")} />
            </Link>
            <Link style={styles.bottom_link} href={DASHBOARD}>
              <Image style={styles.img_ic} source={require("../assets/images/b6.png")} />
            </Link>
          </View>
        </LinearGradient>
        <Link style={styles.bottom_link_new_pos} href={HOMETABPOP}>
          <View style={styles.bottom_link_view}>
            <Image style={styles.img_ic_new} source={require("../assets/images/icf.png")} />
          </View>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pos_row: {
    width: "100%",
    // position: "absolute",
    position:"fixed",
    bottom: 0,
    marginButtom:100,
  },
  head_bottom: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 28,
  },
  page_wrapper: {
    flex: 1,
    backgroundColor: Colors.sbgcol,
  },
  bottom_tab: {
    width: "100%",
    display: "flex",
    paddingHorizontal: 26,
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
  },
  bottom_link: {
    width: 45,
    height: 45,
  },
  img_ic: {
    width: 34,
    height: 34,
  },
  bottom_link_new: {
    width: 56,
    height: 56,
  },
  bottom_link_new_pos: {
    width: 60,
    height: 60,
    position: 'absolute',
    left: "50%",
    bottom: 40,
    marginLeft: -28,
    shadowColor: "#555555",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  bottom_link_view: {
    width: 60,
    height: 60,
    display: 'flex',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.sbgcol,
  },
  img_ic_new: {
    width: 50,
    height: 29,
  }
});
