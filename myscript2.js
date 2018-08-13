function openCity(evt, cityName) {
    var d, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (d = 0; d < tabcontent.length; d++) {
        tabcontent[d].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (d = 0; d < tablinks.length; d++) {
        tablinks[d].className = tablinks[d].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    document.getElementsByClassName("tabunderline").style.left = evt.currentTarget.getBoundingClientRect().left ;
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


$(function(){
  $('.tablinks').click(function(){
    var moving = $(this).position().left + $(this).width()/2 - 20;
    $('.tabunderline').animate({'left':moving},1000);
  })
})


$(function(){  // $(document).ready shorthand
  $('.dividings').fadeIn('slow');
});

$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.dividingbox').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var basenumber = $(this).position().top - $(window).height() * i ;

            var top_of_object = $(this).position().top  ;
            var top_of_window = $(window).scrollTop() ;

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1000);
            }
         if(i>1){
            if( top_of_object < $(window).scrollTop() - 40*i){
                $(this).animate({'opacity':'0.5'},1500);
            }}


        });

        /* Check the location of each desired element */
        $('.eatonerow').each( function(j){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var basenumber = $(this).position().top - $(window).height() * j ;

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1000);
            }

        });

    });

});

$(document).ready(function(){
  $('.st1').on("click", function(e){
    $('.active').removeClass('active');
    $(this).addClass('active');
  });

});

var mouseX;
var mouseY;

$(document).mousemove(function(f) {
   mouseX = f.pageX+$('.st1').width()-$('#shopmarker').width()/10 ;
   mouseY = f.pageY-$(window).height()/1.515-$('.st1').height()+$('#shopmarker').height();
});

$(".st1").mouseover(function(){
  $('#shopmarker').css({'top':mouseY,'left':mouseX}).fadeIn('slow');
});
