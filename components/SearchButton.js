import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { COLORS } from "../constants";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={25} color={COLORS.gray} />
      <TextInput
        style={styles.input}
        placeholder="Search here..."
        value={searchText}
        onChangeText={setSearchText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 10,
    marginVertical: 8,
    gap: 10
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 10,
    color: COLORS.gray
  },
  input: {
    flex: 1,
    fontSize: 16
  }
});

export default SearchBar;
