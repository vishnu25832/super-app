import { useEffect, useState } from "react";

const TimerWidget = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      alert("Time's up!");
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    const totalSeconds =
      Number(hours) * 3600 +
      Number(minutes) * 60 +
      Number(seconds);

    if (timeLeft === 0) {
      setTimeLeft(totalSeconds);
    }

    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const displayHours = Math.floor(timeLeft / 3600);
  const displayMinutes = Math.floor((timeLeft % 3600) / 60);
  const displaySeconds = timeLeft % 60;

  return (
    <div className="bg-zinc-900 p-5 rounded-xl">
      <h2 className="text-xl font-bold mb-4">
        Timer
      </h2>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <input
          type="number"
          min="0"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="p-2 rounded bg-white text-black"
          placeholder="HH"
        />

        <input
          type="number"
          min="0"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          className="p-2 rounded bg-white text-black"
          placeholder="MM"
        />

        <input
          type="number"
          min="0"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          className="p-2 rounded bg-white text-black"
          placeholder="SS"
        />
      </div>

      <h1 className="text-3xl font-bold mb-4">
        {String(displayHours).padStart(2, "0")}:
        {String(displayMinutes).padStart(2, "0")}:
        {String(displaySeconds).padStart(2, "0")}
      </h1>

      <div className="flex gap-3">
        <button
          onClick={startTimer}
          className="bg-green-500 px-4 py-2 rounded"
        >
          Start
        </button>

        <button
          onClick={pauseTimer}
          className="bg-yellow-500 px-4 py-2 rounded"
        >
          Pause
        </button>

        <button
          onClick={resetTimer}
          className="bg-red-500 px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TimerWidget;