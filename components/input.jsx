import { View, TextInput, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";
import React from "react";

export const Input = ({
  value,
  editable = true,
  autoCorrect = false,
  autoCapitalize = "none",
  secureTextEntry = false,
  onChangeText,
  placeholder,
  fromSection,
}) => {
  return (
    <View style={styles.input_wrapper}>
      <View style={styles.input_cover}>
        <TextInput
          value={value}
          editable={editable}
          autoCorrect={autoCorrect}
          autoCapitalize={autoCapitalize}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          style={
            fromSection === "header"
              ? styles.input_header_field
              : styles.input_field
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input_wrapper: {
    width: "100%",
  },
  input_cover: {
    width: "100%",
    backgroundColor: Colors.white,
    borderRadius: 4,
    paddingHorizontal: 14,
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  input_field: {
    height: 46,
    lineHeight: 20,
    fontSize: 15,
    color: Colors.black,
  },
  input_header_field: {
    height: 38,
    lineHeight: 20,
    fontSize: 15,
    color: Colors.black,
  },
});
