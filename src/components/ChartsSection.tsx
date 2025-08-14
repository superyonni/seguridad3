import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { DatosGrafico } from '../types';
import { generarDatosGrafico } from '../data/mockData';

const ChartsSection: React.FC = () => {
  const datosModulo100 = generarDatosGrafico('modulo-100', 12);
  const datosModulo200 = generarDatosGrafico('modulo-200', 12);
  const datosCentros = generarDatosGrafico('centros', 12);

  const formatTime = (timestamp: Date) => {
    return timestamp.toLocaleTimeString('es-CL', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-time">{formatTime(new Date(label))}</p>
          <p className="tooltip-value">
            Actividad: {payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="charts-section">
      <div className="charts-header">
        <h3>Monitoreo en Tiempo Real</h3>
        <span className="charts-subtitle">Datos de actividad de los últimos 12 horas</span>
      </div>
      
      <div className="charts-grid">
        <div className="chart-container">
          <div className="chart-title">Tendencia Módulo 100</div>
          <div className="chart-content">
            <ResponsiveContainer width="100%" height="100%">
          <LineChart data={datosModulo100}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis 
              dataKey="timestamp" 
              tickFormatter={formatTime}
              stroke="var(--text-secondary)"
              fontSize={10}
            />
            <YAxis 
              stroke="var(--text-secondary)"
              fontSize={10}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="valor" 
              stroke="var(--primary-blue)" 
              strokeWidth={2}
              dot={{ fill: 'var(--primary-blue)', strokeWidth: 2, r: 3 }}
              activeDot={{ r: 5, stroke: 'var(--primary-blue)', strokeWidth: 2 }}
            />
          </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-container">
          <div className="chart-title">Tendencia Módulo 200</div>
          <div className="chart-content">
            <ResponsiveContainer width="100%" height="100%">
          <LineChart data={datosModulo200}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis 
              dataKey="timestamp" 
              tickFormatter={formatTime}
              stroke="var(--text-secondary)"
              fontSize={10}
            />
            <YAxis 
              stroke="var(--text-secondary)"
              fontSize={10}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="valor" 
              stroke="var(--alert-orange)" 
              strokeWidth={2}
              dot={{ fill: 'var(--alert-orange)', strokeWidth: 2, r: 3 }}
              activeDot={{ r: 5, stroke: 'var(--alert-orange)', strokeWidth: 2 }}
            />
          </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-container">
          <div className="chart-title">Actividad por Centro</div>
          <div className="chart-content">
            <ResponsiveContainer width="100%" height="100%">
          <BarChart data={[
            { centro: 'Avellano', actividad: 75 },
            { centro: 'Betecoi', actividad: 70 },
            { centro: 'Capera', actividad: 85 },
            { centro: 'Chidhuapi', actividad: 80 },
            { centro: 'Elena', actividad: 65 },
            { centro: 'Jonshon 1', actividad: 60 },
            { centro: 'Jesus 6', actividad: 55 },
            { centro: 'Queten', actividad: 95 },
            { centro: 'Seno Melimoyu', actividad: 50 },
            { centro: 'Transito 2', actividad: 45 },
            { centro: 'Valverde 4', actividad: 40 },
            { centro: 'Concoto', actividad: 35 },
            { centro: 'Herradura', actividad: 45 },
            { centro: 'Marta', actividad: 55 },
            { centro: 'Cascada', actividad: 40 }
          ]}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis 
              dataKey="centro" 
              stroke="var(--text-secondary)"
              fontSize={8}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis 
              stroke="var(--text-secondary)"
              fontSize={10}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                color: 'var(--text-primary)'
              }}
            />
            <Bar 
              dataKey="actividad" 
              fill="var(--success-green)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsSection; 