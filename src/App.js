import Controls from "./components/Controls/Controls";
import Container from "./components/Container/Container";
import Timer from "./components/Timer/Timer";
import { useState, useEffect } from "react";

function App() {

  const [timer, setTimer] = useState('')
  const [time, setTime] = useState(0)

  const start = () => {
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1);
    }, 1))
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  const startTimer = () => {
    start();
  }

  const stopTimer = () => {
    console.log('test1')
    clearInterval(timer)
  }

  const restartTimer = () => {
    console.log('test2')
    clearInterval(timer)
    setTime(0)
  }





  return (
    <Container>
      <div>
        <Timer time={time} />
      </div>
      <Controls action={startTimer}>Start</Controls>
      <Controls action={stopTimer}>Stop</Controls>
      <Controls action={restartTimer}>Restart</Controls>
    </Container>
  );
}

export default App;
