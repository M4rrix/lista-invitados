// Configuración de Firebase
/*
const firebaseConfig = {
    apiKey: "AIzaSyAn4CEIcHMrhc1_sFgiU6jtmkP7PTawXoA",
    authDomain: "lista-invitados-f94d1.firebaseapp.com",
    projectId: "lista-invitados-f94d1",
    storageBucket: "lista-invitados-f94d1.firebasestorage.app",
    messagingSenderId: "32823595534",
    appId: "1:32823595534:web:9956bcc7af38d3070b225f"
};

const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);

// Función para agregar un invitado
function agregarInvitado() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    
    if (nombre && apellido) {
        const nuevoInvitado = {
            nombre: nombre,
            apellido: apellido
        };

        // Agregar el invitado a la base de datos
        const invitadosRef = database.ref('invitados');
        invitadosRef.push(nuevoInvitado);

        // Limpiar los campos de entrada
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
    }
}

// Función para eliminar un invitado
function eliminarInvitado(id) {
    const invitadoRef = database.ref('invitados/' + id);
    invitadoRef.remove();
}

// Escuchar los cambios en la base de datos
const invitadosRef = database.ref('invitados');
invitadosRef.on('child_added', function(snapshot) {
    const invitado = snapshot.val();
    const id = snapshot.key;
    const listaInvitados = document.getElementById('invitados-lista');

    const divInvitado = document.createElement('div');
    divInvitado.classList.add('invitado');
    divInvitado.innerHTML = `
        <span>${invitado.nombre} ${invitado.apellido}</span>
        <button onclick="eliminarInvitado('${id}')">Eliminar</button>
    `;
    listaInvitados.appendChild(divInvitado);

    actualizarContador();
});

invitadosRef.on('child_removed', function(snapshot) {
    actualizarContador();
});

// Función para actualizar el contador de invitados
function actualizarContador() {
    const invitadosRef = database.ref('invitados');
    invitadosRef.once('value', function(snapshot) {
        const count = snapshot.numChildren();
        document.getElementById('contador-invitados').textContent = count;
    });
}

// Inicializar el contador al cargar la página
actualizarContador();*/
