// Initialize a Leaflet map and store a reference to the map Object
var map = L.map('map')

//  Set the [lat, long], and zoom for the map using Leaflet's setView method
map.setView([40.80558317487379, -73.94968271255495], 16)

L.tileLayer('http://maps.nypl.org/warper/layers/tile/862/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.nypl.org/">New York Public Library</a>'
}).addTo(map);

var points = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "description": "James Baldwin's elementary school",
        "est_date": 1930,
        "ref_url": "http://amsterdamnews.com/news/2014/aug/07/james-baldwin-gets-his-place-harlem/"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.93993556499481,
          40.80778798776024
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "description": "Ralph Ellison residence",
        "ref_url": "http://maap.columbia.edu/place/55"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.94940376281738,
          40.8303719340127
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Invisible Man: A Memorial to Ralph Ellison",
        "artist": "Elizabeth Catlett",
        "year": 2003
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.94984364509583,
          40.83023392857387
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Harriet Tubman Memorial",
        "alt_name": "Swing Low",
        "artist": "Alison Saar",
        "date": "11-13-2008",
        "ref_url": "https://en.wikipedia.org/wiki/Harriet_Tubman_Memorial_(New_York_City)"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.95280480384827,
          40.80817372097565
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "description": "Frederick Douglass Memorial",
        "sculptor": "Gabriel Koren",
        "date": "9-20-2011",
        "ref_url": "https://www.nycgovparks.org/parks/central-park/monuments/2098"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.95813703536987,
          40.80063730604987
        ]
      }
    }
  ]
}

var path = {
  "type": "FeatureCollection",
  "features": [
  {
   "type": "Feature",
   "properties": {},
   "geometry": {
     "type": "LineString",
     "coordinates": [
       [
         -73.94980072975159,
         40.83023798756147
       ],
       [
         -73.94961297512054,
         40.83029481336172
       ],
       [
         -73.94745647907257,
         40.82937341759382
       ],
       [
         -73.94545555114746,
         40.82847230450342
       ],
       [
         -73.94948959350586,
         40.82277308945377
       ],
       [
         -73.94391059875488,
         40.820304901335035
       ],
       [
         -73.9460563659668,
         40.817187058745816
       ],
       [
         -73.9403486251831,
         40.814751142257144
       ],
       [
         -73.94412517547607,
         40.80965166748853
       ],
       [
         -73.9392328262329,
         40.80763775421704
       ],
       [
         -73.94099235534668,
         40.80513651877329
       ],
       [
         -73.95180702209473,
         40.80945677532709
       ],
       [
         -73.95807266235352,
         40.80062106285213
       ]
     ]
   }
 }
]
}

L.geoJSON(path).addTo(map)
L.geoJSON(points).addTo(map)
