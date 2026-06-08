export function Logo({ className = "", size = 32 }: { className?: string; size?: number }) {
  const src = new URL("../assets/nawasena_logo.png", import.meta.url).href;

  return (
    <img
      src={src}
      alt="Nawasena logo"
      className={`rounded-lg object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
