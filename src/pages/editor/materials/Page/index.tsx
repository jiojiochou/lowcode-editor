import type { CommonComponentProps } from "@/pages/editor/interface";
import type { Ref } from "react";
import { useMaterailDrop } from "../../hook/useMaterialDrop";

function Page({ id, children }: CommonComponentProps) {
    const {canDrop, drop } = useMaterailDrop(['Button', 'Container'], id);

    return (
        <div
            ref={drop as unknown as Ref<HTMLDivElement>}
            className='p-[20px] h-[100%] box-border'
            style={{ border: canDrop ? '2px solid blue' : 'none' }}
        >
            {children}
        </div>
    )
}

export default Page;
