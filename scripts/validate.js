/* validate.js */

(function($) { 

    /* validation */
    $('#contact-form').validate({
    rules: {

        email: {
            required: true,
            email: true
        },
        message: {
            minlength: 2,
            required: true
        }
    },
    highlight: function (element) {
        $(element).closest('.form-group').removeClass('success').addClass('error');
    },
    success: function (element) {
        element.text('OK!').addClass('valid')
            .closest('.form-group').removeClass('error').addClass('success');
    }
    });
})( jQuery );