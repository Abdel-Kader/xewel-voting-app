import {Bar} from 'react-chartjs-2';
import {AdminNav} from "../../components/AdminNav";
import {useEffect, useState} from "react";

export default function Result_Evaluateur() {

    const [result, setResult] = useState();
    const [data, setData] = useState()

    useEffect(()=> {
        getOrateurs()
        // if(result != undefined) {
        //
        // }
    }, [])

    async function getOrateurs() {
        const response = await fetch("/api/users/result?type=2");
        console.log(response)
        if(response.ok) {
            if (response.status === 204) {

            } else {
                const data = await response.json();
                setResult(data.users);
                console.log('resultssssssss======>', data)
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
                            label: 'resultats du meilleur évaluateur'
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
            <div className="flex justify-center">
                <h2 style={{textAlign: 'center'}}>Nombre total de votants j: {result}</h2>
                <br/>
                <br/>
                <br/>
                <div style={{
                    width: 900,
                    display: 'flex',
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
