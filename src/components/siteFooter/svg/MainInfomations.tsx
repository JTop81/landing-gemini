export default function MainInfomations({
  className = "",
}: MainInfomationsProps) {
  return (
    <div className="w-[131px] h-[219px] static">
      <div className="w-[131px] h-6 static">
        <div className="text-[#d7dbff] text-left text-base font-normal absolute left-[792px] top-[4704px] w-[110px] h-6">
          Team{" "}
        </div>
        <svg
          className="w-[13px] h-[13px] absolute left-[771px] top-[4710px] overflow-visible"
          style={{}}
          width="100%"
          height="100%"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.0625 9.76656V3.23295C4.0625 2.78053 4.60949 2.55397 4.92939 2.87387L8.1962 6.14068C8.3945 6.33898 8.3945 6.66053 8.1962 6.85883L4.92939 10.1256C4.60949 10.4456 4.0625 10.219 4.0625 9.76656Z"
            fill="#D7DBFF"
          />
        </svg>
      </div>
      <div className="w-[131px] h-6 static">
        <div className="text-[#d7dbff] text-left text-base font-normal absolute left-[792px] top-[4669px] w-[110px] h-6">
          Gallery
        </div>
        <svg
          className="w-[13px] h-[13px] absolute left-[771px] top-[4675px] overflow-visible"
          style={{}}
          width="100%"
          height="100%"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.0625 9.76656V3.23295C4.0625 2.78053 4.60949 2.55397 4.92939 2.87387L8.1962 6.14068C8.3945 6.33898 8.3945 6.66053 8.1962 6.85883L4.92939 10.1256C4.60949 10.4456 4.0625 10.219 4.0625 9.76656Z"
            fill="#D7DBFF"
          />
        </svg>
      </div>
      <div className="w-[131px] h-6 static">
        <div className="text-[#d7dbff] text-left  text-base font-normal absolute left-[792px] top-[4634px] w-[110px] h-6">
          Services
        </div>
        <svg
          className="w-[13px] h-[13px] absolute left-[771px] top-[4640px] overflow-visible"
          style={{}}
          width="100%"
          height="100%"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.0625 9.76656V3.23295C4.0625 2.78053 4.60949 2.55397 4.92939 2.87387L8.1962 6.14068C8.3945 6.33898 8.3945 6.66053 8.1962 6.85883L4.92939 10.1256C4.60949 10.4456 4.0625 10.219 4.0625 9.76656Z"
            fill="#D7DBFF"
          />
        </svg>
      </div>
      <div className="w-[131px] h-6 static">
        <div className="text-[#d7dbff] text-left  text-base font-normal absolute left-[792px] top-[4599px] w-[110px] h-6">
          About{" "}
        </div>
        <svg
          className="w-[13px] h-[13px] absolute left-[771px] top-[4605px] overflow-visible"
          style={{}}
          width="100%"
          height="100%"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.0625 9.76705V3.23343C4.0625 2.78102 4.60949 2.55446 4.92939 2.87436L8.1962 6.14117C8.3945 6.33947 8.3945 6.66102 8.1962 6.85932L4.92939 10.1261C4.60949 10.446 4.0625 10.2195 4.0625 9.76705Z"
            fill="#D7DBFF"
          />
        </svg>
      </div>
      <div className="w-[131px] h-6 static">
        <div className="text-[#d7dbff] text-left text-base font-normal absolute left-[792px] top-[4564px] w-[110px] h-6">
          Home
        </div>
        <svg
          className="w-[13px] h-[13px] absolute left-[771px] top-[4570px] overflow-visible"
          style={{}}
          width="100%"
          height="100%"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.0625 9.76705V3.23343C4.0625 2.78102 4.60949 2.55446 4.92939 2.87436L8.1962 6.14117C8.3945 6.33947 8.3945 6.66102 8.1962 6.85932L4.92939 10.1261C4.60949 10.446 4.0625 10.2195 4.0625 9.76705Z"
            fill="#D7DBFF"
          />
        </svg>
      </div>
      <div className="text-[#ffffff] text-left  text-lg font-semibold absolute left-[771px] top-[4509px] w-[129px] h-[31px]">
        Pages
      </div>
    </div>
  );
}

interface MainInfomationsProps {
  className: string;
}
