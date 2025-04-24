
import React from "react";

interface DiagnosticStepProps {
  number: number;
  title: string;
  className?: string;
}

const DiagnosticStep = ({ number, title, className }: DiagnosticStepProps) => (
  <div className={`rounded-lg p-6 flex flex-col items-center ${className}`}>
    <div className="w-10 h-10 rounded-full bg-theme-darker text-white flex items-center justify-center mb-4">
      {number}
    </div>
    <p className="font-medium text-center text-[#F8F9FB]">{title}</p>
  </div>
);

export default DiagnosticStep;
