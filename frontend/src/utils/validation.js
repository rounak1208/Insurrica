export const validateIndianPhone = (phone) => {
  const digits = phone.split('');
  const uniqueDigits = new Set(digits);

  // 1. Basic Regex: Starts with 6-9, followed by 9 digits
  if (!/^[6-9]\d{9}$/.test(phone)) {
    return {
      isValid: false,
      message: "Enter a valid 10-digit mobile number starting with 6-9"
    };
  }

  // 2. Reject if too few unique digits (e.g., 9999988888)
  if (uniqueDigits.size < 4) {
    return {
      isValid: false,
      message: "This number appears to be fake (too many repeating digits)"
    };
  }

  // 3. Reject more than 4 identical consecutive digits (e.g., 99999...)
  if (/(\d)\1{4}/.test(phone)) {
    return {
      isValid: false,
      message: "Too many consecutive identical digits"
    };
  }

  // 4. Advanced Pattern Checks
  const patterns = [
    /^(\d)\1(\d)\2(\d)\3(\d)\4(\d)\5$/, // Pairs: 9988776655
    /^(\d\d)\1{4}$/,                   // Alternating: 9898989898
    /^(\d{3})\1{2}\d$/,                // Triplets: 9879879879
    /^(\d)\1\1(\d)\2\2(\d)\3\3\d$/,    // Blocks of triplets: 9998887776
  ];

  if (patterns.some(regex => regex.test(phone))) {
    return {
      isValid: false,
      message: "Repetitive patterns are not allowed"
    };
  }

  // 5. Common Fake/Keyboard sequences
  const commonFake = [
    "1234567890", "0123456789", "9876543210", "0987654321",
    "7894561230", "1231231231", "1472583690", "1212121212"
  ];

  if (commonFake.some(seq => phone.includes(seq))) {
    return {
      isValid: false,
      message: "This number is recognized as a fake pattern"
    };
  }

  return { isValid: true };
};


