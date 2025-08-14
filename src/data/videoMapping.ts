export interface VideoInfo {
  id: string;
  nombre: string;
  url: string;
  timestamp: string;
  duracion?: string;
  tipo?: string;
}

export interface CentroVideos {
  centroId: string;
  centroNombre: string;
  videos: VideoInfo[];
}

export const videosPorCentro: CentroVideos[] = [
  {
    centroId: 'avellano',
    centroNombre: 'Avellano',
    videos: [
      {
        id: 'avellano-1',
        nombre: 'Avellano - Monitoreo 11:44',
        url: 'https://dash9.wisensor.cl/videos/AQUA-avellano-F12-08-2025H114449.mp4',
        timestamp: '2025-08-12 11:44:49',
        tipo: 'monitoreo'
      },
      {
        id: 'avellano-2',
        nombre: 'Avellano - Monitoreo 10:42',
        url: 'https://dash9.wisensor.cl/videos/AQUA-avellano-F12-08-2025H104240.mp4',
        timestamp: '2025-08-12 10:42:40',
        tipo: 'monitoreo'
      },
      {
        id: 'avellano-3',
        nombre: 'Avellano - Estado Inicial',
        url: 'https://dash9.wisensor.cl/videos/AQUA-avellano-F12-08-2025H000000.mp4',
        timestamp: '2025-08-12 00:00:00',
        tipo: 'estado'
      }
    ]
  },
  {
    centroId: 'betecoi',
    centroNombre: 'Betecoi',
    videos: [
      {
        id: 'betecoi-1',
        nombre: 'Betecoi - Monitoreo 06:50',
        url: 'https://dash9.wisensor.cl/videos/AQUA-betecoi-F12-08-2025H065024.mp4',
        timestamp: '2025-08-12 06:50:24',
        tipo: 'monitoreo'
      }
    ]
  },
  {
    centroId: 'capera',
    centroNombre: 'Capera',
    videos: [
      {
        id: 'capera-1',
        nombre: 'Capera - Monitoreo 05:20',
        url: 'https://dash9.wisensor.cl/videos/AQUA-capera-F12-08-2025H052003.mp4',
        timestamp: '2025-08-12 05:20:03',
        tipo: 'monitoreo'
      },
      {
        id: 'capera-2',
        nombre: 'Capera - Estado Inicial',
        url: 'https://dash9.wisensor.cl/videos/AQUA-capera-F12-08-2025H000000.mp4',
        timestamp: '2025-08-12 00:00:00',
        tipo: 'estado'
      }
    ]
  },
  {
    centroId: 'chidhuapi',
    centroNombre: 'Chidhuapi',
    videos: [
      {
        id: 'chidhuapi-1',
        nombre: 'Chidhuapi - Monitoreo 06:46',
        url: 'https://dash9.wisensor.cl/videos/AQUA-chidhuapi-F12-08-2025H064640.mp4',
        timestamp: '2025-08-12 06:46:40',
        tipo: 'monitoreo'
      },
      {
        id: 'chidhuapi-2',
        nombre: 'Chidhuapi - Estado Inicial',
        url: 'https://dash9.wisensor.cl/videos/AQUA-chidhuapi-F12-08-2025H000000.mp4',
        timestamp: '2025-08-12 00:00:00',
        tipo: 'estado'
      }
    ]
  },
  {
    centroId: 'elena',
    centroNombre: 'Elena',
    videos: [
      {
        id: 'elena-1',
        nombre: 'Elena - Monitoreo 05:32',
        url: 'https://dash9.wisensor.cl/videos/AQUA-elena-F12-08-2025H053229.mp4',
        timestamp: '2025-08-12 05:32:29',
        tipo: 'monitoreo'
      },
      {
        id: 'elena-2',
        nombre: 'Elena - Estado Inicial',
        url: 'https://dash9.wisensor.cl/videos/AQUA-elena-F12-08-2025H000000.mp4',
        timestamp: '2025-08-12 00:00:00',
        tipo: 'estado'
      }
    ]
  },
  {
    centroId: 'jonshon_1',
    centroNombre: 'Jonshon 1',
    videos: [
      {
        id: 'jonshon-1-1',
        nombre: 'Jonshon 1 - Monitoreo 06:19',
        url: 'https://dash9.wisensor.cl/videos/AQUA-jonshon_1-F12-08-2025H061923.mp4',
        timestamp: '2025-08-12 06:19:23',
        tipo: 'monitoreo'
      },
      {
        id: 'jonshon-1-2',
        nombre: 'Jonshon 1 - Monitoreo 05:35',
        url: 'https://dash9.wisensor.cl/videos/AQUA-jonshon_1-F12-08-2025H053515.mp4',
        timestamp: '2025-08-12 05:35:15',
        tipo: 'monitoreo'
      },
      {
        id: 'jonshon-1-3',
        nombre: 'Jonshon 1 - Monitoreo 05:24',
        url: 'https://dash9.wisensor.cl/videos/AQUA-jonshon_1-F12-08-2025H052445.mp4',
        timestamp: '2025-08-12 05:24:45',
        tipo: 'monitoreo'
      },
      {
        id: 'jonshon-1-4',
        nombre: 'Jonshon 1 - Monitoreo 04:47',
        url: 'https://dash9.wisensor.cl/videos/AQUA-jonshon_1-F12-08-2025H044730.mp4',
        timestamp: '2025-08-12 04:47:30',
        tipo: 'monitoreo'
      },
      {
        id: 'jonshon-1-5',
        nombre: 'Jonshon 1 - Monitoreo 04:34',
        url: 'https://dash9.wisensor.cl/videos/AQUA-jonshon_1-F12-08-2025H043408.mp4',
        timestamp: '2025-08-12 04:34:08',
        tipo: 'monitoreo'
      },
      {
        id: 'jonshon-1-6',
        nombre: 'Jonshon 1 - Estado Inicial',
        url: 'https://dash9.wisensor.cl/videos/AQUA-jonshon_1-F12-08-2025H000000.mp4',
        timestamp: '2025-08-12 00:00:00',
        tipo: 'estado'
      }
    ]
  },
  {
    centroId: 'jesus_6',
    centroNombre: 'Jesús 6',
    videos: [
      {
        id: 'jesus-6-1',
        nombre: 'Jesús 6 - Monitoreo 05:40',
        url: 'https://dash9.wisensor.cl/videos/AQUA-jesus_6-F12-08-2025H054019.mp4',
        timestamp: '2025-08-12 05:40:19',
        tipo: 'monitoreo'
      },
      {
        id: 'jesus-6-2',
        nombre: 'Jesús 6 - Estado Inicial',
        url: 'https://dash9.wisensor.cl/videos/AQUA-jesus_6-F12-08-2025H000000.mp4',
        timestamp: '2025-08-12 00:00:00',
        tipo: 'estado'
      }
    ]
  },
  {
    centroId: 'queten',
    centroNombre: 'Queten',
    videos: [
      {
        id: 'queten-1',
        nombre: 'Queten - Monitoreo 06:49',
        url: 'https://dash9.wisensor.cl/videos/AQUA-queten-F12-08-2025H064901.mp4',
        timestamp: '2025-08-12 06:49:01',
        tipo: 'monitoreo'
      },
      {
        id: 'queten-2',
        nombre: 'Queten - Monitoreo 05:26',
        url: 'https://dash9.wisensor.cl/videos/AQUA-queten-F12-08-2025H052608.mp4',
        timestamp: '2025-08-12 05:26:08',
        tipo: 'monitoreo'
      },
      {
        id: 'queten-3',
        nombre: 'Queten - Monitoreo 05:06',
        url: 'https://dash9.wisensor.cl/videos/AQUA-queten-F12-08-2025H050610.mp4',
        timestamp: '2025-08-12 05:06:10',
        tipo: 'monitoreo'
      },
      {
        id: 'queten-4',
        nombre: 'Queten - Monitoreo 04:53',
        url: 'https://dash9.wisensor.cl/videos/AQUA-queten-F12-08-2025H045310.mp4',
        timestamp: '2025-08-12 04:53:10',
        tipo: 'monitoreo'
      },
      {
        id: 'queten-5',
        nombre: 'Queten - Monitoreo 04:38',
        url: 'https://dash9.wisensor.cl/videos/AQUA-queten-F12-08-2025H043836.mp4',
        timestamp: '2025-08-12 04:38:36',
        tipo: 'monitoreo'
      },
      {
        id: 'queten-6',
        nombre: 'Queten - Estado Inicial',
        url: 'https://dash9.wisensor.cl/videos/AQUA-queten-F12-08-2025H000000.mp4',
        timestamp: '2025-08-12 00:00:00',
        tipo: 'estado'
      }
    ]
  },
  {
    centroId: 'seno_melimoyu',
    centroNombre: 'Seno Melimoyu',
    videos: [
      {
        id: 'seno-melimoyu-1',
        nombre: 'Seno Melimoyu - Monitoreo 06:23',
        url: 'https://dash9.wisensor.cl/videos/AQUA-seno_melimoyu-F12-08-2025H062303.mp4',
        timestamp: '2025-08-12 06:23:03',
        tipo: 'monitoreo'
      },
      {
        id: 'seno-melimoyu-2',
        nombre: 'Seno Melimoyu - Estado Inicial',
        url: 'https://dash9.wisensor.cl/videos/AQUA-seno_melimoyu-F12-08-2025H000000.mp4',
        timestamp: '2025-08-12 00:00:00',
        tipo: 'estado'
      }
    ]
  },
  {
    centroId: 'transito_2',
    centroNombre: 'Tránsito 2',
    videos: [
      {
        id: 'transito-2-1',
        nombre: 'Tránsito 2 - Monitoreo 04:46',
        url: 'https://dash9.wisensor.cl/videos/AQUA-transito_2-F12-08-2025H044607.mp4',
        timestamp: '2025-08-12 04:46:07',
        tipo: 'monitoreo'
      },
      {
        id: 'transito-2-2',
        nombre: 'Tránsito 2 - Monitoreo 04:26',
        url: 'https://dash9.wisensor.cl/videos/AQUA-transito_2-F12-08-2025H042645.mp4',
        timestamp: '2025-08-12 04:26:45',
        tipo: 'monitoreo'
      },
      {
        id: 'transito-2-3',
        nombre: 'Tránsito 2 - Estado Inicial',
        url: 'https://dash9.wisensor.cl/videos/AQUA-transito_2-F12-08-2025H000000.mp4',
        timestamp: '2025-08-12 00:00:00',
        tipo: 'estado'
      }
    ]
  },
  {
    centroId: 'valverde_4',
    centroNombre: 'Valverde 4',
    videos: [
      {
        id: 'valverde-4-1',
        nombre: 'Valverde 4 - Estado Inicial',
        url: 'https://dash9.wisensor.cl/videos/AQUA-valverde_4-F12-08-2025H000000.mp4',
        timestamp: '2025-08-12 00:00:00',
        tipo: 'estado'
      }
    ]
  }
];

// Centros con solo videos de estado inicial (sin monitoreo)
export const centrosSoloEstado: string[] = [
  'sotomo',
  'queullin',
  'punta_vergara',
  'marchant',
  'marta',
  'nueva_esperanza',
  'paso_vattuone',
  'jonshon_2',
  'jonshon_3',
  'huenquillahue',
  'isla_colorada',
  'herradura',
  'guaitecas_2',
  'garrao_2',
  'francisco_norte',
  'cuptana_2',
  'elefante',
  'concoto',
  'cascada',
  'catalina',
  'casa_pesca',
  'canutillar',
  'bahia_perales'
];

// Función para obtener videos de un centro específico
export const getVideosByCentro = (centroId: string): VideoInfo[] => {
  const centro = videosPorCentro.find(c => c.centroId === centroId);
  return centro ? centro.videos : [];
};

// Función para obtener todos los videos disponibles
export const getAllVideos = (): VideoInfo[] => {
  return videosPorCentro.flatMap(centro => centro.videos);
}; 