import React, { useState, useEffect } from 'react';
import { X, Download, MapPin, Info } from 'lucide-react';

interface KMZViewerProps {
  onClose: () => void;
}

interface KMZData {
  name: string;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  }[];
  type: string;
  properties: Record<string, any>;
}

const KMZViewer: React.FC<KMZViewerProps> = ({ onClose }) => {
  const [kmzData, setKmzData] = useState<KMZData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFeature, setSelectedFeature] = useState<KMZData | null>(null);

  useEffect(() => {
    // Simulación de carga de datos KMZ
    // En un caso real, aquí se cargaría el archivo KMZ
    const mockKMZData: KMZData[] = [
      {
        name: 'Centro de Acuicultura Avellano',
        description: 'Centro de cultivo de salmón en la región de Los Lagos',
        coordinates: [
          { lat: -38.2498, lng: -72.6701 },
          { lat: -38.2500, lng: -72.6700 },
          { lat: -38.2502, lng: -72.6702 },
          { lat: -38.2500, lng: -72.6703 }
        ],
        type: 'Polygon',
        properties: {
          area: '2.5 hectáreas',
          capacidad: '500 toneladas',
          estado: 'Activo',
          tipo_cultivo: 'Salmón Atlántico'
        }
      },
      {
        name: 'Centro de Acuicultura Capera',
        description: 'Centro de cultivo especializado en trucha',
        coordinates: [
          { lat: -38.3500, lng: -72.7500 },
          { lat: -38.3502, lng: -72.7502 },
          { lat: -38.3504, lng: -72.7500 },
          { lat: -38.3502, lng: -72.7498 }
        ],
        type: 'Polygon',
        properties: {
          area: '1.8 hectáreas',
          capacidad: '300 toneladas',
          estado: 'Activo',
          tipo_cultivo: 'Trucha Arcoíris'
        }
      },
      {
        name: 'Centro de Acuicultura Queten',
        description: 'Centro de cultivo mixto salmón-trucha',
        coordinates: [
          { lat: -38.4500, lng: -72.8500 },
          { lat: -38.4502, lng: -72.8502 },
          { lat: -38.4504, lng: -72.8500 },
          { lat: -38.4502, lng: -72.8498 }
        ],
        type: 'Polygon',
        properties: {
          area: '3.2 hectáreas',
          capacidad: '800 toneladas',
          estado: 'Activo',
          tipo_cultivo: 'Salmón y Trucha'
        }
      }
    ];

    setTimeout(() => {
      setKmzData(mockKMZData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleFeatureClick = (feature: KMZData) => {
    setSelectedFeature(feature);
  };

  const handleCloseDetail = () => {
    setSelectedFeature(null);
  };

  return (
    <div className="kmz-viewer-overlay">
      <div className="kmz-viewer-modal">
        <div className="kmz-viewer-header">
          <div className="header-content">
            <h2>Datos KMZ - Acuicultura</h2>
            <p>Información geográfica de centros de cultivo</p>
          </div>
          <div className="header-actions">
            <button className="action-btn" title="Descargar KMZ">
              <Download size={16} />
            </button>
            <button className="close-btn" onClick={onClose}>
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="kmz-viewer-content">
          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Cargando datos KMZ...</p>
            </div>
          ) : (
            <div className="kmz-data-container">
              <div className="kmz-features-list">
                <h3>Centros de Cultivo</h3>
                <div className="features-grid">
                  {kmzData.map((feature, index) => (
                    <div 
                      key={index} 
                      className="feature-card"
                      onClick={() => handleFeatureClick(feature)}
                    >
                      <div className="feature-icon">
                        <MapPin size={16} />
                      </div>
                      <div className="feature-info">
                        <h4>{feature.name}</h4>
                        <p>{feature.description}</p>
                        <div className="feature-properties">
                          <span className="property-badge">
                            {feature.properties.estado}
                          </span>
                          <span className="property-badge">
                            {feature.properties.tipo_cultivo}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {selectedFeature && (
                <div className="feature-detail-panel">
                  <div className="detail-header">
                    <h3>{selectedFeature.name}</h3>
                    <button className="close-detail-btn" onClick={handleCloseDetail}>
                      <X size={16} />
                    </button>
                  </div>
                  
                  <div className="detail-content">
                    <p className="detail-description">{selectedFeature.description}</p>
                    
                    <div className="detail-properties">
                      <h4>Propiedades</h4>
                      <div className="properties-grid">
                        <div className="property-item">
                          <span className="property-label">Área:</span>
                          <span className="property-value">{selectedFeature.properties.area}</span>
                        </div>
                        <div className="property-item">
                          <span className="property-label">Capacidad:</span>
                          <span className="property-value">{selectedFeature.properties.capacidad}</span>
                        </div>
                        <div className="property-item">
                          <span className="property-label">Estado:</span>
                          <span className="property-value">{selectedFeature.properties.estado}</span>
                        </div>
                        <div className="property-item">
                          <span className="property-label">Tipo de Cultivo:</span>
                          <span className="property-value">{selectedFeature.properties.tipo_cultivo}</span>
                        </div>
                      </div>
                    </div>

                    <div className="detail-coordinates">
                      <h4>Coordenadas</h4>
                      <div className="coordinates-list">
                        {selectedFeature.coordinates.map((coord, index) => (
                          <div key={index} className="coordinate-item">
                            <span>Punto {index + 1}:</span>
                            <span>{coord.lat.toFixed(6)}, {coord.lng.toFixed(6)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KMZViewer; 