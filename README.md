<div align="center">

<img src="./public/img/favicon.png" width="90" alt="Logo" />

# Ricardo P/ — Portafolio Personal

### Desarrollador Full Stack junior en construcción constante 🚀

[![Typing SVG](https://readme-typing-svg.demolab.com/?lines=Construyo+aplicaciones+web+de+extremo+a+extremo;React+%2B+Node.js+%2B+MongoDB+%2B+Express;Aprendiendo+algo+nuevo+cada+d%C3%ADa;%C2%A1Bienvenido+a+mi+portafolio!&font=Fira%20Code&center=true&width=520&height=45&duration=2600&pause=800&color=6366F1&vCenter=true&size=22)](https://git.io/typing-svg)

<p>
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-38BDF8?logo=tailwindcss&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer&logoColor=white&style=for-the-badge" />
</p>

<p>
  <img src="https://img.shields.io/badge/status-en%20desarrollo-brightgreen?style=flat-square" />
  <img src="https://img.shields.io/badge/licencia-MIT-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/idiomas-ES%20%2F%20EN-orange?style=flat-square" />
  <img src="https://img.shields.io/badge/ubicaci%C3%B3n-Santa%20Marta%2C%20Colombia-2ea44f?style=flat-square" />
</p>

**[🌐 Ver demo en vivo](#)** · **[📩 Contacto](#-contacto)** · **[🗂️ Proyectos](#️-proyectos-destacados)**

</div>

---

## 📖 Sobre este portafolio

Este es mi portafolio profesional, construido desde cero con **React + Vite + Tailwind CSS**.
Incluye modo claro/oscuro, selector de idioma (ES/EN), animaciones de entrada con
Framer Motion y una sección de proyectos con estudios de caso reales: el problema
que resolví y cómo lo resolví.

> "Cada proyecto de este portafolio nace de un problema concreto y termina en una
> solución que funciona." 

## ✨ Características

- 🌗 **Modo claro / oscuro** con transición suave y persistencia de preferencia
- 🌍 **Bilingüe (ES/EN)** vía `i18next`, con todo el contenido centralizado en JSON
- 🎬 **Animaciones fluidas** de entrada y scroll con `framer-motion`
- 📱 **100% responsive**, mobile-first
- 🖼️ **Fallback automático de imágenes** — si falta una foto, se muestra un placeholder con iniciales
- 🧮 **Contadores animados** (proyectos, tecnologías, etc.)
- 🗂️ **Estudios de caso por proyecto**: problema → solución → stack → link

## 🧰 Stack técnico

<p>
  <img src="https://skillicons.dev/icons?i=react,vite,tailwind,js,html,css,nodejs,mongodb,express,git,github" />
</p>

| Categoría   | Tecnologías |
|-------------|-------------|
| Frontend    | React 18, Vite, Tailwind CSS, Framer Motion, Lucide Icons |
| i18n        | i18next, react-i18next |
| Navegación  | react-scroll |
| Calidad     | ESLint |

## 🚀 Cómo correrlo localmente

```bash
# 1. Clona el repositorio
git clone https://github.com/Ricardo-Palomino/<nombre-del-repo>.git
cd <nombre-del-repo>

# 2. Instala dependencias
npm install

# 3. Levanta el entorno de desarrollo
npm run dev
```

Abre **http://localhost:5173** 🎉

### Otros comandos disponibles

| Comando           | Descripción                                  |
|--------------------|-----------------------------------------------|
| `npm run dev`       | Servidor de desarrollo con hot reload         |
| `npm run build`     | Genera la versión de producción en `dist/`    |
| `npm run preview`   | Sirve localmente el build de producción       |
| `npm run lint`      | Corre ESLint sobre el proyecto                |

## 🖼️ Agregar tus imágenes

El sitio funciona sin ellas (muestra un marco con las iniciales del proyecto),
pero para que se vea completo agrega estos archivos en `public/img/`:

| Archivo             | Dónde se usa                  |
|-----------------------|--------------------------------|
| `foto.jpg`             | Foto personal en el Hero        |
| `cover.jpg`            | Imagen del laptop en la portada |
| `gymmaster.jpg`        | Proyecto GymMaster CLI          |
| `innova.jpg`           | Proyecto INNOVA-ASISTE          |
| `dataflix.jpg`         | Proyecto DataFlix                |
| `shopverse.jpg`        | Proyecto ShopVerse                |
| `foodstars.jpg`        | Proyecto FoodStars                 |

No necesitas tocar código: en cuanto el archivo exista en esa ruta, el
componente lo muestra automáticamente.

## 🗂️ Proyectos destacados

| Proyecto | Descripción | Stack | Enlace |
|----------|-------------|-------|--------|
| 🍽️ **FoodStars** | Plataforma fullstack para descubrir, calificar y compartir restaurantes, con panel de administración. | React · Node.js · Express · MongoDB | [Ver proyecto](https://ricardo-palomino.github.io/Copia-Fronted-FoodStars/) |
| 🛒 **ShopVerse** | Tienda en línea conectada a FakeStore API con catálogo, filtros y experiencia responsiva. | HTML · CSS · JS · Tailwind | [Ver proyecto](https://github.com/Ricardo-Palomino/proyecto-de-Javascript) |
| 🎬 **DataFlix** | Plataforma educativa con cursos, quizzes y seguimiento de progreso. | HTML · CSS · JS | [Ver proyecto](https://github.com/DanielSantiagoV/DataFlix) |
| 🏋️ **GymMaster CLI** | CLI interactiva para gestionar socios y pagos de gimnasios. | Node.js · MongoDB · Inquirer.js | [Ver proyecto](https://github.com/DanielSantiagoV/GymMaster_CLI) |
| 🎓 **INNOVA-ASISTE** | Herramienta para centralizar el registro de asistencia estudiantil. | Python · CLI · JSON | [Ver proyecto](https://github.com/Ricardo-Palomino/INNOVA-ASISTE) |

## 📂 Estructura del proyecto

portfolio-react/
├── public/
│ └── img/ # Imágenes estáticas (proyectos, portada, favicon)
├── src/
│ ├── components/ # Navbar, Cover, Hero, About, Skills, Projects, Contact, Footer
│ ├── hooks/ # useTheme, useScrollAnimation
│ ├── locales/ # es.json, en.json — todo el contenido textual
│ ├── i18n.js # Configuración de i18next
│ ├── App.jsx
│ └── index.css # Tokens de color claro/
oscuro + estilos Tailwind
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json


## ✏️ Editar contenido

Casi todo el texto vive en `src/locales/es.json` y `src/locales/en.json`
(mismas claves en ambos archivos, solo cambia el idioma). El stack técnico
de la sección About y los niveles de las barras de habilidades están
directamente en `About.jsx` y `Skills.jsx`.

Para agregar un nuevo proyecto:
1. Agrega la imagen en `public/img/<slug>.jpg`
2. Súmalo al arreglo `SLUGS` en `src/components/Projects.jsx`
3. Agrega el objeto correspondiente en `projects.items` dentro de `es.json` y `en.json`

## 🗺️ Roadmap

- [x] Modo claro/oscuro
- [x] Soporte bilingüe ES/EN
- [x] Sección de proyectos con estudios de caso
- [ ] Blog técnico
- [ ] Sección de certificaciones
- [ ] Tests con Vitest / React Testing Library

## 📬 Contacto

<p>
  <a href="mailto:Rp0459510@gmail.com"><img src="https://img.shields.io/badge/Email-Rp0459510%40gmail.com-D14836?logo=gmail&logoColor=white&style=for-the-badge" /></a>
  <a href="https://www.linkedin.com/in/ricardo-palomino-7650a3365/"><img src="https://img.shields.io/badge/LinkedIn-Ricardo%20Palomino-0A66C2?logo=linkedin&logoColor=white&style=for-the-badge" /></a>
  <a href="https://github.com/Ricardo-Palomino"><img src="https://img.shields.io/badge/GitHub-Ricardo--Palomino-181717?logo=github&logoColor=white&style=for-the-badge" /></a>
</p>

---

<div align="center">

Hecho con mucho **Carño** por **Ricardo Palomino** — Santa Marta, Colombia 🇨🇴

⭐ Si te gustó este portafolio, ¡considera dejar una estrella al repo!

</div>