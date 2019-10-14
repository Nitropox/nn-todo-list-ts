import React from "react";

interface ProgressBarProps {
  progress: string;
}
export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="progress my-4">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-success"
            role="progressbar"
            style={{ width: progress }}
          >
            {progress}
          </div>
        </div>
      </div>
    </div>
  );
};
