let x = [];
for (let i = -3.14; i <= 3.14; i += 0.1) {
  x.push(i);
}

let y = [];
for (let i = 0; i < x.length; i++) {
  y[i] = Math.sin(x[i]);
}
const ctx = document.getElementById("myChart");

let ch = new Chart(ctx, {
  type: "line",
  data: {
    labels: x,
    datasets: [
      {
        label: "# of Votes",
        data: y,
        borderWidth: 3,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

function showsin() {
  let y = [];
  for (let i = 0; i < x.length; i++) {
    y[i] = Math.sin(x[i]);
  }
  ch.data.datasets[0].data=y;
  ch.update();
}



function showcos() {
  let y = [];
  for (let i = 0; i < x.length; i++) {
    y[i] = Math.cos(x[i]);
  }
  ch.data.datasets[0].data=y;
  ch.update();
}

function showtan() {
  let y = [];
  for (let i = 0; i < x.length; i++) {
    y[i] = Math.tan(x[i]);
  }
  ch.data.datasets[0].data=y;
  ch.update();
}

function showcotan() {
  let y = [];
  for (let i = 0; i < x.length; i++) {
    y[i] = Math.cosh(x[i]);
  }
  ch.data.datasets[0].data=y;
  ch.update();
}
