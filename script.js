//Seeting the initial long and latitude

//Add name Attribute in the forms
//On load events

$(window).on("load", function() {
    $("#shake").addClass("hand");
    if ($(window).width() <= 800){
        latitude=49.1927;
        longitude= -123.1207;
        initMap();
    }
    // else if($(window).width() <= 1100){
    //     latitude=49.1927;
    //     longitude= -123.1207;
    //     initMap();
    // }
    else{
        latitude=49.2127;
        longitude=-123.1207;
        initMap();
    }
    $("#landing-page").css('display','block');
});

var  latitude=49.2127;
var  longitude=-123.1207;

$(window).resize(function(){
    if ($(window).width() <= 800){  
        latitude=49.1927;
        longitude= -123.1207;
        initMap();
    } 
    else{
        latitude=49.2127;
        longitude=-123.1207;
        initMap();
    }  
});

function initMap() {
    var uluru = {
        lat: latitude,
        lng: longitude
    };
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 11,
            scrollwheel: false,
            mapTypeControl: false,
            zoomControl: false,
            scaleControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            center: uluru,
            styles: [{
                    elementType: 'geometry',
                    stylers: [{
                        color: '#242f3e'
                    }]
                },
                {
                    elementType: 'labels.text.stroke',
                    stylers: [{
                        color: '#242f3e'
                    }]
                },
                {
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#746855'
                    }]
                },
                {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#d59563'
                    }]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#d59563'
                    }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#263c3f'
                    }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#6b9a76'
                    }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#38414e'
                    }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{
                        color: '#212a37'
                    }]
                },
                {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#9ca5b3'
                    }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#746855'
                    }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{
                        color: '#1f2835'
                    }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#f3d19c'
                    }]
                },
                {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#2f3948'
                    }]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#d59563'
                    }]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#17263c'
                    }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#515c6d'
                    }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{
                        color: '#17263c'
                    }]
                }
            ]



        });
var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    position: {
        lat: 49.2827,
        lng: -123.1207
    },
    title: 'I am in Vancouver right now'
    });
}
$("#down").on("click", function() {
    $("#down").fadeOut();
    $(".hand").fadeOut();
    $("#landing-page").slideUp(1000, function() {
        $(".info").fadeIn(500);
        $("#up").fadeIn();
        $(".box").fadeIn(1000);
    });

});

$("#up").on("click", function() {
    $("#up").fadeOut();
    $("#landing-page").slideDown(1000, function() {
        $(".info").fadeOut(500, );
        $("#down").fadeIn();
        $(".hand").fadeIn();

    });
});

$("#rew").on("click",function(){
    $("#modal-rew").fadeIn();
});

$("#close").on("click",function(){
    $("#modal-rew").fadeOut();
});
