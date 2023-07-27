import Image from "next/image";
import poker from "@/app/poker.png";

type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = () => {
    return (
        <div>
            <Image
                src={poker} alt="poker" />

        </div>
    )
}
