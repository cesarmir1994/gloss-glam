type FacebookIconProps = {
  size?: number;
  className?: string;
};

export default function FacebookIcon({
  size = 16,
  className,
}: FacebookIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5h1.65V4.6c-.3-.04-1.3-.13-2.45-.13-2.43 0-4.1 1.48-4.1 4.2v2.23H7.4V14h2.75v8h3.35Z" />
    </svg>
  );
}
