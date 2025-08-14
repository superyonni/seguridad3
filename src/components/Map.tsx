import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Centro } from '../types';
import { MapPin, AlertTriangle, AlertCircle } from 'lucide-react';

interface MapProps {
  centros: Centro[];
  onCentroClick: (centro: Centro) => void;
  vistaMapa: 'satelital' | 'radar' | '3d';
}

const Map: React.FC<MapProps> = ({ centros, onCentroClick, vistaMapa }) => {
  const [selectedCentro, setSelectedCentro] = useState<Centro | null>(null);

  const getTileLayer = () => {
    switch (vistaMapa) {
      case 'satelital':
        return 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
      case 'radar':
        return 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png';
      default:
        return 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    }
  };

  const getMarkerIcon = (estado: string) => {
    const iconSize: [number, number] = [32, 32];
    const iconAnchor: [number, number] = [16, 32];
    
    let iconUrl = '';
    switch (estado) {
      case 'normal':
        iconUrl = 'data:image/svg+xml;base64,' + btoa(`
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="12" fill="#00d4ff" stroke="#ffffff" stroke-width="2"/>
            <circle cx="16" cy="16" r="6" fill="#ffffff"/>
          </svg>
        `);
        break;
      case 'alerta':
        iconUrl = 'data:image/svg+xml;base64,' + btoa(`
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="12" fill="#ff6b35" stroke="#ffffff" stroke-width="2"/>
            <circle cx="16" cy="16" r="6" fill="#ffffff"/>
          </svg>
        `);
        break;
      case 'critico':
        iconUrl = 'data:image/svg+xml;base64,' + btoa(`
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="12" fill="#ff4757" stroke="#ffffff" stroke-width="2"/>
            <circle cx="16" cy="16" r="6" fill="#ffffff"/>
          </svg>
        `);
        break;
    }
    
    return new Icon({
      iconUrl,
      iconSize,
      iconAnchor,
      popupAnchor: [0, -32]
    });
  };

  const handleMarkerClick = (centro: Centro) => {
    setSelectedCentro(centro);
    onCentroClick(centro);
  };

  return (
    <div className="map-container">
      <MapContainer
        center={[-38.4, -72.8]}
        zoom={9}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
      >
        <TileLayer
          url={getTileLayer()}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {centros.map((centro) => (
          <Marker
            key={centro.id}
            position={[centro.lat, centro.lng]}
            icon={getMarkerIcon(centro.estado)}
            eventHandlers={{
              click: () => handleMarkerClick(centro)
            }}
          >
            <Popup>
              <div className="popup-content">
                <h3>{centro.nombre}</h3>
                <p>Estado: <span className={`estado-${centro.estado}`}>{centro.estado.toUpperCase()}</span></p>
                <p>Peso promedio: {centro.pesoPromedio} kg</p>
                <p>Jaulas operativas: {centro.jaulasOperativas}/{centro.totalJaulas}</p>
                {centro.ultimoEvento && (
                  <p>Último evento: {centro.ultimoEvento.descripcion}</p>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      <div className="map-controls">
        <div className="control-group">
          <button className={`control-btn ${vistaMapa === 'satelital' ? 'active' : ''}`}>
            Satelital
          </button>
          <button className={`control-btn ${vistaMapa === 'radar' ? 'active' : ''}`}>
            Radar
          </button>
          <button className={`control-btn ${vistaMapa === '3d' ? 'active' : ''}`}>
            3D
          </button>
        </div>
      </div>
    </div>
  );
};

export default Map; 