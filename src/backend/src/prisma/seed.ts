import { prisma } from "../../db";

// import {hash} from "bcrypt";

async function main() {
    // const password = await hash('test', 10)
    // const user = await prisma.user.upsert({
    //     where: {email: 'test@test.com'},
    //     update: {},
    //     create: {
    //         email: 'test@test.com',
    //         name: 'test',
    //         createdAt: new Date(),
    //         updatedAt: new Date(),
    //         password
    //     }
    // })


    // console.log({user})
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })