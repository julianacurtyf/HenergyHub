import React from 'react';
import { Text, StyleSheet, Pressable, Alert } from 'react-native';

const AlertButton = (title, message) =>
    Alert.alert(
        title,
        message,
      [
        {
          text: "Cancel"
        },
        { text: "OK" }
      ]
    );

export default AlertButton;