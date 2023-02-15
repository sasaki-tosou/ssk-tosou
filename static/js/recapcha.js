  function onSubmit(token) {
    var form = document.getElementById('contact-form');
    if(form.reportValidity()) {
      form.submit();
    }
  }
