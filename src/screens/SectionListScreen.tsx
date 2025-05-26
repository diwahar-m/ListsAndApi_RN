import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

const SECTION_DATA = [
  {
    title: 'Men',
    data: ['Normal', 'VIP', 'VVIP'],
  },
  {
    title: 'Women',
    data: ['Normal', 'VIP', 'VVIP'],
  },
  {
    title: 'Kids',
    data: ['Normal', 'VIP', 'VVIP'],
  },
  {
    title: 'Senior Citizens',
    data: ['Normal', 'VIP', 'VVIP'],
  },
];

const SectionListScreen: React.FC = () => {
  const handleRenderItem = ({item}: {item: string}) => (
    <View style={styles.item}>
      <Text>{item}</Text>
    </View>
  );

  const handleSectionHeader = ({
    section: {title},
  }: {
    section: {title: string; data: string};
  }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Section List</Text>
      <SectionList
        sections={SECTION_DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={handleRenderItem}
        renderSectionHeader={handleSectionHeader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  sectionHeader: {
    backgroundColor: '#f0f0f0',
    padding: 5,
  },
  sectionHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SectionListScreen;
