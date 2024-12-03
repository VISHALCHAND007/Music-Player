import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useProgress } from 'react-native-track-player'
import Slider from '@react-native-community/slider'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'

const SongSlider = () => {
    const { position, duration } = useProgress()
    return (
        <View>
            <Slider
                value={position}
                minimumValue={0}
                maximumValue={duration}
                thumbTintColor='#ffffff'
                maximumTrackTintColor='#ffffff'
                style={symbolicateStackTrace.sliderContainer}
            />
            <View style={styles.timeContainer}>
                <Text style={styles.time}>{new Date(position * 1000).toISOString.subString(15, 19)}</Text>
                <Text style={styles.time}>{new Date((duration - position) * 1000).toISOString.subString(15, 19)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sliderContainer: {
        height: 40,
        width: 350,
        marginTop: 25,
        flexDirection: 'row'
    },
    timeContainer: {
        width: 340,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    time: {
        color: '#ffffff'
    }
})

export default SongSlider