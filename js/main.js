/**
 * Portal de Acreditación - Medicina UNA Puno
 * Main JavaScript File - v2.0
 *
 * Funcionalidades:
 * - FAQ interactivo con expand/collapse
 * - Validación de enlaces de descarga
 * - Accesibilidad mejorada con teclado
 * - Multi-página con navegación por enlaces
 */

// ===============================================
// UTILIDADES DE NAVEGACIÓN
// ===============================================

/**
 * Realiza scroll suave al inicio de la página
 */
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// ===============================================
// FAQ INTERACTIVO
// ===============================================

/**
 * Alterna la visibilidad de una respuesta FAQ
 * @param {string} faqId - ID del elemento FAQ a expandir/colapsar
 */
function toggleFAQ(faqId) {
  const faqAnswer = document.getElementById(faqId);
  const faqItem = faqAnswer.parentElement;

  if (faqItem) {
    // Alternar clase 'active' para animación
    faqItem.classList.toggle('active');
  } else {
    console.error(`FAQ con ID "${faqId}" no encontrado`);
  }
}

// ===============================================
// EVENT LISTENERS Y INICIALIZACIÓN
// ===============================================

/**
 * Inicializa la aplicación cuando el DOM está completamente cargado
 */
document.addEventListener('DOMContentLoaded', () => {
  console.log('Portal de Acreditación - Medicina UNA Puno iniciado');

  // Agregar event listeners a los enlaces de descarga (para validación futura)
  const downloadLinks = document.querySelectorAll('.doc-download');
  downloadLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Si el href es "#", prevenir navegación y mostrar alerta
      if (link.getAttribute('href') === '#') {
        e.preventDefault();
        alert('Este documento aún no está disponible. Los enlaces serán habilitados próximamente desde el panel de administración.');
      }
    });
  });

  // Agregar soporte de teclado para botones de navegación (home page)
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(button => {
    button.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        button.click();
      }
    });
  });

  // Agregar soporte de teclado para botones volver (profile pages)
  const backButtons = document.querySelectorAll('.btn-back');
  backButtons.forEach(button => {
    button.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        button.click();
      }
    });
  });

  // Agregar soporte de teclado para FAQ items
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.setAttribute('tabindex', '0');
    item.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.click();
      }
    });
  });

  console.log('Inicialización completada');
});

// ===============================================
// UTILIDADES ADICIONALES
// ===============================================

/**
 * Obtiene el nombre de la página actual
 * @returns {string} Nombre de la página actual (sin extensión)
 */
function getCurrentPage() {
  const path = window.location.pathname;
  const page = path.split('/').pop().replace('.html', '');
  return page || 'index';
}

/**
 * Valida la estructura de páginas del portal
 * (Función de desarrollo - útil para debugging)
 */
function validatePortalStructure() {
  const expectedPages = ['index.html', 'estudiantes.html', 'docentes.html', 'egresados.html', 'administrativos.html', 'laboratorio.html', 'otros.html'];
  console.log('Portal configurado con arquitectura multi-página');
  console.log('Páginas esperadas:', expectedPages);
  console.log('Página actual:', getCurrentPage() + '.html');
}

// Ejecutar validación en desarrollo
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  document.addEventListener('DOMContentLoaded', validatePortalStructure);
}

// ===============================================
// EXPORTAR FUNCIONES GLOBALES
// ===============================================

// Las funciones toggleFAQ y scrollToTop están disponibles globalmente
// porque están declaradas con 'function' en el scope global

// Para debugging en consola del navegador
window.portalDebug = {
  getCurrentPage,
  validatePortalStructure,
  scrollToTop,
  toggleFAQ
};
