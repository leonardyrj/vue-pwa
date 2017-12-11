self.addEventListener('install',function(e){
    console.log('[ServiceWorker] Installer');
});

self.addEventListener('active',function(e){
    console.log('[ServiceWorker] Active');
});

self.addEventListener('fetch',function(e){
    console.log('[ServiceWorker] Fetch');
});

