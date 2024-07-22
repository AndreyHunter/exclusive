export const validateName = (value) => {
    if (!value) {
        return 'Name is required';
    } else if (value.length < 2) {
        return 'Name should be at least 2 characters';
    } else if (value.match(/[0-9]/g)) {
        return 'Name should start with a latter';
    }

    return true;
};

export const validateContact = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{9,15}$/;

    if (!value) {
        return 'Enter email or phone';
    }

    if (!value.match(emailPattern) && !value.match(phonePattern)) {
        return 'Incorrect email or phone';
    }

    return true;
};

export const validatePassword = (value) => {
    if (!value) {
        return 'Password is required';
    }

    if (value.length < 3) {
        return 'Password should be at least 3 characters';
    } else if (!value.match(/\d/g)) {
        return 'Password should include at least 1 number';
    } else if (!value.match(/[A-Z]/g)) {
        return 'Password should include at least 1 capital letter';
    }

    return true;
};
