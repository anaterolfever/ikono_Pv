/**
 * PREVISUALIZAR descripción del plan (sin "Algunas de las salas")
 *
 * Página principal: https://feverup.com/m/465628
 * (también vale la demo GitHub Pages o index.html local)
 *
 * 1. Abre la URL del plan y espera a que cargue el texto de la descripción.
 * 2. F12 → Console → pega TODO este archivo → Enter
 *
 * En Fever carga el CSS del repo para ver grid, tipografías y espaciado.
 */
(function () {
  var FEVER_CSS = 'https://anaterolfever.github.io/ikono_Pv/assets/css/styles.css';
  var FEVER_FONTS = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;600&display=swap';

  var el =
    document.querySelector('.pd-description') ||
    document.getElementById('plan-description') ||
    document.querySelector('[data-testid="plan-content-description"]') ||
    document.querySelector('[data-testid="plan content description"]') ||
    document.querySelector('.plan-description');

  if (!el) {
    console.warn('No se encontró el contenedor de descripción. ¿Estás en https://feverup.com/m/465628 ? Prueba a recargar o espera 1s y vuelve a pegar el script.');
    return;
  }

  if (location.hostname.indexOf('feverup.com') !== -1) {
    if (!document.getElementById('ikono-pv-preview-fonts')) {
      var lf = document.createElement('link');
      lf.id = 'ikono-pv-preview-fonts';
      lf.rel = 'stylesheet';
      lf.href = FEVER_FONTS;
      document.head.appendChild(lf);
    }
    if (!document.getElementById('ikono-pv-preview-css')) {
      var lk = document.createElement('link');
      lk.id = 'ikono-pv-preview-css';
      lk.rel = 'stylesheet';
      lk.href = FEVER_CSS;
      document.head.appendChild(lk);
    }
  }

  var inner = `
          <section class="pd-section pd-section--intro">
            <p class="pd-intro-lead"><em>⭐&nbsp;<strong>IKONO Madrid</strong>&nbsp;te ofrece un viaje inmersivo por mundos coloridos y sensoriales a través de 12 espacios lúdicos y creativos. ¡Diversión y recuerdos inolvidables para todas las edades a pocos pasos de Atocha! ¡No te quedes sin tus entradas!</em></p>
            <ul class="intro-grid intro-grid--1x2 intro-grid--text-only">
              <li class="intro-grid__item">
                <h2 class="pd-section__title">Te diremos lo que <strong>NO</strong> es IKONO:</h2>
                <div class="intro-grid__caption">
                  <p>No es un museo.<br>No es una exposición.<br>Y no es un sitio de postureo.</p>
                  <p>Sí, puedes hacer fotos.<br>Pero no antes de vivirlo intensamente y reírte sin filtro con los tuyos.</p>
                </div>
              </li>
              <li class="intro-grid__item">
                <h2 class="pd-section__title">Lo que SI es IKONO:</h2>
                <div class="intro-grid__caption">
                  <p>Es un lugar para perder el control.<br>
                  Para dejar de pensar en el qué dirán.<br>
                  Para reír como antes reías.<br>
                  Para cruzar miradas cómplices.<br>
                  Para olvidarte del mundo exterior, de tu feed, de los likes… aunque sea por un rato.<br>
                  Aquí no interrumpes el momento para capturarlo.<br>
                  Capturas el momento para inmortalizarlo.</p>
                </div>
              </li>
            </ul>
          </section>

          <section class="pd-section pd-section--enjoy">
            <h2 class="pd-section__title">Qué vas a disfrutar</h2>
            <ul class="pd-section__list">
              <li class="pd-section__item">
                <span class="pd-section__icon">📷</span>
                <span class="pd-section__text">Experiencias sensoriales e inmersivas diseñadas para despertar tu curiosidad y la creatividad sin importar tu edad</span>
              </li>
              <li class="pd-section__item">
                <span class="pd-section__icon">💥</span>
                <span class="pd-section__text">Diferentes mundos en más de 600 m² en los que te fusionarás con el espacio</span>
              </li>
              <li class="pd-section__item">
                <span class="pd-section__icon">🖼️</span>
                <span class="pd-section__text">Capturarás recuerdos imborrables a lo largo de todo el recorrido</span>
              </li>
              <li class="pd-section__item">
                <span class="pd-section__icon">💫</span>
                <span class="pd-section__text">Darás rienda suelta a tu niño interior y redescubrirás la alegría pura del juego</span>
              </li>
              <li class="pd-section__item">
                <span class="pd-section__icon">✨</span>
                <span class="pd-section__text">Serás el protagonista de tu viaje: explorarás y crearás sin limitarte a observar</span>
              </li>
              <li class="pd-section__item">
                <span class="pd-section__icon">🚶</span>
                <span class="pd-section__text">Una experiencia inmersiva de una hora por sus tres plantas en pleno centro de Madrid</span>
              </li>
            </ul>
          </section>

          <section class="pd-section pd-section--social-proof">
            <p class="pd-section__text pd-section__text--google-line">
              <img src="https://images.feverup.com/plan/photo/5553443e-0c21-11f1-868b-42cc068e9def.png" alt="" class="extra-image-plan" width="18" height="18" />
              <strong>&nbsp;Lo que dicen de IKONO Madrid</strong>: Una experiencia destacada por nuestra comunidad<strong> [4.6/5 ⭐ ⭐ 10.7 mil Reseñas en Google]&nbsp;</strong>
              <img src="https://images.feverup.com/plan/photo/5553443e-0c21-11f1-868b-42cc068e9def.png" alt="" class="extra-image-plan" width="18" height="18" />
            </p>
            <p class="pd-section__text" style="margin-top: 1rem;">🎁 ¡Regala recuerdos a alguien especial! Compra una tarjeta regalo para IKONO Madrid <a href="https://feverup.com/m/501153?thm=6573" class="text-link" rel="noopener noreferrer">aquí</a></p>
          </section>

          <section class="pd-section pd-section--general-info">
            <h2 class="pd-section__title">Información</h2>
            <ul class="pd-section__list">
              <li class="pd-section__item">
                <span class="pd-section__icon">📅</span>
                <span class="pd-section__text"><strong>Fecha y hora:</strong> selecciona la fecha y hora que quieras directamente en el selector de entradas<br>
                <span class="pd-section__sub">- Se recomienda llegar puntual, tendrás hasta 20 minutos desde tu hora de reserva para acceder</span></span>
              </li>
              <li class="pd-section__item">
                <span class="pd-section__icon">⏳</span>
                <span class="pd-section__text"><strong>Duración:</strong> 45 minutos - 1 hora</span>
              </li>
              <li class="pd-section__item">
                <span class="pd-section__icon">⏰</span>
                <span class="pd-section__text"><strong>Los visitantes que lleguen con más de 20 minutos de retraso al último horario no serán admitidos</strong></span>
              </li>
              <li class="pd-section__item">
                <span class="pd-section__icon">📍</span>
                <span class="pd-section__text"><strong>Lugar:</strong> IKONO, Madrid</span>
              </li>
              <li class="pd-section__item">
                <span class="pd-section__icon">👤</span>
                <span class="pd-section__text"><strong>Edad:</strong> todos los públicos</span>
              </li>
              <li class="pd-section__item">
                <span class="pd-section__icon">♿</span>
                <span class="pd-section__text"><strong>Accesibilidad:</strong> no se permite el acceso con carros de bebé ni sillas de ruedas</span>
              </li>
              <li class="pd-section__item">
                <span class="pd-section__icon">👉</span>
                <span class="pd-section__text">Experiencia apta para su compra con el Bono Cultural Joven del Ministerio de Cultura y Deportes. Puedes consultar las preguntas frecuentes al respecto y sus respuestas <a href="https://docs.google.com/document/d/1YTOZCVWyKEkzlFdayvBmhEpzna4N2w2R8vRmK5CjB9Y/pub" class="text-link" rel="noopener noreferrer">aquí</a></span>
              </li>
              <li class="pd-section__item">
                <span class="pd-section__icon">❓</span>
                <span class="pd-section__text">Puedes consultar las preguntas frecuentes de esta experiencia <a href="https://docs.google.com/document/d/e/2PACX-1vRcdAS9qF6hO6-GjRP8OFO49Rea5Gxi5-jOWtVbLu2yQqICUgfoe1UplE34WTmkcCnvq_7P4DuCAuKd/pub" class="text-link" rel="noopener noreferrer">aquí</a></span>
              </li>
            </ul>
          </section>

          <section class="pd-section pd-section--descripcion">
            <h2 class="pd-section__title">Descripción</h2>
            <p>Bienvenido a IKONO Madrid, una experiencia inmersiva para todas las edades que te transporta a mundos sensoriales y creativos. A pocos pasos de la estación de Atocha, IKONO va más allá de los museos tradicionales. La experiencia se desarrolla a través de más de 12 espacios creativos que reproducen la emoción de viajar por diferentes mundos, permitiéndote crear recuerdos inolvidables con amigos y familiares. Salta a una piscina gigante de bolas, baila en una sala de confeti o explora un bosque de luces y colores. Cada sala es una nueva aventura, perfecta para cualquiera que esté dispuesto a convertir su día en algo extraordinario. ¿Estás preparado? ¡Consigue tus entradas para IKONO Madrid!</p>
          </section>

          <section class="pd-section pd-section--coloris" aria-label="COLORIS IRIS">
            <p class="pd-section__text pd-section__text--italic">📷 <em>Descubre la nueva experiencia </em><strong><em>COLORIS IRIS</em></strong><em>, inspirada en la singular belleza del iris humano. Captura tu mirada en alta resolución y llévate un recuerdo único, disponible de forma digital, impreso o enmarcado. Elige entre cuatro efectos artísticos (explosión, yin &amp; yang, mitad y mitad o ninguno) y deja que tus ojos cuenten su historia. ¡Ideal para adultos y niños mayores de 6 años!</em></p>
          </section>
`;

  var needsWrapper = !el.classList || !el.classList.contains('pd-description');
  el.innerHTML = needsWrapper ? '<div class="pd-description">' + inner + '</div>' : inner;

  console.log('Listo: descripción actualizada (Fever / preview). Contenedor:', el.id || el.className || el.tagName);
})();
