function shadowizard(options) {
    let images = document.querySelectorAll('.shadowizard');
    if (options.shadowType === 'hard') {
        options.shadowType = '0';
    } else {
        options.shadowType = '15px';
    }

    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${options.shadowType} 1px rgba(0, 0, 0, 0)`;

        if (options.padding) {
            image.style.padding = '1em';
        }
    });
}

module.exports.shadowizard = shadowizard;
