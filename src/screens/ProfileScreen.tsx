import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../components/Colors';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background 
  },
  text: {
    fontSize: 20,
  },
});

export default ProfileScreen;