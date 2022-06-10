import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import Home from './screens/Home'
import Details from './screens/Details'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback, useEffect, useState } from 'react'
import * as Font from 'expo-font'

export default function App() {
  const Stack = createStackNavigator()
  const [fontsLoaded, setFontsLoaded] = useState(false)

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

  // const [loaded] = useFonts({
  //   InterBold: require('./assets/fonts/Inter-Bold.ttf'),
  //   InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
  //   InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
  //   InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
  //   InterLight: require('./assets/fonts/Inter-Light.ttf'),
  // })
  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          "InterBold": require('./assets/fonts/Inter-Bold.ttf'),
          "InterSemiBold": require('./assets/fonts/Inter-SemiBold.ttf'),
          "InterMedium": require('./assets/fonts/Inter-Medium.ttf'),
          "InterRegular": require('./assets/fonts/Inter-Regular.ttf'),
          "InterLight": require('./assets/fonts/Inter-Light.ttf'),
        })
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setFontsLoaded(true);
      }
    }

    prepare();
  }, []);


  const ready = useCallback(async () => {
    if (fontsLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer theme={theme} onReady={ready}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
