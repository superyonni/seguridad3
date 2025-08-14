export interface Centro {
  id: string;
  nombre: string;
  lat: number;
  lng: number;
  modulos: Modulo[];
  estado: 'normal' | 'alerta' | 'critico';
  ultimoEvento?: Evento;
  pesoPromedio: number;
  jaulasOperativas: number;
  totalJaulas: number;
}

export interface Modulo {
  id: string;
  nombre: string;
  jaulas: Jaula[];
  actividad: number;
  ultimaActividad: Date;
}

export interface Jaula {
  id: string;
  estado: 'ocupada' | 'libre' | 'alerta';
  peso?: number;
  ultimoMovimiento?: Date;
}

export interface Evento {
  id: string;
  tipo: 'intrusion' | 'lobo_marino' | 'movimiento' | 'peso_critico';
  centroId: string;
  moduloId?: string;
  jaulaId?: string;
  timestamp: Date;
  descripcion: string;
  videoUrl?: string;
  peso?: number;
}

export interface IndicadorSistema {
  saludGeneral: number;
  eficienciaRadar: number;
  alertasHoy: number;
  intrusionesDetectadas: number;
  eventosLobosMarinos: number;
}

export interface DatosGrafico {
  timestamp: Date;
  valor: number;
  tipo: string;
} 