/**
 * Validates email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if email is valid
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates contact form data
 * @param {Object} formData - Form data object with name, email, message
 * @returns {Array<string>} - Array of error messages (empty if valid)
 */
export const validateContactForm = (formData) => {
  const errors = [];

  if (!formData.name?.trim()) {
    errors.push('Name is required');
  }

  if (!formData.email?.trim()) {
    errors.push('Email is required');
  } else if (!validateEmail(formData.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!formData.message?.trim()) {
    errors.push('Message is required');
  }

  return errors;
};

/**
 * Copies text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} - True if successful
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy:', err);
    return false;
  }
};
