import { View, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../constants/colors";
import { Input } from "../components/input";
import React, { useState } from "react";
import { LOGIN } from "../constants/router";

export const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <LinearGradient
      colors={[Colors.headbg, Colors.dbgcolor]}
      style={styles.head_bg}
    >
      <View style={styles.page_header}>
        <Link style={styles.arr_text} href={LOGIN}>
          <Image
            style={styles.arrow}
            source={require("../assets/images/arrow.png")}
          />
        </Link>
        {/* <Image
          style={styles.sub_logo}
          source={require("../assets/images/main_logo.png")}
        /> */}
        <View style={styles.serach_input}>
          <Input
            value={search}
            onChangeText={setSearch}
            placeholder="Search"
            fromSection="header"
          />
        </View>
        <Image
          style={styles.info}
          source={require("../assets/images/info.png")}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  head_bg: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  page_header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
    marginTop: 60,
  },
  sub_logo: {
    width: 42,
    height: 42,
    marginRight: 10,
    marginTop: 4,
  },
  serach_input: {
    width: "74%",
    marginRight: 10,
  },
  arr_text: {
    width: 26,
    height: 26,
    marginRight: 10,
    marginTop: 4,
  },
  arrow: {
    width: 26,
    height: 26,
  },
  info: {
    width: 30,
    height: 30,
    marginTop: 4,
  },
});
