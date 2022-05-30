let tbody = document.getElementById('content');
let maxHoy = document.getElementById('maxHoy');
let maxAyer = document.getElementById('maxAyer');
let maxSemAnt = document.getElementById('maxSemAnt');

chart();
let fecha = [];
let demHoy = [];
let demAyer = [];
let demSemanaAnt = [];

let demHoyMax=[];

async function dataChaco(){
const response  = await  fetch('https://api.cammesa.com/demanda-svc/demanda/ObtieneDemandaYTemperaturaRegion?id_region=1892')
const chaco = await response.json()
console.log(chaco);
chaco.forEach(element => {
    fecha.push(moment(element.fecha).format('HH:mm'))
    if(element.demHoy){
      demHoyMax.push(element.demHoy)
    }else{
        demHoyMax.push(0)
    }
    demHoy.push(element.demHoy)
    demAyer.push(element.demAyer)
    demSemanaAnt.push(element.demSemanaAnt)

    if(element.demHoy == undefined ){
        tbody.innerHTML += 
        '<tr>'+
        '<td>'+ moment(element.fecha).format('HH:mm') +'</td>'+
        '<td>'+ '' +'</td>'+
        '<td>'+ element.demAyer +'</td>'+
        '<td>'+ element.demSemanaAnt + '</td>'
        +'</tr>'
    }else{
        tbody.innerHTML += 
        '<tr>'+
        '<td>'+ moment(element.fecha).format('HH:mm') +'</td>'+
        '<td>'+ element.demHoy +'</td>'+
        '<td>'+ element.demAyer +'</td>'+
        '<td>'+ element.demSemanaAnt + '</td>'
        +'</tr>'
    }
});

function arrayMax(arrayDem) {
    return arrayDem.reduce((a, b) => Math.max(a, b));
  }

maxHoy.innerHTML += arrayMax(demHoyMax)
maxAyer.innerHTML += arrayMax(demAyer)
maxSemAnt.innerHTML += arrayMax(demSemanaAnt)
}
async function chart (){
await dataChaco();
 const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: fecha,
            datasets: [{
                label: 'DemAyer',
                data: demAyer,
                backgroundColor: 'transparent',
                borderColor: 'red',
                borderWidth:2,
                pointRadius: 1 
            },
            {
                label: 'DemHoy',
                data: demHoy,
                backgroundColor: 'transparent',
                borderColor: 'green',
                borderWidth:2,
                pointRadius: 0 
            },
            {
                label: 'DemSemAnt',
                data: demSemanaAnt,
                backgroundColor: 'transparent',
                borderColor: 'blue',
                borderWidth:2,
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
    })

}

