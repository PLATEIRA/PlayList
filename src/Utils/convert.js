export const convertDuration = (time = 0) => {
    let minutes = Math.floor (time/ 60);
    minutes = minutes <10 ? `0${minutes}` : minutes;
    let seconds = time % 60 ;
    seconds = seconds <10 ? `0${seconds}` : seconds;

    return `${minutes}:${seconds}`;

}

