import React from "react";

export default function ProductPrev() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="w-8 h-8 p-1 rounded-full bg-secondaryColor text-snow flex items-center justify-center">
        <p>1</p>
      </div>

      <div className="w-8 h-8 border-2 border-secondaryColor flex items-center justify-center rounded-full">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="#fe5d26"
        >
          <title>chevron-right</title>
          <path d="M9.163 4.516c0.418 0.408 4.502 4.695 4.502 4.695 0.223 0.219 0.335 0.504 0.335 0.789s-0.112 0.57-0.335 0.787c0 0-4.084 4.289-4.502 4.695-0.418 0.408-1.17 0.436-1.615 0-0.446-0.434-0.481-1.041 0-1.574l3.747-3.908-3.747-3.908c-0.481-0.533-0.446-1.141 0-1.576s1.197-0.409 1.615 0z"></path>
        </svg>
      </div>
    </div>
  );
}
