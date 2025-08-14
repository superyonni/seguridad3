# Wisensor 3.0 - Sistema de Monitoreo

Mockup funcional del sistema de monitoreo Wisensor 3.0 con interfaz moderna y diseño responsivo.

## Características

- **Mapa Interactivo**: Visualización de centros con marcadores personalizados según estado
- **Panel Lateral**: Indicadores del sistema, ranking de pesos y detalles del centro seleccionado
- **Gráficos en Tiempo Real**: Tendencia de actividad de módulos y comparativa por centro
- **Detalles de Módulos**: Vista detallada de jaulas con estados visuales
- **Tema Oscuro**: Diseño moderno con acentos en azul eléctrico y naranja alerta
- **Responsivo**: Adaptable a diferentes tamaños de pantalla

## Tecnologías Utilizadas

- React 18
- TypeScript
- Vite
- Leaflet (mapas)
- Recharts (gráficos)
- Lucide React (iconos)
- CSS Variables (tema)

## Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd wisensor-3.0
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:3000`

## Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Map.tsx         # Mapa principal con Leaflet
│   ├── SidePanel.tsx   # Panel lateral con indicadores
│   ├── ChartsSection.tsx # Gráficos de tendencias
│   └── ModuleDetail.tsx # Modal de detalles de módulos
├── data/               # Datos mock
│   └── mockData.ts     # Datos simulados del sistema
├── types/              # Definiciones TypeScript
│   └── index.ts        # Interfaces y tipos
├── App.tsx             # Componente principal
├── App.css             # Estilos principales
├── index.css           # Estilos globales
└── main.tsx            # Punto de entrada
```

## Funcionalidades

### Mapa Principal
- Marcadores personalizados por estado (normal, alerta, crítico)
- Popups informativos al hacer clic
- Controles de vista (satelital, radar, 3D)
- Centrado en la región de los centros

### Panel Lateral
- Indicadores de salud del sistema
- Ranking de pesos promedio con etiquetas CRÍTICO
- Alertas del día (intrusiones, lobos marinos)
- Detalles del centro seleccionado

### Gráficos
- Tendencia de actividad Módulo 100
- Tendencia de actividad Módulo 200  
- Comparativa de actividad por centro
- Datos en tiempo real simulados

### Detalles de Módulos
- Vista de jaulas con estados visuales
- Información de peso por jaula
- Último evento con opciones de video
- Leyenda de estados

## Estados del Sistema

- **Normal**: Verde - Funcionamiento óptimo
- **Alerta**: Amarillo - Atención requerida
- **Crítico**: Rojo - Intervención inmediata

## Estados de Jaulas

- **Ocupada**: ● Verde - Jaula con salmones
- **Libre**: ○ Gris - Jaula disponible
- **Alerta**: ⚠ Rojo - Problema detectado

## Scripts Disponibles

- `npm run dev` - Servidor de desarrollo (puerto 3000)
- `npm run build` - Construcción para producción
- `npm run preview` - Vista previa de la construcción

## Personalización

El sistema utiliza variables CSS para facilitar la personalización de colores:

```css
:root {
  --primary-blue: #00d4ff;
  --alert-orange: #ff6b35;
  --critical-red: #ff4757;
  --dark-bg: #0a0a0a;
  --card-bg: #1a1a1a;
  --border-color: #2a2a2a;
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --success-green: #2ed573;
  --warning-yellow: #ffa502;
}
```

## Licencia

Este proyecto es un mockup funcional para demostración de capacidades. 