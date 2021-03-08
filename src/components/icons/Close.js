import * as React from "react"

function Close(props) {
  return (
    <svg
      height={50}
      viewBox="0 0 21 21"
      width={50}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#FFFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(2 2)"
      >
        <circle cx={8.5} cy={8.5} r={10} />
        <path d="M5.5 5.5l6 6M11.5 5.5l-6 6" />
      </g>
    </svg>
  )
}

export default Close
