import { useEffect, useRef } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import { TCity, TLocation } from '../../types/types';
import {
  MAX_MAP_WIDTH,
  URL_MARKER_CURRENT,
  URL_MARKER_DEFAULT,
} from '../../constants';
import 'leaflet/dist/leaflet.css';

interface IMap {
  city: TCity;
  points: TLocation[];
  selectedPoint?: TLocation;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map(props: IMap): JSX.Element {
  const { city, points, selectedPoint } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const { latitude, longitude, zoom } = city.location;
      map.setView({ lat: latitude, lng: longitude }, zoom);
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
        });

        marker
          .setIcon(
            selectedPoint !== undefined && selectedPoint === point
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint, city]);

  return (
    <div
      style={{ height: '100%', maxWidth: MAX_MAP_WIDTH, margin: '0 auto' }}
      ref={mapRef}
    />
  );
}

export default Map;
