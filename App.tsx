import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/screens/RootNavigator";
import { ThemeProvider } from "./src/context/ThemeContext";

function App(): React.JSX.Element {
  
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
