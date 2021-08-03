import imagemin from 'imagemin';
//import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';

(async () => {
    await imagemin(['ressources/images/*.png'], {
        destination: 'build/images',
        plugins: [
            imageminPngquant({ quality: [0, 0.05] })
        ]
    });

    console.log('Images optimized');
})();