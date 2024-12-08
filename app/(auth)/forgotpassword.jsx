import { View, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Input } from "../../components/input";
import { Colors } from "../../constants/colors";
import { HOME, LOGIN } from "../../constants/router";
import { C_FORGOT, C_BACK } from "../../constants/content";
import React, { useState } from "react";

export default function Forgotpassword() {
  const [username, setUsername] = useState("");

  return (
    <View style={styles.page_wrapper}>
      <Image
        style={styles.main_logo}
        source={require("../../assets/images/main_logo.png")}
      />
      <View style={styles.form_container}>
        <Input
          value={username}
          onChangeText={setUsername}
          placeholder="Email ID"
        />
        <View style={styles.link_cover}>
          <View style={styles.link_wrapper}>
            <Link style={styles.link_text} href={LOGIN}>
              {C_BACK}
            </Link>
          </View>
        </View>
        <View style={styles.button_cover}>
          <View style={styles.button_wrapper}>
            <Link style={styles.button_text} href={HOME}>
              {C_FORGOT}
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page_wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.bgcolor,
  },
  main_logo: {
    width: 292,
    height: 310,
  },
  form_container: {
    width: "78%",
    display: "flex",
    marginTop: 50,
    justifyContent: "center",
    alignContent: "center",
  },
  link_cover: {
    width: "100%",
    marginTop: 12,
    marginBottom: 8,
  },
  link_wrapper: {
    width: "100%",
  },
  link_text: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 15,
    color: Colors.black,
  },
  button_cover: {
    width: "100%",
    marginTop: 6,
    marginBottom: 16,
    paddingHorizontal: "18%",
  },
  button_wrapper: {
    width: "100%",
    borderRadius: 6,
    backgroundColor: Colors.white,
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  button_text: {
    textAlign: "center",
    fontWeight: "600",
    height: 44,
    lineHeight: 44,
    fontSize: 18,
    color: Colors.black,
  },
});
