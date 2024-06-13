import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { useAssets } from 'expo-asset';
import { Image } from 'expo-image';
import { Text, StyleSheet, View, useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
  } from 'react-native-reanimated';
  import { View, Button, StyleSheet } from 'react-native';
  

function App() {
  return <Image source="example" />;
}


export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <Text>My App</Text>
      </View>
    </SafeAreaProvider>
  );
}
// Rest of the import statements
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  });
  <Image source={require('./assets/images/example.png')} />


function App() {
  return <Image source="example" />;
}
    export default function App() {
    const [assets, error] = useAssets([
      require('path/to/example-1.jpg'),
      require('path/to/example-2.png'),
    ]);
  
    return assets ? <Image source={assets[0]} /> : null;
  }
}
function App() {
    return (
      <Image source={{ uri: 'https://example.com/logo.png' }} style={{ width: 50, height: 50 }} />
    );
  }
  function MyComponent() {
    let colorScheme = useColorScheme();
  
    if (colorScheme === 'dark') {
      // render some dark thing
    } else {
      // render some light thing
    }
  }
  
  export default function App() {
    const colorScheme = useColorScheme();
  
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle =
      colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
  
    return (
      <View style={[styles.container, themeContainerStyle]}>
        <Text style={[styles.text, themeTextStyle]}>Color scheme: {colorScheme}</Text>
        <StatusBar />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 20,
    },
    lightContainer: {
      backgroundColor: '#d0d0c0',
    },
    darkContainer: {
      backgroundColor: '#242c40',
    },
    lightThemeText: {
      color: '#242c40',
    },
    darkThemeText: {
      color: '#d0d0c0',
    },
  });
  export default function AnimatedStyleUpdateExample() {
    const randomWidth = useSharedValue(10);
  
    const config = {
      duration: 500,
      easing: Easing.bezier(0.5, 0.01, 0, 1),
    };
  
    const style = useAnimatedStyle(() => {
      return {
        width: withTiming(randomWidth.value, config),
      };
    });
  
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, style]} />
        <Button
          title="toggle"
          onPress={() => {
            randomWidth.value = Math.random() * 350;
          }}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      width: 100,
      height: 80,
      backgroundColor: 'black',
      margin: 30,
    },
  });
  