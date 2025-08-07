import type { PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren) => {

  return (
    <div 
      className='b-1 b-#000 b-solid min-h-100px p-20px'
      >
        {children}
    </div>
  )
}

export default Container;
