/*global $:true, jQuery:true */

function checkPasswordMatch() {
  var password = $('#password').val();
  var confirmPassword = $('#password2').val();

  if (password != confirmPassword)
    $('#checkPw').addClass('form-error').removeClass('form-success').html('Passwords do not match!'),
    $('#registerButton').addClass('disabled mt-4');
  else
    $('#checkPw').addClass('form-success').removeClass('form-error').html('Passwords match.'),
    $('#registerButton').removeClass('disabled');
}

$(function() {
  window.setTimeout(function () {
    $('.alert')
      .fadeTo(100, 0)
      .slideUp(500, function () {
        $(this).remove();
      });
  }, 10000); // 10 second delay before closing alert.

  $('#password2, #checkPw').keyup(checkPasswordMatch);
});