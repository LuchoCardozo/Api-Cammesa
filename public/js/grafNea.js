window.addEventListener('load', () => {

    let tbody = document.getElementById('content');
    let maxHoy = document.getElementById('maxHoy');
    let maxAyer = document.getElementById('maxAyer');
    let maxSemAnt = document.getElementById('maxSemAnt');

    let ahora = document.getElementById('ahora');
    let antes = document.getElementById('antes1');
    let masAntes = document.getElementById('antes');

    chart();

    let fecha = [];
    let demHoy = [];
    let demAyer = [];
    let demSemanaAnt = [];
    let demPrevista = [];
    let tempHoy = [];
    let tempAyer = [];
    let tempSemanaAnt = [];
    let demHoyMax = [];

    async function dataNea() {
        const response = await fetch('https://api.cammesa.com/demanda-svc/demanda/ObtieneDemandaYTemperaturaRegion?id_region=418')
        const nea = await response.json()
        nea.forEach(element => {
            console.log(nea);
            fecha.push(moment(element.fecha).format('HH:mm'))
            if (element.demHoy) {
                demHoyMax.push(element.demHoy)
            }

            demHoy.push(element.demHoy)
            demAyer.push(element.demAyer)
            demSemanaAnt.push(element.demSemanaAnt)
            demPrevista.push(element.demPrevista)

            tempHoy.push(element.tempHoy)
            tempAyer.push(element.tempAyer)
            tempSemanaAnt.push(element.tempSemanaAnt)

            let hoyDem = element.demHoy == undefined ? '' : element.demHoy;
            let hoyTemp = element.tempHoy == undefined ? '' : element.tempHoy;
            let ayerTemp = element.tempAyer == undefined ? '' : element.tempAyer;
            let semAntTemp = element.tempSemanaAnt == undefined ? '' : element.tempSemanaAnt;

            tbody.innerHTML +=
                '<tr>' +
                '<td>' + moment(element.fecha).format('HH:mm') + '</td>' +
                '<td>' + hoyDem + '</td>' +
                '<td>' + element.demAyer + '</td>' +
                '<td>' + element.demSemanaAnt + '</td>' +
                '<td>' + hoyTemp + '</td>' +
                '<td>' + ayerTemp + '</td>' +
                '<td>' + semAntTemp + '</td>'
                + '</tr>'



        });

        function arrayMax(arrayDem) {
            return arrayDem.reduce((a, b) => Math.max(a, b));
        }

        maxHoy.innerHTML += fecha[demHoyMax.indexOf(arrayMax(demHoyMax))] + ' hs   ' + arrayMax(demHoyMax) + ' MW'
        maxAyer.innerHTML += fecha[demAyer.indexOf(arrayMax(demAyer))] + ' hs   ' + arrayMax(demAyer) + ' MW'
        maxSemAnt.innerHTML += fecha[demSemanaAnt.indexOf(arrayMax(demSemanaAnt))] + ' hs   ' + arrayMax(demSemanaAnt) + ' MW'
        ahora.innerHTML += fecha[demHoyMax.length - 1] + ' hs   ' + demHoyMax[demHoyMax.length - 1] + ' MW'
        antes.innerHTML += fecha[demHoyMax.length - 3] + ' hs   ' + demHoyMax[demHoyMax.length - 3] + ' MW'
        masAntes.innerHTML += fecha[demHoyMax.length - 5] + ' hs   ' + demHoyMax[demHoyMax.length - 5] + ' MW'
    }

    async function chart() {
        await dataNea();
        const myChart = new Chart(document.getElementById('myChart'), {
            type: 'line',
            data: {
                labels: fecha,
                datasets: [{
                    label: 'DemHoy',
                    data: demHoy,
                    backgroundColor: 'red',
                    borderColor: 'red',
                    borderWidth: 1.5,
                    pointRadius: 0
                },
                {
                    label: 'DemAyer',
                    data: demAyer,
                    backgroundColor: 'green',
                    borderColor: 'green',
                    borderWidth: 1.5,
                    pointRadius: 0
                },
                {
                    label: 'DemSemAnt',
                    data: demSemanaAnt,
                    backgroundColor: 'blue',
                    borderColor: 'blue',
                    borderWidth: 1.5,
                    pointRadius: 0
                },
                {
                    label: 'DemPrevista',
                    data: demPrevista,
                    backgroundColor: 'magenta',
                    borderColor: 'magenta',
                    tension: 0.1,
                    borderWidth: 1.5,
                    pointRadius: 0,
                    spanGaps: true,
                }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    intersect: false,
                    mode: 'index',
                },
                plugins: {
                    tooltip: {
                        boxWidth: 10,
                        boxHeight: 2,
                        caretPadding: 50,
                        caretSize: 0,
                        titleFont: {
                            size: 25
                        },
                        bodyFont: {
                            size: 20
                        },
                        position: 'nearest',
                    }
                },
                hoverBackgroundColor: 'white',
                pointRadius: 0,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 4,
                pointHitRadius: 10,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        const myTemp = new Chart(document.getElementById('myTemp'), {
            type: 'line',
            data: {
                labels: fecha,
                datasets: [{

                    label: 'TempHoy',
                    data: tempHoy,
                    backgroundColor: 'red',
                    borderColor: 'red',
                    tension: 0.1,
                    borderWidth: 1.5,
                    pointRadius: 0,
                    spanGaps: true,
                },
                {
                    label: 'TempAyer',
                    data: tempAyer,
                    backgroundColor: 'green',
                    borderColor: 'green',
                    tension: 0.1,
                    borderWidth: 1.5,
                    pointRadius: 0,
                    spanGaps: true,
                },
                {
                    label: 'TempSemAnt',
                    data: tempSemanaAnt,
                    backgroundColor: 'blue',
                    borderColor: 'blue',
                    tension: 0.1,
                    borderWidth: 1.5,
                    pointRadius: 0,
                    spanGaps: true,
                }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    intersect: false,
                    mode: 'index',
                },
                plugins: {
                    tooltip: {
                        boxWidth: 10,
                        boxHeight: 2,
                        caretPadding: 50,
                        caretSize: 0,
                        titleFont: {
                            size: 25
                        },
                        bodyFont: {
                            size: 20
                        },
                        position: 'nearest',
                    }
                },
                hoverBackgroundColor: 'white',
                pointRadius: 0,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 4,
                pointHitRadius: 10,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        })

    }
});


setInterval("location.reload()", 600000);