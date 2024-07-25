document.querySelectorAll('#navbar-bttn a').forEach(button => {
	button.addEventListener('click', function(e){
		e.preventDefault;
		document.getElementById(this.getAttribute('scroll-to')).scrollIntoView({
			behavior: 'smooth',
			block: 'start' 
		});
	});
});
