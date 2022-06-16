$ = jQuery.noConflict();

app.animations = require('./global.js');
app.currentPageObj = null;


//constant elements
var body = jQuery('body');
var $progressBar = jQuery('#progress-bar');
var $progressBarBg = jQuery('#progress-bar_bg');
var $ajaxify = jQuery('#ajaxify');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
})

//========================   MOBILE MENU


jQuery('.mbtn').click(function (e) {

    e.preventDefault();
    body.toggleClass('mobileopen');

});
jQuery('.menu-item').click(function (e) {
    if(body.hasClass('mobileopen')) {
        body.toggleClass('mobileopen');
    }
});

//========================   PAGE  OBJECT - ajax request/zmiana url/init JS strony

app.page = {
    contents: null,
    currentPageObj: null,
    initPage: function () {

        window.scrollTo(0, 0);

        if (document.querySelector('.js-page-home')) {

            app.home = require('./app/app-home.js');
            app.home.init();
            app.page.currentPageObj = app.home;

        }
        //
        if (document.querySelector('.js-page-work')) {

            app.work = require('./app/app-work.js');
            app.work.init();
            app.page.currentPageObj = app.work;

        }

        if (document.querySelector('.js-page-skills')) {

            app.skills = require('./app/app-skills.js');
            app.skills.init();
            app.page.currentPageObj = app.skills;

        }

        if (document.querySelector('.js-page-about')) {

            app.about = require('./app/app-about.js');
            app.about.init();
            app.page.currentPageObj = app.about;

        }

        if (document.querySelector('.js-page-contact')) {

            app.contact = require('./app/app-contact.js');
            app.contact.init();
            app.page.currentPageObj = app.contact;

        }

        //blog page/tag + single
        if (document.querySelector('.js-page-blog')) {

            app.blog = require('./app/app-blog.js');
            app.blog.init();
            app.page.currentPageObj = app.blog;

        }

        if (document.querySelector('.js-page-text')) {

            app.text = require('./app/app-text.js');
            app.text.init();
            app.page.currentPageObj = app.text;
        }

        if (document.querySelector('.js-page-education')) {

            app.text = require('./app/app-education.js');
            app.text.init();
            app.page.currentPageObj = app.text;
        }



    },
    loadPage: function (rel, id) {

        if (app.ajax !== null) {

            return false;

        } else {

            app.preloader.preloaderInit(rel);

            var data = {
                'action': 'load_page',
                'page': rel,
                'id': id
            };






            return true;

        }

    },
    urlChange: function (rel, id) {

        switch (rel) {
            case 'home':
                window.history.pushState("", "", url);
                break;
            case 'work':
                window.history.pushState("", "", url + 'portfolio');
                break;
            case 'blog':
                window.history.pushState("", "", url + 'wall');
                break;
            case 'single':
                window.history.pushState("", "", url + '?p=' + id);
                break;
            default:
                window.history.pushState("", "", url + rel);
        }


    }



};


app.page.initPage(); // INIT FUNCTION !!!!!



//on load
body.addClass('window-loaded');