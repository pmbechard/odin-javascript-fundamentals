// let method1 = /[a-z0-9]{5,12}/i;
// let method2 = new RegExp(/[a-z0-9]{5,12}/, 'i');

const inputs = document.querySelectorAll('input');

const patterns = {
    username: /^[a-z\d]{5,12}$/i,
    email: /^([a-z\d\.\-\_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
    password: /^[\w@-]{8,20}$/,
    // telephone: /^\(*\d{3}\)*[\s\-]*\d{3}[\s\-]*\d{4}$/g,
    telephone: /^[0-9]{10}$/,
    slug: /^[a-z\d-]{8,20}$/,
};

function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
};

inputs.forEach((input) => {
    input.addEventListener('keyup', (event) => {
        validate(event.target, patterns[event.target.attributes.name.value])
    })
});