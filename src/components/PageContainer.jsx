import React from 'react'

export default function PageContainer({children, className=''}){
  return (
    <div className={`container mx-auto py-10 ${className}`}>{children}</div>
  )
}
