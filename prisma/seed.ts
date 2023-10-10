import bcrypt from "bcryptjs";
import prisma from '../lib/prisma';




async function main() {
    const password = await bcrypt.hash("12345678", 10);
   const user = await prisma.user.create({
        data: {
            firstName:"Hello",
            lastName:"John",
            email:"admin2@gmail.com",
            phone:"01300000004",
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

    const post =  {
        "title": "World's Most Trendy Fashion for 2025",
        "content": `<div class="py-[30px]"> <p>It was a cheerful prospect. I asked Perry what he thought about it; but he only shrugged his shoulders and continued a longwinded prayer he had been at for some time. He was wont to say that the only redeeming feature of our captivity was the ample time it gave him for the improvisation of prayers—it was becoming an obsession with him.</p><h2 class="my-5">First Look At Self-Portrait's Autumn Collection</h2><p>The Sagoths had begun to take notice of his habit of declaiming throughout entire marches. One of them asked him what he was saying—to whom he was talking. The question gave me an idea, so I answered quickly before Perry could say anything.</p><blockquote class="relative pr-12 pb-7 pl-10 my-11 text-md md:text-xl leading-9 font-['Lora',serif] font-normal italic text-center"><i class="ti-quote-left mr-2"></i>A wise girls knows her limit to touch the sky.Repellat sapiente neque iusto praesentium adipisci.The question gave me an idea, so I answered quickly before Perry could say anything.<i class="ti-quote-right ml-2"></i></blockquote><div class="w-full flex flex-col mb-5 pb-5 items-center justify-center gap-1 md:flex-row"><div class="w-1/2 pl-2"><img alt="..." loading="lazy" width="100" height="100" decoding="async" data-nimg="1" class="w-full" style="color:transparent" src="https://themewagon.github.io/revolve/images/fashion/single-img1.png"></div><div class="w-1/2 pl-2"><img alt="..." loading="lazy" width="100" height="100" decoding="async" data-nimg="1" class="w-full" style="color:transparent" src="https://themewagon.github.io/revolve/images/fashion/single-img2.png"></div></div><h2 class="my-5">Enjoying the view of summer</h2><p>The Sagoths had begun to take notice of his habit of declaiming throughout entire marches. One of them asked him what he was saying—to whom he was talking.<br><br> The question gave me an idea, so I answered quickly before Perry could say anything.Lorem ipsum dolor sit amet consectetur adipisicing elit. <br><br>Unde cum delectus exercitationem natus quidem enim error suscipit. Iure cupiditate nobis quaerat consectetur! Vero aliquam, amet ipsum ullam reiciendis nostrum voluptate accusantium provident ut blanditiis incidunt.</p></div>`,
    }

    // console.log(post.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''))

    await prisma.blogPost.create({
        data: {
            title: post.title,
            content: post.content,
            coverImage: "https://themewagon.github.io/revolve/images/fashion/bg-banner.jpg",
            userId: user?.id,
            tagId: tags?.id,
            slug: post.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
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