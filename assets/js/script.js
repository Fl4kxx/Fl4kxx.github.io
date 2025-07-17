// Datos de ejemplo (puedes reemplazarlos con datos reales o cargarlos desde un JSON)
const equipos = {
    equipo1: {
        kpis: {
            productividad: 85,
            calidad: 90,
            entregas: 75,
        },
    },
    equipo2: {
        kpis: {
            productividad: 78,
            calidad: 88,
            entregas: 82,
        },
    },
};

// Función para crear gráficos
function crearGrafico(equipoId, datos) {
    const ctx = document.getElementById(equipoId).getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(datos),
            datasets: [{
                label: 'KPIs',
                data: Object.values(datos),
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                ],
            }],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                },
            },
        },
    });
}

// Inicializar gráficos
crearGrafico('equipo1Chart', equipos.equipo1.kpis);
crearGrafico('equipo2Chart', equipos.equipo2.kpis);
