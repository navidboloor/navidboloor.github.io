$screen_height = $(window).height();
$screen_width = $(window).width();

$(window).scroll(function ()
{
	if ($(window).scrollTop() > $screen_height)
	{
		$("#navbar").css("position", "fixed");
		$("#navbar").css("top", "0");
	}
	if ($(window).scrollTop() < $screen_height)
	{
		$("#navbar").css("position", "relative");
		$("#navbar").css("top", "auto");
	}
});