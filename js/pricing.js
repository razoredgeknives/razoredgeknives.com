var $pricingGroup = $( '.pricing-group' );

$pricingGroup.click(function () {
	$pricingGroup.filter( '.selected' ).removeClass( 'selected' );
	$( this ).addClass( 'selected' );
});
