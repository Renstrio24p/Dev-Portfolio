import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import './Map.scss';

export default function MapGL() {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v11',
      center: [121.033897, 14.577439],
      zoom: 9,
      dragPan: false,
      dragRotate: false,
      width: '100%',
      height: '100%',
      attributionControl: false,
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([121.033897, 14.577439])
      .addTo(map);

    const popup = new mapboxgl.Popup()
      .setHTML("<h3>Mandaluyong</h3><p class='location'>This is Mandaluyong City.</p>");

    marker.setPopup(popup);

    marker.getElement().addEventListener("mouseenter", () => {
      marker.togglePopup();

      setTimeout(() => {
        marker.togglePopup();
      }, 4000);
    });

    window.addEventListener("resize", () => {
      map.resize();
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div className="map-gl" ref={mapContainer} />;
}
