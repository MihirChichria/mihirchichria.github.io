var education = {

    init:function(){
        jQuery("h1,h2").blast({
            delimiter: "character",
            tag: "span"
        })
    },
    destroy:function(){

        jQuery(window).off("scroll",education.logoScroll);

    }

}
module.exports = education;