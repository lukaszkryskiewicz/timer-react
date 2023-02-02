import Controls from "./components/Controls/Controls";
import Container from "./components/Container/Container";
import Timer from "./components/Timer/Timer";
import { useState, useEffect } from "react";

function App() {

  const [timer, setTimer] = useState(null)
  const [time, setTime] = useState(0)

  const start = () => {
    if (!timer) {
      setTimer(setInterval(() => {
        setTime(prevValue => prevValue + 1);
      }, 1))
    }
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, []);

  const startTimer = () => {
    start();
  }

  const stopTimer = () => {
    clearInterval(timer)
    setTimer(null)
  }

  const restartTimer = () => {
    clearInterval(timer)
    setTime(0)
    setTimer(null)
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
