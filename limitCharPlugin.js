(function ($) {
    $.fn.limitChar = function () {
        return this.each(function () {
           var limitElem= $("#form__char-left__number");
           var limit=$(this).attr("data-max-length");
            limitElem.text(limit);
            $(this).keypress(function () {
                if($(this).val().length>=limit){
                    return false
                }
            });

            $(this).on("change keyup paste", function () {
               limitElem.text(limit-$(this).val().length);
               // if user paste to much chars then cut
                if($(this).val().length>limit){
                    $(this).val($(this).val().substr(0, limit));
                    limitElem.text(limit-$(this).val().length);
                }
            })

        })
    }
})(jQuery);