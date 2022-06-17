

var home = {

    waypoints: [],
    init:function(){

        //blasting headinga
        jQuery("h1,h2").blast({
            delimiter: "character",
            tag: "span"
        });
        jQuery('#responsiveTabsDemo').responsiveTabs({
            startCollapsed: 'accordion'
        });

       this.initSection_home();
       this.initWaypoints();

    },
    destroy:function(){


        if(typeof(initOciliator) !== 'undefined') { //if mobile
            //home destroy
            initOciliator(true);
        }

        jQuery('script#oscil').remove();


        //waypoints destroy
        home.waypoints.forEach(function(element, index, array) {
           element.destroy();
        });

        //my work destroy
        jQuery.colorbox.remove();

        //skills destroy
        jQuery('script#tagcanvas').remove();
        jQuery('#myCanvas').remove();

        if (typeof(app.contactForm) !== 'undefined') {
            app.contactForm.destroy();
        }



    },
    initWaypoints:function(){

        [].slice.call(document.querySelectorAll('.js-way')).forEach(function(el){

            home.waypoints.push(new Waypoint({
                element: el,
                handler: function(direction) {

                    //initializes particular section initSection_work etc..
                    home['initSection_'+jQuery(this.element).attr('data-load')]();

                    this.destroy();

                },
                offset:'80%'
            }));
        });
        jQuery(".progress-bar").each((function () {
            home.waypoints.push(new Waypoint({
                element: $(this)[0],
                handler: function(direction) {
                    jQuery(this.element).animate({
                        width: jQuery(this.element).attr("aria-valuenow") + "%"
                    }, 800);
                    this.destroy();
                },
                offset:'80%'
            }));
        }));
    },
    initSection_home:function () {

        var sectionHome = jQuery('#section-home');


        if(jQuery(window).width() > 768) {
            //load canvas script and init
            var myScript = document.createElement("script");
            myScript.setAttribute("src", path + 'js/vendor/osciliator.js');
            myScript.setAttribute("id", 'oscil');
            document.body.appendChild(myScript);

            myScript.addEventListener('load', function (e) {

                initOciliator(false);

            });
        }


        sectionHome.addClass('loaded');


        //OLD AMINATION
        var a = 0;
        var b = 0;
        sectionHome.find(".blast").each(function(){

            if(a==300){
                a=400;
            }

            if(a==1100){
                a=1200;
            }

            var el = $(this);
            if(a==400){

                setTimeout(function(){
                    sectionHome.find("h1 img").addClass('animation-logo');
                },800);
            }

            setTimeout(function(){
                el.addClass('animated bounceIn');

            },a);

            if(a < 1200) {
                a = a + 100;
            }else {
                a = a + 80;
            }

        });
    },
    initSection_about:function(){

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
                    noSelect:true,
                    textFont:null,
                    pinchZoom:true,
                    wheelZoom:false,
                    freezeDecel:true,
                    fadeIn:3000,
                    initial: [0.3,-0.1],
                    depth : 1.1
                })) {
                // TagCanvas failed to load

            }

        }, false);


        var sectionAbout = jQuery('#section-about');

        var a = 0;

        sectionAbout.find("h2 .blast").each(function(){

            var el = jQuery(this);

            setTimeout(function(){
                el.addClass('animated bounceIn');

            },a);

            a = a + 80;
        });
    },
    initSection_work:function(){


        jQuery(".colorbox").colorbox({
            maxWidth:"70%",
            maxHeight:"200%",
            scrolling:false,
            fixed: true,
            onOpen: function(){
                jQuery('#cboxHead').remove();
                let projectName = jQuery(this).data('name');
                let html = `<div id="cboxHead" style="float: left;">
                    <p>${projectName}</p>
                </div>`;
                jQuery('#cboxContent').append(html);
            },

            onClosed: function(){
                console.log("closed");
            }
        });


        var sectionProject = jQuery('#section-project');

        var a = 0;

        sectionProject.find("h2 .blast").each(function(){

            var el = jQuery(this);

            setTimeout(function(){
                el.addClass('animated bounceIn');

            },a);

            a = a + 180;
        });
    },
    initSection_experience:function(){


        var sectionExperience = jQuery('#section-experience');

        sectionExperience.addClass('loaded');

        var a = 0;

        sectionExperience.find("h2 .blast").each(function(){

            var el = jQuery(this);

            setTimeout(function(){
                el.addClass('animated bounceIn');

            },a);

            a = a + 80;
        });
    },
    initSection_education:function(){


        var sectionEducation = jQuery('#section-education');

        sectionEducation.addClass('loaded');

        var a = 0;

        sectionEducation.find("h2 .blast").each(function(){

            var el = jQuery(this);

            setTimeout(function(){
                el.addClass('animated bounceIn');

            },a);

            a = a + 80;
        });
    },
    initSection_skills:function() {

        var sectionSkills = jQuery('#section-skills');

        sectionSkills.addClass('loaded');

        var a = 0;

        sectionSkills.find("h2 .blast").each(function(){

            var el = jQuery(this);

            setTimeout(function(){
                el.addClass('animated bounceIn');

            },a);

            a = a + 80;
        });
    },
    initSection_contact:function(){

        var sectionContact = jQuery('#section-contact');

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

        alertify.message('Have any questions? Drop me a message... ');

    }

}




module.exports = home;

