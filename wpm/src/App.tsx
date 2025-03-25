import { useState, useEffect } from "react";
import "./index.css";

function App() {

  // professional 70-100
  // average 35-50
  // beginner 20-30
  const wordStore = ['bored', 'warm', 'chair', 'money', 'cold', 'store', 'snow', 'cool', 'college', 'running', 'hot', 'internet', 'doctor', 'cloud', 'pants', 'call', 'phone', 'window', 'water', 'exercise', 'television', 'kitchen', 'walking', 'sorry', 'sugar', 'scared', 'sun', 'eating', 'notebook', 'door', 'house', 'medicine', 'wind', 'rain', 'tea', 'studying', 'bank', 'shirt', 'movie','home', 'happy', 'hungry', 'walk', 'message', 'computer', 'bus', 'radio', 'maybe', 'no', 'sad', 'weather', 'coffee', 'love', 'bike', 'milk', 'please', 'table', 'shoes', 'goodbye', 'friend', 'bag', 'family', 'road', 'car', 'wallet', 'nervous', 'thirsty', 'book', 'shopping', 'room', 'food', 'paper', 'bed', 'cooking', 'pen', 'learning', 'hello', 'cleaning', 'drinking', 'watch', 'market', 'yes', 'train', 'school', 'writing', 'email', 'hospital', 'music', 'thank', 'bathroom', 'work', 'angry', 'morning', 'bread', 'night', 'glasses', 'reading', 'tired', 'excited', 'job']

  const [words, setWords] = useState("");
  const [timer, setTimer] = useState(0);

  // ... previous code remains the same
  const RandomWords = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const selectedWords: string[] = [];
    while (selectedWords.length < 90) {
      const word = wordStore[Math.floor(Math.random() * wordStore.length)];
      if (!selectedWords.includes(word)) selectedWords.push(word); // Avoid duplicates
    }
    setWords(selectedWords.join(" ")); // Convert array to string

    setTimer(60)

  };

  useEffect(() => {
    if (timer <= 0) return;
    const timing = setInterval(() => {
      setTimer(prevTime => prevTime - 1);
      if (timer === 0) {
        clearInterval(timing);
      }
    }, 1000);

    return () => clearInterval(timing);
  }, [timer]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const HandleClearText = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWords("");
    setTimer(0)
  };


  // ... the rest of the component

  return (
    <>
      <div className="container">
        <div className="contain">
          <div style={{ margin: "2rem", width: "500px" }}>
            <div
              style={{
                background: "whitesmoke",
                color: "black",
                fontWeight: "600",
                fontSize: "1.5rem",
                marginBottom: "3rem",
                height: "20vh",
                overflow: "hidden",
                borderRadius: "3px",
                padding: '5px'
              }}
            >
              {words}
            </div>
            <form>
              <input
                style={{
                  display: "block",
                  borderRadius: "2px",
                  outline: "none",
                  border: "none",
                  padding: "5px",
                  marginBottom: "1rem",
                  width: "98%",
                  fontSize: "1.5rem",
                }}
                type="text"
              />

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <button
                    onClick={RandomWords}
                    style={{
                      padding: "0.5rem 1rem",
                      background: "#0041c2",
                      cursor: "pointer",
                      outline: "none",
                      border: "none",
                      borderRadius: "5px",
                      marginRight: "1rem",
                      fontWeight: "500",
                      color: "white",
                    }}
                  >
                    Start
                  </button>
                  

                  <button
                    onClick={HandleClearText}
                    style={{
                      padding: "0.5rem 1rem",
                      background: "#bf0a30",
                      cursor: "pointer",
                      outline: "none",
                      border: "none",
                      borderRadius: "5px",
                      marginRight: "1rem",
                      fontWeight: "500",
                      color: "white",
                    }}
                  >
                    Stop
                  </button>
                </div>

                <div style={{fontSize: '2rem'}}>
                  {formatTime(timer)}
                </div>
              </div>
            </form>
          </div>
          <div style={{ margin: "2rem", width: "300px" }}>
            <h1>Result</h1>
            <p style={{fontSize: '2rem', color: 'green', fontWeight: '700'}}>10 WPM</p>
            <p>Wrong: <span style={{color: 'red', marginLeft: '10px', fontWeight:'600'}}>0</span></p>
            <p>Correct: <span style={{color: 'green', marginLeft: '10px', fontWeight:'600'}}>0</span></p>
            <p>Total: <span style={{color: 'skyblue', marginLeft: '10px', fontWeight:'600'}}>0</span></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
