function cambiarProyecto(proyecto) {
    // Datos de ejemplo de proyectos
    const proyectos = {
        "Proyecto 1": {
            titulo: "Calculator App",
            descripcion: "Diseño de interfaz declarativa utilizando <b>Jetpack Compose</b>, con un botón para manejar el Dark/Light Mode, utilizando <b>SharedPreferences</b> para la persistencia de datos.\n\nUso de <b>ViewModel</b> para gestionar el estado, implementando <b>StateFlow</b> para manejar estados reactivos. \n\nLógica de progrmación y matemática, manejando operaciones de datos y controlando el flujo lógico.\n\nArquitectura de navegación sencilla con <b>NavHost</b> y <b>NavController</b>.",
            video: "img/CalculatorApp.mp4",
            tecnologia: "img/Lodo-compose.png",
            github: "https://github.com/JoelPMrz/Calculator-App" 
        },
        "Proyecto 2": {
            titulo: "Sneakers store App",
            descripcion: "Diseño de interfaz utilizando <b>XML</b> con <b>ConstraintLayout</b>, <b>ScrollView</b>, y diferentes componentes de UI.\n\nImplementación de una lista dinámica con <b>RecyclerView</b> y <b>Adapter</b> personalizado, usando <b>ViewHolder</b>. \n\nGestión de recursos con <b>String Resources</b>, siguiendo las buenas prácticas. \n\nUso de <b>Toast</b> para mostrar mensajes con las distintas interacciones. \n\nNavegación hacia el detalle mediante un Intent.",
            video: "img/SneakersApp.mp4",
            tecnologia: "img/xml.png",
            github: "https://github.com/JoelPMrz/Sneaker-Store-App" 
        },
        "Proyecto 3": {
            titulo: "Rick and Morty App",
            descripcion: "Diseño de la interfaz declarativa con <b>Jetpack Compose</b>, implementando <b>Paging 3</b> para cargar listados. \n\nInjección de dependencias con <b>Dagger Hilt</b>. integrando <b>Retrofit</b> para el consumo de API con Gson. \n\n<b>Coil</b> para cargar imágenes.\n\nEstructura de proyecto <b>MVVM</b>.",
            video: "img/RickMortyApp.webm",
            tecnologia: "img/Lodo-compose.png",
            github: "https://github.com/JoelPMrz/Rick-Morty-App" 
        },
        "Proyecto 4": {
            titulo: "Stores App",
            descripcion:"Diseño UI con <b>XML</b> y <b>Material Design</b>, con Principios de <b>arquitectura modular</b> y buenas prácticas gestionando recursos como strings multilingües, dimensiones, e integers.\n\n Opciones <b>Dialogs</b>, MaterialAlertDialog, validación de TextFields gestionando el foco y Toast para iteracciones.\n\n<b>RoomDatabase</b> para operaciones CRUD, uso de <b>RecyclerView</b> y <b>Adapter</b> con <b>ViewHolder</b> para presentar listas dinámicas, y persisténcia de estados con <b>SharedPreferences</b>.\n\n <b>Queue</b> y <b>Thread</b> para ejecuciones en segundo plano.\n\n Interfaz para manejar estados de click con <b> Queries Intent</b> de navegación a una web o realizar llamadas. \n\n<b>Glide</b> para carga de imágenes.",
            video: "img/StoreApp.mp4",
            tecnologia: "img/xml.png",
            github: "https://github.com/JoelPMrz/Stores-App" 
        },
        "Proyecto 5": {
            titulo: "Task App",
            descripcion: "Aspectos técnicos en proceso de poder mostrase...\n\nDisculpa",
            video: "img/TaskApp.mp4",
            tecnologia: "img/xml.png",
            github: "https://github.com/JoelPMrz/Tasks-App" 
        },
        "Proyecto 6": {
            titulo: "Pets App",
            descripcion: "Diseño de la interfaz declarativa con <b>Jetpack Compose</b>, implementando un Toggle para activar el Dark Mode, utilizando <b>PreferencesManager</b> y <b>SharedPreferences</b> para persistencia de datos. \n\n<b>ViewModel</b> con patrón de creación <b>Factory</b> para la crear instancias del ViewModel. \n\n<b>Room Database</b> con operaciones CRUD para manejar los datos locales, uso de <b>Repository</b> implementado <b>corutinas</b> y <b>Flow</b> para obtener y modificar los datos de manera asincrónica con funciones <b>suspend</b>. \n\nNavegación usando <b>NavHost</b> y <b>NavController</b>.",
            video: "img/PetsApp.mp4",
            tecnologia: "img/Lodo-compose.png",
            github: "https://github.com/JoelPMrz/Pets-App" 
            
        },
        "Proyecto 7": {
            titulo: "Próximamente",
            descripcion: "Proyecto en desarrollo...",
            video: "img/ProximamenteApp.mp4",
            github: "https://github.com/JoelPMrz" 
        }
        
    };
    
    const logoTecnologia = document.getElementById("logo-tecnologia");
    const descripcionProyecto = document.getElementById("descripcion-proyecto");
    const tituloElemento = descripcionProyecto.querySelector("h2");
    const descripcionElemento = descripcionProyecto.querySelector("p");
    const videoProyecto = document.getElementById("video-proyecto");
    const linkGithub = document.getElementById("link-github");

    // Obtener todas las miniaturas de los proyectos y eliminar la clase "activo"
    const miniaturas = document.querySelectorAll(".miniatura-proyecto");
    miniaturas.forEach(miniatura => miniatura.classList.remove("activo"));
    
    // Aplicar la clase "activo" a la miniatura seleccionada
    const miniaturaSeleccionada = Array.from(miniaturas).find(miniatura => miniatura.getAttribute("onclick").includes(proyecto));
    if (miniaturaSeleccionada) {
        miniaturaSeleccionada.classList.add("activo");
    }

    // Transición de salida de título, descripción y video
    tituloElemento.style.opacity = '0';
    tituloElemento.style.transform = 'translateY(10px)';
    descripcionElemento.style.opacity = '0';
    descripcionElemento.style.transform = 'translateY(10px)';
    videoProyecto.style.opacity = '0';

    // Cambiar el contenido después de la transición de salida
    setTimeout(() => {
        // Actualizar título, descripción y enlace de GitHub
        tituloElemento.textContent = proyectos[proyecto].titulo;
        descripcionElemento.innerHTML = proyectos[proyecto].descripcion.replace(/\n/g, '<br>');
        linkGithub.href = proyectos[proyecto].github;

        // Mostrar u ocultar el video según si está definido
        if (proyectos[proyecto].video) {
            videoProyecto.src = proyectos[proyecto].video;
            videoProyecto.style.display = "block"; // Mostrar video si está definido
            videoProyecto.load(); // Cargar el nuevo video
            videoProyecto.play(); // Reproducir el video
        } else {
            videoProyecto.style.display = "none"; // Ocultar video si no está definido
        }

        // Mostrar u ocultar el logo de tecnología según si está definido
        if (proyectos[proyecto].tecnologia) {
            logoTecnologia.src = proyectos[proyecto].tecnologia;
            logoTecnologia.style.display = "block"; // Mostrar logo si está definido
        } else {
            logoTecnologia.style.display = "none"; // Ocultar logo si no está definido
        }

        // Transición de entrada de título y descripción
        setTimeout(() => {
            tituloElemento.style.opacity = '1';
            tituloElemento.style.transform = 'translateY(0)';
            descripcionElemento.style.opacity = '1';
            descripcionElemento.style.transform = 'translateY(0)';
            videoProyecto.style.opacity = '1'; // Hacer visible el video si se muestra
        }, 50);
    }, 300); // Duración de la transición de salida
}

document.addEventListener("DOMContentLoaded", function() {
    cambiarProyecto("Proyecto 1");
});
    

document.addEventListener("DOMContentLoaded", function() {
    cambiarProyecto("Proyecto 1");
});

document.addEventListener("DOMContentLoaded", function () {
    const h1 = document.getElementById("bienvenida-h1");
    const p = document.getElementById("bienvenida-p");
    const text = h1.innerText.replace(/ /g, "\u00A0"); // Reemplaza los espacios por espacios no rompibles
    h1.innerText = ""; // Vacía el contenido inicial para comenzar el efecto

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            h1.innerText += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Ajusta la velocidad de tipeo aquí
        } else {
            p.style.opacity = "1"; // Muestra el párrafo una vez completado el título
        }
    }

    typeWriter();
});
