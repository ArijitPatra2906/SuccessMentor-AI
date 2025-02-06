import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-bot"
          >
            <path d="M12 8V4H8" />
            <rect width="16" height="12" x="4" y="8" rx="2" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M15 13v2" />
            <path d="M9 13v2" />
          </svg>
        </div>
        <div className="text-gray-800 font-bold text-2xl">
          <span className="text-blue-600">Success</span>MentorAI
        </div>
      </div>
    </div>
  );
};

export default Logo;
