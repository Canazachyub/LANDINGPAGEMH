# Portal de Información para Acreditación SINEACE

## Facultad de Medicina Humana - Universidad Nacional del Altiplano

Portal web estático para centralizar información del proceso de acreditación SINEACE, diseñado para ser desplegado en GitHub Pages.

---

## Descripción del Proyecto

Sitio web profesional que organiza documentación institucional y curricular para diferentes perfiles de usuarios: estudiantes, docentes, egresados, personal administrativo, personal de laboratorio y otros.

### Características Principales

- **HTML5 + CSS3 + JavaScript Vanilla**: Sin frameworks, sin build process
- **Diseño Responsive**: Optimizado para desktop, tablet y móvil
- **6 Secciones Diferenciadas**: Contenido personalizado por perfil de usuario
- **Navegación Intuitiva**: Sistema de navegación simple y accesible
- **FAQ Interactivo**: Preguntas frecuentes con expand/collapse
- **Colores Institucionales**: Paleta oficial de la UNA Puno

---

## Estructura del Proyecto

```
/acreditacion-medicina/
├── index.html              # Página principal
├── css/
│   └── styles.css         # Estilos completos
├── js/
│   └── main.js            # Funcionalidad JavaScript
├── assets/
│   ├── logo.png           # Logo institucional
│   └── favicon.ico        # Favicon del sitio
├── docs/
│   └── .gitkeep           # Enlaces a Drive/Cloud
└── README.md              # Este archivo
```

---

## Paleta de Colores Institucional

| Color               | Código HEX | Uso                          |
|---------------------|------------|------------------------------|
| Morado Principal    | `#8B3A8E`  | Header, títulos, bordes      |
| Morado Oscuro       | `#6B2A6E`  | Botón volver, elementos dark |
| Amarillo            | `#F9D71C`  | Hover, destacados, FAQ       |
| Azul Institucional  | `#2B7BB9`  | Botones descarga, acentos    |
| Verde Oliva         | `#848B4F`  | Elementos complementarios    |
| Blanco              | `#FFFFFF`  | Fondos, texto inverso        |
| Gris Texto          | `#2C3E50`  | Texto principal              |
| Gris Claro          | `#F8F9FA`  | Fondos alternativos          |

---

## Secciones del Portal

1. **Estudiantes**: Documentos curriculares, institucionales, proceso de acreditación, FAQ
2. **Docentes**: Documentos institucionales, curriculares, proceso de acreditación
3. **Egresados**: Perfil de egreso, estadísticas, brochure de acreditación
4. **Personal Administrativo**: Documentos institucionales, proceso de acreditación
5. **Personal de Laboratorio**: Documentos técnicos, proceso de acreditación
6. **Otros**: Documentos generales adicionales

---

## Instrucciones de Deployment en GitHub Pages

### Paso 1: Crear Repositorio en GitHub

1. Ir a [GitHub](https://github.com) e iniciar sesión
2. Click en el botón **"New"** o **"+"** → **"New repository"**
3. Configurar el repositorio:
   - **Repository name**: `acreditacion-medicina` (o el nombre que prefieras)
   - **Description**: "Portal de información para acreditación SINEACE - Medicina UNA Puno"
   - **Public**: Seleccionar (necesario para GitHub Pages gratuito)
   - **Initialize with README**: NO marcar (ya tenemos README)
4. Click en **"Create repository"**

### Paso 2: Subir los Archivos

#### Opción A: Usando Git desde la Terminal

```bash
# Inicializar repositorio local
cd /home/caronte/Documentos/LANDINGPAGEMH
git init

# Agregar archivos
git add .

# Crear commit inicial
git commit -m "Initial commit: Portal de Acreditación SINEACE"

# Conectar con repositorio remoto (reemplazar [usuario] con tu usuario de GitHub)
git remote add origin https://github.com/[usuario]/acreditacion-medicina.git

# Subir archivos
git branch -M main
git push -u origin main
```

#### Opción B: Usando la Interfaz Web de GitHub

1. En la página del repositorio, click en **"uploading an existing file"**
2. Arrastrar todos los archivos y carpetas del proyecto
3. Escribir mensaje de commit: "Initial commit: Portal de Acreditación SINEACE"
4. Click en **"Commit changes"**

### Paso 3: Habilitar GitHub Pages

1. En el repositorio, ir a **Settings** (Configuración)
2. En el menú lateral, buscar **Pages**
3. En la sección **"Source"**:
   - Branch: Seleccionar **main**
   - Folder: Seleccionar **/ (root)**
4. Click en **"Save"**
5. Esperar 2-3 minutos para que se procese el deployment

### Paso 4: Verificar el Sitio

- La URL será: `https://[usuario].github.io/acreditacion-medicina/`
- GitHub mostrará la URL una vez que el sitio esté listo
- Si hay errores, verificar en la sección **"Actions"** del repositorio

---

## Gestión de Documentos

Los enlaces a documentos PDF están configurados como placeholders (`href="#"`). Para añadir los documentos reales:

### Opción 1: Almacenamiento en GitHub (Recomendado para archivos pequeños)

1. Crear carpeta `docs/` en el repositorio
2. Subir los PDFs a esta carpeta
3. Actualizar los enlaces en `index.html`:
   ```html
   <a href="docs/curriculo-2016-2022.pdf" class="doc-download" target="_blank" rel="noopener noreferrer">
   ```

### Opción 2: Enlaces Externos (Google Drive, OneDrive, etc.)

1. Subir el PDF a tu servicio de almacenamiento en la nube
2. Obtener el enlace de compartir público
3. Actualizar el enlace en `index.html`:
   ```html
   <a href="https://drive.google.com/file/d/xxxxx" class="doc-download" target="_blank" rel="noopener noreferrer">
   ```

### Opción 3: Backend Django (Futuro)

El sistema está preparado para integrarse con Django Admin para gestión dinámica de documentos. Los comentarios HTML indican dónde reemplazar los enlaces.

---

## Personalización

### Cambiar el Logo

1. Reemplazar el archivo `assets/logo.png` con el logo oficial
2. Dimensiones recomendadas: 200x80px (formato PNG con transparencia)
3. Actualizar `assets/favicon.ico` con el favicon institucional

### Modificar Colores

Editar las variables CSS en `css/styles.css`:

```css
:root {
  --morado-principal: #8B3A8E;
  --morado-oscuro: #6B2A6E;
  --amarillo: #F9D71C;
  /* ... resto de colores */
}
```

### Añadir Nuevas Secciones

1. Agregar botón en el grid de navegación (`index.html`):
   ```html
   <button class="nav-btn" onclick="showSection('nueva-seccion')">
     <span class="nav-icon">&#128196;</span>
     <span class="nav-text">Nueva Sección</span>
   </button>
   ```

2. Crear la sección de contenido:
   ```html
   <section id="nueva-seccion" class="content">
     <!-- Contenido -->
   </section>
   ```

---

## Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Dispositivos móviles (iOS y Android)

---

## Accesibilidad

El sitio cumple con estándares WCAG 2.1 nivel AA:

- ✅ Navegación por teclado completa
- ✅ ARIA labels en elementos interactivos
- ✅ Contraste de color adecuado
- ✅ Focus states visibles
- ✅ Alt text en imágenes
- ✅ Estructura semántica HTML5

---

## Mantenimiento

### Actualizar Contenido

1. Editar `index.html` directamente
2. Hacer commit de los cambios
3. Push a GitHub
4. El sitio se actualizará automáticamente en 1-2 minutos

### Verificar Estado del Sitio

- Ir a la pestaña **Actions** en GitHub
- Ver el estado de los deployments
- Logs disponibles en caso de errores

---

## Soporte y Contacto

**Facultad de Medicina Humana**
Universidad Nacional del Altiplano
Av. Floral 1153, Puno - Perú

Para soporte técnico o consultas sobre el portal, contactar al área de sistemas de la facultad.

---

## Licencia

© 2025 Facultad de Medicina Humana - Universidad Nacional del Altiplano. Todos los derechos reservados.

---

## Historial de Versiones

### v1.0 - 10 de noviembre, 2025
- Lanzamiento inicial del portal
- 6 secciones principales implementadas
- Sistema de navegación completo
- FAQ interactivo para estudiantes
- Diseño responsive completo

---

**Última actualización**: 10 de noviembre, 2025
