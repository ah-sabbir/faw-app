// import Image from 'next/image';

// const Icon = () => {
//   return (
//     <Image
//       src="/icon"
//       width={100}
//       height={100}
//       alt="App icon"
//     />
//   );
// };

// export default Icon;



// import { ImageResponse } from 'next/server';

// import Image from 'next/image';
// import appIcon from '..//assets//app-icon.png';
 
// // Route segment config
// export const runtime = 'edge'
 
// // Image metadata
// export const size = {
//   width: 32,
//   height: 32,
// }
// export const contentType = 'image/png'
 
// // Image generation
// export default function Icon() {
//   return new ImageResponse(
//     (
//       // ImageResponse JSX element
//         <Image 
//             src={appIcon}
//             alt="app icon"
//             width={size.width}
//             height={size.height}
//         />
//     ),
//     // ImageResponse options
//     {
//       // For convenience, we can re-use the exported icons size metadata
//       // config to also set the ImageResponse's width and height.
//       ...size,
//     }
//   )
// }

//     //   // ImageResponse JSX element
//     //   <div
//     //     style={{
//     //       fontSize: 24,
//     //       background: 'black',
//     //       width: '100%',
//     //       height: '100%',
//     //       display: 'flex',
//     //       alignItems: 'center',
//     //       justifyContent: 'center',
//     //       color: 'white',
//     //     }}
//     //   >
//     //     F
//     //   </div>