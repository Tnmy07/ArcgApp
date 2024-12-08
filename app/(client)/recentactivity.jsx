import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { Colors } from "../../constants/colors";
import { MainLayout } from "../../components/mainlayout";
import { UserInfo } from "../../components/userinfo";
import { Link, router } from "expo-router";
import Axios from "axios";

export default function RecentActivity() {
  const [useTabName, setUseTabName] = useState("dnacertificate");
  const tabHandleClick = (tabName) => setUseTabName(tabName);
  const [recentactive, setCarousels] = useState([]);
  let i= 1;

  const fetchInfo = async () => {
    const dataToken = await window.localStorage.getItem("usertoken");
    console.log(dataToken);
    Axios({
      method: 'GET',
      url: 'https://dgificate.in/api/v1/recent-activity',
      headers: {
        'Authorization': 'Bearer ' + dataToken
      }
    }).then(function (result) {
      console.log(">>rescentactive", result.data.data);
      if (result.status === 200) {
        setCarousels(result.data.data);
      } else {
        console.log(result.status);
        // console.log(result.data.data);
      }
    }).catch(function (errors) {
      console.log("second>>", errors)
    });
  }
  useEffect(() => {
    fetchInfo();
  }, []);
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
            <View style={styles.row_tab_content_wrapper}>
              <Text style={styles.tab_headings_text}>Recent Activity</Text>
              <View style={styles.tab_content_wrapper_item}>
                
                {recentactive.map(
                  (item) => (
                    <View key={item} style={styles.item_wrap_avater}>
                      <Image
                        source={item.image}
                        style={styles.itm_avatar}
                      />
                      <View style={styles.pos_bottom_itm}>
                        <Text style={styles.count_text}>{i++}</Text>
                      </View>
                    </View>
                  )
                )}
              </View>
            </View>

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
  row_style_tab_wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: 16,
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
  },
  actv_tab_text: {
    paddingVertical: 14,
    fontSize: 14,
    textAlign: "center",
    color: Colors.black,
  },
  tab_content: {
    display: "flex",
  },
  row_tab_content_wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  tab_headings_text: {
    fontSize: 17,
    marginTop: 20,
    marginLeft: 10,
  },
  tab_content_wrapper_item: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    paddingHorizontal: 4,
  },
  item_wrap_avater: {
    width: 50,
    height: 50,
    marginHorizontal: 7,
    marginBottom: 12,
    borderRadius: "50%",
    backgroundColor: Colors.tabBg,
  },
  itm_avatar: {
    width: 50,
    height: 50,
  },
  pos_bottom_itm: {
    position: "absolute",
    bottom: -2,
    right: -2,
    width: 18,
    height: 18,
    borderRadius: 30,
    backgroundColor: Colors.white,
  },
  count_text: {
    textAlign: "center",
    fontSize: 10,
    height: 18,
    lineHeight: 18,
  },
});
