import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Home';
import FlatListScreen from './FlatListScreen';
import SectionListScreen from './SectionListScreen';
import TouchableScreen from './TouchableScreen';
import ModalScreen from './ModalScreen';
import PullToRefreshScreen from './PullToRefresh';
import DataFetchingScreen from './DataFetching';
import AxiosDemoScreen from './Axios';
import ThemeDemoScreen from './ThemeScreen';
import React from 'react';

export type RootStackListProp = {
  Home: undefined;
  FlatListDemo: undefined;
  SectionListDemo: undefined;
  TouchableDemo: undefined;
  ModalDemo: undefined;
  PullToRefreshDemo: undefined;
  DataFetchingDemo: undefined;
  AxiosDemo: undefined;
  ThemeDemo: undefined;
};

const Stack = createStackNavigator<RootStackListProp>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="FlatListDemo" component={FlatListScreen} />
      <Stack.Screen name="SectionListDemo" component={SectionListScreen} />
      <Stack.Screen name="TouchableDemo" component={TouchableScreen} />
      <Stack.Screen name="ModalDemo" component={ModalScreen} />
      <Stack.Screen name="PullToRefreshDemo" component={PullToRefreshScreen} />
      <Stack.Screen name="DataFetchingDemo" component={DataFetchingScreen} />
      <Stack.Screen name="AxiosDemo" component={AxiosDemoScreen} />
      <Stack.Screen name="ThemeDemo" component={ThemeDemoScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
