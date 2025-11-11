import { IconCloud } from "./ui/icon-cloud"
import { images } from "@/data/data"

export function Cloud() {
    return (
        <div className="relative flex size-full items-center justify-center overflow-hidden">
            <IconCloud images={images} />
        </div>
    )

}