import Image from "next/image";
import banner from "../../public/banner.png";

export default function Hero() {
  return (
    <section>
      <Image src={banner} alt="banner" />
      {/*className={"absolute -z-10"}*/}
    </section>
  );
}
