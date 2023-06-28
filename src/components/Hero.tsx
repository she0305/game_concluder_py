import Image from "next/image";
import banner from "../../public/banner.png";

export default function Hero() {
  return (
    <section>
      <Image className={"absolute -z-10"} src={banner} alt="banner" />
    </section>
  );
}
