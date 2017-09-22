
// NOTE: DO NOT CHANGE CODE BELOW THIS LINE ************

var historicalOverlay;
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 40.740, lng: -74.18},
    mapTypeControlOptions: {
         mapTypeIds: ['moon']
       }
  });

  var imageBounds = {
    north: 40.809513,
    south: 40.670280,
    east: -74.055037,
    west: -74.275912
  };

  var moonMapType = new google.maps.ImageMapType({
    getTileUrl: function(coord, zoom) {
        return null;
    },
    tileSize: new google.maps.Size(800, 800),
    maxZoom: 8000,
    minZoom: 0,
    name: 'Westeros'
  });

  map.mapTypes.set('moon', moonMapType);
  map.setMapTypeId('moon');

  historicalOverlay = new google.maps.GroundOverlay(
      './images/westeros.jpg',
      imageBounds);
  historicalOverlay.setMap(map);


  $(document).ready(function(){

    $.get('http://localhost:3010', function (data){

// NOTE: DO NOT CHANGE CODE ABOVE THIS LINE ************


      function getCharInfo() {
        var myUserInput = document.getElementById("optionCardsSubmit").submit();
        console.log(myUserInput);
      }

      function charInfo() {
        let theCharProfile = document.getElementById('charProfile');
        theCharProfile.textContent = data.character[0].profile;
        $('#charProfile').append(theCharProfile);

        let myCharLocations = document.getElementById('charLocations');
        var ulList = document.createElement('ul');

        for (var i = 0; i < data.character[0].season.length; i++) {
          for (let x = 0; x < data.character[0].season[i].seasonData.length; x++) {
            let liList = document.createElement('li');
            liList.textContent = data.character[0].season[i].seasonData[x].location;
            ulList.append(liList);
          }
        }

        $('#charLocations').append(ulList);
      }


      // NOTE: DO NOT CHANGE CODE BELOW THIS LINE ************

      var userInputPath = [];
      let isDone = false;

      for (var i = 0; i < data.character[0].season.length; i++) {
        for (let x = 0; x < data.character[0].season[i].seasonData.length; x++) {
          // addMarker(data.character[0].season[i].seasonData[x]);

          let currentPoint = data.character[0].season[i].seasonData[x].episodeID;
          if(isDone){
            break;
          }
          if ((currentPoint) !== ("s02e02")&&!isDone) { // NOTE: COMPARE AGAINST USER INPUT
            addMarker(data.character[0].season[i].seasonData[x]);  // TODO: CHANGE THE .LENGTH TO BE THE LENGTH OF WHAT EVER SEASON/EPISODE THE USER PICKS
            userInputPath.push(data.character[0].season[i].seasonData[x].coords);

          } else {
            isDone = true;
            addMarker(data.character[0].season[i].seasonData[x]);  // TODO: CHANGE THE .LENGTH TO BE THE LENGTH OF WHAT EVER SEASON/EPISODE THE USER PICKS
            userInputPath.push(data.character[0].season[i].seasonData[x].coords);
            break;
          }
        }
      }



      console.log(userInputPath);

      function addMarker(props) {
        var marker = new google.maps.Marker({
          position:props.coords,
          map:map,
        });

        if(props.iconImage){
          // set icon image
          marker.setIcon(props.iconImage);
        }

        // check location
        if(props.location){
          var infoCard = new google.maps.InfoWindow({  // TODO: verify that this 'infoCard' variable is working
            content:(props.season + ', ' + props.episode + '<br>' + props.location)
          });

          marker.addListener('click', function(){
            infoCard.open(map, marker);
          })
        }
      }

      var episodePath = new google.maps.Polyline({
        path: userInputPath,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });

      episodePath.setMap(map);
    });
  });
}
    // NOTE: DO NOT CHANGE CODE ABOVE THIS LINE ************
