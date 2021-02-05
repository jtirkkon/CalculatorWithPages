import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function HistoryScreen({route}) {
  const {history} = route.params;
  //console.log(history)
  return (
    <View style={styles.container}>
      <Text style={{marginTop: 20}}>History</Text>
      <FlatList data={history} renderItem={({item}) => <Text>{item.text}</Text>} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

 