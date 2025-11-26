import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Typing effect hook
function useTypingEffect(text, speed = 30) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
}

const Prompt = () => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const coin = params.get("coin");

  const typedResponse = useTypingEffect(response);

  console.log("Coin:", coin);

  useEffect(() => {
    if (!coin) return; // prevent fetch if coin is null

    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch(`http://localhost:5000/search/${coin}`);
        const data = await res.json();

        setResponse(data.message || "No response from AI");
      } catch (error) {
        console.error(error);
        setResponse("Error fetching response");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [coin]); // added coin to dependencies

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0d0d0d, #1a1a1a)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "650px",
          background: "rgba(255, 255, 255, 0.05)",
          padding: "30px",
          borderRadius: "15px",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 0 25px rgba(0,0,0,0.4)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          AI Investment Suggestion
        </h1>

        {loading ? (
          <>
            <div
              style={{
                fontSize: "22px",
                textAlign: "center",
                animation: "pulse 1.5s infinite",
                marginTop: "30px",
              }}
            >
              Thinking...
            </div>

            <div
              style={{
                margin: "0 auto",
                marginTop: "25px",
                width: "60px",
                height: "60px",
                border: "6px solid rgba(255,255,255,0.2)",
                borderTopColor: "white",
                borderRadius: "50%",
                animation: "spin 0.7s linear infinite",
              }}
            ></div>

            <style>
              {`
                @keyframes spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }

                @keyframes pulse {
                  0% { opacity: 0.4; }
                  50% { opacity: 1; }
                  100% { opacity: 0.4; }
                }
              `}
            </style>
          </>
        ) : (
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.7",
              marginTop: "10px",
              whiteSpace: "pre-line",
            }}
          >
            {typedResponse}
          </p>
        )}
      </div>
    </div>
  );
};

export default Prompt;
