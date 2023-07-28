"use client";
import ArticleCard from '@/components/blogCard/BlogCard';
import Slider from '@/components/elements/Slider';
import { useState } from 'react';


const secret = process.env.JWT_SECRET

// import handler from './api/auth/hello';
// import { useRouter } from 'next/router';


// const getSession = async () => {
//   const session = await getServerSession(Options);
//   return session;
// }


const posts = [
  {
    id: 1,
    title: `World's Most Trendy Fashion for 2023`,
    href: '#',
    description:
      `Are you ready to update your wardrobe with the latest fashion trends for 2023? Whether you're looking for a new dress, a chic accessory, or a statement piece, we've got you covered with the hottest styles and colors of the season. Here are some of the world's most trendy fashion for 2023 that you should be shopping this season.

      1. Ballet Flats
      https://www.forbes.com/advisor/wp-content/uploads/2021/09/ballet-flats.jpg
      
      Ballet flats are back in style, and they're more versatile than ever. You can wear them with anything from jeans and a tee to a floral midi-dress. They're comfortable, elegant, and easy to slip on and off. Plus, they come in a variety of colors, materials, and designs to suit your personal taste. Some of our favorite brands for ballet flats are Tory Burch, Sam Edelman, and Chanel.
      
      2. Viva Magenta
      https://www.forbes.com/advisor/wp-content/uploads/2021/09/magenta-dress.jpg
      
      If you want to make a bold statement with your outfit, you can't go wrong with magenta. This vibrant shade of pink is one of the most popular colors for 2023, and it looks great on every skin tone. You can wear it as a solid color or mix it with other hues, such as purple, orange, or green. You can also accessorize it with gold or silver jewelry, or add some contrast with black or white pieces. Some of our favorite brands for magenta clothing are Prabal Gurung, Zara, and H&M.
      
      3. Modern Chainmail
      https://www.forbes.com/advisor/wp-content/uploads/2021/09/chainmail-top.jpg
      
      If you're feeling adventurous, you can try one of the most edgy fashion trends for 2023: modern chainmail. This metallic fabric is inspired by medieval armor, but it's updated with a sleek and sexy twist. You can wear it as a top, a dress, or even a skirt, depending on how daring you are. You can also layer it over other fabrics, such as leather, silk, or denim. Some of our favorite brands for modern chainmail are Paco Rabanne, Balmain, and Versace.
      
      4. Boleros & Shrugs
      https://www.forbes.com/advisor/wp-content/uploads/2021/09/bolero-jacket.jpg
      
      Boleros and shrugs are the perfect way to add some flair to your outfit without compromising on comfort. These cropped jackets are ideal for layering over dresses, tops, or jumpsuits, and they can instantly elevate your look. You can choose from different styles, such as fringed, embroidered, or sequined boleros and shrugs, and match them with your mood and occasion. Some of our favorite brands for boleros and shrugs are Isabel Marant, Alice + Olivia, and Anthropologie.
      
      5. Cargo Pants
      https://www.forbes.com/advisor/wp-content/uploads/2021/09/cargo-pants.jpg
      
      Cargo pants are not just for men anymore. They're one of the most trendy fashion for 2023 for women as well. They're practical, comfortable, and stylish, and they can be worn in many ways. You can pair them with a crop top and sneakers for a casual look, or with a blouse and heels for a more polished look. You can also choose from different colors, such as khaki, olive, or black cargo pants, and different fits, such as slim-fit or wide-leg cargo pants. Some of our favorite brands for cargo pants are Gap, Levi's, and Madewell.
      
      6. Necklace-less
      https://www.forbes.com/advisor/wp-content/uploads/2021/09/necklace-less.jpg
      
      One of the most surprising fashion trends for 2023 is going necklace-less. Yes, you heard that right. Instead of wearing necklaces to accessorize your outfits, you can opt for other types of jewelry, such as earrings, bracelets,
      or rings. This way, you can draw attention to your face or your hands instead of your neck. You can also experiment with different hairstyles or makeup to complement your look. Some of our favorite brands for earrings,
      bracelets,
      or rings are Kendra Scott,
      Alex and Ani,
      and Pandora.
      
      7. Hot Pants
      https://www.forbes.com/advisor/wp-content/uploads/2021/09/hot-pants.jpg
      
      If you're feeling confident and want to show off your legs, you can try one of the most daring fashion trends for 2023: hot pants. These ultra-short shorts are not for the faint of heart, but they can make you look fabulous if you wear them right. You can balance them with a loose or long top, such as a sweater, a blazer, or a tunic. You can also wear them with tights or leggings underneath for more coverage. Some of our favorite brands for hot pants are Saint Laurent, Topshop, and ASOS.
      
      8. Sheer Fabrics
      https://www.forbes.com/advisor/wp-content/uploads/2021/09/sheer-dress.jpg
      
      Sheer fabrics are one of the most romantic and feminine fashion trends for 2023. They're perfect for adding some softness and delicacy to your look, and they can be worn in many ways. You can wear them as a dress, a skirt, or a top, depending on how much skin you want to reveal. You can also layer them over other fabrics, such as lace, satin, or cotton. Some of our favorite brands for sheer fabrics are Zimmermann, Reformation, and Free People.
      
      9. Painterly Floral Dress
      https://www.vogue.com/wp-content/uploads/2021/04/27/dries-van-noten-floral-print-midi-dress.jpg
      
      Floral dresses are always in style, but this season, they're getting an artistic makeover. Painterly floral dresses are inspired by impressionist paintings, and they feature abstract and colorful prints that look like brushstrokes. They're ideal for adding some color and creativity to your wardrobe, and they can be worn for any occasion. You can accessorize them with simple or neutral pieces, such as a straw bag, a leather belt, or a pair of sandals. Some of our favorite brands for painterly floral dresses are Dries Van Noten,
      Pucci,
      and Prada.
      
      10. Bright White Dress
      https://www.vogue.com/wp-content/uploads/2021/04/27/staud-jackson-midi-dress.jpg
      
      A bright white dress is one of the most classic and timeless fashion trends for 2023. It's elegant, sophisticated, and versatile, and it can be worn for any season or event. You can choose from different styles, such as a shirt dress,
      a wrap dress,
      or a slip dress,
      and different lengths, such as a mini,
      a midi,
      or a maxi dress.
      You can also mix and match it with different colors and accessories, such as a denim jacket,
      a colorful scarf,
      or a pair of sunglasses.
      Some of our favorite brands for bright white dresses are Staud,
      Reiss,
      and Zara.
      
      These are some of the world's most trendy fashion for 2023 that you should be shopping this season. Whether you want to go for a casual,
      a chic,
      or a glamorous look,
      you can find something that suits your style and personality. Happy shopping! blush
      `,
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://cdn.pixabay.com/photo/2020/10/23/16/50/woman-5679284_1280.jpg',
    },
  },
  {
    id: 2,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://cdn.pixabay.com/photo/2020/10/23/16/50/woman-5679284_1280.jpg',
    },
  },
  {
    id: 3,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://cdn.pixabay.com/photo/2020/10/23/16/50/woman-5679284_1280.jpg',
    },
  },
  // More posts...
]



export default async function Home() {
  // const router = useRouter();
  // const [session, loading] = useSession();
  // const [blogPosts, setBlogPosts] = useState<any>([]);
  // const [user, setUser] = useState<any>(null);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string>('');
  // const [token, setToken] = useState<string>('');
  //
  
  const [ImgURL, setImgURL] = useState<string>('');
  const loginHandler = () => {
    // router.push('/login');
  }

  // const getImg = async () => {
  //   const res = await fetch("https://api.unsplash.com/photos/random?query=fashion&client_id=n8M49eGl008_oU9oF25eRVYaZDBrH-ajpHX4un8OwYg");
  //   const data = await res.json();
  //   return data.urls.regular;
  //   }

  // useEffect(() => {
  //   const res = getImg();
  //   res.then((data) => {
  //       setImgURL(data);
  //   })
  // }, [])

  
  
  return (
    <main>
      {/* <CtaSection /> */}
      <Slider />
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <ArticleCard key={post.id} post={post} imageUrl={"https://images.unsplash.com/photo-1626386699888-b8865823b279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTAzNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg2NTA0NTV8&ixlib=rb-4.0.3&q=80&w=1080"} />
          ))}
        </div>
      </div>
    </div>
    </main>
  )
}


        // {/* <Button className="text-green-600">
        //     <Link href={"/auth/signin"}>Sign In</Link> 
        //   </Button> */}

        //   {/* <Button className="text-green-600" onClick={() => getSession}>
        //     Get session
        //   </Button> */}

        // {/* {blogPosts.map((post, index) => (
        //   <Card key={index} title={post.title} image={post.image} content={post.content} />
        // ))}
        //    */}

