const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
    await imagemin(['images/*.png'], {
        destination: 'build/images',
        plugins: [
            imageminPngquant()
        ]
    });

    console.log('Images optimized');
})();