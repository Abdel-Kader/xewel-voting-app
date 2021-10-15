import {Bar} from 'react-chartjs-2';
import {AdminNav} from "../../components/AdminNav";
import {useEffect, useState} from "react";

export default function Result_Improvisation() {

    const [result, setResult] = useState();
    const [data, setData] = useState()
    const [nb, setNb] = useState()

    useEffect(() => {
        getOrateurs()
        getOrateursNb()
        // if(result != undefined) {
        //
        // }
    }, [])

    async function getOrateursNb() {
        const response = await fetch("/api/users/votant?type=1");
        if (response.ok) {
            if (response.status === 204) {

            } else {
                const data = await response.json();
                // alert(JSON.stringify())
                setNb(data.users.length)
            }
        }
    }

    async function getOrateurs() {
        const response = await fetch("/api/users/result?type=3");
        if (response.ok) {
            if (response.status === 204) {

            } else {
                const data = await response.json();
                setResult(data);
                let foo = [];
                let res = []
                for (var i = 0; i < data.users.length; i++) {
                    foo.push(data.users[i].nom);
                    res.push(parseInt(data.users[i]._sum.voix));
                }
                // console.log(res)
                setData({
                    // labels: ['January', 'February', 'March', 'April', 'January', 'February', 'March', 'April'],
                    labels: foo,
                    datasets: [
                        {
                            data: res,
                            backgroundColor: '#770d24',
                            label: 'resultats de la meilleure improvisation'
                        }
                    ]
                });
                // isVide(false)
            }
        }
    }



    return (
        <>
            <AdminNav/>
            <div style={{marginTop: 30}}>

                {nb > 0 ?
                    <label className="text-xl text-center underline" style={{textAlign: 'center', marginLeft: '50%'}}>Nombre
                        de votant : {nb}</label> : null}
                <div style={{
                    width: 900,
                    display: 'flex',
                    marginLeft: '25%',
                    marginTop: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center'
                }}>
                    <Bar
                        data={data}
                        options={{
                            responsive: true,
                            label: false,
                        }}
                    />
                </div>
            </div>
        </>
    );
}
