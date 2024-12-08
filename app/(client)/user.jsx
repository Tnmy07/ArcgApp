import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text,Pressable,Image } from "react-native";

import { Colors } from "../../constants/colors";
import { MainLayout } from "../../components/mainlayout";
import Axios from "axios";

export default function User() {
  const [userProfile, setCarouselsProfile] = useState([]);
  const [userName, setCarouselsName] = useState([]);
  const [userPhone, setCarouselsPhone] = useState([]);
  const [useruid, setCarouselsUid] = useState([]);
  const [useremail, setCarouselsEmail] = useState([]);


  const fetchInfo = async () => {
    // const dataToken =  await window.localStorage.getItem("usertoken");
    const dataToken =   window.localStorage.getItem("usertoken");
      Axios({
          method: 'GET',
          url: 'https://dgificate.in/api/v1/user-details',
          headers: {
            'Authorization': 'Bearer ' + dataToken
          }              
      }).then(function (result) {
          if (result.status === 200) {
            setCarouselsProfile(result.data.data.profile_pic);
            setCarouselsName(result.data.data.name);
            setCarouselsPhone(result.data.data.phone);
            setCarouselsUid(result.data.data.uid);
            setCarouselsEmail(result.data.data.email);


          } else {
              // console.log(result.status);
              // console.log(result.data.data);
          }
      }).catch(function (errors) {
          // console.log("second>>", errors)
      });
  }
  useEffect(() => {
      fetchInfo();
  }, []);
  return (
    <MainLayout>
<View style={styles.page_wrapper}>
          <View style={styles.tab_content_certificate}>
          <Text style={styles.tab_headings_text}>Profile Page</Text>
          <View style={styles.header_rows}>
          <Image
              style={styles.avatar}
              source={userProfile}
            />
            </View>
          </View>
          <View style={styles.header_rows_gap}>
          <Text style={styles.text_font}>NAME : {userName}</Text>
          <Text style={styles.text_font}>{userPhone}</Text>
          <Text style={styles.text_font}>{useremail}</Text>
          <Text style={styles.text_font}>{useruid}</Text>
          </View>
        

      </View>
    </MainLayout>
  );
}



const styles = StyleSheet.create({
  header_rows_gap:{
    marginTop: 40,
  },
  tab_content_certificate: {
    display: "flex",
  },
  header_rows: {
    display: "flex",
    marginTop: 50,
  },
  avatar: {
    width:410,
    height: 250,
  },
  page_wrapper: {
    display: "flex",
  },
  tab_headings_text: {
    fontSize: 21,
    fontWeight: "bold",
    marginLeft: 7,
    fontWeight: "bold",
  },
  text_font:{
    fontSize:21,
    fontWeight: "bold",
    marginLeft: 10,
    fontWeight: "bold",
  },
 
});
