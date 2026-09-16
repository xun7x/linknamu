import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function ProfileHeader({
  name,
  bio,
  imageUrl,
}: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <div className="relative h-36 w-36 overflow-hidden rounded-full shadow-[0_12px_30px_-8px_rgba(154,90,42,0.45)] ring-4 ring-white/80 dark:ring-white/10">
        <Image
          src={imageUrl}
          alt={`${name} 프로필 사진`}
          fill
          sizes="144px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div>
        <h1 className="text-lg font-bold text-[#4a3728] dark:text-[#f3e9df]">
          {name}
        </h1>
        <p className="mt-1 text-sm text-[#8a7364] dark:text-[#c9b8ab]">
          {bio}
        </p>
      </div>
    </div>
  );
}
