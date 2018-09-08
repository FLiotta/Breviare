$("#urlForm").submit(function(e){
	e.preventDefault();

	$.ajax({
		url: '/generateUrl',
		method: 'POST',
		data: $('#urlForm').serialize()
	}).done(response => {
		if(response == "InvalidURL"){
			alert("Url is invalid");
		}else{
			$("#lastdiv").css('display', 'flex');
			$("#last").fadeOut(1000, () => {
				$("#last").text(`Brevia.re/${response}`);
				$("#lasturl").attr("href", response);
				$("#last").fadeIn(1000);
			});		
			if($("#urls").children().length == 3){
				$("#urls").children().last().remove();
			}
			$("#urls").prepend(`
				<div class="row justify-content-md-center">
		          <div class="col-md-6">
		              <p class="text-left animated fadeIn">
		                <a href="/${response}" target="_blank" style="color: #E3AA13;">Brevia.re/${response}</a>
		              </p>
		          </div>
		        </div>
			`);
		}
	});
})