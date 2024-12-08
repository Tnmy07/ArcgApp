import React, { useState } from "react";
import Checkbox from 'expo-checkbox';
import { View, StyleSheet, Text, Image, Pressable,FlatList,Button } from "react-native";
import { Link } from "expo-router";
import { Colors } from "../../constants/colors";
import { MainLayout } from "../../components/mainlayout";
import { UserInfo } from "../../components/userinfo";
// import { Button } from "react-native-web";





export default function RecentActivity() {



  return (
    <MainLayout>
      <View style={styles.page_wrapper}>
        {/* <UserInfo /> */}
        <View style={styles.row_style_tab}>
        {/* <Button style={styles.button1}
          title="My Cerificate"
          
        /> */}
          <View style={styles.button_cover}>
            <View style={styles.button_login}>
              <Link style={styles.button_link} href={"/"}>
                My Cerificate
              </Link>
            </View>
          </View>
         {/* <Button  style={styles.button}
          title="Received Certificate"
          color="#488cf1"
        /> */}
          <View style={styles.button_cover}>
            <View style={styles.button_login}>
              <Link style={styles.button_link} href={"/"}>
              Received Certificate
              </Link>
            </View>
          </View>
        </View>
        <View style={styles.row_style_tab}>
         {/* <Button  style={styles.button}
          title="Transferred Certificate"
          color="#488cf1"
        /> */}
        <View style={styles.button_cover}>
          <View style={styles.button_login}>
            <Link style={styles.button_link} href={"/"}>
              Transferred Certificate
            </Link>
          </View>
        </View>
         {/* <Button  style={styles.button}
          title="My Associates"
          borderRadius="50"
        /> */}
         <View style={styles.button_cover}>
          <View style={styles.button_login}>
            <Link style={styles.button_link} href={"/"}>
              My Associates
            </Link>
          </View>
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
  button_cover: {
    width: "47%",
    // marginTop: 30,
    // marginBottom: 24,
    // paddingHorizontal: "36%",
  },
  button_login: {
    width: "100%",
    borderRadius: 6,
    backgroundColor: "#4f81bc",
    color:"white",
    shadowOffset: { width: 2, height: 3 },
    shadowColor: "#171717",
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  button_link: {
    height: 44,
    lineHeight: 44,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "470",
    // color: Colors.black,
    color:"white",
  },
  
  row_style_tab: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    paddingVertical: 10,
    paddingHorizontal: 14,
  }
});
