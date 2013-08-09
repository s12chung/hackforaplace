$(function() {
    function initialize() {
        var position = new google.maps.LatLng(43.637098,-79.423715);
        var mapOptions = {
            center: position,
            zoom: 15
        };
        var map = new google.maps.Map($(data_behavior("map"))[0],
            mapOptions);

        new google.maps.Marker({
            position: position,
            map: map,
            title:"Stone Soup Innovation Lab"
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);
});