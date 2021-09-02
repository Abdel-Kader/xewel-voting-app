import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client"

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient({log: ['query']});

    const type = req.query.type;
    console.log(req.query)
    const date = new Date().toISOString().substr(0, 10).replace('T', ' ');
    try {
        if (typeof type == "string") {
            const users = await prisma.voting.groupBy({
                by: ['nom'],
                where: {
                    type: parseInt(type),
                    dateSeance: date
                },
                _sum: {
                    voix: true
                }
            });
            if (users.length > 0) {
                res.json({users})
            } else {
                res.status(204)
                res.json({message: 'Aucun enregistrement trouvé !'})
            }
        }
    } catch (e) {
        res.status(500);
        res.json({error: e.message});
    } finally {
        await prisma.$disconnect();
    }

}
