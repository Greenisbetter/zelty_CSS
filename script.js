/* 
https://www.greenisbetter.fr/
https://drive.google.com/drive/folders/10hEXak3ve2xlOK9dhjzXkpMGE4thnrME

https://cyan-oval-2nyw.squarespace.com/config/pages
https://bo.zelty.fr/web-widgets
https://support.zelty.fr/hc/fr/articles/360023772592-Personnalisez-la-commande-en-ligne-%C3%A0-vos-couleurs

https://github.com/Greenisbetter/zelty_CSS

https://cdn.jsdelivr.net/gh/Greenisbetter/zelty_CSS/style.css

https://fonts.google.com/specimen/Bebas+Neue?query=bebas+neue
regular 400
https://fonts.google.com/specimen/Arimo#standard-styles
en medium 500
*/


//script qui est injecté dans squarespace
<script id="zelty-order-iframe">
(function(){
	window._zwg = window._zwg || {}
	window._zwg.key = '7d158a5fbc135a4'
	//lien avec la feuille de style sur jsdeliver
    window._zwg.stylesheet = 'https://cdn.jsdelivr.net/gh/Greenisbetter/zelty_CSS/style12.css'
	//window._zwg.theme = 'dark'
	var z = document.createElement('script')
	z.type = 'text/javascript'
	z.src = 'https://order.zelty.fr/loader-iframe.js'
	var allScripts = document.getElementsByTagName('script'),
			s = allScripts[allScripts.length - 1];
	s.parentNode.insertBefore(z, s)
})();
</script>