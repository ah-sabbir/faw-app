'use client'

import 'leaflet/dist/leaflet.css';
import './map.module.css';
import { MapContainer, Marker, Popup, useMapEvents, TileLayer } from 'react-leaflet';
import { Icon, LatLngExpression, LatLngTuple } from 'leaflet';
import { useEffect, useState } from 'react';



export const getLocation = async ({ lat, lng }: any) => {
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBzaLAk-UDpkTvnFXOZIJehm0bKglvJQpM&sensor=true`
  );
  const userInfo: any = await res.json();
  return userInfo;
};


// custom icon for marker.
export const customMarkerIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [38, 38],
});


const Map = () => {
  const [userLocation, setUserLocation] = useState<LatLngExpression>([23.76514292023678, 90.39550781250001]);
  const [markers, setMarkers] = useState<{ geocode: number[]; popUp: string }[]>([]);


  const LocationFinderDummy = () => {
    const map = useMapEvents({
      click(e: any) {
        getLocation(e.latlng).then((data) => {
          setMarkers((prevMarkers) => [
            ...prevMarkers,
            {
              geocode: [e.latlng.lat, e.latlng.lng],
              popUp: data.results[2].formatted_address,
            },
          ]);
        });
      },
    });
    return null;
  };


  useEffect(() => {
    // Check if window is defined before using navigator.geolocation
    const data = localStorage.getItem('country');
    if (data) {
      const [lat, lng] = JSON.parse(data);
      setUserLocation([parseFloat(lat), parseFloat(lng)]);
      } else {
        navigator.geolocation.getCurrentPosition((position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
          localStorage.setItem('country', JSON.stringify([position.coords.latitude, position.coords.longitude]));
        });
      }
  }, []);


  return (
          <div className="w-screen h-[50vh]">
          <MapContainer className="w-full h-full" center={(userLocation)} zoom={13}>
            <LocationFinderDummy />
            {/* OPEN STREET MAP TILES */}
            <TileLayer attribution="&copy;" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {markers.map((marker, index) => (
              <Marker key={index} position={marker.geocode as LatLngTuple} icon={customMarkerIcon}>
                <Popup closeOnClick>
                  <h2>{marker.popUp}</h2>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
  )
};

export default Map;

























// import 'leaflet/dist/leaflet.css';
// import './map.module.css';


// // import React, { useEffect, useState } from 'react';
// import { MapContainer, Marker, Popup, useMapEvents, TileLayer } from 'react-leaflet'; //, Marker, Popup, useMapEvents

// // import { Icon, LatLngExpression, LatLngTuple } from 'leaflet';

// // export const getLocation = async ({ lat, lng }: any) => {
// //   const res = await fetch(
// //     `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBzaLAk-UDpkTvnFXOZIJehm0bKglvJQpM&sensor=true`
// //   );
// //   const userInfo: any = await res.json();
// //   return userInfo;
// // };

// // custom icon for marker.
// // export const customMarkerIcon = new Icon({
// //   iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
// //   iconSize: [38, 38],
// // });

// interface MapProps {
//   location: any
//   markers: any //{ geocode: number[]; popUp: string }[] | undefined;
// }

// // start component function
// const WorldMap = (MapProps:MapProps) => {
//   const location = MapProps.location;
//   const markers = MapProps.markers;

//   // const [userLocation, setUserLocation] = useState<LatLngExpression>([23.76514292023678, 90.39550781250001]);
//   // const [markers, setMarkers] = useState<{ geocode: number[]; popUp: string }[]>([]);

//   // const LocationFinderDummy = () => {
//   //   const map = useMapEvents({
//   //     click(e: any) {
//   //       getLocation(e.latlng).then((data) => {
//   //         setMarkers((prevMarkers) => [
//   //           ...prevMarkers,
//   //           {
//   //             geocode: [e.latlng.lat, e.latlng.lng],
//   //             popUp: data.results[2].formatted_address,
//   //           },
//   //         ]);
//   //       });
//   //     },
//   //   });

//   //   return null;
//   // };

//   // useEffect(() => {
//   //   // Check if window is defined before using navigator.geolocation
//   //   if (typeof window !== 'undefined') {
//   //     const data = localStorage.getItem('country');
//   //     if (data) {
//   //       const [lat, lng] = JSON.parse(data);
//   //       setUserLocation([parseFloat(lat), parseFloat(lng)]);
//   //     } else {
//   //       navigator.geolocation.getCurrentPosition((position) => {
//   //         setUserLocation([position.coords.latitude, position.coords.longitude]);
//   //         localStorage.setItem('country', JSON.stringify([position.coords.latitude, position.coords.longitude]));
//   //       });
//   //     }
//   //   }
//   // }, []);

//   return (
//           <div className="w-screen h-[50vh]">
//           <MapContainer className="w-full h-full" center={([23.76514292023678, 90.39550781250001])} zoom={13}>
//             {/* <LocationFinderDummy /> */}
//             {/* OPEN STREET MAP TILES */}
//             <TileLayer attribution="&copy;" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//             {/* {markers.map((marker, index) => (
//               <Marker key={index} position={marker.geocode as LatLngTuple} icon={customMarkerIcon}>
//                 <Popup closeOnClick>
//                   <h2>{marker.popUp}</h2>
//                 </Popup>
//               </Marker>
//             ))} */}
//           </MapContainer>
//         </div>
//     )
// };

// export default WorldMap;
