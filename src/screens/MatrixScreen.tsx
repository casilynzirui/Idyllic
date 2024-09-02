import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../components/ColorTemplate';
import MotivationalMessages from '../components/MotivationalMessage';

const MatrixScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.motivationalContainer}>
          <MotivationalMessages />
        </View>
        <View style={styles.imileyContainer}>
          <Image source={require('../assets/imiley_loading.png')} style={styles.imileyIcon} />
        </View>
      </View>
            
      <View style={styles.matrixContainer}>
      <View style={styles.matrixRow}>
        <TouchableOpacity style={styles.matrixSquare} onPress={() => navigation.navigate('DoIt')}/>
        <TouchableOpacity style={styles.matrixSquare} />
      </View>
      <View style={styles.matrixRow}>
        <TouchableOpacity style={styles.matrixSquare} />
        <TouchableOpacity style={styles.matrixSquare} />
      </View>

      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  headerContainer: {
    flexDirection: 'row', 
    bottom: 5,
  },
  motivationalContainer:{
    width: 263,
    height: 60,
    backgroundColor: colors.ascent,
    marginRight: 15,
    borderRadius: 20,
  },
  imileyContainer: {
    width: 60,
    height: 60,
    backgroundColor: colors.ascent,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imileyIcon: {
    width: 34,
    height: 11
  },
  matrixContainer: {
    width: 338,
    height: 580,
    borderRadius: 10,
    top: 15,
  },
  matrixRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  matrixSquare: {
    width: 159,
    height: 280,
    backgroundColor: colors.white,
    marginRight: 20,
    borderRadius: 10
  },
  text: {
    fontSize: 20,
  },
});

export default MatrixScreen;
