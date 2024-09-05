import Image from "next/image";
import banner1 from "@/../public/banner1.jpg";

export default function Banner() {
  return (
    <>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <Image   src={banner1} className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <Image src={banner1} className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <Image src={banner1} className="w-full" />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        
      </div>
    </>
  );
}
