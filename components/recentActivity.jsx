import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";

import { Colors } from "../constants/colors";
import Axios from "axios";
import { Link } from "expo-router";

import { RECENTACTIVITY } from "../constants/router";




export const RecentActivity = () => {
    const [useTabName, setUseTabName] = useState("dnacertificate");
  const tabHandleClick = (tabName) => setUseTabName(tabName);
  const [recentactive, setCarousels] = useState([]);
  const [certificatenotFound, setCarouselsNotFound] = useState([]);

    
    const fetchInfo = async () => {
      const dataToken =  await window.localStorage.getItem("usertoken");
      console.log(dataToken);
        Axios({
            method: 'GET',
            url: 'https://dgificate.in/api/v1/recent-activity/dashboard',
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
            console.log("second>>", errors)
      console.log("second>>", errors)
      console.log("data not found");
      setCarousels('');
      setCarouselsNotFound("data Not found");
        });
    }
    useEffect(() => {
        fetchInfo();
    }, []);

    return (<View style={styles.row_style_tab_wrapper}>
       
        <View style={styles.tab_content}>
            <View style={styles.row_tab_content_wrapper}>
             <Link href={RECENTACTIVITY}><Text style={styles.tab_headings_text}>Recent Activity</Text></Link>
              <View style={styles.tab_content_wrapper_item}>

                {recentactive ? (
                  <>
                  {recentactive.map(
                  (item) => (
                    <View key={item} style={styles.item_wrap_avater}>
                      <Image
                        source={item.image}
                        style={styles.itm_avatar}
                      />
                    </View>
                  )
                )}</>
                ) :(
                  <>
                  <Text style={styles.notFound}>Data not Found...</Text>
                  </>
                )}
                
              </View>
            </View>
        </View>
      </View>
    )
};


const styles = StyleSheet.create({
    page_wrapper: {
      display: "flex",
    },
    row_style_tab_wrapper: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      marginTop: 5,
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
      fontSize: 25,
      fontWeight:"bold",
      marginLeft: 10,
      fontWeight: "bold",
    },
    tab_content_wrapper_item: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 20,
      paddingHorizontal: 4,
      borderRadius:25
    },
    item_wrap_avater: {
      width: 50,
      height: 50,
      marginHorizontal: 7,
      marginBottom: 12,
      borderRadius: 50,
      backgroundColor: Colors.tabBg,
      borderRadius:25
    },
    itm_avatar: {
      width: 50,
      height: 50,
      borderRadius: 25
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
    notFound: {
      fontSize: 20,
      fontWeight: "bold",
      color: "red",
      marginLeft: 20
    }
  });