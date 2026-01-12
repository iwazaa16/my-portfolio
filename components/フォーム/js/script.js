// ===== elements =====
const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

// inputs
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// errors
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

// ===== validation =====
function isValidName(name) {
  return name.trim() !== '';
}

function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function isValidMessage(message) {
  return message.trim() !== '';
}

// ===== ui =====
function showError(el) {
  el.style.display = 'block';
}

function hideError(el) {
  el.style.display = 'none';
}

function validateField(isValid, errorEl) {
  if (!isValid) {
    showError(errorEl);
    return false;
  }
  hideError(errorEl);
  return true;
}

// ===== submit =====
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const isNameOK = validateField(
    isValidName(nameInput.value),
    nameError
  );

  const isEmailOK = validateField(
    isValidEmail(emailInput.value.trim()),
    emailError
  );

  const isMessageOK = validateField(
    isValidMessage(messageInput.value.trim()),
    messageError
  );

  if (isNameOK && isEmailOK && isMessageOK) {
    successMessage.style.display = 'block';
    form.reset();
  }
});
