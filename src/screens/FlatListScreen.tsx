import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const FLAT_LIST = Array.from({length: 50}, (_, index) => ({
  id: index.toString(),
  title: `Item: ${index + 1}`,
}));

const FlatListScreen = () => {
  const handleRenderItem = ({item}: {item: {id: string; title: string}}) => {
    return (
      <View style={styles.item}>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Flat List Example</Text>
      <FlatList
        ListHeaderComponent={
          <Text style={styles.flatListHeader}>Flat List Header</Text>
        }
        ListFooterComponent={
          <Text style={styles.flatListFooter}>Flat List Footer</Text>
        }
        keyExtractor={item => item.id}
        data={FLAT_LIST}
        renderItem={handleRenderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  flatListHeader: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  flatListFooter: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default FlatListScreen;
