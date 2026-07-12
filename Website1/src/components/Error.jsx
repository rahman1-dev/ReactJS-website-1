import React from "react";

const Error = () => {
  return (
    <div className="error-page">
      {/* Error page container */}
      <div className="error-card">
        {/* Error content */}
        <h1 className="error-title">Oops! Something went wrong</h1>
        <p className="error-message">
          The page you are looking for could not be found or has encountered an
          error.
        </p>
        <button
          className="error-button"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Error;
