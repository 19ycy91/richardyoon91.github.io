$(document).ready(function(){    
    $(".navbar-nav a:first").addClass("active");
    $(".navbar-nav li").click(function(){
        $(this)
            .find("a")
            .addClass("active")
            .end()
            .siblings("li")
            .find("a")
            .removeClass("active")
        
    })             
    // $(".navbar-nav li").on('click','a', function(){
    //     $(this).addClass('active').siblings("li").removeClass('active');
    //  })

    $('body').scrollspy({ target: '#navbarNav' })

    var velocity = 0.33;

    function update(){ 
        var pos = $(window).scrollTop(); 
        $('.bg-img').each(function() { 
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = $element.height()-770;
        $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px'); 
        }); 
    };

    $(window).bind('scroll', update);

    

    // $(".bigT").bigtext();




    var w = $('.flip-card').width();
    var x = $('.flip-card-inner').width();
    // var y = $('.flip-card-front').width();
    // var z =$('flip-card-back').width();
    $('.flip-card').css({'height':w+'px'});
    $('.flip-card-inner').css({'height':x+'px'});
    
    // $('.flip-card-front').css({'height':y+'px'});
    // $('.flip-card-back').css({'height':z+'px'});
    $('.flip-card').css({'padding':'2%'});
    

    // var w2 = $('.projectimg').width();
    // $('.projectimg').css({'height':w2+'px'});

    $(window).resize(function() {
        var w = $('.flip-card').width();
        var x = $('.flip-card-inner').width();
        // var y = $('.flip-card-front').width();
        // var z =$('flip-card-back').width();
        $('.flip-card').css({'height':w+'px'});
        $('.flip-card-inner').css({'height':x+'px'});
        // $('.flip-card-front').css({'height':y+'px'});
        // $('.flip-card-back').css({'height':z+'px'});
        $('.flip-card').css({'padding':'2%'});
    
        // var w2 = $('.projectimg').width();
        // $('.projectimg').css({'height':w2+'px'});
    
    
    })




});