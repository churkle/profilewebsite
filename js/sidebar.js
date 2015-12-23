$(document).ready(function() {
	$( ".navbar" ).hide();
	$( ".hide-menu-button" ).hide();
});

function showSidebar(show){
	if(show)
	{
		$( ".navbar" ).fadeIn(500);
		$( ".menu-button" ).fadeOut(500);
		$( ".hide-menu-button" ).show();
	}
	else
	{
		$( ".navbar" ).fadeOut(500);
		$( ".menu-button" ).fadeIn(500);
		$( ".hide-menu-button" ).fadeOut(500);
	}

}