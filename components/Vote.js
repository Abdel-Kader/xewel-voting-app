// import Image from "next/image";
// import {useEffect, useState} from "react";
//
// export default function Vote(props) {
//     const [orateurs, setOrateurs] = useState([])
//     const [vide, isVide] = useState(false)
//
//     useEffect(()=> {
//         getOrateurs();
//     }, [])
//
//     async function getOrateurs() {
//         const response = await fetch("/api/users?type=" + props.type);
//         if(response.ok) {
//             if (response.status === 204) {
//                 isVide(true);
//             } else {
//                 const data = await response.json();
//                 setOrateurs(data);
//                 isVide(false)
//             }
//         }
//     }
//     const change = e => {
//         console.log(e.target.value);
//     }
//     console.log(vide)
//
//     if (orateurs.length > 0) {
//         return (
//             <div className="md:container flex justify-center">
//                 <div className="sm:w-full md:w-5/12 lg:w-5/12">
//                     <div className="text-center">
//                         <Image src="/../public/logo.jpg" width={200} height={200}/>
//                     </div>
//                     <div className="border-2 p-4">
//
//                         {!vide ?
//                             <>
//                                 <h1 className="text-xl h-16"><strong>Note : </strong>Choisissez votre meilleur Orateur
//                                 </h1>
//                                 {
//                                     orateurs.map(value => (
//                                         <div className="rounded border-2 sm:w-full mb-8" key={value.id}>
//                                             <div className="flex items-center h-12">
//                                                 {/*<input type="radio" name="kad" value="kad" id="kad" onChange={change} />*/}
//                                                 <input
//                                                     id={value.id}
//                                                     value={value.nom}
//                                                     name="platform"
//                                                     type="radio"
//                                                     className="w-14 h-5"
//                                                     onChange={change}
//                                                 />
//                                                 <label htmlFor="kad" className='text-xl'>{value.nom}</label>
//                                             </div>
//                                         </div>
//                                     ))
//                                 }
//                                 <br/>
//                                 <br/>
//                                 <div className="flex justify-items-end">
//                                     <div className="rounded border-2 h-10 border-[#3490DC] m-4 bg-[#3490DC] w-auto">
//                                         <button className="text-white w-full text-xl px-12">Valider</button>
//                                     </div>
//                                 </div>
//                             </>
//                             :
//                             <div className="flex justify-center rounded h-10"
//                                  style={{backgroundColor: "#c82333", color: '#fff', alignItems: 'center'}}>
//                                 Aucun enregistrement trouvé !
//                             </div>
//                         }
//
//
//                     </div>
//                 </div>
//             </div>
//         );
//     } else {
//         return (
//             <div className="md:container flex justify-center">
//                 <div className="sm:w-full md:w-5/12 lg:w-5/12">
//                     <div className="text-center">
//                         <Image src="/../public/logo.jpg" width={200} height={200}/>
//                     </div>
//                     <div className="border-2 p-4">
//
//                         {!vide ?
//                             null
//                             :
//                             <div className="flex justify-center rounded h-10"
//                                  style={{backgroundColor: "#c82333", color: '#fff', alignItems: 'center'}}>
//                                 Aucun enregistrement trouvé !
//                             </div>
//                         }
//
//
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
