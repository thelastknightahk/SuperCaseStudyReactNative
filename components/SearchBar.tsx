import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import images from '../utils/constants/assets';
 

const SearchBar = ({
  searchText,
  setSearchText,
  handleSearch,
  resetUserList,
}: {
  searchText: string;
  setSearchText: (text: string) => void;
  handleSearch: (sanitizedText: string) => void;
  resetUserList: () => void;
}) =>  {
  const sanitizeText = (text: string) => text.trim();
  return <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter user name"
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={() => {
          const sanitizedText = sanitizeText(searchText); // Sanitize text
          handleSearch(sanitizedText); // Trigger search with sanitized text
          Keyboard.dismiss(); // Dismiss the keyboard
        }}
        returnKeyType="search"
      />

      {searchText.length > 0 && (
        <TouchableOpacity
          style={styles.clearIconContainer}
          onPress={() => {
            setSearchText(''); // Clear the input
            resetUserList();
            Keyboard.dismiss();
          }}>
          <Image source={images.close} style={styles.clearIcon} />
        </TouchableOpacity>
      )}
    </View>

    <TouchableOpacity
      style={styles.iconContainer}
      onPress={() => {
        if (searchText.length > 0) {
          const sanitizedText = sanitizeText(searchText); // Sanitize text
            handleSearch(sanitizedText); // Trigger search with sanitized text
        }
        Keyboard.dismiss();
      }}>
      <Image source={images.search} style={styles.icon} />
    </TouchableOpacity>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 16,
  },

  icon: {
    width: 30,
    height: 30,
  },
  iconContainer: {
    alignSelf: 'center',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 2,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginRight: 8,
  },
  input: {
    flex: 1, // Allow the input to take available horizontal space
    paddingVertical: 8, // Adjust padding as needed 
    fontFamily: 'PlusJakartaSans-Bold'
  },
  clearIconContainer: {
    marginLeft: 8, // Add spacing between the text and clear icon
  },
  clearIcon: {
    width: 18,
    height: 18,
    tintColor: '#888',
  },
});

export default SearchBar;
