import bcrypt from "bcryptjs";
import prisma from '../lib/prisma';

async function main() {
    const password = await bcrypt.hash("12345678", 10);
   const user = await prisma.user.create({
        data: {
            firstName:"Hello",
            lastName:"John",
            email:"admin2@gmail.com",
            phone:"01300000002",
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

    const tags = await prisma.tag.create({
        data: {
            name: "hello"
        }
    })


    await prisma.blogPost.create({
        data: {
            title: "hello",
            content: "blog content",
            userId: user?.id,
            tagId: tags?.id
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