var contactForm = {
    $form:null,
    init:function(){

        this.$form = jQuery('#contact');

        jQuery('body').on('click','#submit-form', contactForm.initForm);

        jQuery('body').on('keyup','#contact input, #contact textarea',  contactForm.validate);

    },
    initForm: function(){


            contactForm.validate();


            if(contactForm.$form.find('.required').size()  > 0 ){

                alertify.error(msg1);

            }else {


                jQuery('#submit-form').addClass('disabled');

                alertify.message(msg2);

                jQuery.post(path + "mail.php", contactForm.$form.serialize(), function (data) {


                    if (data == '11') {

                        alertify.success(msg3);


                        contactForm.$form.find('.required').removeClass('required');
                        contactForm.$form.find('input[type="text"], input[type="email"], textarea').val('');

                    } else {

                        contactForm.$form.find('.required').removeClass('required');
                        contactForm.$form.find('input[type="text"],input[type="email"],textarea').val('');


                        app.helpers.logError('#155','Contact form failed - 155');

                    }

                    jQuery('#submit-form').removeClass('disabled');

                }).fail(function( jqXHR, textStatus ) {

                    app.helpers.logError('#156','Contact form failed - 156');
                    jQuery('#submit-form').removeClass('disabled');

                });;

            }

            return false;

    },
    validate:function(){

        if(contactForm.$form.find('input[type=email]').val() == '' || !contactForm.validateEmail(contactForm.$form.find('input[type=email]').val())){

            contactForm.$form.find('input[type=email]').parent().addClass('required');

        }else {

            contactForm.$form.find('input[type=email]').parent().removeClass('required');
        }

        if(contactForm.$form.find('textarea').val() == ''){

            contactForm.$form.find('textarea').parent().addClass('required');

        }else{
            contactForm.$form.find('textarea').parent().removeClass('required');

        }

    },
    validateEmail:function(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    },
    destroy:function(){
        jQuery('body').off('click','#submit-form', contactForm.initForm);
        jQuery('body').off('keyup','#contact input, #contact textarea',  contactForm.validate);

    }



}


module.exports = contactForm;