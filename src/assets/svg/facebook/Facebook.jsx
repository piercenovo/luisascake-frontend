
const FacebookLogo = ({ color, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.865 7.852v3.105H0v5.39h5.865V30h7.143V16.348h5.864l.902-5.391h-6.766V7.441c0-2.242 1.653-2.46 4.135-2.46H20V.175c-.714 0-1.366-.115-2.027-.12C16.897.05 15.937.008 15.039 0h-.58c-2.055.022-3.829.305-6.016 1.716-.732.472-1.425 1.445-1.825 2.152-.624 1.103-.753 2.601-.753 3.984z"
        fill={color}
      />
    </svg>
  )
}

export default FacebookLogo
