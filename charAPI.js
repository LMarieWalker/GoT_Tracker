var http = require('http');

var server = http.createServer(function(request, response) {
  console.log('got a request!');

  let charData =
  {
    "character":
    [
      {
        "name": "Arya Stark",
        "house": "House Stark",
        "profile": "Arya Stark is the third child and second daughter of Lord Eddard Stark and his wife, Lady Catelyn Stark. After narrowly escaping the persecution of House Stark by House Lannister, Arya is trained as a Faceless Man at the House of Black and White in Braavos, and uses her new skills to bring those who have wronged her family to justice.<br><br>Arya rejects the notion that she must become a lady and marry for influence and power, instead she believes she can forge her own destiny. She is fascinated by warfare and training in the use of arms, and is bored by embroidery and other 'lady-like' pursuits. She takes after her father and has a quarrelsome relationship with her sister Sansa, due to their contrasting interests and personalities. She is close to her 'half-brother' Jon, who is also something of an outcast.",
        "season":
        [
          {
            "seasonData":[
              {
                episodeID: "s01e01",
                season: "Season 1",
                episode: "Episode 1",
                location:"Winterfell",
                // iconImage:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
                coords:{lat:40.7870,lng:-74.2430}
              },
              {
                episodeID: "s01e02",
                season: "Season 1",
                episode: "Episode 2",
                location:"Kingsroad",
                coords:{lat:40.7565,lng:-74.2415}
              },
              {
                episodeID: "s01e03",
                season: "Season 1",
                episode: "Episode 3",
                location:"King's Landing",
                coords:{lat:40.7375,lng:-74.2360}
              },
            ]
          },
          {
            "seasonData":[
              {
                episodeID: "s02e02",
                season: "Season 2",
                episode: "Episode 2",
                location:"Kingsroad",
                coords:{lat:40.7435,lng:-74.2345}
              },
              {
                episodeID: "s02e03",
                season: "Season 2",
                episode: "Episode 3",
                location:"Harrenhal",
                coords:{lat:40.7475,lng:-74.2390}
              }
            ]
          },
          {
            "seasonData":[
              {
                episodeID: "s03e01",
                season: "Season 3",
                episode: "Episode 1",
                location:"On the road towards River Road",
                coords:{lat:40.7488,lng:-74.2415}
              },
              {
                episodeID: "s03e02",
                season: "Season 3",
                episode: "Episode 2",
                location:"Red Fork",
                coords:{lat:40.7505,lng:-74.2440}
              },
              {
                episodeID: "s03e04",
                season: "Season 3",
                episode: "Episode 4",
                location:"Hollow Hill",
                coords:{lat:40.7440,lng:-74.2433}
              },
              {
                episodeID: "s03e08",
                season: "Season 3",
                episode: "Episode 8",
                location:"Crossroads Inn",
                coords:{lat:40.7500,lng:-74.2395}
              },
              {
                episodeID: "s03e09",
                season: "Season 3",
                episode: "Episode 9",
                location:"The Twins",
                coords:{lat:40.7595,lng:-74.2445}
              }
            ]
          },
          {
            "seasonData":[
              {
                episodeID: "s04e08",
                season: "Season 4",
                episode: "Episode 8",
                location:"The Bloody Gate",
                coords:{lat:40.7555,lng:-74.2290}
              },
              {
                episodeID: "s04e10",
                season: "Season 4",
                episode: "Episode 10",
                location:"Saltpans",
                coords:{lat:40.7462,lng:-74.2318}
              },
              {
                episodeID: "s05e02",
                season: "Season 5",
                episode: "Episode 2",
                location:"Braavos",
                coords:{lat:40.7665,lng:-74.2043}
              }
            ]
          },
        ]
      }
    ]
  };


  // let charData =
  // {
  //   "character":[
  //     {
  //       "name": "Arya Stark",
  //       "house": "House Stark",
  //       "markers":[
  //         {
  //           "seasonOne":[
  //             {
  //               episode: 1,
  //               content:"Winterfell",
  //               coords:{lat:40.7825,lng:-74.2443}
  //             },
  //             {
  //               episode: 2,
  //               content:"Kingsroad",
  //               coords:{lat:42.8585,lng:-70.9300}
  //             },
  //             {
  //               episode: 3,
  //               content:"King's Landing",
  //               coords:{lat:42.7762,lng:-71.0773}
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // };

  response.setHeader('Content-Type', 'application/json');
  response.write(JSON.stringify(charData));
  response.end();
});

server.listen(3010);
