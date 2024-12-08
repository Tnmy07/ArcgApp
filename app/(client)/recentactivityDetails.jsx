import React, { useState } from "react";
import Checkbox from 'expo-checkbox';
import { View, StyleSheet, Text, Image, Pressable,FlatList } from "react-native";
import { Colors } from "../../constants/colors";
import { MainLayout } from "../../components/mainlayout";
import { UserInfo } from "../../components/userinfo";
export default function RecentactivityDetails() {
  const [isChecked, setChecked] = useState(false);
  const [useTabName, setUseTabName] = useState("gender");
  const tabHandleClick = (tabName) => setUseTabName(tabName);

  return (
    <MainLayout>
      <View style={styles.page_wrapper}>
        <UserInfo />
        <View>
            
        </View>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  page_wrapper: {
    display: "flex",
  },
  
});
