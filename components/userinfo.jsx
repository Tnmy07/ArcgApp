import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Rating } from "react-native-ratings";
import { Colors } from "../constants/colors";
import Axios from "axios";


export const UserInfo = () => {
  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating);
  };

  const [profilepic, setProfilepic] = useState([]);
  const [username, setusername] = useState([]);
  const [userId, setuserId] = useState([]);

    const fetchuserInfo = async () => {
      // const dataToken =  await window.localStorage.getItem("usertoken");
      const dataToken =   window.localStorage.getItem("usertoken");
      
      Axios({
        method: 'GET',
        url: 'https://dgificate.in/api/v1/user-details',
        headers: {
          'Authorization': 'Bearer ' + dataToken
        }              
      }).then( function(result){
        console.log(">>result",result);
        if(result.status === 200){
          var profile = result.data.data.profile_pic;
          console.log("User name",result.data.data.name)
          setProfilepic(profile)            
          setusername(result.data.data.name)
          window.localStorage.setItem("userid", result.data.data.id);
          window.localStorage.setItem("userImgName", profile);
        }else{
          console.log(result.status);
          console.log(result.data.data);
        }
      }).catch(function (errors){
        console.log("second>>",errors)
      })
    }

    // useEffect(() => {
    //   const fetchImageUrl = async () => {
    //     // try {
    //     //   const dataToken =  await AsyncStorage.getItem("usertoken");
    //     //   const userImgName =  await AsyncStorage.getItem("userImgName");

    //     // } catch (error) {
    //     //   console.error("Error saving data", error);
    //     // }
    //   const dataToken =  await window.localStorage.getItem("usertoken");
    //   const userImgName =  await window.localStorage.getItem("userImgName");
    //     try {
    //       Axios({
    //         method: 'GET',
    //         url: 'https://dgificate.in/api/v1/user-profile/'+userImgName,
    //         headers: {
    //           'Authorization': 'Bearer ' + dataToken
    //         }              
    //       }).then( function(result){
    //         if(result.status === 200){
    //           setProfilepic('http://127.0.0.1:8000/api/v1/user-profile/'+userImgName)            
    //         }else{
    //           console.log(result.status);
    //           console.log(result.data.data);
    //         }
    //       }).catch(function (errors){
    //         console.log("second>>",errors)
    //       })
    //               } catch (error) {
    //       console.error('Error fetching image URL:', error);
    //     }
    //   };
  
    //   fetchImageUrl();
    //   fetchuserInfo();

    // }, []);
    useEffect(() => {

      fetchuserInfo();

    }, []);
 

  return (
    <View style={styles.header_wrapper}>
      <View style={styles.header_rows}>
        <Image
          source={profilepic}
          style={styles.avatar}
        />
        <Text style={styles.user_name}>Hello {username},</Text>
        <View style={styles.bg_tag}>
          <Text style={styles.bg_tag_text}>HD123</Text>
        </View>
      </View>
      <View style={styles.rating_sec}>
        <Text style={styles.text_rat}>Breeder Ratings:</Text>
        <View style={styles.start_rat}>
          <Rating
            type="custom"
            ratingImage={require("../assets/images/star.png")}
            ratingColor="#f2f2f2"
            ratingBackgroundColor="#f2f2f2"
            ratingCount={4}
            imageSize={18}
            onFinishRating={ratingCompleted}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header_wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 4,
  },
  header_rows: {
    display: "flex",
    flexDirection: "row",
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: 6,
    borderRadius: 25
  },
  user_name: {
    height: 40,
    lineHeight: 40,
    fontSize: 14,
    fontWeight: "bold",
  },
  bg_tag: {
    backgroundColor: Colors.tagCol,
    height: 22,
    paddingHorizontal: 6,
    paddingVertical: 3,
    marginTop: 10,
    marginLeft: 6,
    borderRadius: 4,
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  bg_tag_text: {
    fontSize: 12,
    fontWeight: "bold",
  },
  rating_sec: {
    display: "flex",
    flexDirection: "row",
    marginTop: 11,
  },
  text_rat: {
    fontSize: 12,
    marginRight: 4,
    marginTop: 2,
  },
});
