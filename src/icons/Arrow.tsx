function Arrow({ className }: { className?: string }) {
  return (
    <div>
      <svg
        className={className}
        width="59"
        height="55"
        viewBox="0 0 59 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="29.5" cy="27.5" rx="29.5" ry="27.5" fill="#FEE98A" />
        <path
          d="M45.4142 29.4142C46.1953 28.6332 46.1953 27.3668 45.4142 26.5858L32.6863 13.8579C31.9052 13.0768 30.6389 13.0768 29.8579 13.8579C29.0768 14.6389 29.0768 15.9052 29.8579 16.6863L41.1716 28L29.8579 39.3137C29.0768 40.0948 29.0768 41.3611 29.8579 42.1421C30.6389 42.9232 31.9052 42.9232 32.6863 42.1421L45.4142 29.4142ZM17 28V30H44V28V26H17V28Z"
          fill="#914B2E"
        />
      </svg>
    </div>
  );
}

export default Arrow;
