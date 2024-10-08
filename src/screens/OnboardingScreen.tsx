import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, Alert, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../components/ColorTemplate';

const OnboardingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const [onboardingProgress, setOnboardingProgress] = useState(1);
    const [idyllicUsername, setIdyllicUsername] = useState('');
    const [isPressed, setIsPressed] = useState(false);

    const handleNext = async () => {
        setIsPressed(!isPressed);

        if (onboardingProgress === 5) {
            if (idyllicUsername.trim() === '') {
                Alert.alert('Error', 'Name cannot be empty.');
                return;
            }
            try {
                await AsyncStorage.setItem('IdyllicUsername', idyllicUsername);
                onComplete();
            } catch (error) {
                console.error(error);
            }
        } else {
            setOnboardingProgress(onboardingProgress + 1);
        }
    };

    const handleContinue = () => {
        setIsPressed(!isPressed);
        if (idyllicUsername.trim() === '') {
            Alert.alert('Error', 'Name cannot be empty.');
            return;
        } else {
            setOnboardingProgress(4);
        }
    }

    const handleBack = () => {
        setIsPressed(!isPressed);
        setOnboardingProgress(3);
        setIdyllicUsername('');
    }

    return (
        <View style={styles.container}>
        {onboardingProgress === 1 && (
            <View style={styles.onboardingContainer}>
                <View style={styles.speechBubble}>
                    <Text style={styles.speechText}> Hi! I'm Imiley.{'\n'} Welcome to Idyllic!</Text>
                    <View style={styles.pointyAngle} />
                </View>
                <View style={styles.imileyContainer}>
                    <Image source={require('../assets/imiley_loading.png')} style={styles.imileyIcon} />
                </View>
                <TouchableHighlight
                    style={styles.nextButton}
                    onPress={handleNext}
                    onPressIn={() => setIsPressed(true)} 
                    onPressOut={() => setIsPressed(false)} 
                    underlayColor={colors.alternate} 
                >
                    <Text style={isPressed ? styles.buttonTextAlternate : styles.buttonText}>Next</Text>
                </TouchableHighlight>
            </View>
        )}
        {onboardingProgress === 2 && (
            <View style={styles.onboardingContainer}>
            <View style={styles.speechBubble}>
                <Text style={styles.speechText}> I'm glad to see you{'\n'} here.</Text>
                <View style={styles.pointyAngle} />
            </View>
            <View style={styles.imileyContainer}>
                <Image source={require('../assets/imiley_loading.png')} style={styles.imileyIcon} />
            </View>
            <TouchableHighlight
                style={styles.nextButton}
                onPress={handleNext}
                onPressIn={() => setIsPressed(true)} 
                onPressOut={() => setIsPressed(false)} 
                underlayColor={colors.alternate}
            >
                <Text style={isPressed ? styles.buttonTextAlternate : styles.buttonText}>Next</Text>
            </TouchableHighlight>
            </View>
        )}
        {onboardingProgress === 3 && (
            <View style={styles.onboardingContainer}>
                <View style={styles.speechBubble2}>
                    <Text style={styles.speechText}> What is your name?</Text>
                    <View style={styles.pointyAngle2} />
                </View>
                <View style={styles.imileyContainer2}>
                    <Image source={require('../assets/imiley_loading.png')} style={styles.imileyIcon} />
                </View>
                <View style={styles.speechBubble3}>
                <Text style={styles.speechText4}> My name is</Text>
                <TextInput
                    style={styles.speechText2}
                    placeholder=" _________________"
                    placeholderTextColor={colors.textSecondary}
                    value={idyllicUsername}
                    onChangeText={setIdyllicUsername}
                />
                </View>
                <TouchableHighlight
                    style={styles.continueButton}
                    onPress={handleContinue}
                    onPressIn={() => setIsPressed(true)} 
                    onPressOut={() => setIsPressed(false)} 
                    underlayColor={colors.alternate} 
                >
                    <Text style={isPressed ? styles.buttonTextAlternate : styles.buttonText}>Continue</Text>
                </TouchableHighlight>
            </View>
        )}
        {onboardingProgress === 4 && (
            <View style={styles.onboardingContainer}>
                <View style={styles.speechBubble}>
                    <Text style={styles.speechText}> Is your name{'\n'}                    
                        <Text style={styles.speechText3}> {idyllicUsername}</Text> ?
                    </Text>
                    <View style={styles.pointyAngle} />
                </View>
                <View style={styles.imileyContainer}>
                    <Image source={require('../assets/imiley_loading.png')} style={styles.imileyIcon} />
                </View>
                <View style={styles.buttonContainer}>
                <TouchableHighlight
                    style={styles.yesnoButton}
                    onPress={handleNext}
                    onPressIn={() => setIsPressed(true)} 
                    onPressOut={() => setIsPressed(false)} 
                    underlayColor={colors.alternate} 
                >
                    <Text style={isPressed ? styles.buttonTextAlternate : styles.buttonText}>Yes</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.yesnoButton}
                    onPress={handleBack}
                    onPressIn={() => setIsPressed(true)} 
                    onPressOut={() => setIsPressed(false)} 
                    underlayColor={colors.alternate}  
                >
                    <Text style={isPressed ? styles.buttonTextAlternate : styles.buttonText}>No</Text>
                </TouchableHighlight>
                </View>
            </View>
        )}
        {onboardingProgress === 5 && (
            <View style={styles.onboardingContainer}>
                <View style={styles.speechBubble}>
                    <Text style={styles.speechText}> Great!{'\n'} Let's get started!</Text>
                    <View style={styles.pointyAngle} />
                </View>
                <View style={styles.imileyContainer}>
                    <Image source={require('../assets/imiley_loading.png')} style={styles.imileyIcon} />
                </View>
                <TouchableHighlight
                    style={styles.nextButton}
                    onPress={handleNext}
                    onPressIn={() => setIsPressed(true)} 
                    onPressOut={() => setIsPressed(false)} 
                    underlayColor={colors.alternate}
                >
                    <Text style={isPressed ? styles.buttonTextAlternate : styles.buttonText}>Start</Text>
                </TouchableHighlight>
            </View>
        )}
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
onboardingContainer: {
    width: 338,
    height: 570,
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
},
speechBubble: {
    width: 200,
    height: 120,
    backgroundColor: colors.ascent,
    borderRadius: 20,
    justifyContent: 'center',
    padding: 10,
    top: -80,
    right: 20
},
speechText: {
    fontSize: 18,
    color: colors.textPrimary,
    lineHeight: 25,
    bottom: -10
},
speechText4: {
    fontSize: 18,
    color: colors.textPrimary,
    lineHeight: 25,
    top: -2.5
},
pointyAngle: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 20,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: colors.ascent,
    transform: [{ rotate: '40deg' }],
    bottom: -35,
    right: -150
},
speechBubble2: {
    width: 200,
    height: 100,
    backgroundColor: colors.ascent,
    borderRadius: 20,
    justifyContent: 'center',
    padding: 10,
    top: -60,
    right: 25
},
pointyAngle2: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 20,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: colors.ascent,
    transform: [{ rotate: '40deg' }],
    bottom: -35,
    right: -150
},
speechBubble3: {
    width: 200,
    height: 120,
    backgroundColor: colors.ascent,
    borderRadius: 20,
    justifyContent: 'center',
    padding: 10,
    right: -25
},
speechText2: {
    fontSize: 18,
    color: colors.textSecondary,
    lineHeight: 25,
    right: -5,
    bottom: -2.5
},
pointyAngle3: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 20,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: colors.ascent,
    transform: [{ rotate: '85deg' }],
    bottom: -40,
    left: 10
},
imileyContainer: {
    width: 60,
    height: 60,
    backgroundColor: colors.ascent,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    top: -60,
    right: -90
},
imileyContainer2: {
    width: 60,
    height: 60,
    backgroundColor: colors.ascent,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    top: -45,
    right: -95
},
speechText3: {
    fontSize: 18,
    color: colors.textSecondary,
    lineHeight: 25,
    bottom: 10,
    fontWeight: 'bold'
},
imileyIcon: {
    width: 34,
    height: 11
},
nextButton: {
    width: 250,
    height: 50,
    backgroundColor: colors.ascent,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -80
},
buttonText: {
    fontSize: 18,
    color: colors.textPrimary,
},
buttonTextAlternate: {
    fontSize: 18,
    color: colors.textAlternate,
},
continueButton: {
    width: 250,
    height: 50,
    backgroundColor: colors.ascent,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -60
},
buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
},
yesnoButton: {
    width: 120,
    height: 50,
    backgroundColor: colors.ascent,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -80,
    marginHorizontal: 10
},
});

export default OnboardingScreen;