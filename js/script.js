/*--------------------------------------------------------------------------------------
  Mail List form button AJAX processing for REST api

  $('#maillist-button').submit(function (e) {
  var url = "https://api-beheard.lawrencemcdaniel.com/v1/maillist";
  var data = '{ "emailAddress" : "' + $("#maillist-emailaddress").val() + '" }';

  $.ajax({
      type: 'POST',
      url: url,
      data: data,
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success: function (msg) {
        console.log(msg);
      },
      error: function (e) {
          console.log(e.responseText);
          console.log(e);
      }
  });

});
--------------------------------------------------------------------------------------*/
