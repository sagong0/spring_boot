$(function(){
    // 회원가입 버튼 guidText

    var guideClass = 'mute';

    $('.sign_up_rollOver').each(function(){
    
        var defaultGuideText = this.defaultValue;

        var element = $(this);
        element.focus(function(){
            if(element.val() == defaultGuideText){
                // focus 시 비어지게
                element.val('');
                element.removeClass(guideClass);
            }
        }).blur(function(){
            // 블러 후에도 빈 공간이면 원상복구
            if(element.val() == ''){
                element.val(defaultGuideText);
                element.addClass(guideClass);
            }
        });

        // 맨 처음 초기상태
        if(element.val() === defaultGuideText){
            element.addClass(guideClass);
        }
    });
});