
interface thumbnailAboutUsProps {
  className: string;
}

export default function ThumbnailAboutUs({ className = "" }: thumbnailAboutUsProps) {
  return (
    <img
      className="rounded-[50px] w-[476px] h-[350px] absolute left-[814px] top-[1847px]"
      src="./assets/unsplash_LRXYS0tSyGc.png"
      alt="thumbnail"
    />
  );
}