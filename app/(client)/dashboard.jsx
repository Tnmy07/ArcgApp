import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView, Pressable } from "react-native";
import { Colors } from "../../constants/colors";
import { MainLayout } from "../../components/mainlayout";
import { DashboardCertificate } from "../../components/dashboardCerificate";
import { RecentActivity } from "../../components/recentActivity";

import { UserInfo } from "../../components/userinfo";
import { TransferedCertificate } from "../../components/transferedCertificate";
import { ReceiveCertificate } from "../../components/receiveCertificate";




export default function Dashboard() {
  const [useTabName, setUseTabName] = useState("dnacertificate");
  const tabHandleClick = (tabName) => setUseTabName(tabName);
  return (
    <MainLayout>
      <View style={styles.page_wrapper}>
        <UserInfo />
        <View style={styles.row_style_tab_wrapper}>
          <View style={styles.row_style_tab}>
            <Pressable
              onPress={() => tabHandleClick("dnacertificate")}
              style={
                useTabName === "dnacertificate"
                  ? styles.tab_pressable
                  : styles.noactive_tab
              }
            >
              <Text
                style={
                  useTabName === "dnacertificate"
                    ? styles.tab_text
                    : styles.actv_tab_text
                }
              >
                DNA Certificate
              </Text>
            </Pressable>
            <Pressable
              onPress={() => tabHandleClick("breedercertificate")}
              style={
                useTabName === "breedercertificate"
                  ? styles.tab_pressable
                  : styles.noactive_tab
              }
            >
              <Text
                style={
                  useTabName === "breedercertificate"
                    ? styles.tab_text
                    : styles.actv_tab_text
                }
              >
                Breeder's Certificate
              </Text>
            </Pressable>
          </View>
          <View style={styles.tab_content}>
            {useTabName === "dnacertificate" && (
              <ScrollView style={styles.scrollViewcontainer}>
                <DashboardCertificate />
                <RecentActivity />
                <ReceiveCertificate />
                <TransferedCertificate />
              </ScrollView>

            )}
            {useTabName === "breedercertificate" && (
              <View>
                <Text>{useTabName}</Text>
              </View>
            )}
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
  scrollViewcontainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    flex: 1,
    marginTop: 60, // Same as header height
    marginBottom: 60, // Same as footer height
  },
  row_style_tab_wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
  },
  row_style_tab: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  tab_pressable: {
    width: "50%",
    backgroundColor: Colors.tagCol,
  },
  noactive_tab: {
    width: "50%",
    backgroundColor: Colors.tabBg,
  },
  tab_text: {
    paddingVertical: 14,
    fontSize: 14,
    textAlign: "center",
    color: Colors.white,
    fontWeight: "bold",
  },
  actv_tab_text: {
    paddingVertical: 14,
    fontSize: 14,
    textAlign: "center",
    color: Colors.black,
    fontWeight: "bold",
  },
  tab_content: {
    display: "flex",
  },

});
