import {useEffect, useState} from "react";
import {TrashIcon} from "@heroicons/react/outline";


export default function Homea() {
    const [orateurs, setOrateurs] = useState([])
    const [evals, setEvals] = useState([])
    const [impro, setImpros] = useState([])
    const [videO, isVideO] = useState(false)
    const [videE, isVideE] = useState(false)
    const [videI, isVideI] = useState(false)


    async function getOrateurs() {
        const response = await fetch("/api/users?type=1");
        if (response.ok) {
            if (response.status === 204) {
                isVideO(true);
            } else {
                const data = await response.json();
                setOrateurs(data);
                isVideO(false)
            }
        }
    }

    async function getEvals() {
        const response = await fetch("/api/users?type=2");
        if (response.ok) {
            if (response.status === 204) {
                isVideE(true);
            } else {
                const data = await response.json();
                setOrateurs(data);
                isVideE(false)
            }
        }
    }

    async function getImpros() {
        const response = await fetch("/api/users?type=3");
        if (response.ok) {
            if (response.status === 204) {
                isVideI(true);
            } else {
                const data = await response.json();
                setOrateurs(data);
                isVideI(false)
            }
        }
    }

    useEffect(() => {
        getOrateurs();
        // alert(orateurs.length)
        getEvals();
        getImpros();
    }, [])

    return (
        <div className="md:container flex ml-10 justify-center">
            <div className="w-3/4">

                <div className="mt-10 p-4">
                    <>
                        {!videO && orateurs.length > 0 ?
                            <>

                                <h1 className="text-lg font-bold mb-5" style={{fontWeight: 'bold'}}>Liste des
                                    évaluateurs</h1>
                                <table className="w-full border-collapse border">
                                    <thead>
                                    <tr>
                                        <th className="border">Nom et prénom</th>
                                        <th className="border">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        orateurs.map(value => (
                                            <tr key={value.id}>
                                                <td className="border-2 border-black border-opacity-50">{value.nom}</td>
                                                <td className="border-2 border-black border-opacity-50">
                                                    <TrashIcon className="h-6 mb-1 text-red-700"
                                                               onClick={() => alert('sd')}/>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </> : null}

                    </>
                </div>
            </div>
        </div>
    )
}
