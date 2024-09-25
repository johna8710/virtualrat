export const SNIFFY_SVG = {
    idle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <rect width="32" height="32" fill="#f0f0f0"/>
        <rect x="8" y="12" width="16" height="12" fill="#808080"/>
        <rect x="4" y="12" width="8" height="8" fill="#808080"/>
        <rect x="4" y="10" width="4" height="4" fill="#ffc0cb"/>
        <rect x="6" y="14" width="2" height="2" fill="#000000"/>
        <rect x="4" y="16" width="2" height="2" fill="#ffc0cb"/>
        <rect x="24" y="16" width="6" height="2" fill="#808080"/>
        <rect x="10" y="24" width="4" height="2" fill="#ffc0cb"/>
        <rect x="18" y="24" width="4" height="2" fill="#ffc0cb"/>
    </svg>`,
    moving: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <rect width="32" height="32" fill="#f0f0f0"/>
        <rect x="8" y="10" width="16" height="12" fill="#808080"/>
        <rect x="4" y="10" width="8" height="8" fill="#808080"/>
        <rect x="4" y="8" width="4" height="4" fill="#ffc0cb"/>
        <rect x="6" y="12" width="2" height="2" fill="#000000"/>
        <rect x="4" y="14" width="2" height="2" fill="#ffc0cb"/>
        <rect x="24" y="14" width="6" height="2" fill="#808080"/>
        <rect x="10" y="22" width="4" height="2" fill="#ffc0cb"/>
        <rect x="18" y="22" width="4" height="4" fill="#ffc0cb"/>
    </svg>`,
    pressingLever: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <rect width="32" height="32" fill="#f0f0f0"/>
        <rect x="8" y="8" width="16" height="12" fill="#808080"/>
        <rect x="4" y="6" width="8" height="8" fill="#808080"/>
        <rect x="4" y="4" width="4" height="4" fill="#ffc0cb"/>
        <rect x="6" y="8" width="2" height="2" fill="#000000"/>
        <rect x="4" y="10" width="2" height="2" fill="#ffc0cb"/>
        <rect x="24" y="10" width="6" height="2" fill="#808080"/>
        <rect x="10" y="20" width="4" height="4" fill="#ffc0cb"/>
        <rect x="18" y="20" width="4" height="4" fill="#ffc0cb"/>
        <rect x="8" y="24" width="2" height="6" fill="#ff0000"/>
    </svg>`,
    eating: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <rect width="32" height="32" fill="#f0f0f0"/>
        <rect x="8" y="14" width="16" height="10" fill="#808080"/>
        <rect x="4" y="14" width="8" height="8" fill="#808080"/>
        <rect x="4" y="12" width="4" height="4" fill="#ffc0cb"/>
        <rect x="6" y="16" width="2" height="2" fill="#000000"/>
        <rect x="4" y="20" width="2" height="2" fill="#ffc0cb"/>
        <rect x="24" y="18" width="6" height="2" fill="#808080"/>
        <rect x="10" y="24" width="4" height="2" fill="#ffc0cb"/>
        <rect x="18" y="24" width="4" height="2" fill="#ffc0cb"/>
        <rect x="2" y="22" width="4" height="4" fill="#8B4513"/>
    </svg>`
};

export const EXPERIMENT_CONSTANTS = {
    LEVER_PRESS_THRESHOLD: 30,
    REWARD_THRESHOLD: 5,
    DEFAULT_REINFORCEMENT_RATE: 0.5,
    DEFAULT_EXTINCTION_SPEED: 0.05,
    EXPERIMENT_STEP_INTERVAL: 1000, // milliseconds
};
