import React from 'react'

export default function BarTwo() {
  return (
    <div>
        <div>
            <div className="bg-blue-900 p-5 flex items-center justify-center">
                <h1 className='text-4xl font-bold text-center text-white font-Jost'>Nos volontaires</h1>
            </div>
            <div className='grid md:grid-cols-5'>
                <Equipe image="/volontaires/taylor_muanza.png" name="Taylor MUANZA" poste="Président" />
                <Equipe image="/volontaires/milca_muanza.png" name="Milca MUANZA" poste="Vice-Président" />
                <Equipe image="/volontaires/baraka.png" name="BARAKA" poste="Secrétaire Général" />
                <Equipe image="/volontaires/toto-michel.png" name="Toto-Michel" poste="Conseiller Spécial" />
                <Equipe image="/volontaires/Clement_kalamba.png" name="Clement KALAMBA" poste="Coordonnateur Kinshasa" />
                <Equipe image="/volontaires/anais_pizzetta.png" name="Anaïs PIZZETTA" poste="Coordinatrice France" />
                <Equipe image="/volontaires/bruno_ndombe.png" name="Bruno NDOMBE" poste="Coordonnateur Afrique du sud" />
                <Equipe image="/volontaires/Sandra_Aiwa.png" name="Sandra AIWA" poste="Assistante administrative" />
                <Equipe image="/volontaires/estelle.png" name="Estelle" poste="Bénévole France" />
                <Equipe image="/volontaires/sayi_keyita.png" name="Sayi KEYITA" poste="Bénévole France" />
            </div>
        </div>
    </div>
  )
}

const Equipe = ({image, name, poste})=>{
    return(
        <div className='col-span-1 p-3 flex justify-center items-center' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000" data-aos-easing="linear">
            <div>
                    <img src={image} className='w-40 flex items-center justify-center'/>
                    <div className='flex items-center justify-center'>
                        <div>
                            <h1 className='text-blue-900 font-bold center flex justify-center'>{name}</h1>
                            <p className='text-blue-900 text-center'>{poste}</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}