import { StyleSheet, Text, View } from 'react-native';
import React , {PropsWithChildren} from 'react';
import {Track} from 'react-native-track-player';

type SongInfoProp = PropsWithChildren< {
    track: Track | null | undefined
}>

const SongInfo = ({track}: SongInfoProp) =>  {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{track?.title}</Text>
        <Text style={styles.artist}>{track?.artist} . {track?.album}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%', 
    marginTop: 18, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'baseline'
  }, 
  name: {
    marginBottom: 10, 
    textAlign: 'center', 
    fontSize: 18, 
    fontWeight: '800',
    color: '#ffffff'
  }, 
  artist: {
    color: '#d9d9d9', 
    textAlign: 'center'
  }
})

export default SongInfo;