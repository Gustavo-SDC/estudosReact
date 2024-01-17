import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import Header from '../../components/Header';

export default function App() {
  return (
    <View style={styles.container}>
        <Header/>
        <Text>Open ups App.js to start working on your app!</Text>


        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
