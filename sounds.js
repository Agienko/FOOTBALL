

export const kickSound = new Audio('./sounds/kick.mp3');
kickSound.volume = 0.8 
export const kickBoardSound = new Audio('./sounds/kickBoard.mp3');
kickBoardSound.volume = 0.3

export const mainMusic = new Audio('./sounds/main.mp3');
mainMusic.volume = 0.15
mainMusic.loop = true;

export const peopleSound = new Audio('./sounds/people.mp3');
peopleSound.volume = 0.4

export const peopleLongSound = new Audio('./sounds/people.mp3');
peopleLongSound.volume = 0.15
peopleLongSound.loop = true;

export const changeLevelM = (level) => {
    mainMusic.volume = 0.15 * level
};
export const changeLevelS = (level) => {
    kickSound.volume = 0.8 * level
    kickBoardSound.volume = 0.3 * level
    peopleSound.volume = 0.4 * level
    peopleLongSound.volume = 0.15 * level
};