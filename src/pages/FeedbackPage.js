// src/pages/FeedbackPage.js
import React, { useState } from "react";

function FeedbackPage() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedback);
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Feedback</h2>
      {submitted ? (
        <p>Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Enter your feedback here..."
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default FeedbackPage;
