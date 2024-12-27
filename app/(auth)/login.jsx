import { View, Image, StyleSheet,
  Button } from "react-native";
  import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link,router  } from "expo-router";
import { Input } from "../../components/input";
import { Colors } from "../../constants/colors";
import { FORGOT, DASHBOARD } from "../../constants/router";
import { C_LOGIN, C_FORGOT } from "../../constants/content";
import React, { useState } from "react";

import { useNavigate,Redirect  } from "react-router-dom";

import Axios from "axios";

export default function Login() {
  let valid = true;
  // const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [userInfo, setuserInfo] = useState({});

  const [errors, setErrors] = React.useState({})
  const [isVisibleButton, setIsVisibleButton] = React.useState(false)
  const signIn = async () => {
    if(email == ''){
      handleError("Please Enter Email", 'email')
      valid = false;
    }else if(password == ''){
      handleError("Please Enter password", 'password')
      valid = false;
    }else{
      Axios({
          method: 'post',
          // url: 'http://127.0.0.1:8000/api/?v1/user-login',
          url: 'https://dgificate.in/api/v1/user-login',
          headers: { 
            'Content-Type':  'application/json',
          },
          data: {
            email: email,
            password: password
          }
        }).then(async function (response) {
          if(response.status === 200){
            var TokenVal = response.data;
            try {
              // await AsyncStorage.setItem("usertoken", response.data);
              //window.localStorage.setItem("usertoken", response.data);
              await AsyncStorage.setItem('usertoken', response.data);
            } catch (error) {
              console.error("Error saving data", error);
            }            
            // window.localStorage.setItem("usertoken", JSON.stringify(response.data));
            // localStorage.setItem("usertoken", response.data);
            router.replace(DASHBOARD);
          }else{
            console.log("Invalid Token generation");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    if (valid) {
      setIsVisibleButton(true)
    } else {
      setIsVisibleButton(false)
    }

  }

  const handleError = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }))
  }
  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }))
  }

  return (
    <View style={styles.page_wrapper}>
      <Image
        style={styles.main_logo}
        source={require("../../assets/images/main_logo.png")}
      />
      <View style={styles.form_container}>
        <View style={styles.m_bottom}>
          <Input
            value={email}
            onChangeText={setEmail}
            error={errors.name}
            placeholder="Email ID"
            onFocus={() => {
              handleError(null, 'email')
          }}
          onChange ={(text) => {
              handleOnChange(text, 'email')
      
          }}
          />
        </View>
        <View style={styles.m_bottom}>
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            error={errors.name}
            secureTextEntry={true}
            onFocus={() => {
              handleError(null, 'password')
          }}
          onChange={(text) => {
              handleOnChange(text, 'password')
          }}
          />
        </View>
        <View style={styles.link_cover}>
          <View style={styles.link_wrapper}>
            <Link style={styles.link_text} href={FORGOT}>
              {C_FORGOT}
            </Link>
          </View>
        </View>
        <View style={styles.button_cover}>
          <View style={styles.button_wrapper}>
          <Button
              title={C_LOGIN}
              style={styles.button_link}
              onPress={signIn}
              disabledButton={!isVisibleButton}
            />
          </View>
        </View>
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
  form_container: {
    width: "78%",
    display: "flex",
    marginTop: 18,
    justifyContent: "center",
    alignContent: "center",
  },
  link_cover: {
    width: "100%",
    marginTop: 0,
  },
  link_wrapper: {
    width: "100%",
  },
  link_text: {
    textAlign: "left",
    fontWeight: "600",
    fontSize: 15,
    color: Colors.black,
  },
  button_cover: {
    width: "100%",
    marginTop: 18,
    marginBottom: 16,
    paddingHorizontal: "28%",
  },
  button_wrapper: {
    width: "100%",
    borderRadius: 6,
    backgroundColor: Colors.white,
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  button_text: {
    textAlign: "center",
    fontWeight: "600",
    height: 44,
    lineHeight: 44,
    fontSize: 18,
    color: Colors.black,
  },
  m_bottom: {
    marginBottom: 16,
  },
});
