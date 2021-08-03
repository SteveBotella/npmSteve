import imagemin from 'imagemin';
//import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';

(async () => {
    await imagemin(['images/*.png'], {
        destination: 'build/images',
        plugins: [
            imageminPngquant()
        ]
    });

    console.log('Images optimized');
})();