// import mapboxgl from "mapbox-gl";
// import React, { useEffect, useRef } from "react";
// import ReactDOM from "react-dom";
// import geoJson from "../data/chicago-parks.json";
// import "../css-folder/Map.css";
// import { useLocation } from "react-router-dom";
// import axios from 'axios'
// import { useState } from "react";

// mapboxgl.accessToken =
//     "pk.eyJ1IjoiZmVycmFuOTkwOCIsImEiOiJjbGI4Z3IweXowa2p3M25xY2tncjlwcTRuIn0.XBFuNcLNp2QXpGy0tQCclA";

// // const Marker = ({ children }) => {
// // //   const _onClick = () => {
// // //     onClick(feature.properties.description);
// // //   };

// //   return (
// //     <button onClick={() => {
// //         console.log("clicked")
// //     }} className="marker">
// //       {children}
// //     </button>
// //   );
// // };

// // const Map = () => {
// //   const mapContainerRef = useRef(null);

// // const location  = useLocation()


// //   // Initialize map when component mounts
// // //   useEffect(async () => {
// // //         const response = await axios.post("https://rajsudharshan.pythonanywhere.com/getchildlocation",{
// // //             "parent_user_id": location.state.data.user_id,
// // //             "child_user_id" : location.state.data.tracking_user_id
// // //         })

// // //         const coords = response.data.location.split(',')

// // //         const latLng = {
// // //             lat: parseFloat(coords[0]),
// // //             lng: parseFloat(coords[1])
// // //         }

// // //         const map = new mapboxgl.Map({
// // //             container: mapContainerRef.current,
// // //             style: "mapbox://styles/mapbox/streets-v11",
// // //             center: [latLng.lng, latLng.lat],
// // //             zoom: 18,
// // //           });

// // //           console.log({latLng})

// // //           // Create a Mapbox Marker at our new DOM node
// // //           new mapboxgl.Marker()
// // //             .setLngLat([latLng.lng, latLng.lat])
// // //             .addTo(map);

// // //         // //   // Render custom marker components
// // //         //   geoJson.features.forEach((feature) => {
// // //         //     // Create a React ref
// // //         //     const ref = React.createRef();
// // //         //     // Create a new DOM node and save it to the React ref
// // //         //     ref.current = document.createElement("div");
// // //         //     // Render a Marker Component on our new DOM node
// // //         //     ReactDOM.render(
// // //         //       <Marker onClick={markerClicked} feature={feature} />,
// // //         //       ref.current
// // //         //     );

// // //             // Create a Mapbox Marker at our new DOM node
// // //         //     new mapboxgl.Marker(ref.current)
// // //         //       .setLngLat(feature.geometry.coordinates)
// // //         //       .addTo(map);
// // //         //   });

// // //           // Add navigation control (the +/- zoom buttons)
// // //         //   map.addControl(new mapboxgl.NavigationControl(), "top-right");

// // //           // Clean up on unmount
// // //         //   return () => map.remove();

// // //   }, []);

// // useEffect(() => {})

// //   const markerClicked = (title) => {
// //     window.alert(title);
// //   };

// //   return <div className="map-container" ref={mapContainerRef} />;
// // };

// const Map = () => {
//     const mapContainerRef = useRef(null);
//     const location = useLocation()
//     const [map, setMap] = useState()

//     // Initialize map when component mounts
//     useEffect(() => {

//         const response =  axios.post("https://rajsudharshan.pythonanywhere.com/getchildlocation",{
//                         "parent_user_id": location.state.data.user_id,
//                         "child_user_id" : location.state.data.tracking_user_id
//                     }).then(response => {

//                         const coords = response.data.location.split(',')

//                                 const latLng = {
//                                     lat: parseFloat(coords[0]),
//                                     lng: parseFloat(coords[1])
//                                 }
                        
//                                 const map = new mapboxgl.Map({
//                                     container: mapContainerRef.current,
//                                     style: "mapbox://styles/mapbox/streets-v11",
//                                     center: [latLng.lng, latLng.lat],
//                                     zoom: 18,
//                                   });
//                     })

//         // const map = new mapboxgl.Map({
//         //     container: mapContainerRef.current,
//         //     style: "mapbox://styles/mapbox/streets-v11",
//         //     center: [-87.65, 41.84],
//         //     zoom: 10,
//         // });

//         // setMap(map)

//         // // Create default markers
//         // geoJson.features.map((feature) =>
//         //     new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).addTo(map)
//         // );

//         // Add navigation control (the +/- zoom buttons)
//         // map.addControl(new mapboxgl.NavigationControl(), "top-right");

//         // Clean up on unmount
//         return () => map.remove();
//     }, []);



//     return <div className="map-container" ref={mapContainerRef} />;
// };

// const Map1 = () => {
//     const mapContainerRef = useRef(null);
  
//     // Initialize map when component mounts
//     useEffect(() => {
//       const map = new mapboxgl.Map({
//         container: mapContainerRef.current,
//         style: "mapbox://styles/mapbox/streets-v11",
//         center: [-87.65, 41.84],
//         zoom: 10,
//       });
  
//       // Create default markers
//       geoJson.features.map((feature) =>
//         new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).addTo(map)
//       );
  
//       // Add navigation control (the +/- zoom buttons)
//       map.addControl(new mapboxgl.NavigationControl(), "top-right");
  
//       // Clean up on unmount
//       return () => map.remove();
//     }, []);
  
//     return <div className="map-container" ref={mapContainerRef} />;
//   };
  

// export default Map1;



import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import geoJson from "../data/chicago-parks.json";
import "../css-folder/Map.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

const Marker = ({ onClick, children, feature }) => {
  const _onClick = () => {
    onClick(feature.properties.description);
  };

  return (
    <button onClick={_onClick} className="marker">
      {children}
    </button>
  );
};

const Map = () => {
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-121.892581, 37.349340],
      zoom: 18,
    });

    // Render custom marker components
    geoJson.features.forEach((feature) => {
      // Create a React ref
      const ref = React.createRef();
      // Create a new DOM node and save it to the React ref
      ref.current = document.createElement("div");
      // Render a Marker Component on our new DOM node
      ReactDOM.render(
        <Marker onClick={markerClicked} feature={feature} />,
        ref.current
      );

      // Create a Mapbox Marker at our new DOM node
      new mapboxgl.Marker(ref.current)
        .setLngLat(feature.geometry.coordinates)
        .addTo(map);
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, []);

  const markerClicked = (title) => {
    window.alert(title);
  };

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;