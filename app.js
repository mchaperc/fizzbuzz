$(document).ready(function() {
	$('button').on('click', function() {
		for (var i = 1; i <= 100; i++) {
			if (i%5 === 0 && i%3 === 0) {
				$('button').append('<p>Fizz Buzz</p>');
			} else if (i%5 === 0) {
				$('button').append('<p>Buzz</p>');
			} else if (i%3 === 0) {
				$('button').append('<p>Fizz</p>');
			} else {
				$('button').append('<p>' + i + '</p>');
			}
		}
	})
});