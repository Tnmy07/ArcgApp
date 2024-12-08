import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { Colors } from "../../constants/colors";
import { Input } from "../../components/input";
import { MainLayout } from "../../components/mainlayout";

export default function Dedicatesendcertfunction() {
  const options = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  const [date, setDate] = useState(new Date());
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const [ringid, setRingid] = useState("");
  const [species, setSpecies] = useState("");
  const [mutation, setMutation] = useState("");
  const [gender, setGender] = useState("");
  const [pm, setPm] = useState("");
  const [pf, setPf] = useState("");

  return (
    <MainLayout>
      <View style={styles.page_wrapper}>
        <Image
          style={styles.main_logo}
          source={require("../../assets/images/sublogo.png")}
        />
        <View style={styles.form_page}>
          <View style={styles.m_bottom}>
            <View style={{ display: "flex", justifyContent: "flex-start" }}>
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={"date"}
                is24Hour={true}
                disabled={"default"}
                themeVariant={"light"}
                onChange={onChange}
                style={styles.drop_down_date}
              />
            </View>
          </View>
          <View style={styles.m_bottom}>
            <Input
              value={ringid}
              onChangeText={setRingid}
              placeholder="Ring ID"
            />
          </View>
          <View style={styles.m_bottom}>
            <Input
              value={species}
              onChangeText={setSpecies}
              placeholder="Species"
            />
          </View>
          <View style={styles.m_bottom}>
            <Input
              value={mutation}
              onChangeText={setMutation}
              placeholder="Mutation"
            />
          </View>
          <View style={styles.m_bottom}>
            <View style={styles.drop_down}>
              <RNPickerSelect
                placeholder={{
                  label: "Gender",
                  value: null,
                }}
                items={options}
                onValueChange={(value) => setGender(value)}
                value={gender}
                accentColor={"#ffffff"}
                style={{ flex: 1, justifyContent: "flex-start" }}
              />
            </View>
          </View>
          <View style={styles.link_cover}>
            <View style={styles.link_wrapper}>
              <Text style={styles.link_text}>Parental Lineage</Text>
            </View>
          </View>
          <View style={styles.m_bottom}>
            <Input
              value={pm}
              onChangeText={setPm}
              placeholder="Parental Male"
            />
          </View>
          <View style={styles.m_bottom}>
            <Input
              value={pf}
              onChangeText={setPf}
              placeholder="Parental Female"
            />
          </View>
          <View style={styles.button_cover}>
            <Pressable style={styles.button_text}>
              <Text style={styles.btn_text}>OK</Text>
            </Pressable>
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
  main_logo: {
    width: 300,
    height: 58,
    marginLeft: 40,
    marginTop: 30,
  },
  form_page: {
    display: "flex",
    marginTop: 30,
    flexDirection: "column",
    paddingHorizontal: 40,
  },
  m_bottom: {
    marginBottom: 16,
  },
  link_cover: {
    width: "100%",
    marginTop: 6,
    marginBottom: 10,
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
  drop_down: {
    width: "100%",
    backgroundColor: Colors.white,
    borderRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 11,
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    height: 40,
    fontSize: 15,
    color: Colors.black,
  },
  drop_down_date: {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    backgroundColor: Colors.white,
    borderRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 11,
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    height: 46,
    fontSize: 15,
    color: Colors.black,
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
});
