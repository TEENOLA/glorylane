type CrestIconProps = {
  className?: string;
  strokeColor?: string;
  fillColor?: string;
};

export default function CrestIcon({
  className = "w-9 h-9",
  strokeColor = "#AD8629",
  fillColor = "#1B4332",
}: CrestIconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 3 L35 9 V19 C35 28 28.5 34.5 20 37 C11.5 34.5 5 28 5 19 V9 Z"
        stroke={strokeColor}
        strokeWidth="1.6"
        fill={fillColor}
      />
      <path
        d="M20 12 L20 27 M13 17 L27 17"
        stroke="#E4C878"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
