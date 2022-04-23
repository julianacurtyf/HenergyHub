import React, { useState } from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export default function RadioButton({ data, onSelect }) {

  const [userOption, setUserOption] = useState(null);

  return (
    <View style={styles.row}>
      {
        data.map((item) => {
          return (
            <View key={item.key}>
              <Pressable
                style={
                  item.value === userOption ? styles.selected : styles.unselected
                }
                onPress={() => setUserOption(item.value)}
              >
                <Text style={
                  item.value === userOption ? styles.selectedText : styles.unselectedText
                } > {item.value}</Text>
              </Pressable>
            </View>
          );
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  selectedText: {
    fontSize: RFValue(19, 844),
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
  unselectedText: {
    fontSize: RFValue(19, 844),
    color: '#270949',
    textAlign: 'center'
  },
  unselected: {
    backgroundColor: 'white',
    margin: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: '#270949',
    borderRadius: 7,
    width: 125,
    height: 45
  },
  selected: {
    backgroundColor: '#270949',
    margin: 10,
    padding: 12,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#270949',
    width: 125,
    height: 45
  },
});