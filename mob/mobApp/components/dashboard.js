import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet } from 'react-native';

export default function Dashboard() {
  const dailyGoal = 2000; // Set your daily water consumption goal in milliliters
  const increment = 250; // Amount to add on each click

  const [consumedWater, setConsumedWater] = useState(0);
  const [message, setMessage] = useState(null);
  const [consumptionHistory, setConsumptionHistory] = useState([]); // Array to store consumption records
  const [meterFill, setMeterFill] = useState(0); // Fill percentage of the circular meter

  const addWater = () => {
    const newConsumedWater = consumedWater + increment;

    // Calculate meter fill percentage based on the consumption percentage
    const newMeterFill = Math.min((newConsumedWater / dailyGoal) * 100, 100);
    setMeterFill(newMeterFill);

    // Add the consumption record to the history
    const timestamp = new Date().toLocaleTimeString();
    const record = `${timestamp}: +${increment}ml`;
    consumptionHistory.unshift(record); // Add the new record at the beginning of the array

    // Show the message
    setMessage('Good Job +250ml');

    // Hide the message after 0.5 seconds
    setTimeout(() => {
      setMessage(null);
    }, 500);

    setConsumedWater(newConsumedWater);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('/Users/Sanchez/Desktop/superlight.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.appContainer}>
          <Text style={styles.header}>Water Consumption Dashboard</Text>
          <View style={styles.meterContainer}>
            <View style={styles.meter}>
              <View style={[styles.fill, { height: `${meterFill}%` }]} />
            </View>
          </View>
          <Text style={styles.consumedText}>{consumedWater} ml</Text>
          <Text style={styles.goalText}>Goal: {dailyGoal} ml</Text>
          <TouchableOpacity onPress={addWater}>
            <Image source={require('/Users/Sanchez/Desktop/bottle.png')} style={styles.touchableWaterBottle} />
          </TouchableOpacity>
          {message && <Text style={styles.messageText}>{message}</Text>}

          <ScrollView style={styles.historyContainer}>
            {consumptionHistory.map((record, index) => (
              <View key={index} style={styles.historyRecord}>
                <Text style={styles.historyText}>{record}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
  },
  meterContainer: {
    height: 300,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  meter: {
    width: 200,
    height: 200,
    backgroundColor: 'lightgray', // Meter background color
    borderRadius: 100, // Make it a circle
    overflow: 'hidden', // Hide overflow for the fill
  },
  fill: {
    width: '100%',
    backgroundColor: 'blue', // Color of the fill
    position: 'absolute',
    bottom: 0, // Fill from the bottom
  },
  consumedText: {
    fontSize: 18,
    marginTop: 10,
  },
  goalText: {
    fontSize: 16,
    marginTop: 10,
  },
  touchableWaterBottle: {
    width: 80,
    height: 160,
    marginTop: 20,
  },
  messageText: {
    fontSize: 18,
    color: 'green',
    marginTop: 10,
  },
  historyContainer: {
    maxHeight: 200,
    width: 230,
    marginTop: 20,
    borderWidth: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Aesthetic background color with transparency
    borderRadius: 10,
  },
  historyRecord: {
    marginBottom: 10,
  },
  historyText: {
    fontSize: 16,
  },
});
