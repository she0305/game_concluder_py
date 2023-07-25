import Image from "next/image";
import poker from "@/app/poker.png";

type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = () => {
    return (
        <div>
            <Image
                src={poker} alt="poker" className=" w-10 h-10 sm:h-6 sm:w-6"/>

        </div>
    )
}
