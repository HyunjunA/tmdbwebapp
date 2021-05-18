// This app.js is Backend Server (Using ExpressJS).


const express = require('express')
var cors = require('cors')

const path = require('path')

// const app = express(),
//         bodyParser = require("body-parser");

const app = express();
app.use(cors());

// console.log(process.cwd())
// C:\Users\User\Documents\File\node-demo

// in the public folder, there is HW6 HTML file
// app.use(express.static(path.join(__dirname,'public')))

// C:\Users\User\Documents\File\webdeveangthr\my-web-project-eight
// app.use(express.static(process.cwd()+"/my-web-project-eight/dist/angular-nodejs-example/"));


// (On GCP)
app.use(express.static(path.join(__dirname,'dist/my-web-project-eight')))
// app.use(express.static(path.join(__dirname,'dist/test-app')))

// (On my local Machine) Call the angular web app from this ExpressJS server.
// app.use(express.static("C:/Users/User/Documents/File/webdeveangthr/my-web-project-eight/dist/my-web-project-eight/"));

// const port = process.env.PORT || 8080;
const port = 8080;

// When you run ng serve in the webdeveangthr\my-web-project-eight for each expressJS and angular
// const port = 4000;


// app.get('/', (req, res) => {res.send('Hello World!')})

// const https = require('https');
const axios = require('axios');


//case 1 '/*'
// app.use('/*',function(req,res){
//     res.sendFile(path.join(__dirname+'/dist/my-web-project-eight/index.html'))
// } )


//case 2 'https://tmdbandchoi-qunrd6r5ca-uw.a.run.app/*'
// app.use('https://tmdbandchoi-qunrd6r5ca-uw.a.run.app/*',function(req,res){
//     res.sendFile(path.join(__dirname+'/dist/my-web-project-eight/index.html'))
// } )

//case 3 Nop both
// app.use('/*',function(req,res){
//     res.sendFile(path.join(__dirname+'/dist/my-web-project-eight/index.html'))
// } )

// 'https://tmdbandchoi-qunrd6r5ca-uw.a.run.app/*'
// app.use('https://tmdbandchoi-qunrd6r5ca-uw.a.run.app/*',function(req,res){
//     res.sendFile(path.join(__dirname+'/dist/my-web-project-eight/index.html'))
// } )





app.get('/test', (req, res) =>
// app.get('/shoes', (req, res) => 
{



    // ebcb324f3d940e9599200a81e3b4c007

    // url="https://api.themoviedb.org/3/search/multi?api_key="+req.query.apikey+"&language=en-US&query=" + req.query.movie

    url = "https://api.themoviedb.org/3/search/multi?api_key=" + "ebcb324f3d940e9599200a81e3b4c007" + "&language=en-US&query=" + "joker"

    // console.log(url)
    // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {


    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });




    // https.get(url, (resp) => {
    //     let data = '';

    //     // A chunk of data has been received.
    //     resp.on('data', (chunk) => {
    //         // console.log(chunk)
    //         data += chunk;
    //     });

    //     // The whole response has been received. Print out the result.
    //     resp.on('end', () => {
    //         // console.log(JSON.parse(data));
    //         JSON.parse(data)
    //         res.send(JSON.parse(data));
    //     });

    // })
})



// 3.2.5 Trending Movies Section
app.get('/trend', (req, res) =>
// app.get('/shoes', (req, res) => 
{

    // console.dir(req.query.mediatype)
    // console.dir(req.query.timewindow)
    // console.dir(req.query.apikey)


    // url="https://api.themoviedb.org/3/search/multi?api_key="+req.query.apikey+"&language=en-US&query=" + req.query.movie

    url = "https://api.themoviedb.org/3/trending/movie/day?api_key=" + req.query.apikey
    console.log(url)
    // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {


    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });

    // https.get(url, (resp) => {
    //     let data = '';

    //     // A chunk of data has been received.
    //     resp.on('data', (chunk) => {
    //         data += chunk;
    //     });

    //     // The whole response has been received. Print out the result.
    //     resp.on('end', () => {
    //         // console.log(JSON.parse(data));
    //         // JSON.parse(data)
    //         res.send(JSON.parse(data));
    //     });

    // })
})




// 3.2.8
app.get('/tvairing', (req, res) =>
// app.get('/shoes', (req, res) => 
{

    // console.dir(req.query.mediatype)
    // console.dir(req.query.timewindow)
    // console.dir(req.query.apikey)


    // url="https://api.themoviedb.org/3/search/multi?api_key="+req.query.apikey+"&language=en-US&query=" + req.query.movie

    url = "https://api.themoviedb.org/3/trending/tv/day?api_key=" + req.query.apikey
    console.log(url)
    // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {

    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });
    // https.get(url, (resp) => {
    //     let data = '';

    //     // A chunk of data has been received.
    //     resp.on('data', (chunk) => {
    //         data += chunk;
    //     });

    //     // The whole response has been received. Print out the result.
    //     resp.on('end', () => {
    //         // console.log(JSON.parse(data));
    //         // JSON.parse(data)
    //         res.send(JSON.parse(data));
    //     });

    // })
})


// 4.1.6 Recommended Movies Endpoint
// https://api.themoviedb.org/3/movie/<<movie_id>>/recommendations?api_key=<<api_key>>&language=en-US&page=1
app.get('/getmovierecommended', (req, res) =>
// app.get('/shoes', (req, res) => 
{

    // console.dir(req.query.movieid)
    // // console.dir(req.query.timewindow)
    // console.dir(req.query.apikey)


    url = "https://api.themoviedb.org/3/movie/" + req.query.movieid + '/recommendations' +'?' +  "api_key=" + req.query.apikey + "&language=en-US&page=1"

    console.log(url)
    // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {

    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });

    
})



// 4.1.7 Similar Movies Endpoint
app.get('/getmovieresimilar', (req, res) =>
// app.get('/shoes', (req, res) => 
{

    // console.dir(req.query.movieid)
    // // console.dir(req.query.timewindow)
    // console.dir(req.query.apikey)


    url = "https://api.themoviedb.org/3/movie/" + req.query.movieid + '/similar' +'?' +  "api_key=" + req.query.apikey + "&language=en-US&page=1"

    console.log(url)
    // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {

    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });

    
})




// 4.1.8 Movies Video Endpoint
app.get('/getmovievideo', (req, res) =>
// app.get('/shoes', (req, res) => 
{

    // console.dir(req.query.movieid)
    // // console.dir(req.query.timewindow)
    // console.dir(req.query.apikey)


    url = "https://api.themoviedb.org/3/movie/" + req.query.movieid + '/videos' +'?' +  "api_key=" + req.query.apikey + "&language=en-US&page=1"

    console.log(url)
    // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {

    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });

    
})



// 4.1.9
app.get('/getmoviedetails', (req, res) =>
// app.get('/shoes', (req, res) => 
{

    // console.dir(req.query.movieid)
    // // console.dir(req.query.timewindow)
    // console.dir(req.query.apikey)


    url = "https://api.themoviedb.org/3/movie/" + req.query.movieid +'?'+  "api_key=" + req.query.apikey + "&language=en-US&page=1"

    console.log(url)
    // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {

    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });

    
})


// 4.1.10 Movie Reviews Endpoint
app.get('/getmoviereviews', (req, res) =>
// app.get('/shoes', (req, res) => 
{

    // console.dir(req.query.movieid)
    // // console.dir(req.query.timewindow)
    // console.dir(req.query.apikey)
    // https://api.themoviedb.org/3/movie/<<movie_id>>/reviews?api_key=<<api_key>>&language=en-US&page=1

    url = "https://api.themoviedb.org/3/movie/" + req.query.movieid + "/reviews?" + "api_key=" + req.query.apikey + "&language=en-US&page=1"

    console.log(url)
    // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {

    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });

    // https.get(url, (resp) => {
    //     let data = '';

    //     // A chunk of data has been received.
    //     resp.on('data', (chunk) => {
    //         data += chunk;
    //     });

    //     // The whole response has been received. Print out the result.
    //     resp.on('end', () => {
    //         // console.log(JSON.parse(data));
    //         // JSON.parse(data)
    //         res.send(JSON.parse(data));
    //     });

    // })
})


// 4.1.11 Movie Cast Endpoint
app.get('/getmoviecredits', (req, res) =>
// app.get('/shoes', (req, res) => 
{

    // console.dir(req.query.movieid)
    // // console.dir(req.query.timewindow)
    // console.dir(req.query.apikey)


    // https://api.themoviedb.org/3/movie/<<movie_id>>/credits?api_key=<<api_key>>&language=en-US&page=1

    url = "https://api.themoviedb.org/3/movie/" + req.query.movieid + "/credits?" + "api_key=" + req.query.apikey + "&language=en-US&page=1"

    console.log(url)
    // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {

    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });
    // https.get(url, (resp) => {
    //     let data = '';

    //     // A chunk of data has been received.
    //     resp.on('data', (chunk) => {
    //         data += chunk;
    //     });

    //     // The whole response has been received. Print out the result.
    //     resp.on('end', () => {
    //         // console.log(JSON.parse(data));
    //         // JSON.parse(data)
    //         res.send(JSON.parse(data));
    //     });

    // })
})













// 4.1.15 Recommended TV shows Endpoint
// https://api.themoviedb.org/3/movie/<<movie_id>>/recommendations?api_key=<<api_key>>&language=en-US&page=1
app.get('/gettvrecommended', (req, res) =>
// app.get('/shoes', (req, res) => 
{

    // console.dir(req.query.movieid)
    // // console.dir(req.query.timewindow)
    // console.dir(req.query.apikey)


    url = "https://api.themoviedb.org/3/tv/" + req.query.tvid + '/recommendations' +'?' +  "api_key=" + req.query.apikey + "&language=en-US&page=1"

    console.log(url)
    // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {

    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });

    
})



// 4.1.16 Similar TV shows Endpoint
app.get('/gettvresimilar', (req, res) =>
// app.get('/shoes', (req, res) => 
{

    // console.dir(req.query.movieid)
    // // console.dir(req.query.timewindow)
    // console.dir(req.query.apikey)


    url = "https://api.themoviedb.org/3/tv/" + req.query.tvid + '/similar' +'?' +  "api_key=" + req.query.apikey + "&language=en-US&page=1"

    console.log(url)
    // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {

    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });

    
})




// 4.1.17 TV show Video Endpoint
app.get('/gettvvideo', (req, res) =>
// app.get('/shoes', (req, res) => 
{

    // console.dir(req.query.movieid)
    // // console.dir(req.query.timewindow)
    // console.dir(req.query.apikey)


    url = "https://api.themoviedb.org/3/tv/" + req.query.tvid + '/videos' +'?' +  "api_key=" + req.query.apikey + "&language=en-US&page=1"

    console.log(url)
    // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {

    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });

    
})

// 4.1.18
app.get('/gettvshowdetails', (req, res) =>
// app.get('/shoes', (req, res) => 
{

    // console.dir(req.query.tvid)
    // // console.dir(req.query.timewindow)
    // console.dir(req.query.apikey)


    url = "https://api.themoviedb.org/3/tv/" + req.query.tvid+'?' + "api_key=" + req.query.apikey + "&language=en-US&page=1"

    console.log(url)
    // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {

    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });

    // https.get(url, (resp) => {
    //     let data = '';

    //     // A chunk of data has been received.
    //     resp.on('data', (chunk) => {
    //         data += chunk;
    //     });

    //     // The whole response has been received. Print out the result.
    //     resp.on('end', () => {
    //         // console.log(JSON.parse(data));
    //         // JSON.parse(data)
    //         res.send(JSON.parse(data));
    //     });

    // })
})



// 4.1.19 TV show Reviews Endpoint
app.get('/gettvshowreviews', (req, res) =>
// app.get('/shoes', (req, res) => 
{

    // console.dir(req.query.tvid)
    // // console.dir(req.query.timewindow)
    // console.dir(req.query.apikey)

    https://api.themoviedb.org/3/tv/<<tvshow_id>>/reviews?api_key=<<api_key>>&language=en-US&page=1

    url = "https://api.themoviedb.org/3/tv/" + req.query.tvid + "/reviews?" + "api_key=" + req.query.apikey + "&language=en-US&page=1"

    console.log(url)
    // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {

    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });
    // https.get(url, (resp) => {
    //     let data = '';

    //     // A chunk of data has been received.
    //     resp.on('data', (chunk) => {
    //         data += chunk;
    //     });

    //     // The whole response has been received. Print out the result.
    //     resp.on('end', () => {
    //         // console.log(JSON.parse(data));
    //         // JSON.parse(data)
    //         res.send(JSON.parse(data));
    //     });

    // })
})



// 4.1.20 TV show Cast Endpoint
app.get('/gettvshowcredits', (req, res) =>
// app.get('/shoes', (req, res) => 
{

    // console.dir(req.query.tvid)
    // // console.dir(req.query.timewindow)
    // console.dir(req.query.apikey)

    // https://api.themoviedb.org/3/tv/<<tvshow_id>>/credits?api_key=<<api_key>>&language=en-US&page=1
    url = "https://api.themoviedb.org/3/tv/" + req.query.tvid + "/credits?" + "api_key=" + req.query.apikey + "&language=en-US&page=1"

    console.log(url)
    // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {


    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });

    // https.get(url, (resp) => {
    //     let data = '';

    //     // A chunk of data has been received.
    //     resp.on('data', (chunk) => {
    //         data += chunk;
    //     });

    //     // The whole response has been received. Print out the result.
    //     resp.on('end', () => {
    //         // console.log(JSON.parse(data));
    //         // JSON.parse(data)
    //         res.send(JSON.parse(data));
    //     });

    // })
})







// moviegenre
app.get('/moviegenres', (req, res) =>
// app.get('/shoes', (req, res) => 
{

    // // console.dir(req.query.tvid)
    // // console.dir(req.query.timewindow)
    // console.dir(req.query.apikey)

    // https://api.themoviedb.org/3/tv/<<tvshow_id>>/credits?api_key=<<api_key>>&language=en-US&page=1
    url = "https://api.themoviedb.org/3/genre/movie/list?" + "api_key=" + req.query.apikey + "&language=en-US"

    console.log(url)
    // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {



    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });

    // https.get(url, (resp) => {
    //     let data = '';

    //     // A chunk of data has been received.
    //     resp.on('data', (chunk) => {
    //         data += chunk;
    //     });

    //     // The whole response has been received. Print out the result.
    //     resp.on('end', () => {
    //         // console.log(JSON.parse(data));
    //         // JSON.parse(data)
    //         res.send(JSON.parse(data));
    //     });

    // })
})



// tvgenre
app.get('/tvgenres', (req, res) =>
// app.get('/shoes', (req, res) => 
{

    // // console.dir(req.query.tvid)
    // // console.dir(req.query.timewindow)
    // console.dir(req.query.apikey)

    // https://api.themoviedb.org/3/tv/<<tvshow_id>>/credits?api_key=<<api_key>>&language=en-US&page=1
    url = "https://api.themoviedb.org/3/genre/tv/list?" + "api_key=" + req.query.apikey + "&language=en-US"

    console.log(url)
    // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {

    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });


    // https.get(url, (resp) => {
    //     let data = '';

    //     // A chunk of data has been received.
    //     resp.on('data', (chunk) => {
    //         data += chunk;
    //     });

    //     // The whole response has been received. Print out the result.
    //     resp.on('end', () => {
    //         // console.log(JSON.parse(data));
    //         // JSON.parse(data)
    //         res.send(JSON.parse(data));
    //     });

    // })
})



// searchmovie
app.get('/searchmovie', (req, res) =>
// app.get('/shoes', (req, res) => 
{

    // // console.dir(req.query.tvid)
    // console.dir(req.query.query)
    // console.dir(req.query.apikey)

    // https://api.themoviedb.org/3/search/movie?api_key=97588ddc4a26e3091152aa0c9a40de22&language=en-US&query=avengers&page=1&include_adult=false
    url = "https://api.themoviedb.org/3/search/movie?" + "api_key=" + req.query.apikey + "&language=en-US" + "&query=" + req.query.query + "&page=1&include_adult=false"

    console.log(url)
    // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {

    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });


    // https.get(url, (resp) => {
    //     let data = '';

    //     // A chunk of data has been received.
    //     resp.on('data', (chunk) => {
    //         data += chunk;
    //     });

    //     // The whole response has been received. Print out the result.
    //     resp.on('end', () => {
    //         // console.log(JSON.parse(data));
    //         // JSON.parse(data)
    //         res.send(JSON.parse(data));
    //     });

    // })
})





// searchtv
app.get('/searchtv', (req, res) =>
// app.get('/shoes', (req, res) => 
{

    // // console.dir(req.query.tvid)
    // console.dir(req.query.query)
    // console.dir(req.query.apikey)

    // https://api.themoviedb.org/3/search/movie?api_key=97588ddc4a26e3091152aa0c9a40de22&language=en-US&query=avengers&page=1&include_adult=false
    url = "https://api.themoviedb.org/3/search/tv?" + "api_key=" + req.query.apikey + "&language=en-US" + "&query=" + req.query.query + "&page=1&include_adult=false"

    console.log(url)
    // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {


    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });

    // https.get(url, (resp) => {
    //     let data = '';

    //     // A chunk of data has been received.
    //     resp.on('data', (chunk) => {
    //         data += chunk;
    //     });

    //     // The whole response has been received. Print out the result.
    //     resp.on('end', () => {
    //         // console.log(JSON.parse(data).size);
    //         // JSON.parse(data)
    //         res.send(JSON.parse(data));
    //     });

    // })
})



// searchmulti
app.get('/multisearch', (req, res) =>
// app.get('/shoes', (req, res) => 
{

    // // console.dir(req.query.tvid)
    // console.dir(req.query.query)
    // console.dir(req.query.apikey)
    // const tvfilter = d => d.media_type =="tv" ;
    // const moviefilter = d => d.media_type =="movie";
    const movieandtv = d => d.media_type == "movie" || d.media_type == "tv";

    // https://api.themoviedb.org/3/search/movie?api_key=97588ddc4a26e3091152aa0c9a40de22&language=en-US&query=avengers&page=1&include_adult=false
    url = "https://api.themoviedb.org/3/search/multi?" + "api_key=" + req.query.apikey + "&language=en-US" + "&query=" + req.query.query + "&page=1&include_adult=false"

    console.log(url)
    // https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {


    axios.get(url).then(resp => {

        // console.log(resp.data);

        tempdata = resp.data;

        // console.log(tempdata)
        // tempdata.results=[]



        // console.log(tempdata)
        // processedtemptvdata=tempdata.results.filter(tvfilter);
        // processedtempmoviedata=tempdata.results.filter(moviefilter);
        processedtempmovietvdata = tempdata.results.filter(movieandtv);

        // processedtempdata

        // console.log("Origin")
        // console.log(processedtemptvdata)

        // console.log("slice 7")
        // console.log(processedtemptvdata.slice(0, 7))


        // processedtempmoviedataseven=processedtempmoviedata.slice(0, 7)
        // processedtemptvdataseven=processedtemptvdata.slice(0, 7)
        processedtempmovietvdataseven = processedtempmovietvdata.slice(0, 7)

        // console.log("Movie!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        // console.log(processedtempmoviedataseven)

        // console.log("TV!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        // console.log(processedtemptvdataseven)


        // var combinedsevenmovietv = {}
        // combinedsevenmovietv=Object.assign(combinedsevenmovietv, processedtemptvdataseven);
        // combinedsevenmovietv=Object.assign(combinedsevenmovietv, processedtempmoviedataseven);

        // var combinedsevenmovietv = processedtemptvdataseven.concat(processedtempmoviedataseven);

        // var combinedsevenmovietv = {...processedtemptvdataseven, ...processedtempmoviedataseven }


        // console.log("combined!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        // console.log(combinedsevenmovietv)

        delete tempdata.results;

        // tempdata['results'] = combinedsevenmovietv
        tempdata['results'] = processedtempmovietvdataseven
        // tempdata = JSON.stringify(tempdata);

        // console.log("After again!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        // console.log(tempdata['results'])


        // console.log("Combined")
        // console.log(processedtempmoviedataseven)

        // data = processedtempmoviedataseven

        // console.log("Ha!!!!!!!!!")
        // console.log(tempdata)
        res.send(tempdata);


        // res.send(resp.data);
    });




    // https.get(url, (resp) => {
    //     let data = '';

    //     // A chunk of data has been received.
    //     resp.on('data', (chunk) => {
    //         // console.log(chunk)
    //         data += chunk;
    //     });

    //     // The whole response has been received. Print out the result.
    //     resp.on('end', () => {
    //         // console.log(JSON.parse(data));
    //         // JSON.parse(data)

    //         tempdata=JSON.parse(data)


    //         processedtempmovietvdata=tempdata.results.filter(movieandtv);


    //         processedtempmovietvdataseven = processedtempmovietvdata.slice(0, 7)



    //         delete tempdata.results;

    //         // tempdata['results'] = combinedsevenmovietv
    //         tempdata['results'] = processedtempmovietvdataseven

    //         console.log(tempdata)
    //         res.send(tempdata);
    //         // res.send(JSON.parse(data));
    //         // res.send(data);
    //     });

    // })
})

// 4.1.4 Currently playing Movies Endpoint
app.get('/nowplaying', (req, res) =>
// app.get('/shoes', (req, res) => 
{

    // https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1

    // https://api.themoviedb.org/3/search/movie?api_key=97588ddc4a26e3091152aa0c9a40de22&language=en-US&query=avengers&page=1&include_adult=false
    // https://api.themoviedb.org/3/search/movie?api_key=97588ddc4a26e3091152aa0c9a40de22&language=en-US&id=399566&page=1&include_adult=false

    // 'https://api.themoviedb.org/3/movie/'+ str(film['id']) +'?api_key='+ api_key+'&language=en-US'
    // https://api.themoviedb.org/3/movie/399566?api_key=97588ddc4a26e3091152aa0c9a40de22&language=en-US
    url = "https://api.themoviedb.org/3/movie/now_playing?" + "api_key=" + req.query.apikey + "&language=en-US&page=1"

    // console.log(url)


    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });

    
})
// 3.2.3 Popular Movies Section
app.get('/popularmovies', (req, res) =>
// app.get('/shoes', (req, res) => 
{

    // https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
    url = "https://api.themoviedb.org/3/movie/popular?" + "api_key=" + req.query.apikey + "&language=en-US&page=1"

    console.log(url)


    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });

    
})
// 3.2.4 Top Rated Movies Section
app.get('/topratedmovies', (req, res) =>
// app.get('/shoes', (req, res) => 
{

    // https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1
    url = "https://api.themoviedb.org/3/movie/top_rated?" + "api_key=" + req.query.apikey + "&language=en-US&page=1"

    console.log(url)


    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });

    
})

// 3.2.6 Popular TV Shows Section
app.get('/populartvshows', (req, res) =>
// app.get('/shoes', (req, res) => 
{

    // https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1
    url = "https://api.themoviedb.org/3/tv/popular?" + "api_key=" + req.query.apikey + "&language=en-US&page=1"

    console.log(url)


    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });

    
})
// 3.2.7 Top Rated TV Shows Section
app.get('/topratedtvshows', (req, res) =>
// app.get('/shoes', (req, res) => 
{

    // https://api.themoviedb.org/3/tv/top_rated?api_key=<<api_key>>&language=en-US&page=1
    url = "https://api.themoviedb.org/3/tv/top_rated?" + "api_key=" + req.query.apikey + "&language=en-US&page=1"

    console.log(url)


    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });

    
})
// 3.2.8 Trending TV shows Section
app.get('/trendingtvshows', (req, res) =>
// app.get('/shoes', (req, res) => 
{

    // https://api.themoviedb.org/3/tv/top_rated?api_key=<<api_key>>&language=en-US&page=1
    // https://api.themoviedb.org/3/trending/tv/day?api_key=<<api_key>>
    url = "https://api.themoviedb.org/3/trending/tv/day?" + "api_key=" + req.query.apikey

    console.log(url)


    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });

    
})

app.get('/moviesearchwithid', (req, res) =>
// app.get('/shoes', (req, res) => 
{

    // https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1

    // https://api.themoviedb.org/3/search/movie?api_key=97588ddc4a26e3091152aa0c9a40de22&language=en-US&query=avengers&page=1&include_adult=false
    // https://api.themoviedb.org/3/search/movie?api_key=97588ddc4a26e3091152aa0c9a40de22&language=en-US&id=399566&page=1&include_adult=false

    // 'https://api.themoviedb.org/3/movie/'+ str(film['id']) +'?api_key='+ api_key+'&language=en-US'
    // https://api.themoviedb.org/3/movie/399566?api_key=97588ddc4a26e3091152aa0c9a40de22&language=en-US
    url = "https://api.themoviedb.org/3/movie/"+req.query.movieid +'?'+ "api_key=" + req.query.apikey + "&append_to_response=videos"

    console.log(url)


    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });

    
})




app.get('/tvsearchwithid', (req, res) =>
// app.get('/shoes', (req, res) => 
{

    // https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1

    // https://api.themoviedb.org/3/search/movie?api_key=97588ddc4a26e3091152aa0c9a40de22&language=en-US&query=avengers&page=1&include_adult=false
    // https://api.themoviedb.org/3/search/movie?api_key=97588ddc4a26e3091152aa0c9a40de22&language=en-US&id=399566&page=1&include_adult=false

    // 'https://api.themoviedb.org/3/movie/'+ str(film['id']) +'?api_key='+ api_key+'&language=en-US'
    // https://api.themoviedb.org/3/movie/399566?api_key=97588ddc4a26e3091152aa0c9a40de22&language=en-US
    url = "https://api.themoviedb.org/3/tv/"+req.query.tvid +'?'+ "api_key=" + req.query.apikey + "&append_to_response=videos"

    console.log(url)


    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });

    
})












app.get('/personsearch', (req, res) =>
// app.get('/shoes', (req, res) => 
{



    // https://api.themoviedb.org/3/person/550843?api_key=97588ddc4a26e3091152aa0c9a40de22&language=en-US&page=1

    url = "https://api.themoviedb.org/3/person/"+req.query.personid +'?'+ "api_key=" + req.query.apikey + "&language=en-US&page=1"

    console.log(url)


    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });

    
})



app.get('/externalinfo', (req, res) =>
// app.get('/shoes', (req, res) => 
{



    // https://api.themoviedb.org/3/person/<<person_id>>/external_ids?api_key=<<api_key>>&language=en-US&page=1
    url = "https://api.themoviedb.org/3/person/"+req.query.personid +'/external_ids'+'?'+ "api_key=" + req.query.apikey + "&language=en-US&page=1"

    console.log(url)


    axios.get(url).then(resp => {

        // console.log(resp.data);
        res.send(resp.data);
    });

    
})

// app.get('/test', (req, res) => res.send('Hello World!'))



app.listen(port, () => console.log(`Server started on port ${port}!`))

