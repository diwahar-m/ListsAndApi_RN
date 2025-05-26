import React from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {useTheme} from '../context/ThemeContext';

const ThemeDemoScreen = () => {
  const {theme, toggleTheme} = useTheme();

  const isDarkTheme = theme === 'dark';

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: !isDarkTheme ? '#fff' : '#000'},
      ]}>
      <Text style={[styles.headerText, {color: isDarkTheme ? '#fff' : '#000'}]}>
        Theme Demo Screen
      </Text>
      <Switch
        trackColor={{false: '#767577', true: '#767577'}}
        thumbColor={isDarkTheme ? '#f4f3f4' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleTheme}
        value={isDarkTheme}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
export default ThemeDemoScreen;
