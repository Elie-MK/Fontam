import React from 'react'

export default function AccueilM() {
  return (
    <div className= ' grid md:grid-cols-2'>
        <div className='p-5 flex items-center' data-aos="fade-up"
     data-aos-duration="1000">
            <h1 className='text-6xl font-Jost text-blue-900'>Notre vision <br/>et mission</h1>
        </div>
        <div className='p-5'>
            <div className='text-justify md:text-xl' data-aos="fade-up"
     data-aos-duration="3000">
            La <span className='font-bold'>Fondation Taylor Muanza</span> a comme objectif de 
            changer la conception que les jeunes ont de leur 
            apport et de leur responsabilité dans la société.<br/><br/>
            Les jeunes n’ayant pas encore acquis la force et la capacité, il faut nous mobiliser pour 
            les permettre d’aquérir les outils nécessaires pour le faire.<br/><br/>
            C’est pourquoi nous la <span className='font-bold'>FONTAM</span> en cycle, nous avons décidé de former 
            et d’informer la jeunesse.
            </div>
        </div>
    </div>
  )
}
