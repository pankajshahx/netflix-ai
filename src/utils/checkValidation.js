const checkValidation = (
  email,
  password,
  confirmPassword,
  enableSignInForm
) => {
  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Password validation regex (at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number)
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  // Check if email matches regex
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address.";
  }

  // Check if password matches regex
  if (!passwordRegex.test(password)) {
    return "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.";
  }

  // Check if passwords match
  if (!enableSignInForm && password !== confirmPassword) {
    return "Passwords do not match.";
  }

  // If all validations pass
  return null;
};

export default checkValidation;
