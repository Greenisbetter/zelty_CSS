//script qui est injecté dans squarespace

<script id="zelty-order-iframe">
(function(){
	window._zwg = window._zwg || {}
	window._zwg.key = '7d158a5fbc135a4'
    window._zwg.stylesheet = 'https://cdn.jsdelivr.net/gh/Greenisbetter/zelty_CSS/style.css'
	//window._zwg.theme = 'dark'
	var z = document.createElement('script')
	z.type = 'text/javascript'
	z.src = 'https://order.zelty.fr/loader-iframe.js'
	var allScripts = document.getElementsByTagName('script'),
			s = allScripts[allScripts.length - 1];
	s.parentNode.insertBefore(z, s)
})();
</script>