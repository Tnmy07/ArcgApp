import { View, StyleSheet } from "react-native";

export const SplashLayout = ({ children }) => {
  return <View style={styles.page_wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  page_wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
