interface playButtonAboutUsProps {
  className: string;
}

export default function PlayButtonAboutUs({ className = "" }: playButtonAboutUsProps) {
  return (
    <button className="w-[213px] h-[49px] static">
      <svg
        className="w-[49px] h-[49px] absolute left-[394px] top-[2148.44px] overflow-visible"
        style={{}}
        width="100%"
        height="100%"
        viewBox="0 0 49 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24.5" cy="24.9382" r="24.5" fill="#091156" />
        <path
          d="M32.1167 23.6145C33.45 24.3843 33.45 26.3088 32.1167 27.0786L22.8042 32.4551C21.4708 33.2249 19.8042 32.2627 19.8042 30.7231L19.8042 19.9699C19.8042 18.4303 21.4708 17.4681 22.8042 18.2379L32.1167 23.6145Z"
          fill="white"
        />
      </svg>

      <div className="text-[#8b8b8b] text-left text-base font-semibold absolute left-[456px] top-[2159.44px] w-[151px] h-[27px]">
        Watch Video{" "}
      </div>
    </button>
  );
}