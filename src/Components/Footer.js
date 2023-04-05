import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
    const scrollup = ()=>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        })
      }
  return (
    <footer className='bg-blue-900'>
        <div className='p-3'>
            <div className='flex gap-3 text-white'>
            <a target="_blank" href='https://m.facebook.com/FontamOfficielle?mibextid=LQQJ4d'><FaFacebook size={20} className='cursor-pointer'/></a>
                <FaTwitter size={20} className='cursor-pointer'/>
            <a target="_blank" href=' https://instagram.com/fontamofficiel?igshid=NTdlMDg3MTY='><FaInstagram size={20} className='cursor-pointer'/></a>
                <a target="_blank" href='https://www.youtube.com/channel/UC-Tk4gcHIyg328TzqkZlSiA'><FaYoutube size={20} className='cursor-pointer'/></a> 
            </div>
            <div className='grid md:grid-cols-7'>
                <div className=' col-span-6 mt-5 flex justify-center items-center'>
                    <div>
                        <div className='flex justify-center' onClick={scrollup}>
                            <h1 className='font-Jost md:text-7xl text-4xl text-white cursor-pointer'><Link to="/">FONTAM</Link></h1>
                        </div>
                        <div className='flex justify-center mt-2'>
                            <p className='text-center text-white text-sm md:text-lg'>644, avenue 10 villa, Quartier Cité Mama Mobutu
                                    <br/>Commune de Mont-Ngafula/Kinshasa
                            </p> 
                        </div>
                    </div>
                </div>
                <div className='md:flex md:justify-end md:items-end md:align-baseline'>
                    <div>
                        <div className='border border-white md:w-64 w-52 rounded-xl mb-3 mt-5 cursor-pointer'>
                            <h1 className='text-center p-1 text-white md:text-lg text-sm'>Politique de confidentialité</h1>
                        </div>
                        <div className='border border-white md:w-64 w-52 rounded-xl cursor-pointer'>
                            <h1 className='text-center p-1 text-white md:text-lg text-sm'>Termes & conditions</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    <div className='flex just  md:justify-center justify-end p-2'>
                        <a href='https://zedigital-12.web.app/' target="_blank" className='text-end text-white text-sm'>Copyright Fontam by ©Zedigital</a> 
                    </div>

    </footer>
  )
}
