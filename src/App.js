import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";
import { Fireworks, useFireworks } from "fireworks-js/dist/react";
import { useEffect, useState } from "react";
import Result from "./components/Result";
function App() {
  const [blast, setBlast] = useState(false);
  const { setEnabled, setOptions, enabled, options } = useFireworks({
    initialStart: true,
    initialOptions: {
      hue: {
        min: 0,
        max: 345,
      },
      delay: {
        min: 15,
        max: 15,
      },
      rocketsPoint: 50,
      speed: 10,
      acceleration: 1.2,
      friction: 0.96,
      gravity: 1,
      particles: 90,
      trace: 3,
      explosion: 6,
      autoresize: true,
      brightness: {
        min: 50,
        max: 80,
        decay: {
          min: 0.015,
          max: 0.03,
        },
      },
      boundaries: {
        visible: false,
      },
      sound: {
        enabled: true,
        files: [
          "https://fireworks.js.org/sounds/explosion0.mp3",
          "https://fireworks.js.org/sounds/explosion1.mp3",
          "https://fireworks.js.org/sounds/explosion2.mp3",
        ],
        volume: {
          min: 5,
          max: 10,
        },
      },
      mouse: {
        click: false,
        move: false,
        max: 1,
      },
    },
  });

  useEffect(() => {
    setEnabled(false);
  }, []);
  return (
    <div className="text-center App fireworks-container">
      {blast && (
        <Fireworks
          enabled={enabled}
          options={options}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
          }}
        />
      )}
      <Header />
      <div style={{ display: "grid", placeContent: "center", height: "80vh" }}>
        <Board setEnabled={setEnabled} setBlast={setBlast} blast={blast} />
      </div>
    </div>
  );
}

export default App;
