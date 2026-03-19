// ========== FEVER (feverup.com) ========== Pega en https://feverup.com/m/465628

(function () {
  var container = document.getElementById('plan-description') || document.querySelector('[data-testid="plan-content-description"]') || document.querySelector('[data-testid="plan content description"]') || document.querySelector('.plan-description');
  if (!container) {
    console.warn('No se encontró #plan-description. Esperando 1s por si el contenido se carga después...');
    setTimeout(function () {
      container = document.getElementById('plan-description') || document.querySelector('.plan-description');
      if (container) { runReplace(container); } else { console.warn('Sigue sin encontrarse. ¿Estás en la página del plan (ej. /m/465628)?'); }
    }, 1000);
    return;
  }
  runReplace(container);

  function runReplace(container) {

  var html = `
<style id="pd-fever-mobile-styles">
.pd-description .pd-intro-grid { display:grid; grid-template-columns:1fr; gap:1.25rem; }
.pd-description .pd-salas-grid { display:grid; grid-template-columns:1fr; gap:1rem; }
@media (min-width:768px) {
  .pd-description .pd-intro-grid { grid-template-columns:repeat(2,1fr); }
  .pd-description .pd-salas-grid { grid-template-columns:repeat(2,1fr); }
}
</style>
<div class="pd-description" style="font-family:inherit;">
  <section style="margin-bottom:1.5rem;">
    <p style="font-size:1.1rem;font-style:italic;margin:0 0 1rem 0;">⭐ IKONO Madrid te ofrece un viaje inmersivo por mundos coloridos y sensoriales a través de 12 espacios lúdicos y creativos. ¡Diversión y recuerdos inolvidables para todas las edades a pocos pasos de Atocha! ¡No te quedes sin tus entradas!</p>
    <div class="pd-intro-grid" style="margin-bottom:1.5rem;">
      <div>
        <h2 style="font-size:1.25rem;margin:0 0 0.75rem 0;">Te diremos lo que <strong>NO</strong> es IKONO:</h2>
        <p style="margin:0 0 0.5rem 0;">No es un museo.<br>No es una exposición.<br>Y no es un sitio de postureo.</p>
        <p style="margin:0;">Sí, puedes hacer fotos.<br>Pero no antes de vivirlo intensamente y reírte sin filtro con los tuyos.</p>
      </div>
      <div>
        <h2 style="font-size:1.25rem;margin:0 0 0.75rem 0;">Lo que SI es IKONO:</h2>
        <p style="margin:0;">Es un lugar para perder el control.<br>Para dejar de pensar en el qué dirán.<br>Para reír como antes reías.<br>Para cruzar miradas cómplices.<br>Para olvidarte del mundo exterior, de tu feed, de los likes… aunque sea por un rato.<br>Aquí no interrumpes el momento para capturarlo.<br><strong>Capturas el momento para inmortalizarlo.</strong></p>
      </div>
    </div>
  </section>
  <section style="margin-bottom:1.5rem;">
    <h2 style="font-size:1.25rem;margin:0 0 1rem 0;">Qué vas a disfrutar</h2>
    <ul style="list-style:none;padding:0;margin:0;">
      <li style="display:flex;gap:0.75rem;margin-bottom:0.75rem;"><span>📷</span><span>Experiencias sensoriales e inmersivas diseñadas para despertar tu curiosidad y la creatividad sin importar tu edad</span></li>
      <li style="display:flex;gap:0.75rem;margin-bottom:0.75rem;"><span>💥</span><span>Diferentes mundos en más de 600 m² en los que te fusionarás con el espacio</span></li>
      <li style="display:flex;gap:0.75rem;margin-bottom:0.75rem;"><span>🖼️</span><span>Capturarás recuerdos imborrables a lo largo de todo el recorrido</span></li>
      <li style="display:flex;gap:0.75rem;margin-bottom:0.75rem;"><span>💫</span><span>Darás rienda suelta a tu niño interior y redescubrirás la alegría pura del juego</span></li>
      <li style="display:flex;gap:0.75rem;margin-bottom:0.75rem;"><span>✨</span><span>Serás el protagonista de tu viaje: explorarás y crearás sin limitarte a observar</span></li>
      <li style="display:flex;gap:0.75rem;margin-bottom:0.75rem;"><span>🚶</span><span>Una experiencia inmersiva de una hora por sus tres plantas en pleno centro de Madrid</span></li>
    </ul>
  </section>
  <section style="margin-bottom:1.5rem;">
    <h2 style="font-size:1.25rem;margin:0 0 1rem 0;">Descripción</h2>
    <p>Bienvenido a IKONO Madrid, una experiencia inmersiva para todas las edades que te transporta a mundos sensoriales y creativos. A pocos pasos de la estación de Atocha, IKONO va más allá de los museos tradicionales. La experiencia se desarrolla a través de más de 12 espacios creativos que reproducen la emoción de viajar por diferentes mundos, permitiéndote crear recuerdos inolvidables con amigos y familiares. Salta a una piscina gigante de bolas, baila en una sala de confeti o explora un bosque de luces y colores. Cada sala es una nueva aventura, perfecta para cualquiera que esté dispuesto a convertir su día en algo extraordinario. ¿Estás preparado? ¡Consigue tus entradas para IKONO Madrid!</p>
    <p style="margin:1.25rem 0 0 0;line-height:1.5;font-style:italic;">📷 <em>Descubre la nueva experiencia </em><strong><em>COLORIS IRIS</em></strong><em>, inspirada en la singular belleza del iris humano. Captura tu mirada en alta resolución y llévate un recuerdo único, disponible de forma digital, impreso o enmarcado. Elige entre cuatro efectos artísticos (explosión, yin &amp; yang, mitad y mitad o ninguno) y deja que tus ojos cuenten su historia. ¡Ideal para adultos y niños mayores de 6 años!</em></p>
    <ul style="list-style:none;padding:0;margin:1rem 0 0 0;">
      <li style="display:flex;gap:0.75rem;margin-bottom:0.75rem;"><span>⭐</span><span><strong>Lo que dicen de IKONO Madrid:</strong> Una experiencia destacada por nuestra comunidad <strong>[4.6/5 ⭐ 10.7 mil Reseñas en Google]</strong></span></li>
      <li style="display:flex;gap:0.75rem;margin-bottom:0.75rem;"><span>🎁</span><span>¡Regala recuerdos a alguien especial! Compra una tarjeta regalo para IKONO Madrid <a href="https://feverup.com/m/501153?thm=6573">aquí</a></span></li>
    </ul>
  </section>
  <section>
    <h2 style="font-size:1.25rem;margin:0 0 1rem 0;">Información</h2>
    <ul style="list-style:none;padding:0;margin:0;">
      <li style="display:flex;gap:0.75rem;margin-bottom:0.75rem;align-items:flex-start;"><span style="flex-shrink:0;">📅</span><span><strong>Fecha y hora:</strong> Selecciona la fecha y hora directamente en el selector de entradas. Se recomienda llegar puntual — tendrás hasta 20 minutos desde tu hora de reserva para acceder.</span></li>
      <li style="display:flex;gap:0.75rem;margin-bottom:0.75rem;align-items:flex-start;"><span style="flex-shrink:0;">⏳</span><span><strong>Duración:</strong> 45 minutos – 1 hora. <strong>Los visitantes que lleguen con más de 20 minutos de retraso al último horario no serán admitidos.</strong></span></li>
      <li style="display:flex;gap:0.75rem;margin-bottom:0.75rem;align-items:flex-start;"><span style="flex-shrink:0;">📍</span><span><strong>Lugar:</strong> IKONO, Madrid</span></li>
      <li style="display:flex;gap:0.75rem;margin-bottom:0.75rem;align-items:flex-start;"><span style="flex-shrink:0;">👤</span><span><strong>Edad:</strong> Una experiencia pensada para adultos y niños a partir de 6 años.</span></li>
      <li style="display:flex;gap:0.75rem;margin-bottom:0.75rem;align-items:flex-start;"><span style="flex-shrink:0;">♿</span><span><strong>Accesibilidad:</strong> El recinto no es accesible para cochecitos de bebé ni para sillas de ruedas.</span></li>
      <li style="display:flex;gap:0.75rem;margin-bottom:0.75rem;align-items:flex-start;"><span style="flex-shrink:0;">🎫</span><span>Experiencia apta para su compra con el Bono Cultural Joven. Puedes consultar las preguntas frecuentes <a href="https://docs.google.com/document/d/1YTOZCVWyKEkzlFdayvBmhEpzna4N2w2R8vRmK5CjB9Y/pub">aquí</a></span></li>
      <li style="display:flex;gap:0.75rem;margin-bottom:0.75rem;align-items:flex-start;"><span style="flex-shrink:0;">❓</span><span>Preguntas frecuentes de esta experiencia <a href="https://docs.google.com/document/d/e/2PACX-1vRcdAS9qF6hO6-GjRP8OFO49Rea5Gxi5-jOWtVbLu2yQqICUgfoe1UplE34WTmkcCnvq_7P4DuCAuKd/pub">aquí</a></span></li>
    </ul>
  </section>
</div>`;

  container.innerHTML = html;
  console.log('Contenido del plan actualizado en Fever.');
  }

})();
