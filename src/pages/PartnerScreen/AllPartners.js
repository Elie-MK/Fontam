import React from 'react'

export default function AllPartners() {
  return (
    <div>
        <div className=''>
            {/* <PartnerAlls picture="jaymedical.jpg"   text=" Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem" /> */}
            <PartnerAlls picture="tolisante.jpg"   text="TOLI SANTÉ est un cabinet spécialisé dans le conseil, l’évaluation et l’ingénierie sanitaire. Il œuvre auprès des ONG, des hôpitaux, cliniques et toutes structures composantes du monde sanitaire africain. Le cabinet souhaite restaurer et développer la qualité des services sanitaires grâce à la diversité de ses offres qui concernent la  gestion de projet, le conseil et l’accompagnement, l'évaluation, le contrôle qualité/respect des normes, ou encore la formation. Notre partenaire nous aide à concrétiser nos projets plus particulièrement à implanter les Jay médical clinic by Fontam. Suivez les sur leur réseaux sociaux @toli_sante" />
            <PartnerAlls picture="horesco.jpg"   text="Horesco est un service traiteur spécialisé dans la cuisine congolaise. Notre partenaire nous fourni des services traiteurs à chacun de nos événements. Suivez les sur leur réseaux sociaux @horescogroup" />
        </div>
    </div>
  )
}

const PartnerAlls = ({picture, text})=>{
    return(
        <div className='grid md:grid-cols-2' >
                <div className='flex items-center justify-center p-3 md:border-b-2 border-blue-900'>
                    <div data-aos="fade-zoom"
     data-aos-duration="3000">
                        <img src={picture} className='w-[300px] h-[200px]'/>
                    </div>
                </div>
                <div className='flex items-center justify-center bg-blue-900'>
                    <div >
                    <p className='text-justify p-3 text-white' data-aos="fade-zoom"
     data-aos-duration="3000">{text}</p>
                    <div className='bg-white border-b-2 border-white flex items-end justify-end'></div>
                    </div>
                </div>
            </div>
    )
}