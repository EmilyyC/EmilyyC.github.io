$(document).ready(function(){
//nav bar close when click on an item
   $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

    // scrolling effect
    $('.navbar-element-slide').click(function(e){
        var HeaderHeight = $('.navbar-header').outerHeight();
        console.log(HeaderHeight);
        
        var linkHref = $(this).attr('href');
        
        $('html, body').animate({
        scrollTop:$(linkHref).offset().top-HeaderHeight
        },1000);
        
        e.preventDefault();
        
    });
    $('.cover-btn-abt').click(function(e){
        var HeaderHeight = $('.navbar-header').outerHeight();
        $('html, body').animate({
      scrollTop:$('#About').offset().top-HeaderHeight
        },1000);
        e.preventDefault();
    });
    
    // nav bar goes away as scrolling 
    
    $(window).scroll(function(){
        if($(document).scrollTop()>50){
            $('nav div:first').addClass('navbar-default');
        }
        else{
            $('nav div:first').removeClass('navbar-default');
        }
    });
    
    
    
});
                            
                    