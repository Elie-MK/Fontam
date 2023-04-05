import React from 'react'

export default function ActionDetails() {
  return (
    <div>
        <div className='grid md:grid-cols-3'>
            <div>
            <ActionDetailss img="1.jpg" title="Orphelinat Père Monti/Montngafula " />
            </div>
            <div>
            <ActionDetailss img="/orphelinat/orphelinat_bulaya.jpeg" title="Orphelinat Bulaya/Lubumbashi " />
            </div>
            <div>
            <ActionDetailss img="/orphelinat/ecole_elekia_nabiso.jpeg" title="École Eleki Nabiso/Montngafula" />
            </div>
            <div>
            <ActionDetailss img="/orphelinat/college_saint_Matthias.jpeg" title="Collège saint Mathias/Montngafula" />
            </div>
            <div>
            <ActionDetailss img="/orphelinat/tupendane_bukavu.jpeg" title="Orphelinat Tupendane/Bukavu" />
            </div>
        </div>
    </div>
  )
}

const ActionDetailss = ({img, title})=>{
    return(
        <div className='flex items-center justify-center mt-4' data-aos="fade-zoom"
        data-aos-duration="3000">
            <div className='cursor-pointer'>
                <div className='flex justify-center'>
                    <img src={img} className='w-80 h-44'/>
                </div>
                <div className='flex items-center justify-center'>
                    <h1 className='text-blue-900 p-2 font-bold center'>{title}</h1>
                </div>
            </div>
    </div>
    )
}
