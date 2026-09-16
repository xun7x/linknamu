type LinkCardProps = {
  label: string;
  href: string;
  clickCount: number;
  onClick?: () => void;
};

export default function LinkCard({
  label,
  href,
  clickCount,
  onClick,
}: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative flex w-full items-center justify-center rounded-2xl border border-white/50 bg-white/40 px-6 py-4 text-sm font-medium text-[#4a3728] shadow-[0_4px_20px_-4px_rgba(154,90,42,0.15)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-[0_8px_24px_-4px_rgba(154,90,42,0.22)] dark:border-white/10 dark:bg-white/5 dark:text-[#f3e9df] dark:hover:bg-white/10"
    >
      {label}
      <span className="absolute right-5 text-xs font-normal text-[#8a7364] dark:text-[#c9b8ab]">
        {clickCount}회
      </span>
    </a>
  );
}
