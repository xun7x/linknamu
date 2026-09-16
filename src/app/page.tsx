import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";

const profile = {
  name: "이름",
  bio: "한 줄 소개",
};

const links = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "Email", href: "mailto:example@example.com" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 justify-center bg-zinc-50 px-4 py-16 dark:bg-black">
      <main className="flex w-full max-w-sm flex-col items-center gap-12">
        <ProfileHeader name={profile.name} bio={profile.bio} />
        <div className="flex w-full flex-col gap-5">
          {links.map((link) => (
            <LinkCard key={link.label} label={link.label} href={link.href} />
          ))}
        </div>
      </main>
    </div>
  );
}
