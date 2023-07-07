import Image from "next/image";

const ArticleCard = ({post}: any) => {
    const aspectRatio = 16 / 9; // Adjust the aspect ratio based on your preference

    return (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="group relative">
              <Image
                src={"https://images.unsplash.com/photo-1542009708210-df3fb1850c51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTAzNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg2NDk0MDR8&ixlib=rb-4.0.3&q=80&w=1080" || post.imageUrl}
                alt="Fashion Image"
                className="w-full h-auto bg-blend-color-burn object-cover object-center rounded-lg shadow-2xl"
                height={500}
                width={500}
              />
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                  <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <Image src={post.author.imageUrl} alt="" height={100} width={100} className="h-10 w-10 rounded-full bg-gray-50 " />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
    );
  };
  
  export default ArticleCard;


// make a blogcard component for the home page so all the posts can be displayed there
