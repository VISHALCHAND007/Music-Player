import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

//importing the music player service methods
import {setUpPlayer, addTracks} from '../musicPlayerService';

function App(): React.JSX.Element {
  //defining the state to manage the setup
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setUp() {
    let isReady = await setUpPlayer();

    if (isReady) {
      await addTracks();
    }

    setIsPlayerReady(isReady);
  }

  useEffect(() => {
    setUp();
  }, []);

  //conditional rendering
  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator style={styles.progressBar} />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Music Player</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  progressBar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
