import React, { useState } from 'react';
import { Centro, Modulo } from '../types';
import { X, Video, Info, Play, Clock } from 'lucide-react';
import VideoPlayer from './VideoPlayer';
import { getVideosByCentro, VideoInfo } from '../data/videoMapping';

interface ModuleDetailProps {
  centro: Centro | null;
  onClose: () => void;
}

const ModuleDetail: React.FC<ModuleDetailProps> = ({ centro, onClose }) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoInfo | null>(null);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  
  if (!centro) return null;

  const videos = getVideosByCentro(centro.id);

  const getJaulaColor = (estado: string) => {
    switch (estado) {
      case 'ocupada': return 'var(--success-green)';
      case 'libre': return 'var(--text-secondary)';
      case 'alerta': return 'var(--critical-red)';
      default: return 'var(--text-secondary)';
    }
  };

  const getJaulaIcon = (estado: string) => {
    switch (estado) {
      case 'ocupada': return '●';
      case 'libre': return '○';
      case 'alerta': return '⚠';
      default: return '○';
    }
  };

  const handleVideoClick = (video: VideoInfo) => {
    setSelectedVideo(video);
    setShowVideoPlayer(true);
  };

  const handleCloseVideo = () => {
    setShowVideoPlayer(false);
    setSelectedVideo(null);
  };

  return (
    <div className="module-detail-overlay">
      <div className="module-detail-modal">
        <div className="modal-header">
          <h2>{centro.nombre} - Detalles de Módulos</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-content">
          <div className="centro-summary">
            <div className="summary-item">
              <span className="summary-label">Estado General:</span>
              <span className={`summary-value estado-${centro.estado}`}>
                {centro.estado.toUpperCase()}
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Peso Promedio:</span>
              <span className="summary-value">
                {centro.pesoPromedio} kg
                {centro.pesoPromedio > 3 && (
                  <span className="critical-badge">CRÍTICO</span>
                )}
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Jaulas Operativas:</span>
              <span className="summary-value">
                {centro.jaulasOperativas}/{centro.totalJaulas}
              </span>
            </div>
          </div>

          <div className="modulos-grid">
            {centro.modulos.map((modulo) => (
              <div key={modulo.id} className="modulo-card">
                <div className="modulo-header">
                  <h3>{modulo.nombre}</h3>
                  <div className="modulo-stats">
                    <span className="actividad-badge">
                      Actividad: {modulo.actividad}%
                    </span>
                    <span className="ultima-actividad">
                      Última: {modulo.ultimaActividad.toLocaleTimeString('es-CL')}
                    </span>
                  </div>
                </div>

                <div className="jaulas-container">
                  <div className="jaulas-grid">
                    {modulo.jaulas.map((jaula, index) => (
                      <div 
                        key={jaula.id} 
                        className={`jaula-item ${jaula.estado}`}
                        style={{ borderColor: getJaulaColor(jaula.estado) }}
                        title={`Jaula ${index + 1}: ${jaula.estado}${jaula.peso ? ` - ${jaula.peso}kg` : ''}`}
                      >
                        <span className="jaula-icon" style={{ color: getJaulaColor(jaula.estado) }}>
                          {getJaulaIcon(jaula.estado)}
                        </span>
                        <span className="jaula-number">{index + 1}</span>
                        {jaula.peso && (
                          <span className="jaula-peso">{jaula.peso.toFixed(1)}kg</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="modulo-legend">
                  <div className="legend-item">
                    <span className="legend-icon" style={{ color: 'var(--success-green)' }}>●</span>
                    <span>Ocupada</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-icon" style={{ color: 'var(--text-secondary)' }}>○</span>
                    <span>Libre</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-icon" style={{ color: 'var(--critical-red)' }}>⚠</span>
                    <span>Alerta</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sección de Videos */}
          {videos.length > 0 && (
            <div className="videos-section">
              <div className="section-header">
                <h4>Videos de Monitoreo</h4>
                <span className="video-count">{videos.length} videos disponibles</span>
              </div>
              <div className="videos-grid">
                {videos.map((video) => (
                  <div key={video.id} className="video-card" onClick={() => handleVideoClick(video)}>
                    <div className="video-thumbnail">
                      <div className="video-overlay">
                        <Play size={24} />
                      </div>
                      <div className="video-type-badge">
                        {video.tipo === 'monitoreo' ? 'Monitoreo' : 'Estado'}
                      </div>
                    </div>
                    <div className="video-info">
                      <h5>{video.nombre}</h5>
                      <div className="video-meta">
                        <span className="video-time">
                          <Clock size={12} />
                          {new Date(video.timestamp).toLocaleString('es-CL')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {centro.ultimoEvento && (
            <div className="ultimo-evento-detail">
              <div className="evento-header">
                <h4>Último Evento</h4>
                <div className="evento-actions">
                  <button className="action-btn">
                    <Video size={16} />
                    Ver Video
                  </button>
                  <button className="action-btn">
                    <Info size={16} />
                    Más Info
                  </button>
                </div>
              </div>
              <div className="evento-content">
                <p className="evento-descripcion">{centro.ultimoEvento.descripcion}</p>
                <div className="evento-meta">
                  <span className="evento-tipo">{centro.ultimoEvento.tipo}</span>
                  <span className="evento-timestamp">
                    {centro.ultimoEvento.timestamp.toLocaleString('es-CL')}
                  </span>
                  {centro.ultimoEvento.peso && (
                    <span className="evento-peso">Peso: {centro.ultimoEvento.peso}kg</span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Video Player Modal */}
      {showVideoPlayer && selectedVideo && (
        <VideoPlayer
          videoUrl={selectedVideo.url}
          title={selectedVideo.nombre}
          onClose={handleCloseVideo}
        />
      )}
    </div>
  );
};

export default ModuleDetail; 