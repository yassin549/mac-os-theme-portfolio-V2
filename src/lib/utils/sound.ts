let isSoundEnabled = true;

export function toggleSound() {
    isSoundEnabled = !isSoundEnabled;
    return isSoundEnabled;
}

export function playSound(soundName: string) {
    if (!isSoundEnabled) return;
    
    const audio = new Audio(`/sounds/${soundName}.mp3`);
    audio.volume = 0.3;
    audio.play().catch(err => {
        console.warn('Sound playback failed:', err);
    });
}

// Common sound effects
export const sounds = {
    CLICK: 'click',
    MINIMIZE: 'minimize',
    MAXIMIZE: 'maximize',
    ERROR: 'error',
    NOTIFICATION: 'notification'
} as const;
