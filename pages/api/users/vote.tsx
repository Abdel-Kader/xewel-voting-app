import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client"


export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient({log: ["query"]});

    try {
        const user = JSON.parse(req.body);
        await prisma.voting.create({
            data: {
                nom: user.nom,
                type: parseInt(user.type),
                voix: 1,
                ip: '0000',
                dateSeance: user.dateSeance
            }

        }).then(res=> {
            console.log('res', res)
        }).catch(err=> {
            console.log(err)
        });
        res.status(201);
        res.json('Vote effectué avec succès')

    } catch (e) {
        res.status(500);
        res.json({error: e.message});
    } finally {
        await prisma.$disconnect();
    }

}
