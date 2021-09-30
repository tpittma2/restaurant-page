    const {Loader} = require('google-maps');
    const apiKey = 'AIzaSyBJ0VmBlaZQiUrTXtoSNrP_-Sqy7Ml06Cg';
    //33.39100520748428, -84.76460786254503
    const latLng = {lat: 33.39100520748428, lng: -84.76460786254503};

export default function getContactPage() {
    let page = document.createElement('div');
    page.classList.add('contact');
    let mapDiv = document.createElement('div');
    mapDiv.id = 'map';
    mapDiv.style = 'width:100%;height:400px;';
    mapDiv.classList.add('bordered');
    page.appendChild(mapDiv);
    
    

 
//const options: LoaderOptions = {/* todo */};
const loader = new Loader(apiKey);
 
const google = loader.load().then(function (google) {
  const map = new google.maps.Map(document.getElementById('map'), {
      center: latLng,
      zoom: 17,
  });
});
    return page;

}

function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(33.3908088,-84.7669757),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }