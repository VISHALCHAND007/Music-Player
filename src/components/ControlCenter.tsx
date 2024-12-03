import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {playBackService} from '../../musicPlayerService';

const ControlCenter = () => {
  const playBackState = usePlaybackState();
  //functionality/actions
  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };

  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  const togglePlayback = async (playback: State | undefined) => {
    const currentTrack = await TrackPlayer.getActiveTrackIndex();

    if (currentTrack !== null && currentTrack !== undefined) {
      if (playback === State.Ready || playback === State.Paused) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={skipToPrevious}>
        <Icon size={50} name="skip-previous" style={styles.icon} />
      </Pressable>
      <Pressable onPress={() => togglePlayback(playBackState.state)}>
        <Icon
          name={playBackState.state === State.Playing ? 'pause' : 'play-arrow'}
          size={75}
          style={styles.icon}
        />
      </Pressable>
      <Pressable onPress={skipToNext}>
        <Icon size={50} name="skip-next" style={styles.icon} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    color: '#ffffff',
  },
});

export default ControlCenter;
