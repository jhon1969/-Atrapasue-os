document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registroForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let formData = new FormData(this);
        let data = {};
        formData.forEach((value, key) => { data[key] = value; });

        fetch("https://hook.us2.make.com/q1pb6i3bb4an45j6qkeck6b3b12h6njo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert("Registro enviado correctamente");
            window.location.href = "cuestionario.html";
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Hubo un error al enviar el formulario");
        });
    });

    // 🕒 Auto completar fecha y hora en los campos correspondientes
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const anio = fechaActual.getFullYear();
    const fechaFormateada = `${dia}/${mes}/${anio}`;

    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const horaFormateada = `${hora}:${minutos < 10 ? '0' : ''}${minutos}`;

    document.getElementById('fecha').value = fechaFormateada;
    document.getElementById('hora').value = horaFormateada;
});
