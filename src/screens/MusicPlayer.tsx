import {View, Text, StyleSheet, Dimensions, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import TrackPlayer, {
  Event,
  useTrackPlayerEvents,
  Track,
} from 'react-native-track-player';
import {playListData} from '../constants';
import SongInfo from '../components/SongInfo';
import ControlCenter from '../components/ControlCenter';
import SongSlider from '../components/SongSlider';
//getting the device width
const {width} = Dimensions.get('window');

const MusicPlayer = () => {
  const [track, setTrack] = useState<Track | null>();

  const renderArtWork = () => {
    return (
      <View style={styles.listArtWrapper}>
        <View style={styles.albumContainer}>
          {track?.artwork && (
            <Image
              style={styles.albumArtImage}
              source={{uri: track?.artwork?.toString()}}
            />
          )}
        </View>
      </View>
    );
  };

  // useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
  //   switch (event.type) {
  //       case Event.PlaybackActiveTrackChanged:
  //           const trackPlaying = await TrackPlayer.getActiveTrack()
  //           setTrack(trackPlaying)
  //           break;
  //   }
  // });

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    switch (event.type) {
        case Event.PlaybackTrackChanged:
            const playingTrack = await TrackPlayer.getTrack(event.nextTrack)
            setTrack(playingTrack)
            break;
    
    }
});


  return (
    <View style={styles.container}>
     <FlatList 
        horizontal
        data={playListData}
        renderItem={renderArtWork}
        keyExtractor={song=> song.id.toString()}
     />
     <SongInfo track={track}/>
     <SongSlider />
     <ControlCenter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001d23',
  },
  listArtWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumContainer: {
    width: 300,
    height: 300,
  },
  albumArtImage: {
    height: '100%',
    borderRadius: 8,
  },
});

export default MusicPlayer;
