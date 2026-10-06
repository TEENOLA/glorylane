type IconProps = {
  className?: string;
  color?: string;
};

const DEFAULT_CLASS = "w-7 h-7";
const DEFAULT_COLOR = "#AD8629";

export function FlaskIcon({ className = DEFAULT_CLASS, color = DEFAULT_COLOR }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 30 30" fill="none">
      <path d="M12 4h6v6l5 13a3 3 0 01-3 4H10a3 3 0 01-3-4l5-13z" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

export function BookIcon({ className = DEFAULT_CLASS, color = DEFAULT_COLOR }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 30 30" fill="none">
      <rect x="5" y="6" width="20" height="18" rx="1" stroke={color} strokeWidth="1.5" />
      <line x1="15" y1="6" x2="15" y2="24" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

export function TargetIcon({ className = DEFAULT_CLASS, color = DEFAULT_COLOR }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 30 30" fill="none">
      <circle cx="15" cy="15" r="10" stroke={color} strokeWidth="1.5" />
      <path d="M15 5v20M5 15h20" stroke={color} strokeWidth="1" />
    </svg>
  );
}

export function MonitorIcon({ className = DEFAULT_CLASS, color = DEFAULT_COLOR }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 30 30" fill="none">
      <rect x="4" y="8" width="22" height="14" rx="1" stroke={color} strokeWidth="1.5" />
      <circle cx="9" cy="15" r="1.4" fill={color} />
    </svg>
  );
}

export function ClinicIcon({ className = DEFAULT_CLASS, color = DEFAULT_COLOR }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 30 30" fill="none">
      <path d="M6 24V14l9-8 9 8v10" stroke={color} strokeWidth="1.5" />
      <rect x="12" y="17" width="6" height="7" stroke={color} strokeWidth="1.2" />
    </svg>
  );
}

export function BusIcon({ className = DEFAULT_CLASS, color = DEFAULT_COLOR }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 30 30" fill="none">
      <rect x="4" y="12" width="22" height="10" rx="2" stroke={color} strokeWidth="1.5" />
      <circle cx="9" cy="24" r="2" stroke={color} strokeWidth="1.5" />
      <circle cx="21" cy="24" r="2" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

export function PersonIcon({ className = "w-6 h-6", color = "#1B4332" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="7" r="4" stroke={color} strokeWidth="1.4" />
      <path d="M3 20c1-6 5-8 8-8s7 2 8 8" stroke={color} strokeWidth="1.4" />
    </svg>
  );
}

export function PinIcon({ className = "w-6 h-6", color = "#1B4332" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 22 22" fill="none">
      <path d="M11 20s7-6.5 7-11.5A7 7 0 004 8.5C4 13.5 11 20 11 20z" stroke={color} strokeWidth="1.4" />
      <circle cx="11" cy="8.3" r="2.4" stroke={color} strokeWidth="1.4" />
    </svg>
  );
}

export function PhoneIcon({ className = "w-6 h-6", color = "#1B4332" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 22 22" fill="none">
      <path
        d="M4 5h4l2 5-2.5 1.5a12 12 0 006 6L15 15l5 2v4a2 2 0 01-2.2 2C9.5 22 2 14.5 2 7.2A2 2 0 014 5z"
        stroke={color}
        strokeWidth="1.3"
      />
    </svg>
  );
}

export function MailIcon({ className = "w-6 h-6", color = "#1B4332" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 22 22" fill="none">
      <rect x="2" y="4" width="18" height="14" rx="2" stroke={color} strokeWidth="1.4" />
      <path d="M3 6l8 6 8-6" stroke={color} strokeWidth="1.4" />
    </svg>
  );
}

export function ClockIcon({ className = "w-6 h-6", color = "#1B4332" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="9" stroke={color} strokeWidth="1.4" />
      <path d="M11 6v5l4 2" stroke={color} strokeWidth="1.4" />
    </svg>
  );
}
