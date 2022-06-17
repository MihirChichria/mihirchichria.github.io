var about = {

    init:function(){

        var myScript = document.createElement("script");
        myScript.setAttribute("src", path+'js/vendor/tagcanvas.js');
        myScript.setAttribute("id", 'tagcanvas');
        document.body.appendChild(myScript);

        myScript.addEventListener('load', function (e) {

            if( ! $('#myCanvas').tagcanvas({
                    textColour : '#08FDD8',
                    outlineThickness : 0.5,
                    outlineColour : '#FE0853',
                    maxSpeed : 0.06,
                    freezeActive:true,
                    shuffleTags:true,
                    shape:'sphere',
                    zoom:0.8,
                    wheelZoom:false,
                    noSelect:true,
                    textFont:null,
                    freezeDecel:true,
                    fadeIn:3000,
                    initial: [0.3,-0.1],
                    depth : 1.1
                })) {
                // TagCanvas failed to load
                $('#myCanvasContainer').hide();

            }


        }, false);



        //blasting headinga
        jQuery("h1,h2").blast({
            delimiter: "character",
            tag: "span"
        })

        var pageAbout = jQuery('.js-page-about');

        var a = 0;

        pageAbout.find("h2 .blast").each(function(){

            var el = jQuery(this);

            setTimeout(function(){
                el.addClass('animated bounceIn');

            },a);

            a = a + 80;
        });


        setTimeout(function(){

            pageAbout.find(".blast").removeClass('animated bounceIn');
            pageAbout.find(".blast").css('opacity',1);

            pageAbout.find(".blast").mouseenter(function (){

                var el = jQuery(this);

                jQuery(this).addClass('animated rubberBand');
                jQuery(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

                    el.removeClass('animated rubberBand');

                });

            });


        },2000);




    },
    destroy:function(){

        //removes convas
        jQuery('script#tagcanvas').remove();

    },

}
module.exports = about;