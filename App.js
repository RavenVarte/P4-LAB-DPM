// Import React and React Native components
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const FutsalScoreApp = () => {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  // Function to handle score updates
  const updateScore = (team, change) => {
    if (team === 'A') {
      const newScore = Math.max(0, teamAScore + change);
      setTeamAScore(newScore);
      if (newScore === 10) {
        Alert.alert('Winner!', 'Team A wins the match!');
      }
    } else if (team === 'B') {
      const newScore = Math.max(0, teamBScore + change);
      setTeamBScore(newScore);
      if (newScore === 10) {
        Alert.alert('Winner!', 'Team B wins the match!');
      }
    }
  };

  // Function to reset scores
  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
  };

  return (
    <View style={styles.container}>
      {/* Team A Section */}
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>Team A</Text>
        <Text style={styles.score}>{teamAScore}</Text>
        <View style={styles.buttonRow}>
          <Button title="+" onPress={() => updateScore('A', 1)} />
          <Button title="-" onPress={() => updateScore('A', -1)} />
        </View>
      </View>

      {/* Team B Section */}
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>Team B</Text>
        <Text style={styles.score}>{teamBScore}</Text>
        <View style={styles.buttonRow}>
          <Button title="+" onPress={() => updateScore('B', 1)} />
          <Button title="-" onPress={() => updateScore('B', -1)} />
        </View>
      </View>

      {/* Reset Button */}
      <Button title="Reset Match" onPress={resetScores} style={styles.resetButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  teamContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  teamName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  resetButton: {
    marginTop: 20,
  },
});

export default FutsalScoreApp;
