import { Centro, IndicadorSistema, DatosGrafico } from '../types';

export const centros: Centro[] = [
  {
    id: 'avellano',
    nombre: 'Avellano',
    lat: -38.2498,
    lng: -72.6701,
    estado: 'normal',
    pesoPromedio: 2.8,
    jaulasOperativas: 18,
    totalJaulas: 20,
    modulos: [
      {
        id: 'avellano-100',
        nombre: 'Módulo 100',
        actividad: 75,
        ultimaActividad: new Date(),
        jaulas: Array.from({ length: 20 }, (_, i) => ({
          id: `avellano-100-${i + 1}`,
          estado: i < 18 ? 'ocupada' : 'libre',
          peso: i < 18 ? Math.random() * 4 + 1 : undefined,
          ultimoMovimiento: i < 18 ? new Date(Date.now() - Math.random() * 3600000) : undefined
        }))
      }
    ],
    ultimoEvento: {
      id: 'event-1',
      tipo: 'movimiento',
      centroId: 'avellano',
      timestamp: new Date(Date.now() - 300000),
      descripcion: 'Movimiento detectado en jaula 15'
    }
  },
  {
    id: 'betecoi',
    nombre: 'Betecoi',
    lat: -38.3000,
    lng: -72.7000,
    estado: 'normal',
    pesoPromedio: 2.5,
    jaulasOperativas: 15,
    totalJaulas: 18,
    modulos: [
      {
        id: 'betecoi-100',
        nombre: 'Módulo 100',
        actividad: 70,
        ultimaActividad: new Date(),
        jaulas: Array.from({ length: 18 }, (_, i) => ({
          id: `betecoi-100-${i + 1}`,
          estado: i < 15 ? 'ocupada' : 'libre',
          peso: i < 15 ? Math.random() * 4 + 1 : undefined,
          ultimoMovimiento: i < 15 ? new Date(Date.now() - Math.random() * 3600000) : undefined
        }))
      }
    ],
    ultimoEvento: {
      id: 'event-betecoi',
      tipo: 'movimiento',
      centroId: 'betecoi',
      timestamp: new Date(Date.now() - 600000),
      descripcion: 'Actividad normal en módulo principal'
    }
  },
  {
    id: 'capera',
    nombre: 'Capera',
    lat: -38.3500,
    lng: -72.7500,
    estado: 'alerta',
    pesoPromedio: 3.2,
    jaulasOperativas: 16,
    totalJaulas: 20,
    modulos: [
      {
        id: 'capera-100',
        nombre: 'Módulo 100',
        actividad: 85,
        ultimaActividad: new Date(),
        jaulas: Array.from({ length: 20 }, (_, i) => ({
          id: `capera-100-${i + 1}`,
          estado: i < 16 ? 'ocupada' : 'libre',
          peso: i < 16 ? Math.random() * 4 + 1 : undefined,
          ultimoMovimiento: i < 16 ? new Date(Date.now() - Math.random() * 3600000) : undefined
        }))
      }
    ],
    ultimoEvento: {
      id: 'event-2',
      tipo: 'lobo_marino',
      centroId: 'capera',
      timestamp: new Date(Date.now() - 1800000),
      descripcion: 'Lobo marino detectado cerca del módulo'
    }
  },
  {
    id: 'chidhuapi',
    nombre: 'Chidhuapi',
    lat: -38.4000,
    lng: -72.8000,
    estado: 'normal',
    pesoPromedio: 2.9,
    jaulasOperativas: 14,
    totalJaulas: 16,
    modulos: [
      {
        id: 'chidhuapi-100',
        nombre: 'Módulo 100',
        actividad: 80,
        ultimaActividad: new Date(),
        jaulas: Array.from({ length: 16 }, (_, i) => ({
          id: `chidhuapi-100-${i + 1}`,
          estado: i < 14 ? 'ocupada' : 'libre',
          peso: i < 14 ? Math.random() * 4 + 1 : undefined,
          ultimoMovimiento: i < 14 ? new Date(Date.now() - Math.random() * 3600000) : undefined
        }))
      }
    ],
    ultimoEvento: {
      id: 'event-chidhuapi',
      tipo: 'movimiento',
      centroId: 'chidhuapi',
      timestamp: new Date(Date.now() - 900000),
      descripcion: 'Monitoreo rutinario completado'
    }
  },
  {
    id: 'elena',
    nombre: 'Elena',
    lat: -38.5000,
    lng: -72.9000,
    estado: 'normal',
    pesoPromedio: 2.7,
    jaulasOperativas: 12,
    totalJaulas: 15,
    modulos: [
      {
        id: 'elena-100',
        nombre: 'Módulo 100',
        actividad: 65,
        ultimaActividad: new Date(),
        jaulas: Array.from({ length: 15 }, (_, i) => ({
          id: `elena-100-${i + 1}`,
          estado: i < 12 ? 'ocupada' : 'libre',
          peso: i < 12 ? Math.random() * 4 + 1 : undefined,
          ultimoMovimiento: i < 12 ? new Date(Date.now() - Math.random() * 3600000) : undefined
        }))
      }
    ],
    ultimoEvento: {
      id: 'event-elena',
      tipo: 'movimiento',
      centroId: 'elena',
      timestamp: new Date(Date.now() - 1200000),
      descripcion: 'Actividad normal en centro Elena'
    }
  },
  {
    id: 'jonshon_1',
    nombre: 'Jonshon 1',
    lat: -38.5500,
    lng: -72.9500,
    estado: 'normal',
    pesoPromedio: 2.6,
    jaulasOperativas: 10,
    totalJaulas: 12,
    modulos: [
      {
        id: 'jonshon_1-100',
        nombre: 'Módulo 100',
        actividad: 60,
        ultimaActividad: new Date(),
        jaulas: Array.from({ length: 12 }, (_, i) => ({
          id: `jonshon_1-100-${i + 1}`,
          estado: i < 10 ? 'ocupada' : 'libre',
          peso: i < 10 ? Math.random() * 4 + 1 : undefined,
          ultimoMovimiento: i < 10 ? new Date(Date.now() - Math.random() * 3600000) : undefined
        }))
      }
    ],
    ultimoEvento: {
      id: 'event-jonshon_1',
      tipo: 'movimiento',
      centroId: 'jonshon_1',
      timestamp: new Date(Date.now() - 1500000),
      descripcion: 'Monitoreo de jaulas completado'
    }
  },
  {
    id: 'jesus_6',
    nombre: 'Jesus 6',
    lat: -38.6000,
    lng: -73.0000,
    estado: 'normal',
    pesoPromedio: 2.4,
    jaulasOperativas: 8,
    totalJaulas: 10,
    modulos: [
      {
        id: 'jesus_6-100',
        nombre: 'Módulo 100',
        actividad: 55,
        ultimaActividad: new Date(),
        jaulas: Array.from({ length: 10 }, (_, i) => ({
          id: `jesus_6-100-${i + 1}`,
          estado: i < 8 ? 'ocupada' : 'libre',
          peso: i < 8 ? Math.random() * 4 + 1 : undefined,
          ultimoMovimiento: i < 8 ? new Date(Date.now() - Math.random() * 3600000) : undefined
        }))
      }
    ],
    ultimoEvento: {
      id: 'event-jesus_6',
      tipo: 'movimiento',
      centroId: 'jesus_6',
      timestamp: new Date(Date.now() - 1800000),
      descripcion: 'Actividad normal en centro Jesus 6'
    }
  },
  {
    id: 'queten',
    nombre: 'Queten',
    lat: -38.4500,
    lng: -72.8500,
    estado: 'critico',
    pesoPromedio: 3.8,
    jaulasOperativas: 12,
    totalJaulas: 20,
    modulos: [
      {
        id: 'queten-100',
        nombre: 'Módulo 100',
        actividad: 95,
        ultimaActividad: new Date(),
        jaulas: Array.from({ length: 20 }, (_, i) => ({
          id: `queten-100-${i + 1}`,
          estado: i < 12 ? 'ocupada' : (i < 15 ? 'alerta' : 'libre'),
          peso: i < 12 ? Math.random() * 4 + 1 : undefined,
          ultimoMovimiento: i < 12 ? new Date(Date.now() - Math.random() * 3600000) : undefined
        }))
      },
      {
        id: 'queten-200',
        nombre: 'Módulo 200',
        actividad: 60,
        ultimaActividad: new Date(),
        jaulas: Array.from({ length: 20 }, (_, i) => ({
          id: `queten-200-${i + 1}`,
          estado: i < 8 ? 'ocupada' : 'libre',
          peso: i < 8 ? Math.random() * 4 + 1 : undefined,
          ultimoMovimiento: i < 8 ? new Date(Date.now() - Math.random() * 3600000) : undefined
        }))
      }
    ],
    ultimoEvento: {
      id: 'event-3',
      tipo: 'peso_critico',
      centroId: 'queten',
      timestamp: new Date(Date.now() - 600000),
      descripcion: 'Peso crítico detectado en jaula 8',
      peso: 4.2
    }
  },
  {
    id: 'seno_melimoyu',
    nombre: 'Seno Melimoyu',
    lat: -38.6500,
    lng: -73.0500,
    estado: 'normal',
    pesoPromedio: 2.3,
    jaulasOperativas: 6,
    totalJaulas: 8,
    modulos: [
      {
        id: 'seno_melimoyu-100',
        nombre: 'Módulo 100',
        actividad: 50,
        ultimaActividad: new Date(),
        jaulas: Array.from({ length: 8 }, (_, i) => ({
          id: `seno_melimoyu-100-${i + 1}`,
          estado: i < 6 ? 'ocupada' : 'libre',
          peso: i < 6 ? Math.random() * 4 + 1 : undefined,
          ultimoMovimiento: i < 6 ? new Date(Date.now() - Math.random() * 3600000) : undefined
        }))
      }
    ],
    ultimoEvento: {
      id: 'event-seno_melimoyu',
      tipo: 'movimiento',
      centroId: 'seno_melimoyu',
      timestamp: new Date(Date.now() - 2100000),
      descripcion: 'Monitoreo rutinario en Seno Melimoyu'
    }
  },
  {
    id: 'transito_2',
    nombre: 'Transito 2',
    lat: -38.7000,
    lng: -73.1000,
    estado: 'normal',
    pesoPromedio: 2.2,
    jaulasOperativas: 4,
    totalJaulas: 6,
    modulos: [
      {
        id: 'transito_2-100',
        nombre: 'Módulo 100',
        actividad: 45,
        ultimaActividad: new Date(),
        jaulas: Array.from({ length: 6 }, (_, i) => ({
          id: `transito_2-100-${i + 1}`,
          estado: i < 4 ? 'ocupada' : 'libre',
          peso: i < 4 ? Math.random() * 4 + 1 : undefined,
          ultimoMovimiento: i < 4 ? new Date(Date.now() - Math.random() * 3600000) : undefined
        }))
      }
    ],
    ultimoEvento: {
      id: 'event-transito_2',
      tipo: 'movimiento',
      centroId: 'transito_2',
      timestamp: new Date(Date.now() - 2400000),
      descripcion: 'Actividad normal en Transito 2'
    }
  },
  {
    id: 'valverde_4',
    nombre: 'Valverde 4',
    lat: -38.7500,
    lng: -73.1500,
    estado: 'normal',
    pesoPromedio: 2.1,
    jaulasOperativas: 3,
    totalJaulas: 5,
    modulos: [
      {
        id: 'valverde_4-100',
        nombre: 'Módulo 100',
        actividad: 40,
        ultimaActividad: new Date(),
        jaulas: Array.from({ length: 5 }, (_, i) => ({
          id: `valverde_4-100-${i + 1}`,
          estado: i < 3 ? 'ocupada' : 'libre',
          peso: i < 3 ? Math.random() * 4 + 1 : undefined,
          ultimoMovimiento: i < 3 ? new Date(Date.now() - Math.random() * 3600000) : undefined
        }))
      }
    ],
    ultimoEvento: {
      id: 'event-valverde_4',
      tipo: 'movimiento',
      centroId: 'valverde_4',
      timestamp: new Date(Date.now() - 2700000),
      descripcion: 'Monitoreo completado en Valverde 4'
    }
  }
];

export const indicadoresSistema: IndicadorSistema = {
  saludGeneral: 87,
  eficienciaRadar: 92,
  alertasHoy: 5,
  intrusionesDetectadas: 2,
  eventosLobosMarinos: 3
};

export const generarDatosGrafico = (tipo: string, horas: number = 24): DatosGrafico[] => {
  const datos: DatosGrafico[] = [];
  const ahora = new Date();
  
  for (let i = horas; i >= 0; i--) {
    const timestamp = new Date(ahora.getTime() - i * 3600000);
    let valor = 0;
    
    switch (tipo) {
      case 'modulo-100':
        valor = Math.random() * 100;
        break;
      case 'modulo-200':
        valor = Math.random() * 80;
        break;
      case 'centros':
        valor = Math.random() * 50 + 20;
        break;
    }
    
    datos.push({ timestamp, valor, tipo });
  }
  
  return datos;
}; 