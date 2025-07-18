document.addEventListener('DOMContentLoaded', () => {
    let buttons = document.querySelectorAll('.collage button');
    let preguntaDiv = document.getElementById('pregunta');

    // Preguntas
    let preguntas = [
        "¿Me amarías si estuviera en la cárcel y te escribiera cartas todos los días?",
        "¿Me amarías si estuviera en quiebra y no tuviera nada para darte?",
        "¿Me amarías si estuviera enfermo y no pudiera trabajar?",
        "¿Me amarías si perdiera mi casa y tuviera que empezar de nuevo?",
        "¿Me amarías si no pudiera comprarte regalos caros?",
        "¿Me amarías si tuviera que depender de ti por un tiempo?",
        "¿Me amarías si mis amigos no te aceptaran?",
        "¿Me amarías si mi familia no estuviera de acuerdo con nosotros?",
        "¿Me amarías si tuviera que mudarme lejos por trabajo?",
        "¿Me amarías si tuviera que elegir entre tú y mi carrera?",
        "¿Me amarías si no pudiera darte hijos?",
        "¿Me amarías si tuviera problemas con la ley?",
        "¿Me amarías si tuviera cicatrices físicas o emocionales?",
        "¿Me amarías si no fuera tan atractivo como antes?",
        "¿Me amarías si tuviera que cambiar mi estilo de vida?",
        "¿Me amarías si tuviera que dejar todo atrás por nosotros?",
        "¿Me amarías si todos estuvieran en contra de nuestra relación?",
        "¿Me amarías si tuviera que pedirte ayuda constantemente?",
        "¿Me amarías si no pudiera cumplir tus expectativas?",
        "¿Me amarías si tuviera que enfrentar grandes desafíos?",
        "¿Me amarías si solo pudiera ofrecerte mi corazón?"
    ];

    // Imágenes
    let imagenes = [
        "assets/1.jpeg", "assets/2.jpeg", "assets/3.jpeg", "assets/4.jpeg", "assets/5.jpeg",
        "assets/6.jpeg", "assets/7.jpeg", "assets/8.jpeg", "assets/9.jpeg", "assets/10.jpeg",
        "assets/11.jpeg", "assets/12.jpeg", "assets/13.jpeg", "assets/14.jpeg", "assets/15.jpeg",
        "assets/16.png", "assets/17.jpeg", "assets/18.jpeg", "assets/19.jpeg", "assets/20.jpeg",
        "assets/21.jpeg"
    ];

    // Crear tarjeta visual (card)
    const card = document.createElement('div');
    card.style.position = 'fixed';
    card.style.top = '50%';
    card.style.left = '50%';
    card.style.transform = 'translate(-50%, -50%)';
    card.style.background = 'rgba(247, 0, 255, 0.53)';
    card.style.padding = '20px';
    card.style.borderRadius = '15px';
    card.style.boxShadow = '0 0 25px rgba(255, 255, 255, 1)';
    card.style.maxWidth = '90%';
    card.style.maxHeight = '90%';
    card.style.overflow = 'auto';
    card.style.textAlign = 'center';
    card.style.zIndex = '1000';
    card.style.display = 'none';
    card.style.transition = 'opacity 0.3s ease';

    const imagen = document.createElement('img');
    imagen.style.maxWidth = "100%";
    imagen.style.maxHeight = "300px";
    imagen.style.borderRadius = "15px";
    imagen.style.marginBottom = "15px";

    const texto = document.createElement('p');
    texto.style.fontSize = "1.2em";
    texto.style.color = "#333";

    const cerrar = document.createElement('button');
    cerrar.textContent = "Cerrar";
    cerrar.style.marginTop = "15px";
    cerrar.style.padding = "8px 16px";
    cerrar.style.border = "none";
    cerrar.style.borderRadius = "8px";
    cerrar.style.backgroundColor = "#ec9fff";
    cerrar.style.color = "#000";
    cerrar.style.cursor = "pointer";
    cerrar.addEventListener('click', () => {
        card.style.display = "none";
    });

    card.appendChild(imagen);
    card.appendChild(texto);
    card.appendChild(cerrar);
    document.body.appendChild(card);

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            preguntaDiv.innerHTML = `<p>${preguntas[index] || 'Pregunta no disponible'}</p>`;
            imagen.src = imagenes[index] || '';
            texto.textContent = preguntas[index] || '';
            card.style.display = "block";

            setTimeout(() => {
                card.style.display = "none";
            }, 10000);

            // Hacer card movible
            let isDragging = false;
            let offsetX, offsetY;

            card.addEventListener('mousedown', (e) => {
                isDragging = true;
                offsetX = e.clientX - card.getBoundingClientRect().left;
                offsetY = e.clientY - card.getBoundingClientRect().top;
                card.style.position = 'absolute';
                card.style.zIndex = 1000;
            });

            document.addEventListener('mousemove', (e) => {
                if (isDragging) {
                    card.style.left = `${e.clientX - offsetX}px`;
                    card.style.top = `${e.clientY - offsetY}px`;
                }
            });

            document.addEventListener('mouseup', () => {
                isDragging = false;
            });
        });

        // Hover colores y rotación
        button.addEventListener('mouseover', () => {
            if ((index + 1) % 2 === 0) {
                button.style.backgroundColor = '#ec9fffff';
                button.style.transform = 'scale(1.15) rotate(3deg)';
            } else {
                button.style.backgroundColor = '#c0b2ffff';
                button.style.transform = 'scale(1.08) rotate(-5deg)';
            }
        });

        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '';
            button.style.transform = '';
        });
    });

    // Animaciones únicas por botón (solamente JS)
    const animacionesUnicas = [
        (btn) => btn.style.transform = 'scale(1.1) rotate(2deg)',
        (btn) => btn.style.transform = 'scale(1.2)',
        (btn) => btn.style.transform = 'rotate(8deg)',
        (btn) => btn.style.transform = 'translateX(5px)',
        (btn) => btn.style.transform = 'translateY(-5px)',
        (btn) => btn.style.transform = 'scale(1.05) skewX(5deg)',
        (btn) => btn.style.transform = 'scale(0.95) rotate(-3deg)',
        (btn) => btn.style.transform = 'translate(-5px, 5px)',
        (btn) => btn.style.transform = 'rotateY(15deg)',
        (btn) => btn.style.transform = 'scale(1.3)',
        (btn) => btn.style.transform = 'rotate(-10deg)',
        (btn) => btn.style.transform = 'translateY(10px)',
        (btn) => btn.style.transform = 'scale(1.15) skewY(5deg)',
        (btn) => btn.style.transform = 'rotateX(15deg)',
        (btn) => btn.style.transform = 'scale(1.05) rotate(10deg)',
        (btn) => btn.style.transform = 'translateX(-10px)',
        (btn) => btn.style.transform = 'scale(1.25) rotate(-5deg)',
        (btn) => btn.style.transform = 'skewX(-5deg) translateY(-5px)',
        (btn) => btn.style.transform = 'scale(1.1) translateX(8px)',
        (btn) => btn.style.transform = 'rotate(6deg) scale(1.1)',
        (btn) => btn.style.transform = 'translate(0px, -8px) rotate(-3deg)'
    ];

    // Aplicar las animaciones con JavaScript puro
    buttons.forEach((button, index) => {
        button.addEventListener('mouseenter', () => {
            button.style.transition = 'transform 0.4s ease';
            animacionesUnicas[index % animacionesUnicas.length](button);
        });
        button.addEventListener('mouseleave', () => {
            button.style.transition = 'transform 0.4s ease';
            button.style.transform = '';
        });
    });

    // Animaciones de latido (CSS injectado)
    const estilo = document.createElement('style');
    estilo.textContent = `
        @keyframes pulseHover {
            0% { transform: scale(1); }
            50% { transform: scale(1.12); }
            100% { transform: scale(1); }
        }
        @keyframes pulseIdle {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.03); }
        }
    `;
    document.head.appendChild(estilo);
});


