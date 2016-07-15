/*
 * Code by Juan Lago Vázquez, @JLV_55
 * www.twitter.com/JLV_55
 * www.jlv55.com
*/

$(document).ready(function($){


		$('#tweets').tweecool({
username : 'jlv_55',
limit : 1, // Number of tweets to show
profile_image : false, // Show profile image
show_time : true // Show tweet time
});

	 $('#blogCnt').parallax("50%", 0.3);
	 $('#portfolioCnt').parallax("50%", 0.3);


        $('#showdiv1').click(function() {
        $('#div2').hide();
        $('#div1').show();
    });
    $('#showdiv2').click(function() {
        $('#div1').hide();
        $('#div2').show();
    });
   $('#showdiv3').click(function() {
        $('div4').hide();
        $('#div3').show();
    });
    $('#showdiv4').click(function() {
        $('div3').hide();
        $('#div4').show();
    });




});