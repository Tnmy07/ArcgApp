import React, { useState } from "react";
import { Link } from "expo-router";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { Colors } from "../../constants/colors";
import { MainLayout } from "../../components/mainlayout";
import { UserInfo } from "../../components/userinfo";

export default function HomeTabCertificate() {
  return (
    <MainLayout>
      <View style={styles.page_wrapper}>
        <UserInfo />
        <View style={styles.certificate_box}>
          <View style={styles.topbar}>
            <Link style={styles.button_text} href={"/"}>
              <Image
                style={styles.cert_icon}
                source={require("../../assets/images/arrow.png")}
              />
            </Link>
            <Text style={styles.text_sel}>Certificate info</Text>
            <Pressable style={styles.button_text_icon}>
              <Image
                style={styles.cert_icon_right}
                source={require("../../assets/images/btns.png")}
              />
            </Pressable>
          </View>
          <Image
            style={styles.cert_img}
            source={require("../../assets/images/certificate.png")}
          />
          <View style={styles.center_btn}>
            <Image
              style={styles.cert_icon_btnply}
              source={require("../../assets/images/btnply.png")}
            />
          </View>
        </View>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  page_wrapper: {
    display: "flex",
  },
  certificate_box: {
    display: 'flex',
    width: "100%",
    height: 620,
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: Colors.white,
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: -3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    marginTop: 16,
  },
  topbar: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button_text: {
    width: 30,
    height: 30,
  },
  cert_icon: {
    width: 30,
    height: 30,
  },
  button_text_icon: {
    width: 46,
    height: 23,
  },
  cert_icon_right: {
    width: 46,
    height: 23,
  },
  text_sel: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.black,
  },
  cert_img: {
    width: 354,
    height: 240,
  },
  center_btn: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
  cert_icon_btnply: {
    width: 63,
    height: 50,
  },
});
