# 🎬 MovieView – Angular + Material

Aplicación frontend desarrollada en **Angular 17** con **Angular Material**, que consume la API pública de [The Movie Database (TMDB)](https://www.themoviedb.org/).  
Permite explorar películas populares, buscar por título y visualizar detalles en un modal, todo con un **diseño oscuro personalizado, tipografía Poppins y acentos fucsia**.

👉 **Demo online:** [https://movieview-one.vercel.app/](https://movieview-one.vercel.app/)

---

## ✨ Características principales

- **Consumo de API en tiempo real** usando `HttpClient`.
- **Listado de películas** en tabla paginada con Angular Material.
- **Filtro de búsqueda** optimizado con debounce y cancelación de peticiones (RxJS).
- **Detalle de película** en un modal (poster, fecha, rating y sinopsis).
- **Arquitectura modular y escalable**: separación en `features/`, `shared/` y `core/`.
- **UI custom**: dark theme, bordes fucsia, tipografía Poppins.
- **Testing unitario** con Jasmine + Karma (`MovieService`, `MoviesListComponent`, `MovieDetailComponent`, `SharedTableComponent`).
- **Deploy automatizado en Vercel**, con configuración para producción.

---

## 🛠️ Tecnologías utilizadas

- [Angular 17](https://angular.dev/)
- [Angular Material](https://material.angular.io/)
- [RxJS](https://rxjs.dev/)
- [Jasmine & Karma](https://jasmine.github.io/) para tests unitarios
- [Vercel](https://vercel.com/) para deploy en producción

---

## ⚙️ Instalación y ejecución local

Clonar el proyecto:

```bash
git clone https://github.com/tu-usuario/prueba-frontend.git
cd prueba-frontend
npm install
```

Ejecutar en modo desarrollo:

```bash
ng serve -o
```

La aplicación quedará disponible en [http://localhost:4200](http://localhost:4200).

---

## 🧪 Testing

Para ejecutar los tests unitarios:

```bash
ng test
```

Esto corre Karma + Jasmine y muestra resultados en consola/navegador.

---

## 🏗️ Build de producción

```bash
ng build --configuration production
```

Los archivos optimizados quedarán en `dist/prueba-frontend/`.  
Estos son los que se despliegan en producción (ej: Vercel, Netlify, GitHub Pages).

---

## 🌍 Deploy en Vercel

La aplicación está publicada en:  
👉 [https://movieview-one.vercel.app/](https://movieview-one.vercel.app/)

Pasos clave para el deploy:
1. Conexión del repo GitHub a Vercel.
2. Configuración de build:
   - **Build Command:** `ng build --configuration production`
   - **Output dir:** `dist/prueba-frontend`
3. Uso del **API Read Access Token** de TMDB en los environments de producción.

---

## 🔑 Environments

Los archivos de configuración (`environment.ts`) no se suben al repo por buenas prácticas.  
Para correr localmente debes crear `src/environments/environment.ts` con:

```ts
export const environment = {
  production: false,
  apiUrl: 'https://api.themoviedb.org/3',
  apiKey: 'YOUR_API_KEY_HERE'
};
```

⚠️ Se recomienda usar el **API Read Access Token de TMDB**, que es de solo lectura y seguro para aplicaciones frontend.

---

## 📂 Estructura del proyecto

```
src/app/
│
├── core/                # Servicios globales e interceptores
├── features/
│   └── movies/          # Feature principal (listado + detalle de películas)
│       ├── components/  # Componentes específicos (modal de detalle)
│       ├── data/        # Servicios y modelos de TMDB
│       └── pages/       # Páginas (MoviesList)
├── shared/              # Componentes reutilizables (tabla, etc.)
└── environments/        # Configuración por entorno
```

---

## 👩‍💻 Autora

**Laura Camila Quimbaya**  
Frontend / Fullstack Developer 🚀  

Me apasiona construir interfaces escalables, limpias y con foco en la experiencia de usuario.  
Este proyecto refleja buenas prácticas de arquitectura en Angular, integración con APIs reales, testing y despliegue en la nube.

---

## 📌 Notas finales

- Este proyecto fue desarrollado como prueba técnica con enfoque **senior**:  
  - Arquitectura modular.  
  - Standalone Components.  
  - ChangeDetectionStrategy.OnPush.  
  - RxJS para optimizar requests.  
  - Unit testing.  
  - Deploy en producción.  

- El resultado es una app lista para evolucionar (ej. más filtros, autenticación, favoritos, etc.).
