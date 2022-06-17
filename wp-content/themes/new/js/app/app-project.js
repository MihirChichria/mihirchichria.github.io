var work = {

    magicwall:null,
    init:function(){


        //dynamicznie laduje magicwall

        //load canvas script and init
        var myScript = document.createElement("script");
        myScript.setAttribute("src", path+'js/vendor/magicwall.js');
        myScript.setAttribute("id", 'magicwall');
        document.body.appendChild(myScript);

        myScript.addEventListener('load', function (e) {


           work.magicwall = jQuery(".magicwall").magicWall({
                maxItemHeight: 350,
                maxItemWidth: 350,
                delay: 400,
                preloadBeforeSwitch: true,
                loadingMode:"chain",
                pauseOnHover: "item",
                animations: "flipY,rollOutX,-rollOutX,rollOutY,-rollOutY,slideColumn,-slideColumn,slideRow,-slideRow,fade",
                duration:800,
                scrolling:false
            });

            jQuery(".colorbox").colorbox({
                maxWidth:"70%",
                maxHeight:"250%",
                scrolling:false,
                fixed: true,
                onOpen: function(){
                    jQuery(".magicwall").magicWall("stop");
                },

                onClosed: function(){
                    jQuery(".magicwall").magicWall("start");
                }
            });


            alertify.message(msg5);

            setTimeout(function(){
                alertify.message(msg6);
            },2000);

        }, false);


    },
    destroy:function(){

        //removes baroque
        jQuery('script#magicwall').remove();
        jQuery.colorbox.remove();
        work.magicwall.data("_magicWallInstance").destroy();



    },

}
module.exports = work;