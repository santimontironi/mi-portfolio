# 🌐 Portfolio - Santiago Montironi

Bienvenido a mi portafolio profesional. Este proyecto es una aplicación web moderna diseñada para mostrar mi experiencia, habilidades y proyectos desarrollados. Combina diseño responsivo con funcionalidad robusta, ofreciendo una experiencia de usuario fluida y atractiva.

**[Visita el sitio en vivo](https://santiagomontironi.netlify.app)**

---

## 📋 Tabla de contenidos
- [Descripción del proyecto](#descripción-del-proyecto)
- [Características principales](#características-principales)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Componentes principales](#componentes-principales)
- [Scripts disponibles](#scripts-disponibles)
- [Licencia](#licencia)
- [Contacto](#contacto)

---

## 📝 Descripción del proyecto

Este portafolio es una plataforma personal que permite a potenciales clientes, empleadores y colaboradores conocer:

- **Sobre mí**: Información personal y profesional
- **Servicios**: Servicios profesionales que ofrezco
- **Habilidades**: Stack tecnológico y competencias
- **Proyectos**: Trabajos realizados con descripción y enlaces
- **Contacto**: Formularios y métodos para ponerse en contacto

---

## ✨ Características principales

- **🎨 Diseño responsive**: Completamente adaptado para móviles (320px), tablets (678px) y desktop (1200px+)
- **✨ Animaciones fluidas**: Uso de Animate On Scroll y transiciones CSS suaves
- **🌍 Multilenguaje**: Contenido disponible en español e inglés mediante context API
- **⚡ Rendimiento optimizado**: Construido con Vite para máxima velocidad
- **📱 Mobile-first**: Diseño pensado primero en dispositivos móviles
- **♿ Accesibilidad**: Semántica HTML correcta y navegación accesible

---

## 🛠️ Tecnologías utilizadas

### Frontend
- **React 18+**: Librería de componentes JavaScript
- **Vite**: Build tool rápido y moderno
- **CSS3**: Estilos responsive y animaciones avanzadas
- **AOS (Animate On Scroll)**: Librería para animaciones al desplazarse

### Desarrollo
- **Node.js**: Runtime de JavaScript
- **npm/yarn**: Gestor de paquetes
- **Git & GitHub**: Control de versiones
- **ESLint**: Linter de código
- **Netlify**: Plataforma de despliegue

---

## 📦 Instalación

### Requisitos previos
- Node.js (versión 16+ recomendada)
- npm o yarn

### Pasos de instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/santiagomontironi/portfolio.git
   cd mi-portfolio
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Accede a la aplicación**
   ```
   http://localhost:5173
   ```

---

## 🚀 Uso

### Desarrollo local

El servidor de desarrollo se ejecuta por defecto en `http://localhost:5173` con hot reload automático.

```bash
npm run dev
```

### Construcción para producción

Para crear un build optimizado:

```bash
npm run build
```

### Vista previa de producción

Para previsualizar el build antes de desplegar:

```bash
npm run preview
```

---

## 📁 Estructura del proyecto

```
mi-portfolio/
├── public/
│   └── img/                    # Imágenes públicas
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── cssComponents/  # Estilos de componentes
│   │   │   ├── cssPages/       # Estilos de páginas
│   │   │   └── global/         # Estilos globales y de hover
│   │   ├── favicon/            # Favicon del sitio
│   │   └── img/                # Imágenes de la aplicación
│   ├── components/             # Componentes React reutilizables
│   ├── context/                # Context API (multilenguaje)
│   ├── data/                   # Data stática del proyecto
│   ├── pages/                  # Páginas principales
│   ├── services/               # Funciones utilitarias
│   ├── App.jsx                 # Componente raíz
│   └── main.jsx                # Punto de entrada
├── eslint.config.js            # Configuración de ESLint
├── vite.config.js              # Configuración de Vite
├── package.json                # Dependencias del proyecto
└── README.md                   # Este archivo
```

---

## 🧩 Componentes principales

### Componentes
- **Nav**: Navegación responsiva con menú móvil
- **ContactLinks**: Enlaces a redes sociales y contacto
- **Form**: Formulario de contacto funcional
- **Footer**: Pie de página con información
- **Project**: Tarjeta individual de proyecto
- **Service**: Tarjeta de servicio ofrecido
- **Skill**: Elemento de habilidad técnica

### Páginas
- **Main**: Página de inicio con hero section
- **AboutMe**: Sección de información personal
- **Services**: Catálogo de servicios
- **Skills**: Habilidades técnicas
- **Projects**: Galería de proyectos
- **Contact**: Página de contacto

### Context
- **languageContext**: Gestión de idioma (español/inglés)

---

## 📜 Scripts disponibles

En el directorio del proyecto, puedes ejecutar:

| Script | Descripción |
|--------|-----------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Crea un build optimizado para producción |
| `npm run preview` | Visualiza el build de producción localmente |
| `npm run lint` | Ejecuta ESLint para verificar el código |

---

## 🚀 Despliegue

El proyecto está actualmente desplegado en **Netlify**:

🔗 **[https://santiagomontironi.netlify.app/](https://santiagomontironi.netlify.app/)**

### Para desplegar tu propia versión:

1. Haz un fork del repositorio
2. Conecta con Netlify
3. Configura el comando de build: `npm run build`
4. Directorio de publicación: `dist`

---


## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 📧 Contacto

**Santiago Montironi**

- 🌐 Portafolio: [santiagomontironi.netlify.app](https://santiagomontironi.netlify.app)
- 📧 Email: santiagomontironi21@gmail.com
- 💼 LinkedIn: [linkedin.com/in/santiago-montironi-649652215](https://www.linkedin.com/in/santiago-montironi-649652215)
- 🐙 GitHub: [github.com/santimontironi](https://github.com/santimontironi)
  
---

**Hecho con ❤️ por Santiago Montironi**
