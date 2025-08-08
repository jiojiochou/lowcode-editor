import type { CommonComponentProps } from '../../interface'
import type { Ref } from 'react';
import { useMaterailDrop } from '../../hook/useMaterialDrop';

const Container = ({ id, children }: CommonComponentProps) => {

    const {canDrop, drop } = useMaterailDrop(['Button', 'Container'], id);

    return (
        <div 
          ref={drop as unknown as Ref<HTMLDivElement>}
          className={`min-h-[100px] p-[20px] ${ canDrop ? 'border-[2px] border-[blue] b-solid' : 'border-[1px] border-[#000] b-solid'}`}
        >
          {children}
        </div>
    )
}

export default Container;
