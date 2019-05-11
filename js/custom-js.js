         // scroll top js
        $(document).ready(function() {
            // Show or hide the sticky footer button
            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $('.gotop').fadeIn(500);
                } 

                else{
                    $('.gotop').fadeOut(900);
                }
            });

            // Animate the scroll to top
            $('.gotop').click(function(event) {
                event.preventDefault();
                $('html, body').animate({scrollTop: 0}, 1000);
            })
        });


        // equal height divs js
        $(document).ready(function(){

            var highestBox = 0;
                $('.news-blog1-inner h2, .news-blog1-inner .white-btn').each(function(){  
                        if($(this).height() > highestBox){  
                        highestBox = $(this).height();  
                }
            });    
            $('.news-blog1-inner h2, .news-blog1-inner .white-btn').height(highestBox);

        });


  