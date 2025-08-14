import React, { useState } from 'react';
import Map from './components/Map';
import SidePanel from './components/SidePanel';
import ChartsSection from './components/ChartsSection';
import ModuleDetail from './components/ModuleDetail';
import KMZViewer from './components/KMZViewer';
import { centros, indicadoresSistema } from './data/mockData';
import { Centro } from './types';
import './App.css';

function App() {
  const [selectedCentro, setSelectedCentro] = useState<Centro | null>(null);
  const [showModuleDetail, setShowModuleDetail] = useState(false);
  const [showKMZViewer, setShowKMZViewer] = useState(false);
  const [vistaMapa, setVistaMapa] = useState<'satelital' | 'radar' | '3d'>('satelital');

  const handleCentroClick = (centro: Centro) => {
    setSelectedCentro(centro);
  };

  const handleShowModuleDetail = () => {
    setShowModuleDetail(true);
  };

  const handleCloseModuleDetail = () => {
    setShowModuleDetail(false);
  };

  const handleShowKMZViewer = () => {
    setShowKMZViewer(true);
  };

  const handleCloseKMZViewer = () => {
    setShowKMZViewer(false);
  };

  return (
    <div className="app">
      <div className="main-layout">
        {/* Mapa Principal (80% del ancho) */}
        <div className="map-section">
          <Map 
            centros={centros}
            onCentroClick={handleCentroClick}
            vistaMapa={vistaMapa}
          />
        </div>

        {/* Panel Lateral (20% del ancho) */}
        <div className="side-panel-section">
          <SidePanel 
            centros={centros}
            indicadores={indicadoresSistema}
            selectedCentro={selectedCentro}
          />
          
          <div className="panel-actions">
            {selectedCentro && (
              <button 
                className="view-modules-btn"
                onClick={handleShowModuleDetail}
              >
                Ver Detalles de Módulos
              </button>
            )}
            
            <button 
              className="view-kmz-btn"
              onClick={handleShowKMZViewer}
            >
              Ver Datos KMZ
            </button>
          </div>
        </div>
      </div>

      {/* Banda Inferior con Gráficos */}
      <div className="charts-section-container">
        <ChartsSection />
      </div>

      {/* Modal de Detalles de Módulos */}
      {showModuleDetail && (
        <ModuleDetail 
          centro={selectedCentro}
          onClose={handleCloseModuleDetail}
        />
      )}

      {/* Modal de Visor KMZ */}
      {showKMZViewer && (
        <KMZViewer 
          onClose={handleCloseKMZViewer}
        />
      )}
    </div>
  );
}

export default App; 