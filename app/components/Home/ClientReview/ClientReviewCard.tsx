import Image from 'next/image';
import React from 'react'

type Props = {
    image: string;
    name: string;
    role: string;
}

const ClientReviewCard = ({ image, name, role }: Props) => {
  return (
    <div className='m-2'>
      <Image src={image} alt={`client-${name}-image`} width={60} height={60} className='rounded-full'/>
      <p className="mt-6 text-base text-gray-200 font-medium">
        &quot;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia cumque laudantium iusto consectetur, ipsa odit eaque vitae cum sit dolorem, delectus quis tempore labore est. Eius cupiditate ipsum tempore enim.&quot;
      </p>
      <h1 className='mt-6 text-xl font-bold text-cyan-200'>{name}</h1>
      <p className='mt-1 text-white'>{role}</p>
    </div>
  )
}

export default ClientReviewCard