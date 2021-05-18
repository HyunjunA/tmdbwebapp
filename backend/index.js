// This index.js is Backend Server (Using ExpressJS).

const express = require('express')
const path = require('path')

const app = express()


// in the public folder, there is HW6 HTML file
app.use(express.static(path.join(__dirname,'public')))

// Connect with Angular
// app.use(express.static(path.join(__dirname,'C:\Users\User\Documents\File\webdeveang\my-web-eight-project\dist\my-web-eight-project')))


const port = process.env.PORT || 4000;

// app.get('/', (req, res) => {res.send('Hello World!')})

const https = require('https');

app.get('/test', (req, res) => 
// app.get('/shoes', (req, res) => 
    {
        
        // console.dir(req.query.movie)
        // console.dir(req.query.apikey)


        url="https://api.themoviedb.org/3/search/multi?api_key="+req.query.apikey+"&language=en-US&query=" + req.query.movie
        console.log(url)
        // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        https.get(url, (resp) => {
            let data = '';

            // A chunk of data has been received.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                // console.log(JSON.parse(data));
                JSON.parse(data)
                res.send(JSON.parse(data));
            });
        
        })
})



// 3.2.5
app.get('/trend', (req, res) => 
// app.get('/shoes', (req, res) => 
    {
        
        // console.dir(req.query.mediatype)
        // console.dir(req.query.timewindow)
        // console.dir(req.query.apikey)


        // url="https://api.themoviedb.org/3/search/multi?api_key="+req.query.apikey+"&language=en-US&query=" + req.query.movie
        
        url = "https://api.themoviedb.org/3/trending/movie/day?api_key="+req.query.apikey
        console.log(url)
        // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        https.get(url, (resp) => {
            let data = '';

            // A chunk of data has been received.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                // console.log(JSON.parse(data));
                // JSON.parse(data)
                res.send(JSON.parse(data));
            });
        
        })
})




// 3.2.8
app.get('/tvairing', (req, res) => 
// app.get('/shoes', (req, res) => 
    {
        
        // console.dir(req.query.mediatype)
        // console.dir(req.query.timewindow)
        // console.dir(req.query.apikey)


        // url="https://api.themoviedb.org/3/search/multi?api_key="+req.query.apikey+"&language=en-US&query=" + req.query.movie
        
        url = "https://api.themoviedb.org/3/trending/tv/day?api_key="+req.query.apikey
        console.log(url)
        // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        https.get(url, (resp) => {
            let data = '';

            // A chunk of data has been received.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                // console.log(JSON.parse(data));
                // JSON.parse(data)
                res.send(JSON.parse(data));
            });
        
        })
})




// 4.1.9
app.get('/getmoviedetails', (req, res) => 
// app.get('/shoes', (req, res) => 
    {
        
        // console.dir(req.query.movieid)
        // // console.dir(req.query.timewindow)
        // console.dir(req.query.apikey)


        url = "https://api.themoviedb.org/3/movie/"+req.query.movieid+"api_key="+req.query.apikey+"&language=en-US&page=1"

        console.log(url)
        // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        https.get(url, (resp) => {
            let data = '';

            // A chunk of data has been received.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                // console.log(JSON.parse(data));
                // JSON.parse(data)
                res.send(JSON.parse(data));
            });
        
        })
})


// 4.1.10 Movie Reviews Endpoint
app.get('/getmoviereviews', (req, res) => 
// app.get('/shoes', (req, res) => 
    {
        
        // console.dir(req.query.movieid)
        // // console.dir(req.query.timewindow)
        // console.dir(req.query.apikey)
        // https://api.themoviedb.org/3/movie/<<movie_id>>/reviews?api_key=<<api_key>>&language=en-US&page=1

        url = "https://api.themoviedb.org/3/movie/"+req.query.movieid+"/reviews?"+"api_key="+req.query.apikey+"&language=en-US&page=1"

        console.log(url)
        // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        https.get(url, (resp) => {
            let data = '';

            // A chunk of data has been received.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                // console.log(JSON.parse(data));
                // JSON.parse(data)
                res.send(JSON.parse(data));
            });
        
        })
})


// 4.1.11 Movie Cast Endpoint
app.get('/getmoviecredits', (req, res) => 
// app.get('/shoes', (req, res) => 
    {
        
        // console.dir(req.query.movieid)
        // // console.dir(req.query.timewindow)
        // console.dir(req.query.apikey)


        // https://api.themoviedb.org/3/movie/<<movie_id>>/credits?api_key=<<api_key>>&language=en-US&page=1

        url = "https://api.themoviedb.org/3/movie/"+req.query.movieid+"/credits?"+"api_key="+req.query.apikey+"&language=en-US&page=1"

        console.log(url)
        // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        https.get(url, (resp) => {
            let data = '';

            // A chunk of data has been received.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                // console.log(JSON.parse(data));
                // JSON.parse(data)
                res.send(JSON.parse(data));
            });
        
        })
})




// 4.1.18
app.get('/gettvshowdetails', (req, res) => 
// app.get('/shoes', (req, res) => 
    {
        
        // console.dir(req.query.tvid)
        // // console.dir(req.query.timewindow)
        // console.dir(req.query.apikey)


        url = "https://api.themoviedb.org/3/tv/"+req.query.tvid+"api_key="+req.query.apikey+"&language=en-US&page=1"

        console.log(url)
        // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        https.get(url, (resp) => {
            let data = '';

            // A chunk of data has been received.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                // console.log(JSON.parse(data));
                // JSON.parse(data)
                res.send(JSON.parse(data));
            });
        
        })
})



// 4.1.19 TV show Reviews Endpoint
app.get('/gettvshowreviews', (req, res) => 
// app.get('/shoes', (req, res) => 
    {
        
        // console.dir(req.query.tvid)
        // // console.dir(req.query.timewindow)
        // console.dir(req.query.apikey)

        https://api.themoviedb.org/3/tv/<<tvshow_id>>/reviews?api_key=<<api_key>>&language=en-US&page=1

        url = "https://api.themoviedb.org/3/tv/"+req.query.tvid+"/reviews?"+"api_key="+req.query.apikey+"&language=en-US&page=1"

        console.log(url)
        // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        https.get(url, (resp) => {
            let data = '';

            // A chunk of data has been received.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                // console.log(JSON.parse(data));
                // JSON.parse(data)
                res.send(JSON.parse(data));
            });
        
        })
})



// 4.1.20 TV show Cast Endpoint
app.get('/gettvshowcredits', (req, res) => 
// app.get('/shoes', (req, res) => 
    {
        
        // console.dir(req.query.tvid)
        // // console.dir(req.query.timewindow)
        // console.dir(req.query.apikey)

        // https://api.themoviedb.org/3/tv/<<tvshow_id>>/credits?api_key=<<api_key>>&language=en-US&page=1
        url = "https://api.themoviedb.org/3/tv/"+req.query.tvid+"/credits?"+"api_key="+req.query.apikey+"&language=en-US&page=1"

        console.log(url)
        // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        https.get(url, (resp) => {
            let data = '';

            // A chunk of data has been received.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                // console.log(JSON.parse(data));
                // JSON.parse(data)
                res.send(JSON.parse(data));
            });
        
        })
})







// moviegenre
app.get('/moviegenres', (req, res) => 
// app.get('/shoes', (req, res) => 
    {
        
        // // console.dir(req.query.tvid)
        // // console.dir(req.query.timewindow)
        // console.dir(req.query.apikey)

        // https://api.themoviedb.org/3/tv/<<tvshow_id>>/credits?api_key=<<api_key>>&language=en-US&page=1
        url = "https://api.themoviedb.org/3/genre/movie/list?"+"api_key="+req.query.apikey+"&language=en-US"

        console.log(url)
        // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        https.get(url, (resp) => {
            let data = '';

            // A chunk of data has been received.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                // console.log(JSON.parse(data));
                // JSON.parse(data)
                res.send(JSON.parse(data));
            });
        
        })
})



// tvgenre
app.get('/tvgenres', (req, res) => 
// app.get('/shoes', (req, res) => 
    {
        
        // // console.dir(req.query.tvid)
        // // console.dir(req.query.timewindow)
        // console.dir(req.query.apikey)

        // https://api.themoviedb.org/3/tv/<<tvshow_id>>/credits?api_key=<<api_key>>&language=en-US&page=1
        url = "https://api.themoviedb.org/3/genre/tv/list?"+"api_key="+req.query.apikey+"&language=en-US"

        console.log(url)
        // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        https.get(url, (resp) => {
            let data = '';

            // A chunk of data has been received.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                // console.log(JSON.parse(data));
                // JSON.parse(data)
                res.send(JSON.parse(data));
            });
        
        })
})



// searchmovie
app.get('/searchmovie', (req, res) => 
// app.get('/shoes', (req, res) => 
    {
        
        // // console.dir(req.query.tvid)
        // console.dir(req.query.query)
        // console.dir(req.query.apikey)

        // https://api.themoviedb.org/3/search/movie?api_key=97588ddc4a26e3091152aa0c9a40de22&language=en-US&query=avengers&page=1&include_adult=false
        url = "https://api.themoviedb.org/3/search/movie?"+"api_key="+req.query.apikey+"&language=en-US"+"&query="+req.query.query+"&page=1&include_adult=false"

        console.log(url)
        // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        https.get(url, (resp) => {
            let data = '';

            // A chunk of data has been received.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                // console.log(JSON.parse(data));
                // JSON.parse(data)
                res.send(JSON.parse(data));
            });
        
        })
})





// searchtv
app.get('/searchtv', (req, res) => 
// app.get('/shoes', (req, res) => 
    {
        
        // // console.dir(req.query.tvid)
        // console.dir(req.query.query)
        // console.dir(req.query.apikey)

        // https://api.themoviedb.org/3/search/movie?api_key=97588ddc4a26e3091152aa0c9a40de22&language=en-US&query=avengers&page=1&include_adult=false
        url = "https://api.themoviedb.org/3/search/tv?"+"api_key="+req.query.apikey+"&language=en-US"+"&query="+req.query.query+"&page=1&include_adult=false"

        console.log(url)
        // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        https.get(url, (resp) => {
            let data = '';

            // A chunk of data has been received.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                // console.log(JSON.parse(data).size);
                // JSON.parse(data)
                res.send(JSON.parse(data));
            });
        
        })
})



// searchmulti
app.get('/multisearch', (req, res) => 
// app.get('/shoes', (req, res) => 
    {
        
        // // console.dir(req.query.tvid)
        // console.dir(req.query.query)
        // console.dir(req.query.apikey)

        // https://api.themoviedb.org/3/search/movie?api_key=97588ddc4a26e3091152aa0c9a40de22&language=en-US&query=avengers&page=1&include_adult=false
        url = "https://api.themoviedb.org/3/search/multi?"+"api_key="+req.query.apikey+"&language=en-US"+"&query="+req.query.query+"&page=1&include_adult=false"

        console.log(url)
        // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        https.get(url, (resp) => {
            let data = '';

            // A chunk of data has been received.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                // console.log(JSON.parse(data));
                // JSON.parse(data)
                res.send(JSON.parse(data));
            });
        
        })
})
// app.get('/test', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Server started on port ${port}!`))