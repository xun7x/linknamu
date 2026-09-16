import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";

const profile = {
  name: "준영",
  bio: "최강 섹시 준영",
  imageUrl: "/profile.jpg",
};

const links = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/jun0.xx?stkn=aDlkc250aThsenJv",
  },
  { id: "github", label: "GitHub", href: "https://github.com/xun7x" },
  { id: "email", label: "Email", href: "mailto:vector11599@gmail.com" },
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
        <LinkList links={links} />
      </main>
    </div>
  );
}
