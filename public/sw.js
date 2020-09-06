let cacheData = 'website'
const assets=[
    [
        "/static/js/bundle.js",
        "/static/js/0.chunk.js",
        "/static/js/main.chunk.js",
        "/main.7a2c4778ec00e927b1a4.hot-update.js",
        "index.html",
        "/favicon.icon",
        "/"
        
    ]
]
self.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheData).then(cache=>{
            cache.addAll(assets)
        }).catch((err)=>{
            console.log("err",err);
        })
    )
})



  self.addEventListener('fetch', event => {
    
        event.respondWith(
            caches.match(event.request)
                .then(cacheresponse => {
                    
                        console.log(cacheresponse)
                        return cacheresponse || fetch(event.request)
                     
            })
        )
    }
)