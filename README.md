# Portafolio — Ricardo Palomino

Portafolio profesional construido con **React + Vite + Tailwind CSS**, con modo
claro/oscuro, selector de idioma (ES/EN) y animaciones de entrada.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

Para generar la versión de producción:

```bash
npm run build
npm run preview
```

## Agregar tus imágenes

El sitio funciona sin ellas (muestra un marco con tus iniciales y un patrón
de respaldo), pero para que se vea completo, agrega estos archivos en
`public/img/`:

| Archivo            | Dónde se usa               |
|---------------------|-----------------------------|
| `foto.jpg`           | Tu foto en el Hero           |
| `gymmaster.jpg`      | Proyecto GymMaster CLI       |
| `innova.jpg`         | Proyecto INNOVA-ASISTE       |
| `dataflix.jpg`       | Proyecto DataFlix            |
| `shopverse.jpg`      | Proyecto ShopVerse           |

No necesitas tocar código: en cuanto el archivo exista en esa ruta, el
componente lo muestra automáticamente.

## Estructura

```
src/
├── components/       # Navbar, Hero, About, Skills, Projects, Contact, Footer
├── hooks/             # useTheme, useScrollAnimation
├── locales/           # es.json, en.json (i18next)
├── i18n.js
├── App.jsx
└── index.css          # tokens de color claro/oscuro + Tailwind
```

## Editar contenido

Casi todo el texto vive en `src/locales/es.json` y `src/locales/en.json`
(mismas claves en ambos archivos). El stack técnico del About y los niveles
de las barras de habilidades están directamente en `About.jsx` y
`Skills.jsx`.
