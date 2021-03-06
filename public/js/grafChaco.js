window.addEventListener('load',()=>{

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

let demHoyMax=[];

async function dataChaco(){
const response  = await  fetch('https://api.cammesa.com/demanda-svc/demanda/ObtieneDemandaYTemperaturaRegion?id_region=1892')
const chaco = await response.json()
console.log(chaco);
chaco.forEach(element => {
    fecha.push(moment(element.fecha).format('HH:mm'))
    if(element.demHoy){
      demHoyMax.push(element.demHoy)
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

maxHoy.innerHTML += fecha[demHoyMax.indexOf(arrayMax(demHoyMax))] + ' hs   '+ arrayMax(demHoyMax)+' MW'
maxAyer.innerHTML += fecha[demAyer.indexOf(arrayMax(demAyer))] + ' hs   '+ arrayMax(demAyer)+' MW'
maxSemAnt.innerHTML += fecha[demSemanaAnt.indexOf(arrayMax(demSemanaAnt))] + ' hs   '+arrayMax(demSemanaAnt)+' MW'
ahora.innerHTML +=  fecha[demHoyMax.length-1] + ' hs   '+demHoyMax[demHoyMax.length-1]+' MW'
antes.innerHTML +=  fecha[demHoyMax.length-3] + ' hs   '+demHoyMax[demHoyMax.length-3]+' MW'
masAntes.innerHTML +=  fecha[demHoyMax.length-5] + ' hs   '+demHoyMax[demHoyMax.length-5]+' MW'

}

async function chart (){
await dataChaco();
 const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: fecha,
            datasets: [{
                label: 'DemHoy',
                data: demHoy,
                backgroundColor: 'red',
                borderColor: 'red',
                borderWidth:1.5,
                pointRadius: 0,
                fill: false,
                tension: 0.1,
            },
            {
                label: 'DemAyer',
                data: demAyer,
                backgroundColor: 'green',
                borderColor: 'green',
                borderWidth:1.5,
                pointRadius: 0,
                fill: false,
                tension: 0.1,
            },
            {
                label: 'DemSemAnt',
                data: demSemanaAnt,
                backgroundColor: 'blue',
                borderColor: 'blue',
                borderWidth:1.5,
                pointRadius: 0,
                fill: false,
                tension: 0.1,
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
                    boxWidth:10,
                    boxHeight:2,
                    caretPadding: 50,
                    caretSize: 0,
                    titleFont:{
                        size:25
                    },
                    bodyFont:{
                        size:20
                    },
                    position: 'nearest',
                    }
            },
            hoverBackgroundColor:'white',
            pointRadius: 0,
            pointHoverRadius:5,
            pointHoverBorderWidth:4,
            pointHitRadius:10,
            scales:  {
            y: {
                type: 'linear',
                beginAtZero: true
            }
        }
    }
    })
}
})

setInterval("location.reload()",600000);