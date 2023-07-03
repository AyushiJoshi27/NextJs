import { useRef, useState } from "react";

export default function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState("");
  const emailInputRef = useRef("");
  const feedbackInputRef = useRef("");

  const submutFormHanlder = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = { email: enteredEmail, text: enteredFeedback };

    fetch(`/api/feedback`, {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  function loadFeedbackHandler() {
    fetch(`/api/feedback`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFeedbackItems(data.feedback);
      });
  }

  return (
    <>
      <h1>The home page</h1>
      <form onSubmit={submutFormHanlder}>
        <div>
          <div>
            <label htmlFor="email">Your email address</label>
          </div>
          <div>
            <input type="email" id="email" ref={emailInputRef} />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="feedback">Your feedback</label>
          </div>
          <div>
            <textarea id="feedback" rows="5" ref={feedbackInputRef} />
          </div>
        </div>
        <button>Send feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load feedback</button>
      {feedbackItems ? 
        <ul>
          {feedbackItems.map((item) => (
              <li key={item.id}>{item.text}</li>
              ))}
        </ul>
      : ""}
    </>
  );
}
