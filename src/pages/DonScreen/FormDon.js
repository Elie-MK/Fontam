import React, { useState } from 'react'


export default function FormDon() {
    const [select, setSelect]=useState("30")
    const [value, setValue] = useState("");
    const [civility, setCivility] = useState("");
    const [writeEmail, setWriteEmail]=useState("")
    const [inputValue, setInputValue] = useState("");




    const handleChange = (event) => {
        const newValue = event.target.value;
        if (isNaN(newValue)) {
          // Si la nouvelle valeur n'est pas un nombre, ne la mettez pas à jour.
          return
        }
        setValue(newValue);
      };


      const handleCivility = (e)=>{
        setCivility(e.target.value);
      }
    //   console.log(civility)

     
      const handleInputChange = (event) => {
        const value = event.target.value;
        const letters = /^[A-Za-z]+$/;
        if (value.match(letters) || value === "") {
          setInputValue(value);
        }
      };



      const handleSubmit = (event) => {
        event.preventDefault();
        if(!writeEmail.trim() || !inputValue.trim() ){
            alert("veuillez bien remplir le formulaire")
        }else{
            alert("Formulaire envoyer, vous serez redirectionner !")
            setWriteEmail("")
            setInputValue("")
            setValue("")
            setCivility("M")
            // window.location.href ="https://www.paypal.me/fontam?locale.x=fr_CA";
            window.open("https://www.paypal.me/fontam?locale.x=fr_CA", "_blank")
        }
        // setTimeout(window.location.href ="https://www.paypal.me/fontam?locale.x=fr_CA", 3000)
    }
      const handleCb = (event) => {
        event.preventDefault();
        if(!writeEmail.trim() || !inputValue.trim() ){
            alert("Veuillez bien remplir le formulaire")
        }else{
            alert("Formulaire envoyer, vous serez redirectionner !")
            setWriteEmail("")
            setInputValue("")
            setValue("")
            setCivility("M")
        }
      };

      
  return (
    <div>
        <h1 className='text-center font-Jost text-5xl font mt-4  text-blue-900'>FORMULAIRE DE DON</h1>
    <div className='grid md:grid-cols-3'>
        <form className=' p-5' >
            <div className='flex justify-center'>
            <div className=''>
            <div className='flex justify-center'>
                <div className=''>
                <h3 className='font-Jost text-lg'>1. Mon don</h3>
   
                <div className='mt-3'>
                <div className='flex gap-3'>
                    <div className={`hover:bg-blue-900 border-blue-900 hover:text-white p-2 text-xl cursor-pointer border text-gray-600 ${select === "30"? "bg-blue-900 text-white":null}`} onClick={()=>setSelect('30')} value={select}>30$</div>
                    <div className={`hover:bg-blue-900 border-blue-900 hover:text-white p-2 text-xl cursor-pointer border text-gray-600 ${select === "50"? "bg-blue-900 text-white":null}`} onClick={()=>setSelect('50')} value={select}>50$</div>
                    <div className={`hover:bg-blue-900 border-blue-900 hover:text-white p-2 text-xl cursor-pointer border text-gray-600 ${select === "90"? "bg-blue-900 text-white":null}`} onClick={()=>setSelect('90')} value={select}>90$</div>
                    <div className={`hover:bg-blue-900 border-blue-900 hover:text-white p-2 text-xl cursor-pointer border text-gray-600 ${select === "150"? "bg-blue-900 text-white":null}`} onClick={()=>setSelect('150')} value={select}>150$</div>
                </div>
                <div>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center p-2 ">
                            <span className="text-gray-900 sm:text-lg">$</span>
                            </div>
                            <input
                            type="text"
                            name="price"
                            id="price"
                            value={value}
                            onChange={handleChange}
                            className="block w-full rounded-md border  pl-7 p-3 text-gray-900 ring-1 ring-inset ring-blue-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900  sm:text-sm "
                            placeholder="Montant libre"
                            />
                        </div>
                </div>
                </div>
            </div>
            </div>

            <div>
                <h1 className='font-Jost text-lg mt-3'>2. Mes coordonées</h1>
                <div className='mt-3'>
                <input
                            type="email"
                            name="email"
                            id="Email"
                            value={writeEmail}
                            onChange={(e)=>setWriteEmail(e.target.value)}
                            className="block w-full rounded-md border  pl-3 p-3 text-gray-900 ring-1 ring-inset ring-blue-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900  sm:text-sm "
                            placeholder="Email *"
                            />
                    <div className='mt-3'>
                        <div className='flex gap-4'>
                            <select
                                id="currency"
                                name="currency"
                                onChange={handleCivility}
                                value={civility}
                                className="h-full ring-1 ring-inset ring-blue-900  border bg-transparent pl-2 pr-7 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm p-3"
                            >
                                <option value="M" >M</option>
                                <option value="Mme" >Mme</option>
                                <option value="Mlle" >Mlle</option>
                            </select>
                            <input
                            type="text"
                            name="noms"
                            id="name"
                            value={inputValue}
                            onChange={handleInputChange}
                            className="block w-full rounded-md border pl-3 p-3 text-gray-900 ring-1 ring-inset ring-blue-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900  sm:text-sm "
                            placeholder="Noms *"
                            />
                        </div>
                    </div>
                </div>
                <div className='mt-5 '>
                    <div>
                    <h1 className='font-Jost text-lg'>3. Moyen de paiement</h1>
                    <button className='p-3 border border-blue-900 mt-5 rounded-xl font-Jost font-bold hover:bg-blue-900 hover:text-white transition ease-in-out duration-1000 flex justify-center center' onClick={handleSubmit}>Payer via Paypal</button>
                    <button className='p-3 border border-blue-900 mt-5 rounded-xl font-Jost font-bold hover:bg-blue-900 hover:text-white transition ease-in-out duration-1000 flex justify-center center' onClick={handleCb}>Payer par CB</button>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </form>


            <div className=''>
                <div className='p-3'>
                    <h1 className='font-Jost '>NOUS SOUTENIR EN TOUTE CONFIANCE</h1>
                    <p className='text-justify mt-3'>
                        Ce site internet est 100% sécurisé. Toutes les informations bancaires pour traiter le paiement sont cryptées grâce au protocole SSL. Elles restent strictement confidentielles. Pour en être certains : l’espace est sécurisé dès que l’URL de Fontam commence par https.<br/><br/>
                        Ces données peuvent faire l’objet d’échanges à des fins de prospection.<br/><br/>
                        Notre service donateurs est à votre disposition pour répondre à toutes vos questions. N’hésitez pas à nous contacter par e-mail : info@fontam.org 
                    </p>
                </div>
            </div>
                <div className='p-3'>
                    <h1 className='font-Jost '>CONFIDENTIALITÉS DES DONNÉES PERSONNELLES</h1>
                    <p className='text-justify mt-3'>
                    Les données recueillies dans ce formulaire sont destinées au Département de la collecte de dons. Elles sont indispensables pour la prise en compte et le traitement de votre don.<br/><br/>

                    Conformément au règlement général sur la protection des données (RGPD) et à la loi « Informatique et Libertés » du 6 janvier 1978, vous disposez d'un droit d'accès, de modification, de rectification et de suppression des données vous concernant.<br/><br/>

                    Vous pouvez exercer ces droits en nous adressant une demande écrite, accompagnée d’un titre d’identité, par email à info@fontam.org.
                    </p>
                </div>
        
    </div>
    </div>
  )
}
