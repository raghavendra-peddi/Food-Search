import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ResultDetails = ({ result }) => {
  return <View style={styles.container}>
    <Image style={styles.image} source={{ uri: result.image_url }} />
    <Text style={styles.name}>{result.name}</Text>
    <Text>{result.rating} Stars, {result.review_count}</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    height: 160,
    width: 240,
    borderRadius: 4
  },
  name: {
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default ResultDetails