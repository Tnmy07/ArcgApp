import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, Pressable,SectionList } from "react-native";
import { Colors } from "../../constants/colors";
import { MainLayout } from "../../components/mainlayout";
import { UserInfo } from "../../components/userinfo";
import Axios from "axios";


export default function SearchAssocite() {
  
  return (
    <MainLayout>
      <View style={styles.container}>
      <Image
          style={styles.cert_img}
          source={require("../../assets/images/av.png")}
        />
        <Text style={styles.text_splash}>
          Now your Bird DNA certificates from multiple Laboratories can be
          stored in one single account.
        </Text>    
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  cert_img: {
    width: 354,
    height: 240,
  },
});
