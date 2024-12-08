import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text,Pressable,Image } from "react-native";
import { Colors } from "../../constants/colors";
import { MainLayout } from "../../components/mainlayout";
import { DashboardCertificate } from "../../components/dashboardCerificate";
import { RecentActivity } from "../../components/recentActivity";

import { UserInfo } from "../../components/userinfo";
import { TransferedCertificate } from "../../components/transferedCertificate";
import { Filter } from "../../components/filter";
import Axios from "axios";


export default function RecivedCertificate() {
  const [show, setShow] = useState(true);
  const onPressFunction = () => {
    setShow(!show);
  }
  const [certificate, setCarousels] = useState([]);
  const fetchInfo = async () => {
    const dataToken =  await window.localStorage.getItem("usertoken");
    console.log("myCertificate", dataToken)
      Axios({
          method: 'GET',
          url: 'https://dgificate.in/api/v1/transfer-certificate',
          headers: {
            'Authorization': 'Bearer ' + dataToken
          }              
      }).then(function (result) {
          console.log(">>result", result.data.data);
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
      {show ? (
        <>
         <View style={styles.page_wrapper}>
        <UserInfo />
        <View style = {styles.row_style_tab1}>
        <View style={styles.row_tab_content_wrapper}>
          <Text style={styles.tab_headings_text}>Transferred Certificates 42</Text>
          <Pressable style={styles.button_text_icon} onPress={onPressFunction}>
            <Image
              style={styles.cert_icon_right}
              source={require("../../assets/images/filter.png")}
            />
          </Pressable>
          <View style={styles.tab_content_certificate}>
          {certificate.map((item) => (
                  <View key={item} style={styles.item_wrap_two}>
                    <View style={styles.item_inside_card}>
                      <Image source={item.top_logo} style={styles.avatar} />
                      {/* <View style={styles.itm_round_two}></View> */}
                      <Text style={styles.itm_text_tow}>Certificate of Bird DNA Test</Text>
                    </View>
                    <View style={styles.row_data_cover}>
                      <View style={styles.row_text_item}>
                        <View style={styles.row_data_item}>
                          <Text style={styles.fst_text_tow}>Bird Ring Number:</Text>
                          <Text style={styles.lst_text_two}>{item.ring_no}</Text>
                        </View>
                        <View style={styles.row_data_item}>
                          <Text style={styles.fst_text_tow}>Species:</Text>
                          <Text style={styles.lst_text_two}>{item.species}</Text>
                        </View>
                        <View style={styles.row_data_item_center_two_mutaion}>
                          <Text style={styles.fst_text_center_two_mutaion}>Mutation:</Text>
                          <Text style={styles.lst_text_center_two_mutaion}>{item.mutation}</Text>
                          {/* <View style={styles.itm_round_two}></View> */}
                          <Image source={item.middle_logo} style={styles.avatar} />
                        </View>
                        <View style={styles.row_data_item_sample}>
                        <Text style={styles.fst_text_tow_sample}>Sample Received:{item.sample_received}</Text>
                        <Text style={styles.lst_text_two_sample}>Sample Tested:{item.sample_tested}</Text>
                        </View>
                        <View style={styles.row_data_item}>
                          <Text style={styles.fst_text_tow}>Lab ID:</Text>
                          <Text style={styles.lst_text_two}>{item.LabID}</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.row_data_item_center_two}>
                      <Text style={styles.fst_text_center_two}>Result:</Text>
                      <Text style={styles.lst_text_center_two}>{item.result}</Text>
                      {/* <View style={styles.itm_round_two}></View> */}
                      <Image source={item.bottom_logo} style={styles.avatar} />
                    </View>
                  </View>
                ))}
          </View>
        </View>
        </View>
      </View>
        </>

      ):(
        <>
        <Filter/>
        </>

      )}
     
    </MainLayout>
  );
}



const styles = StyleSheet.create({
  tab_content_certificate: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 14,
    paddingHorizontal: 4,
  },
  item_wrap_certificate: {
    width: 114,
    padding: 2,
    marginHorizontal: 7,
    marginBottom: 12,
    borderRadius: 4,
    backgroundColor: Colors.bgcolCard,
    shadowColor: "#555555",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  // item_wrap_certificate:{
  //   width: 178,
  //   padding: 4,
  //   marginHorizontal: 7,
  //   marginBottom: 12,
  //   borderRadius: 4,
  //   backgroundColor: Colors.bgcolCard,
  //   shadowColor: "#555555",
  //   shadowOffset: { width: 1, height: 1 },
  //   shadowOpacity: 0.3,
  //   shadowRadius: 2,
  // },
  item_wrap_two: {
    width: 178,
    padding: 4,
    marginHorizontal: 7,
    marginBottom: 12,
    borderRadius: 4,
    backgroundColor: Colors.bgcolCard,
    shadowColor: "#555555",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  item_inside_card: {
    display: 'flex',
    flexDirection: 'row',
  },
  itm_round: {
    width: 14,
    height: 14,
    marginRight: 4,
    borderRadius: 50,
    backgroundColor: Colors.tagCol,
  },
  itm_round_two: {
    width: 18,
    height: 18,
    marginRight: 6,
    borderRadius: 50,
    backgroundColor: Colors.tagCol,
  },
  itm_text: {
    fontSize: 6,
    fontWeight: 'bold',
  },
  itm_text_tow: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  row_data_cover: {
    display: "flex",
    flexWrap: "wrap",
  },
  row_text_item: {
    width: "70%",
  },
  row_data_item: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 2,
  },
  row_data_item_sample: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 2,
    width: 187
  },
  row_data_item_height: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 2,
    height: 17
  },
  row_data_item_center: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  row_data_item_center_two: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  row_data_item_center_two_mutaion: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
  },
  fst_text: {
    fontSize: 6,
    fontWeight: 'bold',
    marginRight: 4,
  },
  fst_textsample: {
    display: "flex",
    flexDirection: "row",
    fontSize: 6,
    marginRight: 2,
    // marginBottom: 100,
  },
  lst_textsample: {
    display: "flex",
    flexDirection: "row",
    fontSize: 6,
    marginRight: 2,
  },
  lst_text: {
    fontSize: 6,
    fontWeight: 'bold',
  },
  fst_text_center: {
    fontSize: 6,
    fontWeight: 'bold',
    marginRight: 4,
  },
  lst_text_center: {
    fontSize: 7,
    fontWeight: 'bold',
    color: Colors.orgcol,
    marginRight: 6,
  },
  fst_text_tow: {
    fontSize: 9,
    fontWeight: 'bold',
    marginRight: 4,
  },
  lst_text_two: {
    fontSize: 9,
    fontWeight: 'bold',
  },
  fst_text_tow_sample: {
    fontSize: 5,
    // marginRight: 4,
    fontWeight: 'bold',
  },
  lst_text_two_sample: {
    fontSize: 5,
    fontWeight: 'bold',
    marginLeft: 6,
  },
  fst_text_center_two: {
    fontSize: 9,
    fontWeight: 'bold',
    marginRight: 4,
  },
  lst_text_center_two: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.orgcol,
    marginRight: 6,
  },

  fst_text_center_two_mutaion: {
    fontSize: 9,
    fontWeight: 'bold',
    marginRight: 4,
  },
  lst_text_center_two_mutaion: {
    fontSize: 10,
    fontWeight: 'bold',
    marginRight: 27,
  },
  page_wrapper: {
    display: "flex",
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
  row_tab_content_wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  row_heading_item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 20,
  },
  img_ic: {
    width: 50,
    height: 29,
  },
  tab_headings_text: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 10,
    fontWeight: "bold",
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
    borderRadius: 50,
    backgroundColor: Colors.tabBg,
  },
  itm_avatar: {
    width: 50,
    height: 50,
  },
  avatar: {
    width: 25,
    height: 25,
    marginRight: 6,
    borderRadius: 20
  },
  avatarMidd: {
    width: 25,
    height: 25,
    marginLeft: 47,
    borderRadius: 20,
    marginBottom: 18,
  },
  item_wrap_avater_card: {
    width: 50,
    height: 30,
    marginHorizontal: 7,
    marginBottom: 12,
    borderRadius: 50,
    backgroundColor: Colors.tabBg,
  },
  itm_avatar_card: {
    width: 50,
    height: 30,
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
  pos_item_round: {
    position: "absolute",
    top: -1,
    left: -1,
    width: 12,
    height: 12,
    borderRadius: 30,
    backgroundColor: Colors.tagCol,
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pos_item_round_text: {
    color: Colors.white,
    fontSize: 8,
    fontWeight: 'bold',
  },
  count_text: {
    textAlign: "center",
    fontSize: 10,
    height: 18,
    lineHeight: 18,
  },
  pop_box_info: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 400,
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: Colors.white,
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: -3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  pop_main_logo: {
    width: 300,
    height: 58,
  },
  text_sel: {
    display: "flex",
    textAlign: "center",
    fontSize: 18,
    marginTop: 26,
    marginBottom: 30,
    fontWeight: "bold",
  },
  btn_cert_center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  press_btn_pop: {
    width: 200,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 16,
    backgroundColor: Colors.popbtn,
  },
  text_pop: {
    textAlign: "center",
    color: Colors.white,
    fontSize: 14,
    fontWeight: "bold",
  },
});