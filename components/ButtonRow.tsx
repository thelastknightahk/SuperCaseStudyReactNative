import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ButtonRow = ({
  sortByName,
  showLowest,
  setSortByName,
  setShowLowest,
  resetFuzzySearch,
}: {
  sortByName: boolean;
  showLowest: boolean;
  setSortByName: (value: boolean) => void;
  setShowLowest: (value: boolean) => void;
  resetFuzzySearch: () => void;
}) => {
  return (
    <View style={styles.container}>
      {/* Sort By Name Button */}
      <TouchableOpacity
        style={[styles.button, sortByName && styles.activeButton]}
        onPress={() => {
          setSortByName(!sortByName);
          setShowLowest(false);
          resetFuzzySearch();
        }}>
        <Text style={styles.buttonText}>
          {sortByName ? 'Sort by Rank' : 'Sort by Name'}
        </Text>
      </TouchableOpacity>
        <View style={{
          marginHorizontal:8
        }} />
      {/* Show Lowest Ranked Button */}
      <TouchableOpacity
        style={[styles.button, showLowest && styles.activeButton]}
        onPress={() => {
          setShowLowest(!showLowest);
          setSortByName(false);
          resetFuzzySearch();
        }}>
        <Text style={styles.buttonText}>
          {showLowest ? 'Show Top 10 Back' : 'Show Lowest Ranked'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:8,
    marginBottom: 16,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#b1b1b1',   
    alignItems: 'center',
    elevation: 3, // Adds shadow on Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  activeButton: {
    backgroundColor: '#7f79f1',
  },
});

export default ButtonRow;
