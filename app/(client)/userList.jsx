import React, { useState } from "react";
import Checkbox from 'expo-checkbox';
import { View, StyleSheet, Text, Image, Pressable,FlatList } from "react-native";
import { Colors } from "../../constants/colors";
import { MainLayout } from "../../components/mainlayout";
import { UserInfo } from "../../components/userinfo";





export default function UserList() {
  const [isChecked, setChecked] = useState(false);
  const [useTabName, setUseTabName] = useState("gender");
  const tabHandleClick = (tabName) => setUseTabName(tabName);

// Sample data
const profiles = [
  { id: '1', name: 'John Doe', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: '2', name: 'Jane Smith', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { id: '3', name: 'Alice Johnson', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
  { id: '4', name: 'Michael Brown', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
  { id: '5', name: 'Emily Davis', avatar: 'https://randomuser.me/api/portraits/women/5.jpg' },
  { id: '6', name: 'David Wilson', avatar: 'https://randomuser.me/api/portraits/men/6.jpg' },
  { id: '7', name: 'Sarah Moore', avatar: 'https://randomuser.me/api/portraits/women/7.jpg' },
  { id: '8', name: 'Chris Taylor', avatar: 'https://randomuser.me/api/portraits/men/8.jpg' },
  { id: '9', name: 'Anna Anderson', avatar: 'https://randomuser.me/api/portraits/women/9.jpg' },
  { id: '10', name: 'James Thomas', avatar: 'https://randomuser.me/api/portraits/men/10.jpg' },

];
  // List item component
  const ProfileItem = ({ name, avatar }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );

  const renderItem = ({ item }) => <ProfileItem name={item.name} avatar={item.avatar} />;

  return (
    <MainLayout>
      <View style={styles.page_wrapper}>
        <View style={styles.row_style_tab_wrapper}>
          <FlatList
          data={profiles}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />       
         
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
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
  },
});
