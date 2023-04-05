import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'

export default function AccueilNosActivités() {
  return (
    <div>
        <div>
            <div className='bg-blue-900 p-5'>
                <h1 className='font-Jost flex justify-center text-white text-3xl items-center'>NOS ACTIVITES</h1>
            </div>
        </div>
        <div className='grid md:grid-cols-2 mt-5 p-2'>
            <Info images="5.jpg" title="Visite au Collège Saint Mathias à Mont-Ngafula" desc="12 octobre 2020" icon={<FaCalendarAlt/>} subtitle="EDUCATION" animation="fade-zoom" duration="3000"/>
            <Info images="8.jpg" title="Visite à l’Orphelinat BULAYA" desc="Lubumbashi/KATANGA" icon={<HiLocationMarker/>} subtitle="A LA UNE" animation="fade-zoom" duration="3000"/>
        </div>
    </div>
  )
}


const Info = ({images, title, desc, icon, subtitle, animation, duration})=>{
    return(
        <div>

            
                        <div className='mt-5' data-aos={animation} data-aos-duration={duration}>
                            <div className='relative'>
                                <div className='flex justify-center items-center'>
                                    <img src={images} className='md:w-[384px] md:h-[250px] w-[320px] h-[200px]'/>
                                </div>
                                <div className=' flex justify-center items-center'>
                                    <div className="bg-blue-900 md:w-96 w-80 text-center p-1">
                                        <h1 className="text-white text-sm md:text-lg">{title}</h1>
                                        <div className="text-white flex gap-2 justify-center">
                                            <div className='flex justify-center items-center'>{icon}</div> 
                                            <div className='flex justify-center items-center text-sm md:text-lg'>{desc}</div> 
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=' bg-blue-900 absolute md:-mt-[313px] -mt-[249px] ml-[19px] md:ml-[112px] p-1 flex justify-center text-white'>{subtitle}</div>
                        </div>

        </div>
    )
}


