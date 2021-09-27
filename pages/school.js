import {SNav} from "../components/SNav";
import Image from 'next/image'
import {Bar, Pie} from 'react-chartjs-2';


export default function School() {

    const data = {
        labels: ['filles', 'garçons'],
        datasets: [
            {
                label: 'Nombre total d\'élèves par genre',
                data: [300, 352],
                backgroundColor: [
                    'royalblue',
                    'green'
                ]
            }
        ]
    }

    const data1 = {
        labels: ['primaire', 'collége', 'lycée'],
        datasets: [
            {
                label: 'Nombre total d\'élèves par niveau',
                data: [250, 352, 405],
                backgroundColor: [
                    'rgb(93, 208, 200)',
                    'rgb(251, 97, 149)',
                    '#b077f4'
                ]
            }
        ]
    }

    const data2 = {
        labels: ['2019', '2020', '2021'],
        datasets: [
            {
                label: 'Total',
                data: [350, 462, 300],
                backgroundColor:
                    '#b077f4'
            },
            {
                label: 'Fille',
                data: [150, 250, 150],
                backgroundColor:
                    'rgb(251, 97, 149)',

            },
            {
                label: 'Garçon',
                data: [200, 212, 150],
                backgroundColor:
                    '#fec558',

            }
        ]
    }
    return (
        <>
            <SNav/>
            <div style={{marginLeft: 100, marginTop:72}}>
                <h1 style={{fontWeight: 'bold', fontSize: 18, color:'gray'}}>Accueil</h1>
                <hr/>
                <hr/>
                {/*<div className="container" style={{marginTop:100,marginLeft:'15%',width:'70%',display: 'flex',justifyContent:'space-around',alignItems: 'center' }}>*/}
                {/*    <div className="grid justify-center text-center rounded border-2 p-5">*/}
                {/*        <Image src="/images.jpeg" width={150} height={100}/>*/}
                {/*        <div className="mt-3 text-xl">Primaire</div>*/}
                {/*    </div>*/}
                {/*    <div className="grid justify-center text-center rounded border-2 p-5">*/}
                {/*        <Image src="/logo-college.jpg" width={150} height={100}/>*/}
                {/*        <div className="mt-3 text-xl">Collége</div>*/}
                {/*    </div>*/}
                {/*    <div className="grid justify-center text-center rounded border-2 p-5">*/}
                {/*        <Image src="/logo_aides_lycee.jpg" width={150} height={100}/>*/}
                {/*        <div className="mt-3 text-xl">Lycée</div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            {/*    -------------------------------------------------------------------------------*/ }
            <div style={{marginTop:100,
                marginLeft:'15%',
                width:'70%',
                display: 'flex',
                justifyContent:'space-around',
                alignItems: 'center' }}>

                    <div className="flex" style={{marginRight: 50}} >
                        <Pie
                            data={data}
                            height={300}
                            width={300}
                        />
                    </div>

                <div className="flex">
                    <Bar
                        data={data1}
                        height={300}
                        width={300}
                    />
                </div>
            </div>

                <div style={{display: 'flex', marginTop:50}}>
                    <Bar
                        data={data2}
                        height={55}
                        width={200}
                    />
                </div>

            </div>
        </>
    )
}
