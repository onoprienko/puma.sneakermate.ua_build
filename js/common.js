var rellax = new Rellax('.rellax',{
    breakpoints:[576, 768, 1201]
  });


var elements = document.getElementsByClassName('prl');
[...elements].forEach((scene)=>{
	var parallaxInstance = new Parallax(scene);
})


AOS.init()
setTimeout(()=>AOS.refresh(), 1000);



inView('.logos-bottom')
    .on('enter', ()=>{
    	var element = document.getElementsByClassName('web-white');
		element[0].classList.add("active")
    })
    .on('exit', ()=>{
    	var element = document.getElementsByClassName('web-white');
		element[0].classList.remove("active")
    })



$(function(){
	$('.participants-holder').on('click', '.participant-item-title', function(){
		$(this).parent().toggleClass('active');

		//$('.shape2').hide();
		// $([document.documentElement, document.body]).animate({
	 //        scrollTop: $(this).offset().top
	 //    }, 100);

	    $(this).parent().find('.participant-item-content-holder>div')
			.css({
				'opacity' : '0',
				'margin-top' : '50px'
			})
			.slideDown('fast')
			.animate(
			{ opacity: 1, 'margin-top':'0px' },
			{ queue: false, duration: 'fast' });
		setTimeout(()=>{AOS.refresh();}, 300);
		//setTimeout(()=>{$('.shape2').show(); }, 300);

		
	});
});