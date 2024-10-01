import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import styles from './style.module.scss';

const CustomAudioPlayer = ({ src }) => {
    return (
        <AudioPlayer
            autoPlay
            src={src}
            onPlay={e => console.log("onPlay")}
            className={styles.audioPlayer}
            // other props here
        />
    );
};

export default CustomAudioPlayer;
