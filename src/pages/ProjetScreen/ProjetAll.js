import React from 'react'

export default function ProjetAll() {
  return (
    <div>
        <div className='p-3'>
            <Allprojets title="SANTE" src="jaymedical.jpg" text="La FONTAM s'intéresse particulièrement à l'accessibilité des soins pour tous et à l'amélioration des soins de santé. Nous désirons créer des structures de santé permettant à tous de pouvoir bénéficier de soins de santé sécuritaire et de qualité. Nous soutenons les établissements de santé en fournissons des dons d'équipements médicaux. En partenariat avec le cabinet en élaboration de projet TOLI SANTÉ nous créons le Jay Médical C    enter, et nous avons besoin de vous pour concrétiser notre projet. " />
        </div>
        <div className='bg-blue-900 p-3'></div>
        <div className='p-3'>
        <Allprojets title="EDUCATION" text="La Fondation Taylor MUANZA est une organisation à but non lucratif qui s'engage à améliorer l'accès à l'éducation pour les jeunes défavorisés. Nous croyons que chaque enfant mérite une éducation de qualité, quelle que soit sa situation financière ou sociale.  Nous avons lancé un nouveau projet éducatif qui vise à fournir des ressources éducatives gratuites à tous les enfants qui en ont besoin. Notre projet consiste en la création d'une plateforme en ligne interactive qui proposera des cours en ligne gratuits pour les enfants de tous âges. Cette plateforme sera disponible en plusieurs langues pour toucher un public aussi large que possible. Notre objectif est de permettre aux enfants de développer leur potentiel en leur offrant des outils éducatifs de qualité. Nous espérons ainsi réduire l'écart entre les enfants issus de milieux défavorisés et ceux qui ont accès à une éducation de qualité. Nous sommes convaincus que ce projet éducatif aidera à combler cette lacune et permettra aux enfants de réaliser leurs rêves.Nous sommes conscients que ce projet ne peut être réalisé seul. Nous recherchons des partenaires, des donateurs et des bénévoles pour nous aider à atteindre notre objectif. Nous croyons que, ensemble, nous pouvons créer un avenir meilleur pour les enfants en leur offrant une éducation de qualité. Nous sommes impatients de travailler avec vous pour rendre ce projet éducatif une réalité et offrir aux enfants un accès à une éducation de qualité." />
        </div>
    </div>
  )
}

const Allprojets = ({title, text, src})=>{
    return(
        <div className='grid md:grid-cols-2 mt-5'>
                <div className=' flex items-center justify-center mb-9 mt-4' data-aos="fade-right"
     data-aos-duration="3000">
                    <div>
                        <h1 className='md:text-7xl text-5xl font-Jost text-blue-900'>{title}</h1>
                        <img src={src} className="w-40 mt-3"/>
                    </div>
                </div>
                    <div className='flex items-center justify-center' data-aos="fade-right"
     data-aos-duration="3000">
                        <p className='text-justify'>{text}</p>
                    </div>
            </div>
    )
}