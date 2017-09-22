$(document).ready(function(){
  $("select").material_select();

  // $.get("http://localhost:3010", function (data){
  //   function charInfo() {
  //
  //     let theCharProfile = document.getElementById("charProfile");
  //     theCharProfile.innerHTML = data.character[0].profile;
  //     $("#charProfile").append(theCharProfile);
  //
  //     let myCharLocations = document.getElementById("charLocations");
  //     let ulList = document.createElement("ul");
  //
  //     for (let i = 0; i < data.character[0].season.length; i++) {
  //       for (let x = 0; x < data.character[0].season[i].seasonData.length; x++) {
  //         let liList = document.createElement("li");
  //         liList.innerHTML = data.character[0].season[i].seasonData[x].location;
  //         ulList.append(liList);
  //       }
  //     }
  //
  //     $("#charLocations").append(ulList);
  //   }
  // });
});
