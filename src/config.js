export default {

    // standard video setings
    video: {
        width: 1920,
        height: 1080,
    },

    // standard photo setings
    photo: {
        width: 1920,
        height: 1080,
    },

    // PWA setup
    PWA: {

        // webmanifest
        manifest: {
            name: "Camera",
            short_name: "Camera",
            theme_color: "#ffffff",
            background_color: "#ffffff",
            orientation: "landscape",
            display: "standalone",
            icons: [
                {
                    src: "/android-chrome-192x192.png",
                    sizes: "192x192",
                    type: "image/png"
                },
                {
                    src: "/android-chrome-512x512.png",
                    sizes: "512x512",
                    type: "image/png"
                }
            ],
        },
    },
};