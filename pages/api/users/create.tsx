import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client"


export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient({log: ["query"]});

    try {
        const user = JSON.parse(req.body);
        // const dateSean = new Date(user.dateSeance);
        console.log(new Date(user.dateSeance))
        // console.log(candidatData)
        // console.log('candidatData.type')
        const candidat = await prisma.user.create({
            data: {
                nom: user.nom,
                type: parseInt(user.type),
                dateSeance: user.dateSeance
            }

        }).then(res=> {
            console.log('res', res)
        }).catch(err=> {
            console.log(err)
        });
        console.log('candidats');
        console.log(candidat);
        res.status(201);
        res.json('Enregistrement effectué avec succès')

    } catch (e) {
        res.status(500);
        res.json({error: e.message});
    } finally {
        await prisma.$disconnect();
    }

}
