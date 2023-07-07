import Image from 'next/image';
import { useEffect, useState } from 'react';
import heroImage from '/assets/hero-model.jpeg';



const getImg = async () => {
    const res = await fetch("https://api.unsplash.com/photos/random?query=fashion+cover&client_id=n8M49eGl008_oU9oF25eRVYaZDBrH-ajpHX4un8OwYg");
    const data = await res.json();
    return data;
    }


const CtaSection = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const [Source, setSource] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleSubscribe = (e:any) => {
    e.preventDefault();
    // Add your subscribe logic here
    setSubscribed(true);
  };


  console.log(Source);

  useEffect(() => {
    const res = getImg();
    res.then((data) => {
        const url:string = data.urls.regular;
        setSource(url || "https://pixabay.com/get/g0e487f3684b06ab38b6b58cd1165ff33a46fa6ac7d532fdd1d7d9cdf5fcbb3be32338b7b831a929ae6776c98f671c30beae6717b11e47dff92791264201123b0_1280.jpg");
        setIsLoading(false);
    })

  }, [])



  return (
    <section className="bg-[#30628f] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="text-center sm:text-left">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Find You Comfort Today!
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Stay updated with the latest fashion trends, tips, and exclusive offers.
          </p>
          <div className="mt-6">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex justify-center sm:justify-start">
                <input
                  type="email"
                  className="px-4 py-3 rounded-l-md focus:ring-indigo-500 focus:border-indigo-500 bg-white sm:max-w-xs border-gray-300 sm:text-sm"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="ml-2 inline-flex items-center px-4 py-3 rounded-r-md border border-transparent shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <p className="text-white">Thank you for subscribing!</p>
            )}
          </div>
          <p className="mt-4 text-lg text-gray-300">
            <a href="#" className="text-indigo-500 underline">
              Learn More
            </a>
          </p>
        </div>
        <div className="sm:w-1/2 h-full hidden md:block">
            { Source && 
          <Image
            alt="Fashion Image"
            className="w-full h-auto bg-blend-color-burn object-cover object-center rounded-lg shadow-2xl"
            height={500}
            width={500}
            src={ heroImage || Source}
            style={{ visibility: isLoading ? 'hidden' : 'visible' }}
          />}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
