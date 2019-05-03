$(document).ready(function()
{
	var scrolled=0;
	var $parallaxElements=$('.icons-for-parallax');
	var yPos;
	$(window).scroll(function()
	{
		scrolled=$(window).scrollTop();
		for (var i=0;i<$parallaxElements.length;i++)
		{
			yPos=(scrolled*1*(i+1));
			$parallaxElements.eq(i).css({top:yPos});
		}
	});
});
