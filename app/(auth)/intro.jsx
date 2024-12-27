import { View, Text, Image, StyleSheet,TouchableHighlight } from "react-native";
import { Link , router} from "expo-router";
import { Colors } from "../../constants/colors";
import { C_LOGIN, C_OR, C_SIGNUPWITH, C_FROM } from "../../constants/content";
// import { LOGIN } from "../../constants/router";
// import {  GoogleLogin  } from '@react-oauth/google'; 
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';
//import * as Random from 'expo-random';
import React,{useEffect, useState} from "react";
import { FORGOT, DASHBOARD,LOGIN } from "../../constants/router";
import Axios from "axios";
WebBrowser.maybeCompleteAuthSession();


//facebook


const FB_APP_ID = '535529518800612';

// const useProxy = AuthSession.useProxy();

// const useProxy = ;
 const redirectUri = 'http://localhost:8081/';
 const discovery = {
  authorizationEndpoint: 'https://www.facebook.com/v10.0/dialog/oauth',
};

export default function Intro() {
  

  const [result, setResult] = useState(null);



    const [request, response, promptAsync ] =  Google.useAuthRequest({      
         androidClientId : "567010457143-qvlgvsv5bjurbdqjpdf5r4317k4r6tc6.apps.googleusercontent.com",
        //webClientId : "567010457143-tp0s5ldvg0puivit3dmm3jdkd2hiabu0.apps.googleusercontent.com",
    }) 
    useEffect(() => {
      // console.log("userEffect",response);

      if (response?.type === 'success') {
          const { authentication } = response;
          getGoogleUser(authentication.accessToken)
      }
    }, [response]);

    const getGoogleUser = async (accessToken) => {
      // console.log("accessToken",accessToken);
    
      try{
            const response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
                headers: { Authorization: `Bearer ${accessToken}`}
            }).then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            }).then(data => {
              // console.log('Data',data)
              // console.log('Name:', data.name);
              var id = data.id;
              var first_name = data.given_name;
              var last_name = data.family_name;
              var email = data.email;
              var profile_pic = data.picture;
              var social_media_type = "gmail";
              Axios({
                method: 'post',
                url: 'https://dgificate.in/api/v1/social-login',
                headers: { 
                  'Content-Type':  'application/json',
                },
                data: {
                  id:id,
                  first_name:first_name,
                  last_name:last_name,
                  email: email,
                  profile_pic: profile_pic,
                  social_media_type: social_media_type
                }
              }).then(async function (response) {
                // console.log("response",response);
                if(response.status === 200){
                  var TokenVal = response.data;
                  try {
                    // await AsyncStorage.setItem("usertoken", response.data);
                    window.localStorage.setItem("usertoken", response.data);
                  } catch (error) {
                    console.error("Error saving data", error);
                  }            
                  // window.localStorage.setItem("usertoken", JSON.stringify(response.data));
                  // localStorage.setItem("usertoken", response.data);
                  router.replace(DASHBOARD);
                }else{
                  console.log(" GOOGLE,Invalid Token generation");
                }
              })
              .catch(function (error) {
                console.log("GOOGLE",error);
              });
             
            });
        }catch(error){
            console.log('GoogleUserReq error: ', error);
        }
    }




    const [reqt, res, promptAsyncfacebook] = AuthSession.useAuthRequest(
      {
        responseType: AuthSession.ResponseType.Token,
        clientId: FB_APP_ID,
        redirectUri: AuthSession.makeRedirectUri({
          useProxy: true,
        }),
        scopes: [],
        // scopes: ['public_profile', 'email', 'user_birthday'],
      },
      discovery
    );

    const [facebookuserInfo, setUserInfo] = useState(null);
    const fetchUserInfo = async (token) => {
      const response = await fetch(
        //  `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,birthday,picture.type(large)`
        `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.type(large)`
      );
      const data = await response.json();
      var id = data.id;
      var first_name = data.name.split(' ').slice(0, -1).join(' ');
      var last_name = data.name.split(' ').slice(-1).join(' ');
      var email = "";
      var profile_pic = data.picture.data.url;
      var social_media_type = "facebook";
      
      // console.log("facebokkk-id",id)
      // console.log("facebokkk",first_name)
      // console.log("facebokkk",last_name)
      // console.log("facebokkk",email)
      // console.log("facebokkk",profile_pic)

      Axios({
        method: 'post',
        // url: 'http://127.0.0.1:8000/api/?v1/user-login',
        url: 'https://dgificate.in/api/v1/social-login',
        headers: { 
          'Content-Type':  'application/json',
        },
        data: {
          id:id,
          first_name:first_name,
          last_name:last_name,
          email: email,
          profile_pic: profile_pic,
          social_media_type: social_media_type
        }
      }).then(async function (response) {
        // console.log("response",response);
        if(response.status === 200){
          var TokenVal = response.data;
          // console.log("token,",TokenVal)
          try {
            // await AsyncStorage.setItem("usertoken", response.data);
            window.localStorage.setItem("usertoken", response.data);
          } catch (error) {
            console.error(" facebook Error saving data", error);
          }            
          // window.localStorage.setItem("usertoken", JSON.stringify(response.data));
          // localStorage.setItem("usertoken", response.data);
          router.replace(DASHBOARD);
        }else{
          console.log(" facebook,Invalid Token generation");
        }
      })
      .catch(function (error) {
        console.log("facebook",error);
      });

      setUserInfo(data);
    };

  
    useEffect(() => {
      if (res?.type === 'success') {
        const { access_token } = res.params;
        fetchUserInfo(access_token);
        console.log(access_token);
        // You can now use the access token to fetch user data
      }
    }, [res]);

  return (
    <View style={styles.page_wrapper}>
      <Image
        style={styles.main_logo}
        source={require("../../assets/images/main_logo.png")}
      />
      <View style={styles.button_cover}>
        <View style={styles.button_login}>
          <Link style={styles.button_link} href={LOGIN}>
            {C_LOGIN}
          </Link>
        </View>
      </View>
      <View style={styles.or_text}>
        <Text style={styles.or_txt}>{C_OR}</Text>
      </View>
      <View style={styles.signup_btn}>
        <Text style={styles.signup_txt}>{C_SIGNUPWITH}</Text>
      </View>
      <View style={styles.social_wrap}>
      <TouchableHighlight onPress={() => promptAsyncfacebook({ useProxy: true })}>
        <Image
          style={styles.social_ic}
          source={require("../../assets/images/facebook.png")}
        />
        </TouchableHighlight> 
        <Text style={styles.social_txt}>{C_OR}</Text>
        <TouchableHighlight onPress={() => promptAsync()}>
        <Image 
          style={styles.social_ic}
          source={require("../../assets/images/google.png")}
        />
        </TouchableHighlight> 
      </View>
      <View style={styles.from_text}>
        <Text style={styles.from_txt}>{C_FROM}</Text>
      </View>
      <View style={styles.brand_wrap}>
        <Image
          style={styles.brand_ic}
          source={require("../../assets/images/brand.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page_wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.bgcolor,
  },
  main_logo: {
    width: 292,
    height: 310,
  },
  button_cover: {
    width: "100%",
    marginTop: 30,
    marginBottom: 24,
    paddingHorizontal: "36%",
  },
  button_login: {
    width: "100%",
    borderRadius: 6,
    backgroundColor: Colors.white,
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
    fontWeight: "600",
    color: Colors.black,
  },
  or_text: {
    marginBottom: 10,
  },
  or_txt: {
    fontSize: 16,
    fontWeight: "600",
  },
  signup_txt: {
    fontSize: 16,
    fontWeight: "600",
  },
  social_wrap: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  social_ic: {
    width: 45,
    height: 45,
  },
  social_txt: {
    marginHorizontal: 16,
    fontSize: 14,
    fontWeight: "600",
  },
  from_text: {
    marginTop: 30,
  },
  from_txt: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  brand_wrap: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  brand_ic: {
    width: 60,
    height: 60,
  },
});
