var contact = {

    init:function(){


        //load canvas script and init
        var myScript = document.createElement("script");
        myScript.setAttribute("src", 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBgcL9WlQurkB-kRTgVhM62dKP7c8p1Hl4&callback=app.contact.initMap');
        myScript.setAttribute("id", 'map');

        if( jQuery('script#map').length == 0){
            document.body.appendChild(myScript);
        }


        //blasting headinga
        jQuery("h1,h2").blast({
            delimiter: "character",
            tag: "span"
        });


        var sectionContact = jQuery('.js-page-contact');

        var a = 0;

        sectionContact.find("h2 .blast").each(function(){

            var el = jQuery(this);

            setTimeout(function(){
                el.addClass('animated bounceIn');

            },a);

            a = a + 80;
        });

        var  b = 300;
        sectionContact.find(".contact-form li").each(function(){

            var el = jQuery(this);

            setTimeout(function(){

                el.addClass('animated fadeInUp');


            },b);

            b =b + 100;

        });


        app.contactForm = require('./contact-form.js');

        app.contactForm.init();

        if (typeof google === 'object' && typeof google.maps === 'object') {
            contact.initMap();
        }

    },
    destroy:function(){

        app.contactForm.destroy();


    },
    initMap: function () {

        var mapOptions = {
            center: new google.maps.LatLng(53.37493165169552,14.66331481933594),
            zoom:6,
            disableDefaultUI: true
        };
        var map = new google.maps.Map(document.getElementById('map'),
            mapOptions);


        var styles = [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#012621"
                    },
                    {
                        "weight": 0.8
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels",
                "stylers": [
                    {
                        "color": "#012621"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#0c0000"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#012621"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#012621"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#012621"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#06c5a9"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#06c5a9"
                    },
                    {
                        "lightness": -7
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#06c5a9"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "weight": 0.3
                    },
                    {
                        "lightness": 10
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#047968"
                    },
                    {
                        "lightness": "-7"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#06c5a9"
                    },
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": -15
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#06c5a9"
                    },
                    {
                        "lightness": "7"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#06c5a9"
                    },
                    {
                        "lightness": -34
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#1D1D1D"
                    }
                ]
            }
        ];



        map.setOptions({styles: styles});

        var image = path + 'img/marker.png';
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(53.37493165169552,14.66331481933594),
            animation: google.maps.Animation.DROP,
            icon: image

        });

        marker.setMap(map);

        google.maps.event.addListenerOnce(map, 'tilesloaded', function(){


            jQuery('.inf-map').addClass('show');
            jQuery('#map').css('opacity',1);

        });

    }

}
module.exports = contact;