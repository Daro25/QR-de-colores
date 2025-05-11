# QR de Colores — Tres veces más información

Este proyecto es una prueba de concepto de **códigos QR de colores** que permiten almacenar más información utilizando los canales RGB. Cada canal (Rojo, Verde, Azul) representa un QR diferente. Al combinarse, forman un solo QR a color que puede ser leído y reconstruido para extraer los tres QR originales.

## ¿Por qué?

Los QR de colores pueden abrir nuevas posibilidades en:

- **Mensajes multilingües**: un idioma por canal  
- **Marketing**: más datos en un mismo espacio  
- **Logística y producción**: codificación avanzada  
- **Educación y creatividad digital**

Este proyecto busca **inspirar soluciones creativas** a partir de una idea simple: aprovechar el color para expandir la capacidad informativa del QR tradicional.

## ¿Qué incluye el repositorio?

- `index.html` — Lector de QR de colores hecho en JavaScript, sin dependencias externas.  
- `qr_color_ejemplo.png` — Ejemplo visual de un QR de colores generado.  
- `contenido_qr.txt` — Texto reconstruido desde los tres QR del ejemplo.

## Tecnologías usadas

- [`QRCode.js`](https://github.com/davidshimjs/qrcodejs) — Generación de QR  
- [`jsQR`](https://github.com/cozmo/jsQR) — Lectura de QR desde imagen

## ¿Cómo probarlo?

1. Clona este repositorio o descarga los archivos.
2. Abre `index.html` en tu navegador (funciona localmente).
3. Carga una imagen de un QR de colores (usa `qr_color_ejemplo.png` si no tienes uno propio).
4. El script separará los canales y leerá el contenido de cada uno.

## Contribuye o reinventa

Este proyecto está pensado para ser un punto de partida. Mejora el lector, crea un generador web, adapta la idea a otro lenguaje o propón nuevas aplicaciones.

**¿Qué harías tú con el triple de datos en un solo código?**

---

*Hecho con curiosidad y pasión por el ingenio.*