import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import Logo from '../../../assets/images/logo.png';
import Menu from '../../../assets/images/menu.png';
import { RFValue } from "react-native-responsive-fontsize";

const screenWidth = Dimensions.get("window").width;

export default function Header({ title, navigation, img="false", icon='true' }) {

  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={openMenu} style={styles[`icon_${icon}`]}>
        <Image source={Menu} style={styles[`icon_${icon}`]} />
      </TouchableOpacity>
      <Text style={styles[`text_${icon}`]}> {title}</Text>
      <View>
        <Image source={Logo} style={styles[`img_${img}`]}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: screenWidth,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  icon_true: {
    position: 'absolute',
    left: 5,
    width: 20,
    height: 30,
  },
  icon_false: {
    position: 'absolute',
    left: 5,
    width: 0,
    height: 0,
  },
  text_true: { 
    fontSize: RFValue(24, 844),
    fontWeight: '600',
    letterSpacing: 0.85,
    left: -15,
    textAlign: 'center',
    color: 'white'
  },
  text_false: {
    fontFamily: 'Oswald-Bold',
    fontSize: RFValue(22, 844),
    letterSpacing: 0.75,
    left: -50,
    textAlign: 'center',

    color: '#023047'
  },
  img_true: {
    width: 120, 
    height: 30,
    left: -10,
  }, 
  img_false: {
    width: 0, 
    height: 0
  }
});
