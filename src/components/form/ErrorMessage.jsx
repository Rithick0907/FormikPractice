import React from "react";

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;

  return <div className="text-danger">{error}</div>;
};

export default ErrorMessage;
