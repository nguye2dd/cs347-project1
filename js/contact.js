const name = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const radioButtons = document.getElementsByName('contact-method');
const service = document.getElementById('service');
const details = document.getElementById('details');
const send = document.getElementById('send');

send.addEventListener('click', () => {

  if (!missingRequiredField(name.value, phone.value, email.value, getSelectedRadioButton(radioButtons)))  {
    let message = 'You have enetered the following information. Please confirm it is all correct and press OK to submit.\n\n';
    message += ('Name: ' + name.value + '\n'); // display name
    message += ('Phone Number: ' + phone.value + '\n'); // display phone number
    message += ('E-mail: ' + email.value + '\n'); // display email
    message += ('Preferred Contact: ' + getSelectedRadioButton(radioButtons) +'\n'); // display preferred method of contact 
    message += ('Desired Service: ' + service.value + '\n'); //  display desired service
    message += ('Additional Details: \n' + details.value + '\n\n'); // display additional details
    message += ('Thank you for choosing Sophisticuts for your beauty needs. We will be in touch ASAP!');

    confirm(message);
  }

});

function missingRequiredField(name, phone, email, method) {
  let missing = false;

  if (name.trim() === '') {
    missing = true;
    confirm("Please provide a name.");
  } 
  if (phone.trim() === '' && email.trim() === '') {
    missing = true;
    confirm('Please provide a phone number or email address.');
  }
  if (method.trim() === '') {
    missing = true;
    confirm('Please select a preferred method of contact.');
  }

  return missing;
}

function getSelectedRadioButton(radioButtons) {
  let retVal = '';

  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      retVal = radioButtons[i].value;
    }
  }
  return retVal;
}

