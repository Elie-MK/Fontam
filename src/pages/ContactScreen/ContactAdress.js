import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { FaPhoneAlt } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'

export default function ContactAdress() {
  function send(e){
    e.preventDefault()
  }
  return (
    <div>
      <div className='grid md:grid-cols-2'>
        <div className='bg-blue-900 flex items-center justify-center'>
          <div className=' p-3' data-aos="fade-right"
     data-aos-duration="3000">
            <h1 className='md:text-7xl text-5xl font-Jost text-white'>NOUS CONTACTER</h1>
            <div className='border-white border-b-4  md:w-44 w-20'></div>
          </div>
        </div>

        <div className=''>
          <div className='p-2'>
            <div className='flex gap-2'>
              <HiLocationMarker className='text-blue-900' size={30}/> 
              <p className='text-justify text-blue-900'>73, avenue Santé, Quartier Mama Mobutu
              Commune de Mont-Ngafula/Kinshasa-RD.Congo</p>
            </div>
            <div className='flex gap-2 mt-3'>
              <FaPhoneAlt className='text-blue-900' size={25}/> 
              <p className='text-justify text-blue-900'>+243 818 040 525 </p>
            </div>
            <div className='flex gap-2 mt-4'>
              <GrMail className='text-blue-900' size={25}/> 
              <a type='email' className='text-justify text-blue-900'>info@fontam.org </a>
            </div>
          </div>

            <div className='bg-blue-900 text-white text-center p-2'>Formulaire de contact</div>

            <div className='p-3'>
              <div className='flex justify-center'>
                <form onClick={send}>
                  <div className=''>
                    <input placeholder='Nom & Prénom'  className='border border-blue-900 md:w-96 w-80 p-2 pl-5'/>
                  </div>
                  <div className='mt-3'>
                    <input placeholder='Email'  className='border border-blue-900 md:w-96 w-80 p-2 pl-5'/>
                  </div>
                  <div className='mt-3'>
                    <input placeholder='Sujet'  className='border border-blue-900 md:w-96 w-80 p-2 pl-5'/>
                  </div>
                  <div className='mt-3'>
                    <textarea placeholder='Message'  className='border border-blue-900 md:w-96 w-80 p-5 pl-5'/>
                  </div>
                  <div className='mt-3 flex justify-end'>
                    <button className='border-2 border-blue-900 p-2 rounded-xl w-32 text-blue-900 font-bold hover:bg-blue-900 hover:text-white animation transition  ease-in-out duration-500'>Envoyer</button>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
