window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        text: "Nivel de Interés - Últimas 5 Sesiones"
      },
      data: [{
        type: "column",
        dataPoints: [
          { label: "Sesión 1", y: 80 },
          { label: "Sesión 2", y: 65 },
          { label: "Sesión 3", y: 70 },
          { label: "Sesión 4", y: 75 },
          { label: "Sesión 5", y: 90 }
        ]
      }]
    });
    chart.render();
  }
  