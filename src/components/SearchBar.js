import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return <View style={styles.searchBar}>
    <FontAwesome name="search" style={styles.iconStyle} />
    <TextInput
      value={term}
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit}
      placeholder="Search"
      style={styles.inputStyle} />
  </View>
}

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    marginHorizontal: 15,
    marginBottom: 10,
    flexDirection: 'row'
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 15
  }
});

export default SearchBar;