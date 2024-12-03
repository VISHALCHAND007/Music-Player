import TrackPlayer, {Event, RepeatMode} from "react-native-track-player";
//importing playlist
import {playListData} from './src/constants';

export async function setUpPlayer() {
    let isSetupDone = false
    try {
        await TrackPlayer.getActiveTrack()
        isSetupDone = true
    } catch (error) {
        await TrackPlayer.setUpPlayer()
        isSetupDone = true
    } finally {
        return isSetupDone
    }
}

export async function addTracks() {
    await TrackPlayer.add(playListData)
    //setting the player to loop the playlist in queue
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}

export async function playBackService() {
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause()
    })

    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play()
    })

    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        TrackPlayer.skipToPrevious()
    })

    TrackPlayer.addEventListener(Event.RemoteNext, () => {
        TrackPlayer.skipToNext()
    })
}