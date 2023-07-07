type Props = { image?: string | null }
export default function Avatar({image}: Props) {
    return <div>
        <img alt={"user"} src={image ?? undefined} className={
            "w-10 h-10 rounded-full"
        } />
    </div>
}