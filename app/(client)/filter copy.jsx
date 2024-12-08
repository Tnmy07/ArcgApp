import React, { useState } from "react";
import Checkbox from 'expo-checkbox';
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { Colors } from "../../constants/colors";
import { MainLayout } from "../../components/mainlayout";
import { UserInfo } from "../../components/userinfo";

const MyCheckbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={() => setChecked(!checked)}>
      {checked && <Text>_</Text>}
    </Pressable>
  );
}

export default function RecentActivity() {
  const [isChecked, setChecked] = useState(false);
  const [useTabName, setUseTabName] = useState("gender");
  const tabHandleClick = (tabName) => setUseTabName(tabName);

  return (
    <MainLayout>
      <View style={styles.page_wrapper}>
        <UserInfo />
        <View style={styles.row_style_tab_wrapper}>
          <View style={styles.row_style_tab}>
            <Image
              style={styles.cert_icon}
              source={require("../../assets/images/arrow.png")}
            />
            <Text style={styles.page_heading}>Filters</Text>
          </View>
          <View style={styles.tab_content}>
            <View style={styles.mian_content_sec}>
              <View style={styles.in_sidebar}>
                <Pressable onPress={() => tabHandleClick("gender")} style={useTabName === "gender" ? styles.tab_side_pressable : styles.noactive_tab}>
                  <Text style={useTabName === "gender" ? styles.tab_text : styles.actv_tab_text}>
                    Gender
                  </Text>
                </Pressable>
              </View>
              <View style={styles.in_content}>
                <View style={styles.in_checkbox}>
                  <MyCheckbox />
                  <Text style={styles.paragraph}>Male</Text>
                </View>
                <View style={styles.in_checkbox}>
                  <MyCheckbox />
                  <Text style={styles.paragraph}>Female</Text>
                </View>
              </View>
            </View>
            <View style={styles.mian_content_sec}>
              <View style={styles.in_sidebar}>
                <Pressable onPress={() => tabHandleClick("category")} style={useTabName === "category" ? styles.tab_side_pressable : styles.noactive_tab}>
                  <Text style={useTabName === "category" ? styles.tab_text : styles.actv_tab_text}>
                    Category
                  </Text>
                </Pressable>
              </View>
              <View style={styles.in_content}>
                <View style={styles.in_checkbox}>
                  <MyCheckbox />
                  <Text style={styles.paragraph}>Lovebird</Text>
                </View>
                <View style={styles.in_checkbox}>
                  <MyCheckbox />
                  <Text style={styles.paragraph}>Finch</Text>
                </View>
                <View style={styles.in_checkbox}>
                  <MyCheckbox />
                  <Text style={styles.paragraph}>Conures</Text>
                </View>
                <View style={styles.in_checkbox}>
                  <MyCheckbox />
                  <Text style={styles.paragraph}>Amazon Parrots</Text>
                </View>
                <View style={styles.in_checkbox}>
                  <MyCheckbox />
                  <Text style={styles.paragraph}>Lory</Text>
                </View>
                <View style={styles.in_checkbox}>
                  <MyCheckbox />
                  <Text style={styles.paragraph}>Rosella</Text>
                </View>
                <View style={styles.in_checkbox}>
                  <MyCheckbox />
                  <Text style={styles.paragraph}>Macaw</Text>
                </View>
                <View style={styles.in_checkbox}>
                  <MyCheckbox />
                  <Text style={styles.paragraph}>Cockatoo</Text>
                </View>
              </View>
            </View>
            <View style={styles.mian_content_sec}>
              <View style={styles.in_sidebar}>
                <Pressable onPress={() => tabHandleClick("card_status")} style={useTabName === "card_status" ? styles.tab_side_pressable : styles.noactive_tab}>
                  <Text style={useTabName === "card_status" ? styles.tab_text : styles.actv_tab_text}>
                    Card Status
                  </Text>
                </Pressable>
              </View>
              <View style={styles.in_content}>
                <View style={styles.in_checkbox}>
                  <MyCheckbox />
                  <Text style={styles.paragraph}>Active</Text>
                </View>
                <View style={styles.in_checkbox}>
                  <MyCheckbox />
                  <Text style={styles.paragraph}>Inactive</Text>
                </View>
              </View>
            </View>
            <View style={styles.sidebar_style}></View>
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
    alignItems: 'center',
    backgroundColor: Colors.tabBg,
    justifyContent: "space-between",
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  page_heading: {
    width: "100%",
    fontSize: 15,
    fontWeight: 'bold',
  },
  tab_text: {
    paddingVertical: 14,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: "center",
    color: Colors.black,
  },
  actv_tab_text: {
    paddingVertical: 14,
    fontSize: 14,
    textAlign: "center",
    color: Colors.black,
  },
  tab_content: {
    display: "flex",
    position: 'relative',
    height: 570,
    backgroundColor: Colors.white,
  },
  tab_side_pressable: {
    backgroundColor: Colors.white,
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
  cert_icon: {
    width: 25,
    height: 25,
    marginRight: 16,
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
  mian_content_sec: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  in_sidebar: {
    width: 120,
    backgroundColor: Colors.btnCol,
  },
  sidebar_style: {
    position: 'absolute',
    height: 570,
    width: 120,
    backgroundColor: Colors.btnCol,
    zIndex: -1,
  },
  in_content: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  in_checkbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  paragraph: {
    fontSize: 14,
    fontWeight: 400,
  },
  checkboxBase: {
    width: 16,
    height: 16,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.tabBg,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  checkboxChecked: {
    backgroundColor: Colors.black,
  },
});
