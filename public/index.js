let trains = [];
let currentStation= ""
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, {});
});
$.get( "http://localhost:4000/station", function( data ) {
  let rows = data.map(station=>`<option value="${station.name}">${station.name[0].toUpperCase()}${station.name.slice(1)}</option>`)
  rows.forEach(element => {
    $("select").append(element)
  });
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, {});
});
$('select').on('change', function() {
  socket.emit('change', {oldstation: currentStation, newstation: this.value})
  currentStation = this.value
});
const socket = io('http://localhost:4001');
socket.on('connect', function () {
  console.log('connected')
  socket.emit('join', 'listen');
});
socket.on('message', function (data) {
  updateTrain(data)
});
socket.on('onload', function (data) {
  appendTrains(data)
});
socket.on('disconnect', function () {
  console.log('disconnected')
});

function appendTrains(data){
  $("tbody").empty()
  trains = data
  let rows = data.map(train=>`<tr><td>${train.name}</td><td>${train.from}</td><td>${train.to}</td><td>${train.isRunning? 'Yes': 'No'}</td></tr>`)
  rows.forEach(element => {
    $("tbody").append(element)
  });
}

function updateTrain(input){
  input = JSON.parse(input)
  if(input.action=="add"){
    const train = `<tr><td>${input.data.name}</td><td>${input.data.from}</td><td>${input.data.to}</td><td>${input.data.isRunning? 'Yes': 'No'}</td></tr>`
    $("tbody").append(train)
  }else if(input.action=="update"){
    if(input.data.currentStation==currentStation){
      changeInStatus(input.data)
    }else{
      removeFromtheList(input.data)
    }
  }
}

function removeFromtheList(train){
  trainslist = _.filter(trains,(element)=>element.id!=train.id)
  appendTrains(trainslist)
}

function changeInStatus(train){
  const isAvailable = _.filter(trains,{id: train.id})
  if(isAvailable.length==0){
    trains.push(train)
  }else{
    trains.forEach(element=>{
      if(element.id==train.id){
        element.isRunning = train.isRunning
      }
    })
  }
  appendTrains(trains)
}