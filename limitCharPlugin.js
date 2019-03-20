(function ($) {
    $.fn.limitChar = function () {
        return this.each(function () {
           var limitElem= $("#form__char-left__number");
           var limit=$(this).attr("data-max-length");
            limitElem.text(limit);
            $(this).keypress(function (event) {
                if($(this).val().length>=5){
                    return false
                }
                limitElem.text(limit-$(this).val().length)
            })

        })
    }
})(jQuery);