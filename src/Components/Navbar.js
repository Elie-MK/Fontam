import React, { useState } from 'react'
import {BiMenu} from 'react-icons/bi'
import {MdClear} from 'react-icons/md'
import { FaFacebookF } from 'react-icons/fa';
import { AiFillTwitterSquare, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai';
import { Link } from 'react-router-dom';


export default function Navbar() {
    const [btn, setBtn]=useState(false)
    const showNavbar = ()=>{
        setBtn(!btn)
      }
      const [click, setClick]=useState("accueil")


      const scrollup = ()=>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        })
      }
  return (
    <nav className=''>
        <div className='flex md:justify-between justify-center items-center'>
            <div className='md:flex mt-5 flex'>
                <img className='md:w-40 w-20 ' src='fontam_ca.png' />
                <img className='md:w-40 w-20 md:ml-5  ' src='france_fontam.png'/>
            </div>
            <div className='md:flex mt-5 flex mr-9'>
                <img className='md:w-32 w-16 ' src='fontam_rdc.png' />
                <img className='md:w-32 w-16 md:ml-5 ' src='fontam_af.png'/>
            </div>
        </div>
        <div className='md:flex justify-center items-center md:mt-[-110px] mt-[-70px] hidden cursor-pointer' onClick={scrollup}>
            <h1 className='md:text-8xl text-6xl font-italiana ' ><Link to="/">FONTAM</Link></h1>
        </div>

        {/* Banner */}
        <div className='mt-5 bg-blue-900 md:p-5 p-2 '>
        <div className='md:hidden flex items-center absolute ml-24' onClick={scrollup}>
            <h1 className='text-4xl font-Jost text-white'><Link to="/">FONTAM</Link></h1>
        </div>
        <div className=' md:items-center md:justify-center hidden md:flex '>
            <div className='md:flex md:gap-5 gap-4 '>
                        <div className={`text-white text-xs cursor-pointer  ${click === "accueil"? "text-white font-bold" : null}`} onClick={()=>setClick('accueil')}><Link to="/">ACCUEIL</Link></div>
                        <div className={`text-white text-xs cursor-pointer  ${click === "about"? "text-white font-bold" : null}`} onClick={()=>setClick('about')}><Link to="/a-propos-de-nous">A PROPOS DE NOUS</Link></div>
                        <div className={`text-white text-xs cursor-pointer  ${click === "structures"? "text-white font-bold" : null}`} onClick={()=>setClick('structures')}><Link to="/nos-structures"> NOS STRUCTURES  </Link></div>
                        <div className={`text-white text-xs cursor-pointer  ${click === "projet"? "text-white font-bold" : null}`} onClick={()=>setClick('projet')}><Link to="/nos-projets">NOS PROJETS</Link></div>
                        <div className={`text-white text-xs cursor-pointer  ${click === "part"? "text-white font-bold" : null}`} onClick={()=>setClick('part')}><Link to="/nos-partenaires">NOS PARTENAIRES</Link></div>
                        <div className={`text-white text-xs cursor-pointer  ${click === "contact"? "text-white font-bold" : null}`} onClick={()=>setClick('contact')}><Link to='/contact'>CONTACTEZ-NOUS</Link></div>
            </div>
            <div>
                
            </div>
                <div className='flex md:ml-20 md:gap-3'>
                    <div><a target="_blank" href='https://m.facebook.com/FontamOfficielle?mibextid=LQQJ4d'><FaFacebookF  size={20} className='text-white cursor-pointer'/></a></div>
                    <div><AiFillTwitterSquare size={20} className='text-white cursor-pointer'/></div>
                    <div><a target="_blank" href=' https://instagram.com/fontamofficiel?igshid=NTdlMDg3MTY='><AiOutlineInstagram size={20} className='text-white cursor-pointer'/></a> </div>
                    <div><a target="_blank" href='https://www.youtube.com/channel/UC-Tk4gcHIyg328TzqkZlSiA'><AiFillYoutube size={20} className='text-white cursor-pointer'/></a></div>
                </div>
        </div>
       <div className='md:hidden'> 
        {
    !btn ? (
      
      <button onClick={showNavbar} className="text-white"><BiMenu  size={30}/> </button>
      

    ):(

<button onClick={showNavbar} className="text-white"><MdClear size={30}/> </button>
    )
}
</div>
{
    btn && (
        <div className=' bg-blue-900 p-5 mt-[-30px] ml-5  transition ease-out delay-150 duration-200 h-54'>
            <div className='md:flex md:gap-5 gap-4 block mt-9 '>
                        <div className='text-white text-xs font-semibold hover:border-b-2 w-14 mb-3'><Link to="/">ACCUEIL</Link></div>
                        <div className='text-white text-xs font-semibold hover:border-b-2 w-[115px] mb-3'><Link to="/a-propos-de-nous">A PROPOS DE NOUS</Link></div>
                        <div className='text-white text-xs font-semibold hover:border-b-2 w-32 mb-3'><Link to="/nos-structures"> NOS STRUCTURES  </Link></div>
                        <div className='text-white text-xs font-semibold hover:border-b-2 w-24 mb-3'><Link to="/nos-projets">NOS PROJETS</Link></div>
                        <div className='text-white text-xs font-semibold hover:border-b-2 w-32 mb-3'><Link to="/nos-partenaires">NOS PARTENAIRES</Link></div>
                        <div className='text-white text-xs font-semibold hover:border-b-2 w-32 '><Link to='/contact'>CONTACTEZ-NOUS</Link></div>
            </div>
            <div className='flex md:ml-20 md:gap-5 items-center justify-end'>
                    <div><a target="_blank" href='https://m.facebook.com/FontamOfficielle?mibextid=LQQJ4d'><FaFacebookF  size={20} className='text-white cursor-pointer'/></a></div>
                    <div><AiFillTwitterSquare size={20} className='text-white cursor-pointer'/></div>
                    <div><a target="_blank" href=' https://instagram.com/fontamofficiel?igshid=NTdlMDg3MTY='><AiOutlineInstagram size={20} className='text-white cursor-pointer'/></a> </div>
                    <div><a target="_blank" href='https://www.youtube.com/channel/UC-Tk4gcHIyg328TzqkZlSiA'><AiFillYoutube size={20} className='text-white cursor-pointer'/></a></div>
                </div>
        </div>
            
    )

   }
        </div>
    </nav>
  )
}
