import Image from "next/image";
import {useEffect, useState} from "react";
import Link from "next/link";
import {Nav} from "../components/Nav";

export default function Evaluation() {
    const [orateurs, setOrateurs] = useState([])
    const [vide, isVide] = useState(false)
    const [choix, setChoix] = useState(null)
    const date = new Date().toISOString().substr(0, 10).replace('T', ' ');

    useEffect(()=> {
        getOrateurs();
    }, [])

    // const submit = ()=> {
    // 	console.log(choix.nom)
    // 	console.log(choix.length)
    // }

    const submit = async () => {
        if (choix != null && choix.nom && choix.type && choix.dateSeance) {
            const vote = {
                nom: choix.nom,
                type: choix.type,
                dateSeance: choix.dateSeance
            }


            const response = await fetch('/api/users/vote', {
                method: 'POST',
                body: JSON.stringify(vote)
            });

            // console.log(response)
            if (!response.ok) {
                throw new Error(response.statusText)
            } else {
                if(response.status == 201) {
                    alert('Vote effectué avec succès !')
                    window.location.reload();
                    localStorage.setItem("vot_eval", 'true');
                    localStorage.setItem("date_eval", date);
                    // setNom('')
                    // setType('')
                    // setDateSeance('')
                }
            }
        } else alert('Veuillez choisir un candidat !')
    }



    async function getOrateurs() {
        // console.log(localStorage.getItem('vot_or'))
        const ip = await fetch('https://api.db-ip.com/v2/free/self')
        // console.log('ip address', ip.ipAddress)
        // const res = await ip.json()
        // console.log('ip address', res.ipAddress)
        // setIp(res.ipAddress)
        const response = await fetch("/api/users?type=2");
        if(response.ok) {
            if (response.status === 204) {
                isVide(true);
            } else {
                const data = await response.json();
                setOrateurs(data);
                isVide(false)
            }
        }
    }
    const change =(value) => {
        // console.log(value);
        setChoix(value)
    }
    // console.log(vide)

    if (orateurs.length > 0) {
        return (
            <>
                <Nav/>
                <div className="md:container flex justify-center">
                    <div className="sm:w-full md:w-5/12 lg:w-5/12">
                        <div className="text-center">
                            <Image src="/../public/logo.jpg" width={200} height={200}/>
                        </div>
                        <div className="border-2 p-4" style={{marginBottom: 50}}>

                            {!vide ?
                                <>
                                    <h1 className="text-xl h-16"><strong>Note : </strong>Choisissez votre meilleur évaluateur
                                    </h1>
                                    {
                                        orateurs.map(value => (
                                            <div className="rounded border-2 sm:w-full mb-8" key={value.id}>
                                                <div className="flex items-center h-12">
                                                    {/*<input type="radio" name="kad" value="kad" id="kad" onChange={change} />*/}
                                                    <input
                                                        id={value.id}
                                                        value={value}
                                                        name="platform"
                                                        type="radio"
                                                        className="w-14 h-5"
                                                        onChange={()=>change(value)}
                                                    />
                                                    <label htmlFor="vote" className='text-xl'>{value.nom}</label>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <br/>
                                    {
                                        (localStorage.getItem('vot_eval') && localStorage.getItem('date_eval') == date ) ?
                                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                                <div style={{color: 'green'}}>
                                                    Votre vote a été pris en compte !
                                                </div>
                                                {/*<div>*/}
                                                {/*    <Link href='/improvisation'>*/}
                                                {/*        <a style={{color:'royalblue', textDecoration:'underline'}}>Prochain vote--></a>*/}
                                                {/*    </Link>*/}
                                                {/*</div>*/}
                                            </div>
                                            :
                                            <div className="flex justify-items-end">
                                                <div className="rounded border-2 h-10 border-[#3490DC] m-4 bg-[#3490DC] w-auto">
                                                    <button className="text-white w-full text-xl px-12" onClick={submit}>Valider</button>
                                                </div>
                                            </div>
                                    }
                                </>
                                :
                                <div className="flex justify-center rounded h-10"
                                     style={{backgroundColor: "#c82333", color: '#fff', alignItems: 'center'}}>
                                    Aucun enregistrement trouvé !
                                </div>
                            }


                        </div>
                    </div>
                </div>
                <br/>
                <div className="flex items-center justify-center flex-wrap bg-teal p-4 bg-primaire" style={{position: 'fixed', width: '100%',  bottom: 0}}>
                    <p style={{display: 'flex', justifyContent: 'center', color:'#fff'}}>
                        © 2021 By Abdel-Kader Sabiou

                    </p>
                </div>
            </>
        );
    } else {
        return (
            <div className="md:container flex justify-center">
                <div className="sm:w-full md:w-5/12 lg:w-5/12">
                    <div className="text-center">
                        <Image src="/logo.jpg" width={200} height={200}/>
                    </div>
                    <div className="border-2 p-4"  style={{marginBottom: 50}}>

                        {!vide ?
                            null
                            :
                            <div className="flex justify-center rounded h-10"
                                 style={{backgroundColor: "#c82333", color: '#fff', alignItems: 'center'}}>
                                Aucun candidat trouvé !
                            </div>
                        }

                    </div>

                </div>
            </div>
        );
    }
}
