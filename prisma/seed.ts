import prisma from '../lib/prisma';
import bcrypt from "bcryptjs";

async function main() {
    const password = await bcrypt.hash("12345678", 10);
   const user = await prisma.user.create({
        data: {
            firstName:"Hello",
            lastName:"John",
            email:"admin@gmail.com",
            phone:"0130000000",
            password: password
        },
    });
    const shop = await prisma.shop.create({
        data: {
            name: "shop1",
            description: "this is shop",
            userId: user?.id
        },
    });
    const category = await prisma.productCategory.create({
        data: {
            name: "Summer"
        },
    });

    await prisma.product.create({
        data: {
            name: "hello",
            description: "product description",
            price: 500,
            quantity: 10,
            image: "hello",
            categoryId: category?.id,
            shopId: shop?.id
        }
    })
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