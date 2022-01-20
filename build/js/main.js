const lazyLoadInstance = new LazyLoad({
	// Your custom settings go here
});

function ValidationEvent( ) {
	let form  = document.getElementById( "form-action" );
	let spans = form.getElementsByTagName('span');
	[].forEach.call( spans, ( el ) => {
		el.remove();
	})

	if( document.getElementById('name').value.length < 3 ) {
		let span = document.createElement("span");
		span.innerHTML = ' Inserte un nombre válido';
		document.getElementById('name').parentNode.append(  span );
		document.formRegister.name.focus();
		return false;
	}

	if( document.getElementById('email').value.length < 8 ) {
		let span = document.createElement("span");
		span.innerHTML = ' Inserte un email válido';
		document.getElementById('email').parentNode.append(  span );
		document.formRegister.name.focus();
		return false;
	}

	if( document.getElementById('phone').value.length < 8 ) {
		let span = document.createElement("span");
		span.innerHTML = ' Inserte un phone válido';
		document.getElementById('phone').parentNode.append(  span );
		document.formRegister.name.focus();
		return false;
	}

	if( document.getElementById('message').value.length < 8 ) {
		let span = document.createElement("span");
		span.innerHTML = ' Inserte un message válido';
		document.getElementById('message').parentNode.append(  span );
		document.formRegister.name.focus();
		return false;
	}

	return true;   // Returns Value
}

const allButtons = document.querySelectorAll('.icon-service');

for (let i = 0; i < allButtons.length; i++) {
	allButtons[i].addEventListener('click', function() {
		let item_service = this.parentElement;
		let description  = item_service.getElementsByClassName('description')[0]
		//description = description.parentElement;
		if( description.classList.contains('active-description') ){
			//hide description
			description.classList.remove( 'active-description');
			item_service.classList.remove('active')
			//remove class
		} else{
			//show description
			//add active class
			description.classList.add('active-description');
			item_service.classList.add('active')

		}
	});
}