function validateForm() {
	var valid = true;
	$("#email").removeClass("error-field");
	$("#password").removeClass("error-field");

	$(".validation-message").html("");
	$(".form-control").css('border', '#e0dfdf 1px solid');

	var userEmail = $("#email").val();
    var userPassword = $("#password").val();

	
	if (userEmail.trim() == "") {
		$("#email").css('border', '#e66262 1px solid');
		$("#email").addClass("error-field");

		valid = false;
	}

	
	if (userPassword == "") {
		$("#password").css('border', '#e66262 1px solid');
		$("#password").addClass("error-field");

		valid = false;
	}

	if (valid == false) {
		$('.error-field').first().focus();
		valid = false;
	}
	return valid;
}
