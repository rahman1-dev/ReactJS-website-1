import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="error-page">
      {/* Error page container */}
      <div className="error-card">
        {/* Error content */}
        <h1 className="error-title">Oops! Something went wrong</h1>
        <h1>{error.status} error😒</h1>
        <p className="error-message">{error?.error?.message}</p>
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
