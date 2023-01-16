import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="h-96 flex justify-center items-center">
      <progress className="progress w-56"></progress>
    </div>
  );
};
// error here == has been solved
export default LoadingSpinner;
