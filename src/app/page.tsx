import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";

const profile = {
  name: "준영",
  bio: "최강 섹시 준영",
  imageUrl: "/profile.jpg",
};

const links = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/jun0.xx?stkn=aDlkc250aThsenJv",
  },
  { label: "GitHub", href: "https://github.com/xun7x" },
  { label: "Email", href: "mailto:vector11599@gmail.com" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 justify-center bg-white px-6 py-20 dark:bg-[#1c1512]">
      <main className="flex w-full max-w-sm flex-col items-center gap-14">
        <ProfileHeader
          name={profile.name}
          bio={profile.bio}
          imageUrl={profile.imageUrl}
        />
        <div className="flex w-full flex-col gap-5">
          {links.map((link) => (
            <LinkCard key={link.label} label={link.label} href={link.href} />
          ))}
        </div>
      </main>
    </div>
  );
}
