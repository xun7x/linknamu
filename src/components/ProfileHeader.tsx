type ProfileHeaderProps = {
  name: string;
  bio: string;
};

export default function ProfileHeader({ name, bio }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <div className="flex h-36 w-36 items-center justify-center rounded-full bg-zinc-200 text-4xl font-semibold text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
        {name.slice(0, 1)}
      </div>
      <div>
        <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          {name}
        </h1>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{bio}</p>
      </div>
    </div>
  );
}
