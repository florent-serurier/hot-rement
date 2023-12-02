import { useRef } from 'react';

export function useAudio(src:string) {
    const audio = useRef(new Audio(src));
    
    const playAudio = () => {
        if(audio.current) {
            audio.current.currentTime = 0;
            audio.current.play();
        }
    };

    return {
        audio,
        playAudio
    };
}