if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/camera/sw.js', { scope: '/camera/' })})}