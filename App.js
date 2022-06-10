import { useCallback, useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import Home from './screens/Home'
import Details from './screens/Details'

export default function App() {
  // Create top-level navigation
  const Stack = createStackNavigator();
  // Set initial state
  const [resLoaded, setResLoaded] = useState(false);
  // Define custom navigator theme
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      // primary: '',
      background: 'transparent',
      // card: '',
      // text: '',
      // border: '',
      // notification: '',
    }
  }

  // Load resources whilst showing splash screen
  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts or make API calls
        await Font.loadAsync({
          "InterBold": require('./assets/fonts/Inter-Bold.ttf'),
          "InterSemiBold": require('./assets/fonts/Inter-SemiBold.ttf'),
          "InterMedium": require('./assets/fonts/Inter-Medium.ttf'),
          "InterRegular": require('./assets/fonts/Inter-Regular.ttf'),
          "InterLight": require('./assets/fonts/Inter-Light.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setResLoaded(true);
      }
    }

    prepare();
  }, []);
  // Hide splash screen after loading resources
  const onReady = useCallback(async () => {
    if (resLoaded) await SplashScreen.hideAsync();
  }, [resLoaded]);

  // return application if resources loaded
  if (!resLoaded) return null;
  return (
    <NavigationContainer theme={theme} onReady={onReady}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
