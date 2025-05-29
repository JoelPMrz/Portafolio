function cambiarProyecto(proyecto) {
    // Datos de ejemplo de proyectos
    const proyectos = {
        "Proyecto 1": {
            titulo: "Petly",
            descripcion: "Diseño moderno con <b>Jetpack Compose</b> y navegación con <b>Navigation 2</b>. <b>Coil</b> para la carga de imágenes y <b>composables reutilizables</b> para reutilización de código. \n\n<b>Firestore</b> almacena en la nube las colecciones y documentos, permitiendo sincronizar en tiempo real. <b>Storage</b> maneja imágenes, vinculadas a los documentos. <b>SharedPreferences</b> guarda localmente <b>modo oscuro</b>, filtros aplicados y datos temporales del usuario. \n\nPatrón <b>MVVM</b> junto con principios de <b>Clean Architecture</b>, asegurando una separación clara de responsabilidades. Se utilizan <b>ViewModels</b>, <b>Repositories</b>, y <b>Use Cases</b> para una estructura mantenible. Datos reactivos con <b>corutinas</b> y <b>Flows</b>.\n\n<b>Authentication</b> para login seguro. <b>Analytics</b> para seguimiento de eventos. <b>Dagger Hilt</b> para inyección de dependencias. ",
            video: "img/PetlyApp.mp4",
            tecnologia: "img/Lodo-compose.png",
            github: "https://github.com/JoelPMrz/Petly---Asistente-digital-para-el-cuidado-de-mascotas" 
            
        },
        "Proyecto 2": {
            titulo: "RickTask App",
            descripcion: "Gestión de tareas con interfaz en <b>XML</b> y arquitectura <b>MVVM</b>, usando <b>ViewModel</b>, <b>LiveData</b> y patrón <b>Repository</b>.  \n\nPersistencia local con <b>Room Database</b> y operaciones <b>CRUD</b> .\n\nFiltro de tareas y modo oscuro gestionados con <b>SharedPreferences</b> mediante un <b>Toggle</b> y clase <b>PreferencesManager</b> personalizada.\n\nListado de personajes obtenido por <b>Retrofit 2</b> con paginación, y sistema de favoritos persistido en <b>SharedPreferences</b>. Vista de <b>favoritos</b> sincronizada dinámicamente con los datos originales.",
            video: "img/RickTaskApp.webm",
            tecnologia: "img/xml.png",
            github: "https://github.com/JoelPMrz/Rick-Task" 
            
        },
        "Proyecto 6": {
            titulo: "Calculator App",
            descripcion: "Diseño de interfaz declarativa utilizando <b>Jetpack Compose</b>, con un botón para manejar el Dark/Light Mode, utilizando <b>SharedPreferences</b> para la persistencia de datos.\n\nUso de <b>ViewModel</b> para gestionar el estado, implementando <b>StateFlow</b> para manejar estados reactivos. \n\nLógica de progrmación y matemática, manejando operaciones de datos y controlando el flujo lógico.\n\nArquitectura de navegación sencilla con <b>NavHost</b> y <b>NavController</b>.",
            video: "img/CalculatorApp.mp4",
            tecnologia: "img/Lodo-compose.png",
            github: "https://github.com/JoelPMrz/Calculator-App" 
        },
        "Proyecto 7": {
            titulo: "Sneakers store App",
            descripcion: "Diseño de interfaz utilizando <b>XML</b> con <b>ConstraintLayout</b>, <b>ScrollView</b>, y diferentes componentes de UI.\n\nImplementación de una lista dinámica con <b>RecyclerView</b> y <b>Adapter</b> personalizado, usando <b>ViewHolder</b>. \n\nGestión de recursos con <b>String Resources</b>, siguiendo las buenas prácticas. \n\nUso de <b>Toast</b> para mostrar mensajes con las distintas interacciones. \n\nNavegación hacia el detalle mediante un Intent.",
            video: "img/SneakersApp.mp4",
            tecnologia: "img/xml.png",
            github: "https://github.com/JoelPMrz/Sneaker-Store-App" 
        },
        "Proyecto 5": {
            titulo: "Rick and Morty App",
            descripcion: "Diseño de la interfaz declarativa con <b>Jetpack Compose</b>, implementando <b>Paging 3</b> para cargar listados.\n\nListas dinámicas con <b>RecyclerView</b>, diseño de celdas con <b>ViewHolder</b>, y un <b>Adapter</b> personalizado.\n\nUso de <b>corutinas</b> con <b>Flow</b>para la sincronización y reactividad.\n\nInjección de dependencias con <b>Dagger Hilt</b>, integrando <b>Retrofit</b> para el consumo de API con Gson. \n\n<b>Coil</b> para cargar imágenes.\n\nEstructura de proyecto robusta con <b>MVVM</b>.",
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
        "Proyecto 8": {
            titulo: "Task App",
            descripcion: "Mi primera aplicación.\n\nDiseño de UI con componentes y atributos de <b>XML</b>, utilizando ConstraintLayout para la maquetación de vistas.\n\nListas dinámicas con <b>RecyclerView</b>, diseño de celdas mediante <b>ViewHolder</b> y creación de un <b>Adapter</b> personalizado para gestionar los datos.\n\nAñadir tareas a través de <b>Listeners</b> y persistencia de datos con <b>SharedPreferences</b>.",
            video: "img/TaskApp.mp4",
            tecnologia: "img/xml.png",
            github: "https://github.com/JoelPMrz/Tasks-App" 
        },
        "Proyecto 3": {
            titulo: "Pets App",
            descripcion: "Diseño de la interfaz declarativa con <b>Jetpack Compose</b>, implementando un Toggle para activar el Dark Mode, utilizando <b>PreferencesManager</b> y <b>SharedPreferences</b> para persistencia de datos. \n\n<b>ViewModel</b> con patrón de creación <b>Factory</b> para la crear instancias del ViewModel. \n\n<b>Room Database</b> con operaciones CRUD para manejar los datos locales, uso de <b>Repository</b> implementado <b>corutinas</b> y <b>Flow</b> para obtener y modificar los datos de manera asincrónica con funciones <b>suspend</b>. \n\nNavegación usando <b>NavHost</b> y <b>NavController</b>.",
            video: "img/PetsApp.mp4",
            tecnologia: "img/Lodo-compose.png",
            github: "https://github.com/JoelPMrz/Pets-App" 
        }
    };
    
    const logoTecnologia = document.getElementById("logo-tecnologia");
    const descripcionProyecto = document.getElementById("descripcion-proyecto");
    const tituloElemento = descripcionProyecto.querySelector("h2");
    const descripcionElemento = descripcionProyecto.querySelector("p");
    const videoProyecto = document.getElementById("video-proyecto");
    const linkGithub = document.getElementById("link-github");
    const miniaturas = document.querySelectorAll(".miniatura-proyecto");
    miniaturas.forEach(miniatura => miniatura.classList.remove("activo"));
    
    const miniaturaSeleccionada = Array.from(miniaturas).find(miniatura => miniatura.getAttribute("onclick").includes(proyecto));
    if (miniaturaSeleccionada) {
        miniaturaSeleccionada.classList.add("activo");
    }

    tituloElemento.style.opacity = '0';
    tituloElemento.style.transform = 'translateY(10px)';
    descripcionElemento.style.opacity = '0';
    descripcionElemento.style.transform = 'translateY(10px)';
    videoProyecto.style.opacity = '0';

    setTimeout(() => {
        tituloElemento.textContent = proyectos[proyecto].titulo;
        descripcionElemento.innerHTML = proyectos[proyecto].descripcion.replace(/\n/g, '<br>');
        linkGithub.href = proyectos[proyecto].github;

        if (proyectos[proyecto].video) {
            videoProyecto.src = proyectos[proyecto].video;
            videoProyecto.style.display = "block"; 
            videoProyecto.load(); 
            videoProyecto.play(); 
        } else {
            videoProyecto.style.display = "none"; 
        }


        if (proyectos[proyecto].tecnologia) {
            logoTecnologia.src = proyectos[proyecto].tecnologia;
            logoTecnologia.style.display = "block";
        } else {
            logoTecnologia.style.display = "none";
        }

      
        setTimeout(() => {
            tituloElemento.style.opacity = '1';
            tituloElemento.style.transform = 'translateY(0)';
            descripcionElemento.style.opacity = '1';
            descripcionElemento.style.transform = 'translateY(0)';
            videoProyecto.style.opacity = '1';
        }, 50);
    }, 300); 
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
    const text = h1.innerText.replace(/ /g, "\u00A0");
    h1.innerText = ""; 

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            h1.innerText += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100); 
        } else {
            p.style.opacity = "1"; 
        }
    }

    typeWriter();
});
