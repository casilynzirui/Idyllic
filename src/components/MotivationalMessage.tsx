import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from './Colors';

const allMessages = [
  "Believe in yourself!",
  "Stay positive, work hard, make it happen.",
  "Don't watch the clock; do what it does. Keep going.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Dream it. Believe it. Build it.",
  "Success is the sum of small efforts. You can do it!",
  "The best way of getting ahead is getting started.",
  "You are capable of amazing things!",
  "When it comes to luck, you make your own.",
  "It takes courage to grow up and become who you really are.",
  "ll our dreams can come true, if we have the courage to pursue them.",
  "Don't sit down and wait for the opportunities to come. Get up and make them.",
  

];

const getRandomMessage = () => {
  const randomIndex = Math.floor(Math.random() * allMessages.length);
  return allMessages[randomIndex];
};

const MotivationalMessages: React.FC = () => {
    /*
    const [currentMessage, setCurrentMessage] = useState<string>(allMessages[0]);

    
    useEffect(() => {
      const messageInterval = setInterval(() => {
        setCurrentMessage((previousMessage) => {
          const currentIndex = allMessages.indexOf(previousMessage);
          const nextIndex = (currentIndex + 1) % allMessages.length;
          return allMessages[nextIndex];
        });
      }, 15000); // Change quote every 5 seconds
  
      return () => clearInterval(messageInterval); // Cleanup interval on component unmount
    }, []);
    */

    const [currentMessage, setCurrentMessage] = useState<string>(getRandomMessage());

    useEffect(() => {
      const changeMessage = () => {
        setCurrentMessage(getRandomMessage());
      };

      const intervalId = setInterval(changeMessage, 15000); // Change quote every 5 seconds
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{currentMessage}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  messageContainer: {
    width: 258,
    height: 80,
    borderRadius: 20,
  },
  messageText: {
    fontSize: 13,
    color: colors.textPrimary,
    padding: 8,
    lineHeight: 18,
    left: 3,
    top: 3
  },
});
  
export default MotivationalMessages;
