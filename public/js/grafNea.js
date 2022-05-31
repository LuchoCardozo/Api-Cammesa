window.addEventListener('load',()=>{

    let tbody = document.getElementById('content');
    let maxHoy = document.getElementById('maxHoy');
    let maxAyer = document.getElementById('maxAyer');
    let maxSemAnt = document.getElementById('maxSemAnt');

chart();

let fecha = [];
let demHoy = [];
let demAyer = [];
let demSemanaAnt = [];
let tempHoy = [];
let tempAyer = [];
let tempSemanaAnt = [];
let demHoyMax = [];

async function dataNea() {
    const response = await fetch('https://api.cammesa.com/demanda-svc/demanda/ObtieneDemandaYTemperaturaRegion?id_region=418')
    const nea = await response.json()
    nea.forEach(element => {
        fecha.push(moment(element.fecha).format('HH:mm'))
        if(element.demHoy){
          demHoyMax.push(element.demHoy)
        }else{
            demHoyMax.push(0)
        }
        demHoy.push(element.demHoy)
        demAyer.push(element.demAyer)
        demSemanaAnt.push(element.demSemanaAnt)



        tempHoy.push(element.tempHoy)
        tempAyer.push(element.tempAyer)
        tempSemanaAnt.push(element.tempSemanaAnt)

        let hoyDem = element.demHoy == undefined ? '' : element.demHoy;
        let hoyTemp = element.tempHoy == undefined ? '' : element.tempHoy;
        let ayerTemp = element.tempAyer == undefined ? '' : element.tempAyer;
        let semAntTemp= element.tempSemanaAnt == undefined ? '' : element.tempSemanaAnt;
 
        tbody.innerHTML += 
        '<tr>'+
        '<td>'+ moment(element.fecha).format('HH:mm') +'</td>'+
        '<td>'+ hoyDem +'</td>'+
        '<td>'+ element.demAyer +'</td>'+
        '<td>'+ element.demSemanaAnt + '</td>'+
        '<td>'+ hoyTemp + '</td>'+
        '<td>'+ ayerTemp + '</td>'+
        '<td>'+ semAntTemp + '</td>'
        +'</tr>'
   


});

function arrayMax(arrayDem) {
    return arrayDem.reduce((a, b) => Math.max(a, b));
  }

maxHoy.innerHTML += fecha[demHoyMax.indexOf(arrayMax(demHoyMax))] + ' hs   '+ arrayMax(demHoyMax)+' MW'
maxAyer.innerHTML += fecha[demAyer.indexOf(arrayMax(demAyer))] + ' hs   '+ arrayMax(demAyer)+' MW'
maxSemAnt.innerHTML += fecha[demSemanaAnt.indexOf(arrayMax(demSemanaAnt))] + ' hs   '+arrayMax(demSemanaAnt)+' MW'

}

async function chart() {
    await dataNea();
    const myChart = new Chart(document.getElementById('myChart'), {
        type: 'line',
        data: {
            labels: fecha,
            datasets: [{
                label: 'DemAyer',
                data: demAyer,
                backgroundColor: 'transparent',
                borderColor: 'red',
                borderWidth: 2,
                pointRadius: 1
            },
            {
                label: 'DemHoy',
                data: demHoy,
                backgroundColor: 'transparent',
                borderColor: 'green',
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label: 'DemSemAnt',
                data: demSemanaAnt,
                backgroundColor: 'transparent',
                borderColor: 'blue',
                borderWidth: 2,
                pointRadius: 0
            }
            ]
        },
        options: {
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
                label: 'TempAyer',
                data: tempAyer,
                backgroundColor: 'transparent',
                borderColor: 'red',
                borderWidth: 2,
                pointRadius: 1
            },
            {
                label: 'TempHoy',
                data: tempHoy,
                backgroundColor: 'transparent',
                borderColor: 'green',
                borderWidth: 2,
                pointRadius: 1
            },
            {
                label: 'TempSemAnt',
                data: tempSemanaAnt,
                backgroundColor: 'transparent',
                borderColor: 'blue',
                borderWidth: 2,
                pointRadius: 1
            }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })

}})