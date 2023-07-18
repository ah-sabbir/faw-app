import { PrismaClient } from '@prisma/client'
import bcrypt from "bcryptjs";
const prisma = new PrismaClient()

async function main() {
    
    const salt = bcrypt.genSaltSync(10);
          
    const hashedPassword = await bcrypt.hash("12345678", salt);
    // creating user
    const user = await prisma.user.create({
      data: {
        firstName: "Md",
        lastName: "Jhon",
        email : "demo@gmail.com",
        password: hashedPassword,
      },
    });

    const tag = await prisma.tag.create({
        data: {
            name: "Summer"
        },
      });
    
    console.log("seeded!")
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