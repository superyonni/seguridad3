import React from 'react';
import { Centro, IndicadorSistema } from '../types';
import { TrendingUp, AlertTriangle, Activity, Shield, Eye } from 'lucide-react';

interface SidePanelProps {
  centros: Centro[];
  indicadores: IndicadorSistema;
  selectedCentro: Centro | null;
}

const SidePanel: React.FC<SidePanelProps> = ({ centros, indicadores, selectedCentro }) => {
  const centrosOrdenados = [...centros].sort((a, b) => b.pesoPromedio - a.pesoPromedio);

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'normal': return 'var(--success-green)';
      case 'alerta': return 'var(--warning-yellow)';
      case 'critico': return 'var(--critical-red)';
      default: return 'var(--text-secondary)';
    }
  };

  const getSaludColor = (valor: number) => {
    if (valor >= 80) return 'var(--success-green)';
    if (valor >= 60) return 'var(--warning-yellow)';
    return 'var(--critical-red)';
  };

  return (
    <div className="side-panel">
      <div className="panel-header">
        <h2>Indicadores del Sistema</h2>
        <div className="timestamp">
          {new Date().toLocaleTimeString('es-CL')}
        </div>
      </div>

      {/* Indicadores de Salud del Sistema */}
      <div className="indicators-section">
        <h3>Estado del Sistema</h3>
        <div className="indicator-grid">
          <div className="indicator-card">
            <div className="indicator-icon">
              <Activity color={getSaludColor(indicadores.saludGeneral)} />
            </div>
            <div className="indicator-content">
              <span className="indicator-label">Salud General</span>
              <span className="indicator-value" style={{ color: getSaludColor(indicadores.saludGeneral) }}>
                {indicadores.saludGeneral}%
              </span>
            </div>
          </div>
          
          <div className="indicator-card">
            <div className="indicator-icon">
              <Eye color={getSaludColor(indicadores.eficienciaRadar)} />
            </div>
            <div className="indicator-content">
              <span className="indicator-label">Eficiencia Radar</span>
              <span className="indicator-value" style={{ color: getSaludColor(indicadores.eficienciaRadar) }}>
                {indicadores.eficienciaRadar}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Alertas y Eventos */}
      <div className="alerts-section">
        <h3>Alertas Hoy</h3>
        <div className="alerts-grid">
          <div className="alert-item">
            <AlertTriangle color="var(--critical-red)" size={16} />
            <span>Total Alertas: {indicadores.alertasHoy}</span>
          </div>
          <div className="alert-item">
            <Shield color="var(--warning-yellow)" size={16} />
            <span>Intrusiones: {indicadores.intrusionesDetectadas}</span>
          </div>
          <div className="alert-item">
            <TrendingUp color="var(--alert-orange)" size={16} />
            <span>Lobos Marinos: {indicadores.eventosLobosMarinos}</span>
          </div>
        </div>
      </div>

      {/* Ranking de Pesos */}
      <div className="ranking-section">
        <h3>Ranking de Pesos Promedio</h3>
        <div className="ranking-list">
          {centrosOrdenados.map((centro, index) => (
            <div 
              key={centro.id} 
              className={`ranking-item ${selectedCentro?.id === centro.id ? 'selected' : ''}`}
            >
              <div className="ranking-position">{index + 1}</div>
              <div className="ranking-content">
                <div className="ranking-name">{centro.nombre}</div>
                <div className="ranking-details">
                  <span className="ranking-weight">
                    {centro.pesoPromedio} kg
                    {centro.pesoPromedio > 3 && (
                      <span className="critical-badge">CRÍTICO</span>
                    )}
                  </span>
                  <span className="ranking-status" style={{ color: getEstadoColor(centro.estado) }}>
                    {centro.estado.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Centro Seleccionado */}
      {selectedCentro && (
        <div className="selected-centro">
          <h3>Centro Seleccionado</h3>
          <div className="centro-details">
            <h4>{selectedCentro.nombre}</h4>
            <div className="centro-stats">
              <div className="stat-item">
                <span className="stat-label">Estado:</span>
                <span className="stat-value" style={{ color: getEstadoColor(selectedCentro.estado) }}>
                  {selectedCentro.estado.toUpperCase()}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Peso Promedio:</span>
                <span className="stat-value">
                  {selectedCentro.pesoPromedio} kg
                  {selectedCentro.pesoPromedio > 3 && (
                    <span className="critical-badge">CRÍTICO</span>
                  )}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Jaulas Operativas:</span>
                <span className="stat-value">
                  {selectedCentro.jaulasOperativas}/{selectedCentro.totalJaulas}
                </span>
              </div>
            </div>
            
            {selectedCentro.ultimoEvento && (
              <div className="ultimo-evento">
                <h5>Último Evento</h5>
                <p>{selectedCentro.ultimoEvento.descripcion}</p>
                <small>
                  {selectedCentro.ultimoEvento.timestamp.toLocaleString('es-CL')}
                </small>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SidePanel; 