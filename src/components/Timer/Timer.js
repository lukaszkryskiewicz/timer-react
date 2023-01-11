import styles from './Timer.module.scss';

const Timer = props => {

  const msToTime = durationMs => {
    let milliseconds = parseInt((durationMs % 1000)),
      seconds = Math.floor((durationMs / 1000) % 60),
      minutes = Math.floor((durationMs / (1000 * 60)) % 60),
      hours = Math.floor((durationMs / (1000 * 60 * 60)));

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 100) ? ((milliseconds < 10) ? "00" + milliseconds : "0" + milliseconds) : milliseconds; //czy taki zapis jest ok czy lepiej sotosować ify? 

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  };;

  return (<div className={styles.timer}>
    {msToTime(props.time)}
  </div>)
};


export default Timer;