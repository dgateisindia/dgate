export default function ThinkLightbulbIcon({
  size = "1em",
  className = "",
  style = {},
  ...props
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", ...style }}
      {...props}
    >
      {/* Radiating spikes / light rays */}
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        {/* Top vertical ray */}
        <line x1="12" y1="1" x2="12" y2="3.2" />
        {/* Top-right rays */}
        <line x1="16.8" y1="3.2" x2="15.2" y2="5.2" />
        <line x1="20.8" y1="7.2" x2="18.6" y2="8.6" />
        {/* Right horizontal ray */}
        <line x1="22.5" y1="12" x2="19.8" y2="12" />
        {/* Bottom-right ray */}
        <line x1="21.2" y1="16.5" x2="18.8" y2="15.2" />
        {/* Top-left rays */}
        <line x1="7.2" y1="3.2" x2="8.8" y2="5.2" />
        <line x1="3.2" y1="7.2" x2="5.4" y2="8.6" />
        {/* Left horizontal ray */}
        <line x1="1.5" y1="12" x2="4.2" y2="12" />
        {/* Bottom-left ray */}
        <line x1="2.8" y1="16.5" x2="5.2" y2="15.2" />
      </g>

      {/* Lightbulb glass body (solid fill) */}
      <path
        d="M12 5.2C8.8 5.2 6.4 7.6 6.4 10.8C6.4 12.8 7.4 14.6 9 15.8C9.4 16.1 9.6 16.5 9.6 17H14.4C14.4 16.5 14.6 16.1 15 15.8C16.6 14.6 17.6 12.8 17.6 10.8C17.6 7.6 15.2 5.2 12 5.2Z"
        fill="currentColor"
      />

      {/* Curved glass reflection highlight */}
      <path
        d="M14 7.5C14.9 8.2 15.5 9.3 15.5 10.6"
        stroke="#ffffff"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />

      {/* Screw base threads */}
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <line x1="9.8" y1="18.4" x2="14.2" y2="18.4" />
        <line x1="10.4" y1="19.9" x2="13.6" y2="19.9" />
      </g>
      {/* Bottom contact point */}
      <path
        d="M11.2 21.2C11.2 21.6 11.6 22 12 22C12.4 22 12.8 21.6 12.8 21.2H11.2Z"
        fill="currentColor"
      />
    </svg>
  );
}
