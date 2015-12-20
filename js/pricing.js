var $pricingGroup = $( '.pricing-group' );

$pricingGroup.click(function () {
	$pricingGroup.removeClass( 'selected' );
	$pricingGroup.find( '.pricing-group-content' ).height( '' );

	var $this = $( this );
	$this.addClass( 'selected' );

	var $content = $this.find( '.pricing-group-content'),
		height = $content.outerHeight();
	$content.height( height );
});
