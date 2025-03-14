const imagen1 = document.getElementById('SolarImage');
const imagen2 = document.getElementById('SemiConductorImage');

const cargarImagen = (entradas, observador) => {
    // console.log(entradas)
    // console.log(observador)

    // Los parametros entradas y observador, son arrays con información importante como por ejemplo. IsIntersecting = false/true

    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
        } else {
            // entrada.target.classList.remove('visible');
        }
    });
}

const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    //agregar margen a nuestro observer quitar o poner más!   arriba derecho abajo izquierda
    rootMargin: '500px 0px 100px 0px',
    // Cuanto de la imagen debe pasar para ejecutarse va desde 0.0 a 1.0 entonces 0.5 seria la mitad de la imagen
    threshold: 1.0
});

observador.observe(imagen1);
observador.observe(imagen2);