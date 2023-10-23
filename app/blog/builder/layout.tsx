


// export const metadata: Metadata = {
//   title: 'Fashion Anywhere',
//   description: 'Worlds\'s #1 Fashion and Beauty Magazine',
// }




// export const metadata:Metadata = {
//   icons: {
//     icon: '/app/favicons/icon_16x16.ico',
//   },
//   metadataBase: new URL("https://fashionanywhere.shop"),
//   title: {
//     default: "Fashion Anywhere",
//     template: `%s | Fashion Anywhere`,
//   },
//   description: 'Worlds\'s #1 Fashion and Beauty Magazine.',
//   verification: {
//     google: "google-site-verification=123123123",
//   },
// };


export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  // console.log(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);

  return (
    <>
        {children}
    </>
  )
}