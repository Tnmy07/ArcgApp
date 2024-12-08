import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, Pressable, CheckBox, FlatList, Modal, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

import { Colors } from "../../constants/colors";
import { MainLayout } from "../../components/mainlayout";
import { DashboardCertificate } from "../../components/dashboardCerificate";
import { RecentActivity } from "../../components/recentActivity";

import { UserInfo } from "../../components/userinfo";
import { TransferedCertificate } from "../../components/transferedCertificate";
import { ReceiveCertificate } from "../../components/receiveCertificate";
// import { SearchAssociatePage } from "../../components/searchAssociateold";

import { Input } from "../../components/input";
import {
  DNAPOPUP,
  SEARCHASSOCIATE
} from "../../constants/router";

import Axios from "axios";


export default function HomeTabPop() {
  const [useTabName, setUseTabName] = useState("dnacertificate");
  const tabHandleClick = (tabName) => setUseTabName(tabName);
  const [show, setShow] = useState(true);
  const [showRing, setShowRing] = useState(true);
  const [userListShow, setUserListShow] = useState(true);
  const [showcertificate, setShowcertificate] = useState(true);
  const [searchAss, setSearchAssocite] = useState(true);
  
  const [userName, setUserName] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [ringids, setRingIds] = useState([]);

  const [isFilterVisible, setFilterVisible] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);
  const [transferCertificate, setTransfer] = useState([]);
  // const [sendCertificate,setSendCertificate] = useState([]);
  const [certificateSent, setsendcertificate] = useState(false);
  const [successfull, setSuccessfull] = useState(false);

  const [getid, setGetid] = useState(null);
  const [certificateId, setCertificate] = useState(null);


  const toggleFilter = async () => {
    setFilterVisible(!isFilterVisible);
    const dataToken = await window.localStorage.getItem("usertoken");
    Axios({
      method: 'GET',
      url: 'https://dgificate.in/api/v1/certificate-history/' + search,
      headers: {
        'Authorization': 'Bearer ' + dataToken
      }
    }).then(function (result) {
      if (result.status === 200) {
        setTransfer(result.data.data)
      } else {
        console.log(result.status);
      }
    }).catch(function (errors) {
      console.log(errors)
    });
  };

  const options = [
    { id: 1, label: 'Love Bird' },
    { id: 2, label: 'Finch' },
    { id: 3, label: 'Conures' },
    { id: 4, label: 'Amazon Parrots' },
    { id: 5, label: 'African Grey Parrots' },
    { id: 6, label: 'Lory' },
    { id: 7, label: 'Cockatiel' },
  ];


  const [search, setSearch] = useState("");
  const [searchname, setSearchName] = useState("");
  const [isSelected, setSelection] = useState(false);

  const onPressFunction = () => {
    setShow(!show);
  }

  const onPressRingShow = () => {
    setShowRing(!showRing);
  }

  const oPenCertifiicate = () => {
    const dataToken = window.localStorage.getItem("usertoken");
    Axios({
      method: 'GET',
      url: 'https://dgificate.in/api/v1/check-ring-id/' + search,
      headers: {
        'Authorization': 'Bearer ' + dataToken
      }
    }).then(function (result) {
      if (result.status === 200) {
        setSelectedOption(result.data.data[0].species)
        setRingIds(result.data.data)
        setCertificate(result.data.data[0].LabID)
      } else {
        console.log(result.status);
      }
    }).catch(function (errors) {
      console.log(errors)
    });
    setShowcertificate(!showcertificate);
  }

  const SearchAssocite = () => {
    setSearchAssocite(!searchAss);
  }

  // const onPressUserListShow = () => {
  //   setUserListShow(!userListShow)
  // }

  const fetchInfo = async () => {
    const dataToken = await window.localStorage.getItem("usertoken");
    Axios({
      method: 'GET',
      url: 'https://dgificate.in/api/v1/user-list',
      headers: {
        'Authorization': 'Bearer ' + dataToken
      }
    }).then(function (result) {
      if (result.status === 200) {
        setProfiles(result.data.data);
        console.log(result.data.data)
      } else {
        console.log(result.status);
      }
    }).catch(function (errors) {
      console.log(errors)
    });
  }

  const sendCertificate = async () => {
    setsendcertificate(!certificateSent)
  }
  const onPressSendCertificate = async() => {
    const dataToken = await window.localStorage.getItem("usertoken");
    Axios({
      method: 'post',
      url: 'https://dgificate.in/api/v1/send-dna-certificate',
      headers: { 
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + dataToken
      },
      data: {
        certificate_id: certificateId,
        transfer_to: getid
      }
    }).then(async function (response) {
      if(response.status === 200){
        console.log("okk")
        setSuccessfull(!successfull)
      }else{
        console.log("SOmthig wrong");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect(() => {
    fetchInfo();
  }, []);
  // List item component
  const ProfileItem = ({ id,name, profile_pic }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: profile_pic }} style={styles.profile_pic} />

      <Text style={styles.name} onPress={() => {
        setSearchName(name)
        setGetid(id);

        setSearchAssocite(true);
      }}>{name}</Text>
    </View>
  );

  const renderItem = ({ item }) => <ProfileItem name={item.name} profile_pic={item.profile_pic} id= {item.id}/>;
  return (
    <MainLayout>
      <>
        {
          searchAss ? (
            <>
              {showcertificate ? (
                <>
                  <View style={styles.page_wrapper}>
                    <UserInfo />
                    <DashboardCertificate />
                  </View>
                  {show ? (
                    <>
                      <View style={styles.pop_box_info}>
                        <Image
                          style={styles.pop_main_logo}
                          source={require("../../assets/images/sublogo.png")}
                        />
                        <Text style={styles.text_sel}>Select Type of Certificate to send</Text>
                        <View style={styles.btn_cert_center}>
                          <Pressable style={styles.press_btn_pop} onPress={onPressFunction}>
                            <Text style={styles.text_pop}>DNA Certificate</Text>
                          </Pressable>
                          <Pressable style={styles.press_btn_pop}>
                            <Text style={styles.text_pop}>Breeder's Certificate</Text>
                          </Pressable>
                        </View>
                      </View>
                    </>
                  ) : (
                    <>
                      {showRing ? (

                        <>
                          <View style={styles.pop_box_info_dna}>
                            <Image
                              style={styles.pop_main_logo}
                              source={require("../../assets/images/sublogo.png")}
                            />

                            <Text style={styles.text_sel}>Enter User ID / Phone Number</Text>
                            <View style={styles.btn_cert_center}>
                              {/* {userName ? <Input value={userName} onChangeText={setSearch} placeholder="" /> : <Input value={userName} onChangeText={setSearch} placeholder="" />} */}
                              <Input value={searchname} onChangeText={setSearchName} placeholder="" />
                              <Pressable onPress={SearchAssocite}>
                                <Text style={styles.mouse_over}>Search Associates</Text>
                              </Pressable>
                            </View>
                            <View style={styles.button_cover}>
                              <Pressable style={styles.button_text} onPress={onPressRingShow}>
                                <Text style={styles.btn_text}>Okay</Text>
                              </Pressable>
                            </View>
                          </View>
                        </>
                      ) : (

                        <>
                          <View style={styles.pop_box_info_dna}>
                            <Image
                              style={styles.pop_main_logo}
                              source={require("../../assets/images/sublogo.png")}
                            />
                            <Text style={styles.text_sel}>Enter Ring ID / Lab ID</Text>
                            <View style={styles.btn_cert_center}>
                              <Input value={search} onChangeText={setSearch} placeholder="RING ID" />
                            </View>
                            <View style={styles.btn_cert_center}>
                              <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
                              <Text style={styles.label}>Send Multiple</Text>
                            </View>
                            <View style={styles.button_cover}>
                              <Pressable style={styles.button_text} onPress={oPenCertifiicate}>
                                <Text style={styles.btn_text}>Okay</Text>
                              </Pressable>
                            </View>
                          </View>
                        </>
                      )}
                    </>
                  )}
                </>
              ) : (
                <>
                  <View style={styles.page_wrapper}>

                    <UserInfo />

                    <View style={styles.certificate_box}>

                      <View style={styles.topbar}>
                        {/* <Link style={styles.button_text1} href={"/"}> */}
                        <Image
                          style={styles.cert_icon}
                          source={require("../../assets/images/arrow.png")}
                        />
                        {/* </Link> */}
                        <Text style={styles.text_sel}>Certificate info</Text>
                        <Pressable style={styles.button_text_icon} onPress={toggleFilter}>
                          <Image
                            style={styles.cert_icon_right}
                            source={require("../../assets/images/btns.png")}
                          />
                        </Pressable>
                      </View>
                      {ringids.map((item) => (
                        <View style={styles.item_wrap_certificatebig}>
                          <View style={styles.item_inside_card}>
                            {/* <View style={styles.itm_roundbig}></View> */}
                            <Image source={item.top_logo} style={styles.itm_roundbig} />
                            <Text style={styles.itm_textbig}>Certificate of Bird DNA Test </Text>
                          </View>
                          <View style={styles.row_data_cover}>
                            <View style={styles.row_text_item}>
                              <View style={styles.row_data_item}>
                                <Text style={styles.fst_textbig}>Bird Ring Number:</Text>
                                <Text style={styles.lst_textbig}>{item.LabID}</Text>
                              </View>
                              <View style={styles.row_data_item}>
                                <Text style={styles.fst_textbig}>Species:</Text>
                                <Text style={styles.lst_textbig}>{item.species}</Text>
                              </View>
                              <View style={styles.row_data_item}>
                                <Text style={styles.fst_textbig}>Mutation:</Text>
                                <Text style={styles.lst_textbig}>{item.mutation}</Text>
                                <Image source={item.middle_logo} style={styles.itm_roundbigcenter} />
                              </View>
                              <View style={styles.row_data_item}>
                                <Text style={styles.fst_text}>Sample Received date: {item.sample_received}</Text>
                                <Text style={styles.lst_text}>Sample Report Date: {item.sample_tested}</Text>
                              </View>
                              <View style={styles.row_data_item}>
                                <Text style={styles.fst_textbig}>Lab ID:</Text>
                                <Text style={styles.lst_textbig}>{item.LabID}</Text>
                              </View>
                            </View>
                          </View>
                          <View style={styles.row_data_item_center}>
                            <Text style={styles.fst_text_centerbig}>Result:</Text>
                            <Text style={styles.lst_text_centerbig}>{item.result}</Text>
                            {/* <View style={styles.itm_roundbig}></View> */}
                            <Image source={item.bottom_logo} style={styles.itm_roundbig} />
                          </View>
                        </View>

                      ))}
                      <TouchableOpacity onPress={() => sendCertificate()}>
                        <View style={styles.center_btn}>
                          <Image
                            style={styles.cert_icon_btnply}
                            source={require("../../assets/images/btnply.png")}
                          />
                        </View>
                      </TouchableOpacity>


                      {isFilterVisible && (
                        <View style={styles.overlay}>
                          <View style={styles.filterContainer}>

                            <View style={styles.row_data_item}>
                              <TouchableOpacity onPress={toggleFilter} style={styles.closeButton}>
                                <Text style={styles.closeText}>Close</Text>
                              </TouchableOpacity>
                              <Text style={styles.heading}>Certificate Status</Text>

                            </View>

                            <View style={styles.activeContainer}>
                              <Text style={styles.activeText}>Active</Text>
                              <TouchableOpacity style={styles.active} >
                                <Text style={styles.buttonText}>Active</Text>
                              </TouchableOpacity>
                            </View>
                            <Text style={styles.tab_headings_text_trans}>Transfer Certificate</Text>

                            <View>

                              {transferCertificate.map((item) => (
                                <View >
                                  <Text style={styles.tab_headings_text_lab}>Lab Name </Text>
                                  <Text style={styles.tab_headings_text_user}>{item.transferFrom} {item.transferDate}</Text>
                                </View>

                              ))}

                            </View>
                            <Text style={styles.filterText}>Tagged As</Text>
                            {options.map(option => (
                              <TouchableOpacity
                                key={option.id}
                                style={styles.radioButton}
                              // onPress={() => setSelectedOption(option.label)}
                              >
                                <View style={[
                                  styles.outerCircle,
                                  selectedOption === option.label && styles.selectedCircle
                                ]}>
                                  {selectedOption === option.label && <View style={styles.innerCircle} />}
                                </View>
                                <Text style={styles.optionText} selectable>{option.label}</Text>
                              </TouchableOpacity>
                            ))}


                            {/* Add your filter options here */}
                          </View>
                        </View>
                      )}

                      {certificateSent && (
                        <View style={styles.pop_box_info}>
                          <Image
                            style={styles.pop_main_logo}
                            source={require("../../assets/images/sublogo.png")}
                          />
                          <Text style={styles.text_sel}>Confirm Send Certificate?</Text>
                          <View style={styles.btn_cert_center}>
                            <Pressable style={styles.press_btn_pop_send} onPress={onPressSendCertificate}>
                              <Text style={styles.text_pop}>Yes</Text>
                            </Pressable>
                            <Pressable style={styles.press_btn_pop_cancel}>
                              <Text style={styles.text_pop}>Cancel</Text>
                            </Pressable>
                          </View>
                        </View>
                      )}
                      {successfull && (
                        <View style={styles.pop_box_info}>
                          <Image
                            style={styles.pop_main_logo}
                            source={require("../../assets/images/sublogo.png")}
                          />
                         
                          <View style={styles.imageSend}>
                            <Image
                              style={styles.pop_main_logo_}
                              source={require("../../assets/images/Slide20.png")}
                            />
                          </View>
                        </View>
                      )}
                    </View>

                  </View>
                </>
              )}
            </>
          ) : (
            <>
              <View style={styles.page_wrapper}>
                <View style={styles.row_style_tab_wrapper}>
                  <FlatList
                    data={profiles}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                  />

                </View>
              </View>
            </>
          )
        }
      </>

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
  fst_text: {
    fontSize: 7,
    fontWeight: 'bold',
    marginRight: 4,
  },
  lst_text: {
    fontSize: 7,
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
    fontSize: 17,
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
  itm_profile_pic: {
    width: 50,
    height: 50,
  },
  item_wrap_avater_card: {
    width: 50,
    height: 30,
    marginHorizontal: 7,
    marginBottom: 12,
    borderRadius: 50,
    backgroundColor: Colors.tabBg,
  },
  itm_profile_pic_card: {
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
  pop_box_info_dna: {
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
  press_btn_pop_send: {
    width: 200,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 16,
    backgroundColor: "#c3d69c",
  },
  press_btn_pop_cancel: {
    width: 200,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 16,
    backgroundColor: "#8fb3e3",
  },
  text_pop: {
    textAlign: "center",
    color: Colors.white,
    fontSize: 14,
    fontWeight: "bold",
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
    borderRadius: "5",
    marginBottom: 16,
    backgroundColor: Colors.popbtn,
  },
  text_pop: {
    textAlign: "center",
    color: Colors.white,
    fontSize: 14,
    fontWeight: "bold",
  },
  button_cover: {
    width: "100%",
    marginTop: 14,
    marginBottom: 16,
    paddingHorizontal: "28%",
  },
  button_text: {
    height: 44,
    backgroundColor: Colors.btnCol,
    width: "100%",
    borderRadius: 6,
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  btn_text: {
    fontSize: 18,
    color: Colors.white,
    lineHeight: 44,
    textAlign: "center",
    fontWeight: "600",
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
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
  button_text1: {
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
  item_wrap_certificatebig: {
    width: 350,
    height: 180,
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
  itm_textbig: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itm_roundbig: {
    width: 40,
    height: 30,
    marginRight: 4,
    borderRadius: 50,
    backgroundColor: Colors.tagCol,
  },
  itm_roundbigcenter: {
    width: 40,
    height: 30,
    position: "absolute",
    bottom: 12,
    left: 259,
    borderRadius: 50,
    backgroundColor: Colors.tagCol,
  },
  row_text_itembig: {
    width: "70%",
  },
  fst_textbig: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 4,
  },
  lst_textbig: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  fst_text_centerbig: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 4,
  },
  lst_text_centerbig: {
    fontSize: 17,
    fontWeight: 'bold',
    color: Colors.orgcol,
    marginRight: 6,
  },
  mouse_over: {
    cursor: 'pointer'
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profile_pic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 300, // Set width according to your needs
    height: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderLeftWidth: 1,
    borderColor: '#ccc',
    elevation: 5,
    zIndex: 1,
  },
  filterContainer: {
    width: 300, // Set width according to your needs
    height: 100,
    backgroundColor: '#fff',
    // padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  closeButton: {
    alignSelf: 'flex-start',

  },
  closeText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    marginRight: 4,
  },
  filterText: {
    fontSize: 25,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    // marginVertical: 10,
    marginLeft: 20,
    marginBottom: 20,
  },
  activeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    // marginVertical: 10,
  },
  activeText: {
    fontSize: 18,
    marginLeft: 30,
    fontWeight: 'bold',
  },
  toggleButton: {
    // padding: 10,
    marginRight: 14,
    borderRadius: 5,
  },
  active: {
    backgroundColor: 'green', // Green color for active status
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  outerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  innerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  },
  selectedCircle: {
    borderColor: 'green', // Change border color for the selected option
  },
  optionText: {
    fontSize: 16,
    fontWeight: "bold"
  },
  tab_headings_text_trans: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: "bold",
    marginBottom: 20,

  },
  tab_headings_text_lab: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: "bold",
    marginBottom: 25,

  },
  tab_headings_text_user: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: "bold",
    marginBottom: 25,
    color: "red",
  },
  imageSend:{
    marginLeft: 100,
    // width:"10px",
    textAlign:"center"
  }
});
