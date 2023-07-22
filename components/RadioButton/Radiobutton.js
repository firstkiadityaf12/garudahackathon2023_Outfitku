import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants";
import React, { useState } from "react";

export default function RadioButton({ isChecked, text, onRadioButtonPress }) {
  const _renderCheckedView = () => {
    return isChecked ? (
      <View style={[styles.radioButtonIconInnerIcon]} />
    ) : null;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onRadioButtonPress}>
      {/* text */}
      <View style={[styles.radioButtonTextContainer]}>
        <Text style={styles.radioButtonText}>{text}</Text>
      </View>
      {/* radio button */}
      <View style={[styles.radioButton]}>{_renderCheckedView()}</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginButtom: 10,
    marginLeft: 10,
    marginRight: 10,
    width: 300,
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.gray,
    flexDirection: "row",
    alignItems: "center"
  },
  radioButtonTextContainer: {
    flex: 5,
    height: 50,
    justifyContent: "center",
    paddingLeft: 10
  },
  radioButtonText: {
    fontSize: 12
  },
  radioButton: {
    backgroundColor: COLORS.white,
    borderWidth: 3,
    borderColor: COLORS.primary,
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  radioButtonIconInnerIcon: {
    height: 25,
    width: 25,
    backgroundColor: COLORS.primary,
    borderRadius: 25 / 2,
    borderWidth: 3,
    borderColor: COLORS.white
  }
});
