import Image from "next/image";
import {useState} from "react";

export default function AjoutOrateur() {
    const [nom, setNom] = useState("")
    const [type, setType] = useState("")
    const [dateSeance, setDateSeance] = useState("")

    const change = e => {
        // console.log(e.target.value);
        setNom(e.target.value)
    }

    const changeType = e => {
        // console.log(e.target.value);
        setType(e.target.value)
    }

    const changeDate = e => {
        console.log(e.target.value);
        setDateSeance(e.target.value)
    }

    const submit = async () => {
        if (nom && type && dateSeance) {
            const user = {
                nom,
                type,
                dateSeance
            }
            const response = await fetch('/api/users/create', {
                method: 'POST',
                body: JSON.stringify(user)
            });

            console.log(response)
            if (!response.ok) {
                throw new Error(response.statusText)
            } else {
                if(response.status == 201) {
                    alert('Enregistrement effectué avec succès !')
                    setNom('')
                    setType('')
                    setDateSeance('')
                }
            }
        } else alert('Veuillez remplir tous les champs !')
    }


    return (
        <div className="md:container flex justify-center">
            <div className="w-full md:w-1/3 lg:w-1/3">
                <div className="text-center">
                    <Image src="/logo.jpg" width={200} height={200}/>
                </div>
                <div className="border-2 w-full p-4">
                    <h1 className="text-xl h-16"><strong>Note : </strong>Formulaire d'ajout</h1>

                        <div className="w-full">
                            <label>Nom et prénom</label>
                            <br/>
                            <input
                                name="nom"
                                type="text"
                                value={nom}
                                required
                                placeholder="Nom et prénom"
                                className="h-12 w-full rounded border-2 mb-8 h-12 px-4"
                                onChange={change}
                            />
                            {/*<input type="radio" name="kad" value="kad" id="kad" onChange={change} />*/}
                        </div>

                        <div className="">
                            {/*<input type="radio" name="Me" value="Me" id="Me" onChange={change} />*/}
                            <label>Type</label>
                           <select
                               onChange={changeType}
                               value={type}
                               className="h-12 w-full rounded border-2 mb-8 h-12 px-4"
                               required>
                               <option>Choisir une option</option>
                               <option value="1">Orateur</option>
                               <option value="2">Evaluateur</option>
                               <option value="3">Improvisation</option>
                           </select>
                        </div>
                        <br/>
                    <div className="">
                        {/*<input type="radio" name="Me" value="Me" id="Me" onChange={change} />*/}
                        <label>Date de la séance</label>
                        <input
                            onChange={changeDate}
                            type="date"
                            required
                            value={dateSeance}
                            className="h-12 w-full rounded border-2 mb-8 h-12 px-4"/>
                    </div>
                    <br/>
                    <div className="flex justify-items-end">
                        <div className="rounded border-2 h-10 border-[#3490DC] m-4 bg-[#3490DC] w-auto">
                            <button
                                onClick={submit}
                                className="text-white h-10 w-full text-xl px-9">
                                Enregistrer
                            </button>
                        </div>
                    </div>

                </div>
            <br/>
            <br/>
            </div>
        </div>
    );
}
