import { Component, ViewEncapsulation, OnInit, ViewChild , Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, forkJoin } from 'rxjs';
// import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
// var images;
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

import { ResizedEvent } from 'angular-resize-event';
import { HostListener } from "@angular/core";
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';


import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

var nowplayingmedia: any;
var popularmoviesmedia: any;
var topratedmoviesmedia: any;
var trendingmovies: any;
var populartvshowsmedia: any;
var topratedtvshowsmedia: any;
var trendingtvshowsmedia: any;

var tempdata: any;

@Component({
  selector: 'app-compfirst',
  templateUrl: './compfirst.component.html',
  styleUrls: ['./compfirst.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompfirstComponent implements OnInit {
  

 






  
  games: any;
  gamesFormatted!: Array<any>;

  mobile: boolean = false;


  arraytempmovieinfogloformobile: any[] = [];
  conwatmoviesmediainfosetformobie: any[] = [];

  // public images:string[];
  constructor(private httpClient: HttpClient, private router: Router, @Inject(DOCUMENT) private _document: Document,public breakpointObserver: BreakpointObserver ) { 
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  nowplayingmediainfo: any;
  nowplayingmediainfoformobile: any;

  popularmoviesmediainfo: any;
  arraytemppopularmovieinfoglo: any
  popularmoviesmediainfosetformobile:any
  arraytemppopularmovieinfogloformobile: any
  popularmoviesmediainfoset: any;





  topratedmoviesmediainfo: any;
  arraytemptopratedmoviesinfoglo: any
  topratedmoviesmediainfosetformobile:any
  arraytemptopratedmoviesinfogloformobile:any
  topratedmoviesmediainfoset: any;




  trendingmoviesinfo: any;
  arraytemptrendingmoviesinfoglo: any
  trendingmoviesmediainfoset: any;
  trendingmoviesmediainfosetformobile: any;
  arraytemptrendingmoviesinfogloformobile : any;

  populartvshowsmediainfo: any;
  arraypopulartvshowsinfoglo: any
  populartvshowsmediainfoset: any;
  populartvshowsmediainfosetformobile:any
  arraypopulartvshowsinfogloformobile: any;


  topratedtvshowsmediainfo: any;
  arraytopratedtvshowsinfoglo: any
  topratedtvshowsmediainfoset: any;
  topratedtvshowsmediainfosetformobile:any
  arraytopratedtvshowsinfogloformobile:any


  trendingtvshowsmediainfo: any;
  arraytrendingtvshowsinfoglo: any
  trendingtvshowsmediainfoset: any;
  arraytrendingtvshowsinfogloformobile:any
  trendingtvshowsmediainfosetformobile:any
















  movielist: any[] = [];
  movieHttplists: any[] = [];
  addObjdatalist: any[] = [];

  arraytempmovieinfoglo: any[] = [];
  conwatmoviesmediainfoset: any[] = [];


  tvlist: any[] = [];
  tvHttplists: any[] = [];
  tvObjdatalist: any[] = [];

  movietvtoglist: any[][] = [];

  // mobile: boolean = false;

  Httplists: any[] = [];
  // nowplayingmediaimagestitles: any;

  curwinsizedivided:any;

  // tempimages: any[];
  ngOnInit() {



    // this.mobile = false;


    // // // // console.log("adaing !!!!!!!!")
    
   


    // // // // console.log("window.screen.width")
    // // // // console.log(window.screen.width)

    this.curwinsizedivided = Math.round(window.screen.width/6);

    // var reimcrita=1024;
    var reimcrita= 700;
    
    if (window.screen.width < reimcrita) { // 768px portrait
      // this.mobile = true;
      // // // console.log("This is mobile!.")


      

    }




    // nowplaying movies

    this.httpClient.get("/nowplaying?&apikey=ebcb324f3d940e9599200a81e3b4c007", { responseType: 'json' })
      .subscribe(
        data => {
          nowplayingmedia = data
          // // // // // // // // consolelog(nowplayingmedia['results'])
          // const newdata=new Array(nowplayingmedia['results'])

          var arraytempinfo = [];
          // var arraytemptitle=[];
          for (let i = 0; i < 5; i++) {
            // // // // // // // // consolelog (nowplayingmedia['results'][i]);
            // arraytempinfo.push([`https://image.tmdb.org/t/p/w500/${nowplayingmedia['results'][i]['backdrop_path']}`, nowplayingmedia['results'][i]['title'], `/watch/movie/${nowplayingmedia['results'][i]['id']}`])
            
            if(nowplayingmedia['results'][i]['backdrop_path']!=null)
            {
              arraytempinfo.push([`https://image.tmdb.org/t/p/original/${nowplayingmedia['results'][i]['backdrop_path']}`, nowplayingmedia['results'][i]['title'], `/watch/movie/${nowplayingmedia['results'][i]['id']}`])
            }
          }
          this.nowplayingmediainfo = arraytempinfo;
          this.nowplayingmediainfoformobile = arraytempinfo;

        }
      );


    // Continue Watching

    this.showingallconwatlist()



    // for (let i = 0; i < this.movielist.length; i++) {
    //   var tempid = this.movielist[i]


    //   // // // // // // // // // // consolelog("movieid")
    //   // // // // // // // // // // consolelog(tempid)
    //   // this.movieHttplists.push(this.httpClient.get(`/getmoviedetails?&movieid=${tempid}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' }))
    //   this.Httplists.push(this.httpClient.get(`/getmoviedetails?&movieid=${tempid}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' }))


    // }

    // var lenformoviehttplist = this.Httplists.length


    // // // // consolelog("lenformoviehttplist")
    // // // // consolelog(lenformoviehttplist)



    // for (let i = 0; i < this.tvlist.length; i++) {
    //   var tempid = this.tvlist[i]


    //   // // // // // // // // // // consolelog("movieid")
    //   // // // // // // // // // // consolelog(tempid)
    //   // this.tvHttplists.push(this.httpClient.get(`/gettvshowdetails?&tvid=${tempid}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' }))
    //   this.Httplists.push(this.httpClient.get(`/gettvshowdetails?&tvid=${tempid}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' }))



    // }


    // this.movietvtoglist

    var tempidandtype = this.movietvtoglist
    for (let i = 0; i < tempidandtype.length; i++) {
      
      // console.log(tempidandtype[i])

      if (tempidandtype[i][1]=="movie")
      {
        this.Httplists.push(this.httpClient.get(`/getmoviedetails?&movieid=${tempidandtype[i][0]}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' }))

      }
      if (tempidandtype[i][1]=="tv")
      {
        this.Httplists.push(this.httpClient.get(`/gettvshowdetails?&tvid=${tempidandtype[i][0]}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' }))

      }

      // // // // // // // // // // consolelog("movieid")
      // // // // // // // // // // consolelog(tempid)
      // this.tvHttplists.push(this.httpClient.get(`/gettvshowdetails?&tvid=${tempid}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' }))
      // this.Httplists.push(this.httpClient.get(`/gettvshowdetails?&tvid=${tempid}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' }))



    }



    // // // // console.log(this.Httplists)
    // // // // console.log(this.addObjdatalist)
    // // // // console.log("Bye!!!!!!!!")

    forkJoin(this.Httplists).subscribe(results => {


      // this.addObjdatalist = results
      // // // // console.log(this.addObjdatalist) 
      for (let i = 0; i < results.length; i++) {
        var tempdata = results[i]
        this.addObjdatalist.push(tempdata)
        // // console.log("tempdata")
        // // console.log(tempdata)


      }


      // // // // console.log(this.addObjdatalist)
      // // // // console.log("Bye!!!!!!!!")

      this.arraytempmovieinfoglo = [];

      // lenformoviehttplist

      // for (let i = 0; i < lenformoviehttplist; i++) {
      //   // // // // // // consolelog("this.addObjdatalist[i]['poster_path']")

      //   // // // // // consolelog(this.addObjdatalist[i])

      //   this.arraytempmovieinfoglo.push([`https://image.tmdb.org/t/p/w500/${this.addObjdatalist[i]['poster_path']}`, this.addObjdatalist[i]['title'], `/watch/movie/${this.addObjdatalist[i]['id']}`])


      // }
      // for (let i = lenformoviehttplist; i < this.addObjdatalist.length; i++) {
      //   // // // // // // consolelog("this.addObjdatalist[i]['poster_path']")

      //   // // // // // consolelog(this.addObjdatalist[i])

      //   this.arraytempmovieinfoglo.push([`https://image.tmdb.org/t/p/w500/${this.addObjdatalist[i]['poster_path']}`, this.addObjdatalist[i]['name'], `/watch/tv/${this.addObjdatalist[i]['id']}`])
      //   this.arraytempmovieinfogloformobile.push([`https://image.tmdb.org/t/p/w500/${this.addObjdatalist[i]['poster_path']}`, this.addObjdatalist[i]['name'], `/watch/tv/${this.addObjdatalist[i]['id']}`])


      // }



      for (let i = 0; i < this.addObjdatalist.length; i++) {


        // movie
        if(this.addObjdatalist[i]['name']==null) 
        {
          if(this.addObjdatalist[i]['poster_path']!=null)
          {
          this.arraytempmovieinfoglo.push([`https://image.tmdb.org/t/p/w500/${this.addObjdatalist[i]['poster_path']}`, this.addObjdatalist[i]['title'], `/watch/movie/${this.addObjdatalist[i]['id']}`])
          this.arraytempmovieinfogloformobile.push([`https://image.tmdb.org/t/p/w500/${this.addObjdatalist[i]['poster_path']}`, this.addObjdatalist[i]['title'], `/watch/movie/${this.addObjdatalist[i]['id']}`])
          }
        }

        // tv
        if(this.addObjdatalist[i]['title']==null)
        {
          if(this.addObjdatalist[i]['poster_path']!=null)
          {
          this.arraytempmovieinfoglo.push([`https://image.tmdb.org/t/p/w500/${this.addObjdatalist[i]['poster_path']}`, this.addObjdatalist[i]['name'], `/watch/tv/${this.addObjdatalist[i]['id']}`])
          this.arraytempmovieinfogloformobile.push([`https://image.tmdb.org/t/p/w500/${this.addObjdatalist[i]['poster_path']}`, this.addObjdatalist[i]['name'], `/watch/tv/${this.addObjdatalist[i]['id']}`])
          }
        }
 

      }




      // this.gamesFormatted = []; // this.popularmoviesmediainfo
      this.conwatmoviesmediainfoset = [];
      var j = -1;


      // if (// this.mobile == false) {
        if (true) {
        for (var i = 0; i < this.arraytempmovieinfoglo.length; i++) {



          if (i % 6 == 0) {
            j++;
            this.conwatmoviesmediainfoset[j] = [];
            this.conwatmoviesmediainfoset[j].push(this.arraytempmovieinfoglo[i]);
          }
          else {
            this.conwatmoviesmediainfoset[j].push(this.arraytempmovieinfoglo[i]);
          }
        }
      }
      // if (// this.mobile ==true) {
        if (true) {
        // this.conwatmoviesmediainfoset = this.arraytempmovieinfoglo
        this.conwatmoviesmediainfosetformobie = this.arraytempmovieinfogloformobile

      }
      // // // console.log("this.conwatmoviesmediainfoset")
      // // // console.log(this.conwatmoviesmediainfoset)
    });
























    // Popular movies
    this.httpClient.get("/popularmovies?&apikey=ebcb324f3d940e9599200a81e3b4c007", { responseType: 'json' })
      .subscribe(
        data => {
          popularmoviesmedia = data
          // // // // // // // consolelog(Object.keys(popularmoviesmedia).length)

          this.arraytemppopularmovieinfoglo = [];
          this.arraytemppopularmovieinfogloformobile=[];

          for (let i = 0; i < Object.keys(popularmoviesmedia["results"]).length; i++) {
            // // // // // // // // consolelog (nowplayingmedia['results'][i]);
            if(popularmoviesmedia['results'][i]['poster_path']!=null)
            {
            this.arraytemppopularmovieinfoglo.push([`https://image.tmdb.org/t/p/w500/${popularmoviesmedia['results'][i]['poster_path']}`, popularmoviesmedia['results'][i]['title'], `/watch/movie/${popularmoviesmedia['results'][i]['id']}`])
            this.arraytemppopularmovieinfogloformobile.push([`https://image.tmdb.org/t/p/w500/${popularmoviesmedia['results'][i]['poster_path']}`, popularmoviesmedia['results'][i]['title'], `/watch/movie/${popularmoviesmedia['results'][i]['id']}`])
            // this.arraytemppopularmovieinfoglo.push(`https://image.tmdb.org/t/p/w500/${popularmoviesmedia['results'][i]['poster_path']}`)
            }

          }
          // // // // // // // // consolelog(this.arraytemppopularmovieinfoglo)
          // this.popularmoviesmediainfo=arraytempinfo;

          // this.games = ["a", "b", "c", "d", "e"]; // arraytempinfo
          // this.gamesFormatted = []; // this.popularmoviesmediainfo
          this.popularmoviesmediainfoset = [];
          var j = -1;
          if (true) {
          for (var i = 0; i < this.arraytemppopularmovieinfoglo.length; i++) {

            // // // // // // // // consolelog("haha")
            // // // // // // // // consolelog(// this.mobile)
            // // // // // // consolelog("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
            // // // // // // consolelog(this.arraytemppopularmovieinfoglo[i])

            if (i % 6 == 0) {
              j++;
              this.popularmoviesmediainfoset[j] = [];
              this.popularmoviesmediainfoset[j].push(this.arraytemppopularmovieinfoglo[i]);
            }
            else {
              this.popularmoviesmediainfoset[j].push(this.arraytemppopularmovieinfoglo[i]);
            }
          }
        }

          if (true) {
            this.popularmoviesmediainfosetformobile = this.arraytemppopularmovieinfogloformobile
          }


        }
      );






    // Top rated movies
    this.httpClient.get("/topratedmovies?&apikey=ebcb324f3d940e9599200a81e3b4c007", { responseType: 'json' })
      .subscribe(
        data => {
          topratedmoviesmedia = data
          // // // // // // // // consolelog(topratedmoviesmedia)

          this.arraytemptopratedmoviesinfoglo = [];
          this.arraytemptopratedmoviesinfogloformobile=[];
          // topratedmoviesmediainfo: any;
          // arraytemptopratedmoviesinfoglo: any
          // topratedmoviesmediainfoset:any;

          for (let i = 0; i < Object.keys(topratedmoviesmedia["results"]).length; i++) {
            // // // // // // // // consolelog (nowplayingmedia['results'][i]);
            if(topratedmoviesmedia['results'][i]['poster_path']!=null)
            {
            this.arraytemptopratedmoviesinfoglo.push([`https://image.tmdb.org/t/p/w500/${topratedmoviesmedia['results'][i]['poster_path']}`, topratedmoviesmedia['results'][i]['title'], `/watch/movie/${topratedmoviesmedia['results'][i]['id']}`])
            this.arraytemptopratedmoviesinfogloformobile.push([`https://image.tmdb.org/t/p/w500/${topratedmoviesmedia['results'][i]['poster_path']}`, topratedmoviesmedia['results'][i]['title'], `/watch/movie/${topratedmoviesmedia['results'][i]['id']}`])
            }
            // this.arraytemppopularmovieinfoglo.push(`https://image.tmdb.org/t/p/w500/${popularmoviesmedia['results'][i]['poster_path']}`)
            // this.arraytemptopratedmoviesinfoglo.push(`https://image.tmdb.org/t/p/w500/${topratedmoviesmedia['results'][i]['poster_path']}`)


          }
          // this.topratedmoviesmediainfo = arraytempinfo;


          this.topratedmoviesmediainfoset = [];
          var j = -1;
          if (true) {
          for (var i = 0; i < this.arraytemptopratedmoviesinfoglo.length; i++) {

            // // // // // // // // consolelog("haha")
            // // // // // // // // consolelog(// this.mobile)
            // // // // // // // // consolelog(this.popularmoviesmediainfoset)

            if (i % 6 == 0) {
              j++;
              this.topratedmoviesmediainfoset[j] = [];
              this.topratedmoviesmediainfoset[j].push(this.arraytemptopratedmoviesinfoglo[i]);
            }
            else {
              this.topratedmoviesmediainfoset[j].push(this.arraytemptopratedmoviesinfoglo[i]);
            }
          }

        
        }
        if (true) {
          // this.topratedmoviesmediainfoset=  this.arraytemptopratedmoviesinfoglo
          this.topratedmoviesmediainfosetformobile=  this.arraytemptopratedmoviesinfogloformobile
        }
        
        }
      );
















    // Trending movies
    this.httpClient.get("/trend?&apikey=ebcb324f3d940e9599200a81e3b4c007", { responseType: 'json' })
      .subscribe(
        data => {
          trendingmovies = data
          // // // // // // // // // consolelog(nowplayingmedia)

          // trendingmoviesinfo: any;
          // arraytemptrendingmoviesinfoglo: any
          // trendingmoviesmediainfoset:any;
          this.arraytemptrendingmoviesinfoglo = [];
          this.arraytemptrendingmoviesinfogloformobile = [];

          for (let i = 0; i < Object.keys(trendingmovies["results"]).length; i++) {
            // // // // // // // // consolelog (nowplayingmedia['results'][i]);
            // this.arraytemptrendingmoviesinfoglo.push(`https://image.tmdb.org/t/p/w500/${trendingmovies['results'][i]['poster_path']}`)
            if(trendingmovies['results'][i]['poster_path']!=null)
            {
            this.arraytemptrendingmoviesinfoglo.push([`https://image.tmdb.org/t/p/w500/${trendingmovies['results'][i]['poster_path']}`, trendingmovies['results'][i]['title'], `/watch/movie/${trendingmovies['results'][i]['id']}`])
            this.arraytemptrendingmoviesinfogloformobile .push([`https://image.tmdb.org/t/p/w500/${trendingmovies['results'][i]['poster_path']}`, trendingmovies['results'][i]['title'], `/watch/movie/${trendingmovies['results'][i]['id']}`])
            }
          }
          // this.trendingmoviesinfo = this.arraytemptrendingmoviesinfoglo;
          this.trendingmoviesmediainfoset = [];
          var j = -1;
          if (true)
          {
            for (var i = 0; i < this.arraytemptrendingmoviesinfoglo.length; i++) {

            // // // // // // // // consolelog("haha")
            // // // // // // // // consolelog(// this.mobile)
            // // // // // // // // consolelog(this.popularmoviesmediainfoset)

            if (i % 6 == 0) {
              j++;
              this.trendingmoviesmediainfoset[j] = [];
              this.trendingmoviesmediainfoset[j].push(this.arraytemptrendingmoviesinfoglo[i]);
            }
            else {
              this.trendingmoviesmediainfoset[j].push(this.arraytemptrendingmoviesinfoglo[i]);
            }
          }
        }
        if(true)
        {
          this.trendingmoviesmediainfosetformobile =this.arraytemptrendingmoviesinfogloformobile 
        }
        }
      );



    // Popular tv shows 
    this.httpClient.get("/populartvshows?&apikey=ebcb324f3d940e9599200a81e3b4c007", { responseType: 'json' })
      .subscribe(
        data => {
          populartvshowsmedia = data
          // // // // // // // // // consolelog(nowplayingmedia)
          this.arraypopulartvshowsinfoglo = [];
          this.arraypopulartvshowsinfogloformobile = [];

          // populartvshowsmediainfo: any;
          // arraypopulartvshowsinfoglo: any
          // populartvshowsmediainfoset:any;

          for (let i = 0; i < Object.keys(populartvshowsmedia["results"]).length; i++) {
            // // // // // // // // consolelog (nowplayingmedia['results'][i]);
            // this.arraypopulartvshowsinfoglo.push(`https://image.tmdb.org/t/p/w500/${populartvshowsmedia['results'][i]['poster_path']}`)
            if(populartvshowsmedia['results'][i]['poster_path']!=null)
            {
            this.arraypopulartvshowsinfoglo.push([`https://image.tmdb.org/t/p/w500/${populartvshowsmedia['results'][i]['poster_path']}`, populartvshowsmedia['results'][i]['name'], `/watch/tv/${populartvshowsmedia['results'][i]['id']}`])
            this.arraypopulartvshowsinfogloformobile.push([`https://image.tmdb.org/t/p/w500/${populartvshowsmedia['results'][i]['poster_path']}`, populartvshowsmedia['results'][i]['name'], `/watch/tv/${populartvshowsmedia['results'][i]['id']}`])
            }

          }
          // this.populartvshowsmediainfo = arraytempinfo;
          this.populartvshowsmediainfoset = [];
          var j = -1;
          if(true)
          {
          for (var i = 0; i < this.arraypopulartvshowsinfoglo.length; i++) {

            // // // // // // // // consolelog("haha")
            // // // // // // // // consolelog(// this.mobile)
            // // // // // // // // consolelog(this.popularmoviesmediainfoset)

            if (i % 6 == 0) {
              j++;
              this.populartvshowsmediainfoset[j] = [];
              this.populartvshowsmediainfoset[j].push(this.arraypopulartvshowsinfoglo[i]);
            }
            else {
              this.populartvshowsmediainfoset[j].push(this.arraypopulartvshowsinfoglo[i]);
            }
          }
        }
        if(true)
        {
          // this.populartvshowsmediainfoset = this.arraypopulartvshowsinfoglo
          this.populartvshowsmediainfosetformobile = this.arraypopulartvshowsinfogloformobile
        }
        }
      );



    // Top rated TV shows
    this.httpClient.get("/topratedtvshows?&apikey=ebcb324f3d940e9599200a81e3b4c007", { responseType: 'json' })
      .subscribe(
        data => {
          topratedtvshowsmedia = data
          // // // // // // // // // consolelog(nowplayingmedia)

          this.arraytopratedtvshowsinfoglo = [];
          this.arraytopratedtvshowsinfogloformobile = [];
          // topratedtvshowsmediainfo: any;
          // arraytopratedtvshowsinfoglo: any
          // topratedtvshowsmediainfoset:any;

          for (let i = 0; i < Object.keys(topratedtvshowsmedia["results"]).length; i++) {
            // // // // // // // // consolelog (nowplayingmedia['results'][i]);
            // this.arraytopratedtvshowsinfoglo.push(`https://image.tmdb.org/t/p/w500/${topratedtvshowsmedia['results'][i]['poster_path']}`)
            if(topratedtvshowsmedia['results'][i]['poster_path']!=null)
            {
            this.arraytopratedtvshowsinfoglo.push([`https://image.tmdb.org/t/p/w500/${topratedtvshowsmedia['results'][i]['poster_path']}`, topratedtvshowsmedia['results'][i]['name'], `/watch/tv/${topratedtvshowsmedia['results'][i]['id']}`])
            this.arraytopratedtvshowsinfogloformobile.push([`https://image.tmdb.org/t/p/w500/${topratedtvshowsmedia['results'][i]['poster_path']}`, topratedtvshowsmedia['results'][i]['name'], `/watch/tv/${topratedtvshowsmedia['results'][i]['id']}`])
            }

          }
          // this.topratedtvshowsmediainfo = arraytempinfo;
          this.topratedtvshowsmediainfoset = [];
          var j = -1;
          if(true){
          for (var i = 0; i < this.arraytopratedtvshowsinfoglo.length; i++) {

            // // // // // // // // consolelog("haha")
            // // // // // // // // consolelog(// this.mobile)
            // // // // // // // // consolelog(this.popularmoviesmediainfoset)

            if (i % 6 == 0) {
              j++;
              this.topratedtvshowsmediainfoset[j] = [];
              this.topratedtvshowsmediainfoset[j].push(this.arraytopratedtvshowsinfoglo[i]);
            }
            else {
              this.topratedtvshowsmediainfoset[j].push(this.arraytopratedtvshowsinfoglo[i]);
            }
          }
        }
        if(true){
          this.topratedtvshowsmediainfosetformobile = this.arraytopratedtvshowsinfogloformobile
        }
        }
      );



    // Trending TV shows
    this.httpClient.get("/trendingtvshows?&apikey=ebcb324f3d940e9599200a81e3b4c007", { responseType: 'json' })
      .subscribe(
        data => {
          trendingtvshowsmedia = data
          // // // // // // // // // consolelog(nowplayingmedia)
          // trendingtvshowsmediainfo: any;
          // arraytrendingtvshowsinfoglo: any
          // trendingtvshowsmediainfoset:any;

          this.arraytrendingtvshowsinfoglo = [];
          this.arraytrendingtvshowsinfogloformobile = [];

          for (let i = 0; i < Object.keys(trendingtvshowsmedia["results"]).length; i++) {
            // // // // // // // // consolelog (nowplayingmedia['results'][i]);
            // this.arraytrendingtvshowsinfoglo.push(`https://image.tmdb.org/t/p/w500/${trendingtvshowsmedia['results'][i]['poster_path']}`)
            if(trendingtvshowsmedia['results'][i]['poster_path']!=null)
            {
            this.arraytrendingtvshowsinfoglo.push([`https://image.tmdb.org/t/p/w500/${trendingtvshowsmedia['results'][i]['poster_path']}`, trendingtvshowsmedia['results'][i]['name'], `/watch/tv/${trendingtvshowsmedia['results'][i]['id']}`])
            this.arraytrendingtvshowsinfogloformobile.push([`https://image.tmdb.org/t/p/w500/${trendingtvshowsmedia['results'][i]['poster_path']}`, trendingtvshowsmedia['results'][i]['name'], `/watch/tv/${trendingtvshowsmedia['results'][i]['id']}`])
            }

          }
          // this.trendingtvshowsmediainfo = arraytempinfo;

          this.trendingtvshowsmediainfoset = [];
          this.trendingtvshowsmediainfosetformobile = [];
          var j = -1;
          if(true){
          for (var i = 0; i < this.arraytrendingtvshowsinfoglo.length; i++) {

            // // // // // // // // consolelog("haha")
            // // // // // // // // consolelog(// this.mobile)
            // // // // // // // // consolelog(this.popularmoviesmediainfoset)

            if (i % 6 == 0) {
              j++;
              this.trendingtvshowsmediainfoset[j] = [];
              this.trendingtvshowsmediainfoset[j].push(this.arraytrendingtvshowsinfoglo[i]);
            }
            else {
              this.trendingtvshowsmediainfoset[j].push(this.arraytrendingtvshowsinfoglo[i]);
            }
          }
        }
        if(true){
          // this.trendingtvshowsmediainfoset = this.arraytrendingtvshowsinfoglo
          this.trendingtvshowsmediainfosetformobile = this.arraytrendingtvshowsinfogloformobile
        }

        }
      );








      this.breakpointObserver
      // .observe(['(max-width: 768px)', '(min-width: 320px)'])
      // .observe(['(min-width: 600px)'])
      .observe(['(min-width: 700px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          // // console.log('Viewport is 500px or over!');
          // // console.log(state.matches);
          // var temp: any=document.getElementById("jajaja");
          // temp.style.display = "none";

          // this.mobile = false;
          // // console.log("comport First!!!")

          var temp: any=document.getElementById("nonmobileplaymovie");
          if(temp!=null)
          {temp.style.display = "block";}
          var temp: any = document.getElementById("mobileplaymovie");
          if(temp!=null)
          {temp.style.display = "none";}

          var temp: any=document.getElementById("nonmobileconwatch");
          if(temp!=null)
          {temp.style.display = "block";}
          var temp: any = document.getElementById("mobileconwatch");
          if(temp!=null)
          {temp.style.display = "none";}

          var temp: any =document.getElementById("nonmobilepopmovie");
          if(temp!=null)
          {temp.style.display = "block";}
          var temp: any =document.getElementById("mobilepopmovie");
          if(temp!=null)
          {temp.style.display = "none";}

          var temp: any =document.getElementById("nonmobiletopratedmovie");
          if(temp!=null)
          {temp.style.display = "block";}
          var temp: any =document.getElementById("mobiletopratedmovie");
          if(temp!=null)
          {temp.style.display = "none";}

          var temp: any =document.getElementById("nonmobiletrendingmovie");
          if(temp!=null)
          {temp.style.display = "block";}
          var temp: any =document.getElementById("mobiletrendingmovie");
          if(temp!=null)
          {temp.style.display = "none";}


          var temp: any =document.getElementById("nonmobilepoptvshows");
          if(temp!=null)
          {temp.style.display = "block";}
          var temp: any =document.getElementById("mobilepoptvshows");
          if(temp!=null)
          {temp.style.display = "none";}

          var temp: any =document.getElementById("nonmobiletopratedtvshows");
          if(temp!=null)
          {temp.style.display = "block";}
          var temp: any =document.getElementById("mobiletopratedtvshows");
          if(temp!=null)
          {temp.style.display = "none";}

          var temp: any =document.getElementById("nonmobiletrendtvshows");
          if(temp!=null)
          {temp.style.display = "block";}
          var temp: any =document.getElementById("mobiletrendtvshows");
          if(temp!=null)
          {temp.style.display = "none";}
          // window.location.reload();
        } 
        else {
          // // console.log('Viewport is getting smaller!');
          // window.location.reload();
          // var temp: any=document.getElementById("jajaja");
          // temp.style.display = "block";

          // this.mobile = true;
          // window.location.reload();


          
          var temp: any=document.getElementById("nonmobileplaymovie");
          if(temp!=null)
          {temp.style.display = "none";}
          var temp: any = document.getElementById("mobileplaymovie");
          if(temp!=null)
          {temp.style.display = "block";}

          var temp: any=document.getElementById("nonmobileconwatch");
          if(temp!=null)
          {temp.style.display = "none";}
          var temp: any = document.getElementById("mobileconwatch");
          if(temp!=null)
          {temp.style.display = "block";}

          var temp: any =document.getElementById("nonmobilepopmovie");
          if(temp!=null)
          {temp.style.display = "none";}
          var temp: any =document.getElementById("mobilepopmovie");
          if(temp!=null)
          {temp.style.display = "block";}

          var temp: any =document.getElementById("nonmobiletopratedmovie");
          if(temp!=null)
          {temp.style.display = "none";}
          var temp: any =document.getElementById("mobiletopratedmovie");
          if(temp!=null)
          {temp.style.display = "block";}

          var temp: any =document.getElementById("nonmobiletrendingmovie");
          if(temp!=null)
          {temp.style.display = "none";}
          var temp: any =document.getElementById("mobiletrendingmovie");
          if(temp!=null)
          {temp.style.display = "block";}


          var temp: any =document.getElementById("nonmobilepoptvshows");
          if(temp!=null)
          {temp.style.display = "none";}
          var temp: any =document.getElementById("mobilepoptvshows");
          if(temp!=null)
          {temp.style.display = "block";}

          var temp: any =document.getElementById("nonmobiletopratedtvshows");
          if(temp!=null)
          {temp.style.display = "none";}
          var temp: any =document.getElementById("mobiletopratedtvshows");
          if(temp!=null)
          {temp.style.display = "block";}

          var temp: any =document.getElementById("nonmobiletrendtvshows");
          if(temp!=null)
          {temp.style.display = "none";}
          var temp: any =document.getElementById("mobiletrendtvshows");
          if(temp!=null)
          {temp.style.display = "block";}
        }
      });



      // window.addEventListener("touchstart", function(event:any) {
      //   // console.log("hahahaha")
      //   // event.target.style.display="none"
      //   // // console.log(event.target.style.display)
      //   // var temp:any=document.getElementById("jajaja")
      //   // temp.style.display="none"


      //   // event.target.style.display="none"
      //   // // console.log(event.target.style.display)
      //   // document.getElementById("myDIV").style.transform = "rotate(20deg)";




      //   // event.target.style.transform ="scale(1.2)";

        
      //   // var temp:any=document.getElementById("mobileplaymovie");
      //   // temp.style.transform ="scale(1.2)";


      //   var temp:any=document.getElementById("nowplayingmovieimg");
      //   var tempthr:any=document.getElementById("nowplayingmovietitletext");
        

      //   temp.style.transition = "all 0.01s ease-in";
      //   tempthr.style.transition = "all 0.01s ease-in";


      //   // temp.style.transform ="scale(1.1)";
      //   // tempthr.style.transform ="scale(1.1)";

      //   temp.style.transform ="scale(1.08)";
      //   tempthr.style.transform ="scale(1.08)";
        
        
  


      // }, true);

      // window.addEventListener("touchend", function(event:any) {
      //   // console.log("hahahaha")
      //   // event.target.style.display="none"
      //   // // console.log(event.target.style.display)
      //   // var temp:any=document.getElementById("jajaja")
      //   // temp.style.display="none"


      //   // event.target.style.display="none"
      //   // // console.log(event.target.style.display)
      //   // document.getElementById("myDIV").style.transform = "rotate(20deg)";




      //   // event.target.style.transform ="scale(1.2)";

        
      //   // var temp:any=document.getElementById("mobileplaymovie");
      //   var temp:any=document.getElementById("nowplayingmovieimg");
      //   var tempthr:any=document.getElementById("nowplayingmovietitletext");

      //   temp.style.transition = "all 0.01s ease-in";
      //   tempthr.style.transition = "all 0.01s ease-in";

      //   temp.style.transform ="scale(1)";
      //   tempthr.style.transform ="scale(1)";
  
  


      // }, true);


    //   if (!("ontouchstart" in document.documentElement)) {
    //     $("#test-parent").hover(function() {
    //      $("#test-child").fadeToggle();
    //   });
    //  } 






  }


  showingallconwatlist() {


    const items = { ...localStorage };

    // // // // consolelog('Object.keys(items).length')
    // // // // console.log(items)

    if (Object.keys(items).length != 0) {
      // // // // console.log("Haha!")

      var tempdata = JSON.parse(items['local_todolist'])
      // // // // // // // // // // // // // // // consolelog('// // // // // // // // // // // // // // consolelog(tempdata.length)')
      // // // // // // // // // // // // // // // consolelog(tempdata.length)

      for (let i = 0; i < tempdata.length; i++) {

        var tempcandi = tempdata[i]
        // // // // // // // // // // // // // // consolelog("tempcandi")
        // // // // // // // // // // // // // // consolelog(tempcandi)
        tempcandi = JSON.parse(tempcandi['title'])
        tempcandi = tempcandi[0]

        // tempcandi=JSON.parse(tempcandi)

        // // // // // // // // // // // // // // // consolelog('tempcandi')

        // // // // // // // // // // // // // // // consolelog(tempcandi)
        // // // // // // // // // // // // // // // consolelog(tempcandi[0])

        const mediatypeKey = 'mediatype';
        const mediaidKey = 'mediaid';
        const addedwatlistKey = 'addedtowatchlist';

        // // // // consolelog('tempcandi')
        // // // // consolelog(tempcandi)
        if (mediatypeKey in tempcandi) {
          // // // // // // // // // // // // // // // consolelog("!!!!!!!")
          // // // // // // // // // // // // // // // consolelog(tempcandi[myObjKey as keyof typeof tempcandi]);
          var temptypeKey = tempcandi[mediatypeKey as keyof typeof tempcandi]
          // // // // // // // // // // // // // // // consolelog(temptypeKey)
        }

        if (mediaidKey in tempcandi) {
          // // // // // // // // // // // // // // // consolelog("!!!!!!!")
          // // // // // // // // // // // // // // // consolelog(tempcandi[myObjKey as keyof typeof tempcandi]);
          var tempidKey = tempcandi[mediaidKey as keyof typeof tempcandi]
        }

        if (addedwatlistKey in tempcandi) {
          // // // // // // // // // // // // // // // consolelog("!!!!!!!")
          // // // // // // // // // // // // // // // consolelog(tempcandi[myObjKey as keyof typeof tempcandi]);
          var tempaddedwatlistKey = tempcandi[addedwatlistKey as keyof typeof tempcandi]
        }

        // // // // // // // // // // // // // // // consolelog("tempcandi['mediatype']")
        // // // // // // // // // // // // // // // consolelog(tempcandi['mediatype'])
        // mediatype: "movie", mediaid: "399566", addedtowatchlist: 0
        // if (temptypeKey == "movie" && tempaddedwatlistKey==1) {
        if (temptypeKey == "movie") {
          // tempidKey
          this.movielist.push(tempidKey)


        }
        // if (temptypeKey == "tv"  && tempaddedwatlistKey==1 ) {
        if (temptypeKey == "tv") {
          // tempidKey
          this.tvlist.push(tempidKey)

        }

        if (temptypeKey == "tv" ||temptypeKey == "movie") {
          // tempidKey
          this.movietvtoglist.push([tempidKey,temptypeKey])
          // // console.log(this.movietvtoglist)

        }

      }





    }






  }


  callandpaint() {

  }


  async moviedataget() {


    for (let i = 0; i < this.movielist.length; i++) {
      var tempid = this.movielist[i]


      // // // // // // // // // // consolelog("movieid")
      // // // // // // // // // // consolelog(tempid)
      await this.httpClient.get(`/getmoviedetails?&movieid=${tempid}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' }).toPromise().then(
        async data => {
          // // // // // // // // // // consolelog(data)

          tempdata = data;
          // // // // // // // // // // consolelog(tempdata)
          await this.addObjdatalist.push(tempdata)
        })


    }

    return this.addObjdatalist
  }


  async tvdataget() {
    for (let i = 0; i < this.tvlist.length; i++) {
      var tempid = this.tvlist[i]
      // // // // // // // // // // consolelog("tvid")
      // // // // // // // // // // consolelog(tempid)
      await this.httpClient.get(`/gettvshowdetails?&tvid=${tempid}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' }).toPromise().then(
        async data => {
          // // // // // // // // // // consolelog(this.tvlist[i])
          tempdata = data;
          await this.tvObjdatalist.push(tempdata)
        })
    }

    return this.tvObjdatalist
  }



  onResized(event: ResizedEvent): void {
    this.curwinsizedivided = Math.round(event.newWidth/6);
    
    // // // console.log(("vent.newWidth/6"))
    
    // // // console.log(Math.round(event.newWidth/6))
    // this.height = event.newHeight;

    // this.curwinsizedivided = Math.round(window.screen.width/6);
  }



  
  // refreshPage() {
  //   window.location.reload();
  // }


























  over() {
    // // // // // // // // consolelog("Mouseover called");
    // var tempel:any = document.getElementById("nowplayingmovietitle");
    var tempel: any = document.getElementsByClassName("nowplayingmovietitleclass");
    Array.prototype.forEach.call(tempel, function (el) {
      // Do stuff here
      // // // console.log("HAHAHAHAHAHAHAHHAH");
      // // // // // // // // consolelog(el);
      el.style.display = "block"
    });
    // tempel.style.visibility='visible';
    // tempel.style.display="block"
  }

  out() {
    // // // // // // // // consolelog("Mouseout called");
    // var tempel:any = document.getElementById("nowplayingmovietitle");
    var tempel: any = document.getElementsByClassName("nowplayingmovietitleclass");
    Array.prototype.forEach.call(tempel, function (el) {
      // Do stuff here
      // // // // // // // // consolelog(el);
      el.style.display = "none"
    });
    // tempel.style.display="none"
  }




  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;

  togglePaused() {

    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

 
  touchstartfunc3(event:any,i:any)
  {

    var divs:any = document.querySelectorAll('.mx-auto d-block eachimgverthr');

    console.log(divs);
    [].forEach.call(divs, function(div:any) {
      // do whatever
      // div.style.color = "red";
    });  
}


  
  touchstartfunc(event:any,i:any)
  {

    // console.log("touchstartfunc")
    // console.log(typeof i)
    var num = i;
    num.toString()
    var sel="nowplayingmoviecapimgmobile"+num.toString()
    console.log(sel)
    var seldiv:any= document.getElementById(sel)
    // seldiv.querySelector('.mobilemediatitle')
    var head:any=seldiv.querySelector('.mobilemediatitle')
    // var head:any=seldiv.closest("h3")
    
    var img:any=seldiv.querySelector('#nowplayingmovieimg')
    // var img:any=seldiv.closest("img")

    // console.log(seldiv)
    // console.log(head)
    // console.log(img)
    
    

    head.style.transition = "all 0.01s ease-in";
    img.style.transition = "all 0.01s ease-in";

    head.style.transform ="scale(1.08)";
    img.style.transform ="scale(1.08)";
  }

  touchendfunc(event:any,i:any)
  {


    var num = i;
    num.toString()
    var sel="nowplayingmoviecapimgmobile"+num.toString()
    console.log(sel)
    var seldiv:any= document.getElementById(sel)
    // seldiv.querySelector('.mobilemediatitle')
    var head:any=seldiv.querySelector('.mobilemediatitle')
    // var head:any=seldiv.closest("h3")
    
    var img:any=seldiv.querySelector('#nowplayingmovieimg')


    head.style.transition = "all 0.01s ease-in";
    img.style.transition = "all 0.01s ease-in";

    head.style.transform ="scale(1)";
    img.style.transform ="scale(1)";

  }




  // contin
  touchstartfunccontin(event:any,i:any)
  {

    // console.log("touchstartfunc")
    // console.log(typeof i)
    var num = i;
    num.toString()
    var sel="nowplayingmoviecapimgmobileconti"+num.toString()
    console.log(sel)
    var seldiv:any= document.getElementById(sel)
    // seldiv.querySelector('.mobilemediatitle')
    var head:any=seldiv.querySelector('.mobilemediatitlenomain')
    // var head:any=seldiv.closest("h3")
    
    var img:any=seldiv.querySelector('.eachimgformobile')

    var capblack:any=seldiv.querySelector('#grad1')
    // var img:any=seldiv.closest("img")

    // console.log(seldiv)
    // console.log(head)
    // console.log(img)
    
    

    head.style.transition = "all 0.01s ease-in";
    img.style.transition = "all 0.01s ease-in";
    capblack.style.transition ="all 0.01s ease-in";

    head.style.transform ="scale(1.08)";
    img.style.transform ="scale(1.08)";
    capblack.style.transform ="scale(1.08)";
  }

  touchendfunccontin(event:any,i:any)
  {


    var num = i;
    num.toString()
    var sel="nowplayingmoviecapimgmobileconti"+num.toString()
    console.log(sel)
    var seldiv:any= document.getElementById(sel)
    // seldiv.querySelector('.mobilemediatitle')
    var head:any=seldiv.querySelector('.mobilemediatitlenomain')
    // var head:any=seldiv.closest("h3")
    
    var img:any=seldiv.querySelector('.eachimgformobile')
    var capblack:any=seldiv.querySelector('#grad1')


    head.style.transition = "all 0.01s ease-in";
    img.style.transition = "all 0.01s ease-in";
    capblack.style.transition ="all 0.01s ease-in";

    head.style.transform ="scale(1)";
    img.style.transform ="scale(1)";
    capblack.style.transform ="scale(1)";

  }





// pop mu
  touchstartfuncpopmu(event:any,i:any)
  {

    // console.log("touchstartfunc")
    // console.log(typeof i)
    var num = i;
    num.toString()
    var sel="nowplayingmoviecapimgmobilepopmu"+num.toString()
    console.log(sel)
    var seldiv:any= document.getElementById(sel)
    // seldiv.querySelector('.mobilemediatitle')
    var head:any=seldiv.querySelector('.mobilemediatitlenomain')
    // var head:any=seldiv.closest("h3")
    
    var img:any=seldiv.querySelector('.eachimgformobile')

    var capblack:any=seldiv.querySelector('#grad1')
    // var img:any=seldiv.closest("img")

    // console.log(seldiv)
    // console.log(head)
    // console.log(img)
    
    

    head.style.transition = "all 0.01s ease-in";
    img.style.transition = "all 0.01s ease-in";
    capblack.style.transition ="all 0.01s ease-in";

    head.style.transform ="scale(1.08)";
    img.style.transform ="scale(1.08)";
    capblack.style.transform ="scale(1.08)";
  }

  touchendfuncpopmu(event:any,i:any)
  {


    var num = i;
    num.toString()
    var sel="nowplayingmoviecapimgmobilepopmu"+num.toString()
    console.log(sel)
    var seldiv:any= document.getElementById(sel)
    // seldiv.querySelector('.mobilemediatitle')
    var head:any=seldiv.querySelector('.mobilemediatitlenomain')
    // var head:any=seldiv.closest("h3")
    
    var img:any=seldiv.querySelector('.eachimgformobile')
    var capblack:any=seldiv.querySelector('#grad1')


    head.style.transition = "all 0.01s ease-in";
    img.style.transition = "all 0.01s ease-in";
    capblack.style.transition ="all 0.01s ease-in";

    head.style.transform ="scale(1)";
    img.style.transform ="scale(1)";
    capblack.style.transform ="scale(1)";

  }






  //topratmu
  touchstartfunctopratmu(event:any,i:any)
  {

    // console.log("touchstartfunc")
    // console.log(typeof i)
    var num = i;
    num.toString()
    var sel="nowplayingmoviecapimgmobiletopratmu"+num.toString()
    console.log(sel)
    var seldiv:any= document.getElementById(sel)
    // seldiv.querySelector('.mobilemediatitle')
    var head:any=seldiv.querySelector('.mobilemediatitlenomain')
    // var head:any=seldiv.closest("h3")
    
    var img:any=seldiv.querySelector('.eachimgformobile')

    var capblack:any=seldiv.querySelector('#grad1')
    // var img:any=seldiv.closest("img")

    // console.log(seldiv)
    // console.log(head)
    // console.log(img)
    
    

    head.style.transition = "all 0.01s ease-in";
    img.style.transition = "all 0.01s ease-in";
    capblack.style.transition ="all 0.01s ease-in";

    head.style.transform ="scale(1.08)";
    img.style.transform ="scale(1.08)";
    capblack.style.transform ="scale(1.08)";
  }

  touchendfunctopratmu(event:any,i:any)
  {


    var num = i;
    num.toString()
    var sel="nowplayingmoviecapimgmobiletopratmu"+num.toString()
    console.log(sel)
    var seldiv:any= document.getElementById(sel)
    // seldiv.querySelector('.mobilemediatitle')
    var head:any=seldiv.querySelector('.mobilemediatitlenomain')
    // var head:any=seldiv.closest("h3")
    
    var img:any=seldiv.querySelector('.eachimgformobile')
    var capblack:any=seldiv.querySelector('#grad1')


    head.style.transition = "all 0.01s ease-in";
    img.style.transition = "all 0.01s ease-in";
    capblack.style.transition ="all 0.01s ease-in";

    head.style.transform ="scale(1)";
    img.style.transform ="scale(1)";
    capblack.style.transform ="scale(1)";

  }















  //trending movie
  touchstartfunctremu(event:any,i:any)
  {

    // console.log("touchstartfunc")
    // console.log(typeof i)
    var num = i;
    num.toString()
    var sel="nowplayingmoviecapimgmobiletremu"+num.toString()
    console.log(sel)
    var seldiv:any= document.getElementById(sel)
    // seldiv.querySelector('.mobilemediatitle')
    var head:any=seldiv.querySelector('.mobilemediatitlenomain')
    // var head:any=seldiv.closest("h3")
    
    var img:any=seldiv.querySelector('.eachimgformobile')

    var capblack:any=seldiv.querySelector('#grad1')
    // var img:any=seldiv.closest("img")

    // console.log(seldiv)
    // console.log(head)
    // console.log(img)
    
    

    head.style.transition = "all 0.01s ease-in";
    img.style.transition = "all 0.01s ease-in";
    capblack.style.transition ="all 0.01s ease-in";

    head.style.transform ="scale(1.08)";
    img.style.transform ="scale(1.08)";
    capblack.style.transform ="scale(1.08)";
  }

  touchendfunctremu(event:any,i:any)
  {


    var num = i;
    num.toString()
    var sel="nowplayingmoviecapimgmobiletremu"+num.toString()
    console.log(sel)
    var seldiv:any= document.getElementById(sel)
    // seldiv.querySelector('.mobilemediatitle')
    var head:any=seldiv.querySelector('.mobilemediatitlenomain')
    // var head:any=seldiv.closest("h3")
    
    var img:any=seldiv.querySelector('.eachimgformobile')
    var capblack:any=seldiv.querySelector('#grad1')


    head.style.transition = "all 0.01s ease-in";
    img.style.transition = "all 0.01s ease-in";
    capblack.style.transition ="all 0.01s ease-in";

    head.style.transform ="scale(1)";
    img.style.transform ="scale(1)";
    capblack.style.transform ="scale(1)";

  }




  //pop tv
  touchstartfuncpoptv(event:any,i:any)
  {

    // console.log("touchstartfunc")
    // console.log(typeof i)
    var num = i;
    num.toString()
    var sel="nowplayingmoviecapimgmobilepoptv"+num.toString()
    console.log(sel)
    var seldiv:any= document.getElementById(sel)
    // seldiv.querySelector('.mobilemediatitle')
    var head:any=seldiv.querySelector('.mobilemediatitlenomain')
    // var head:any=seldiv.closest("h3")
    
    var img:any=seldiv.querySelector('.eachimgformobile')

    var capblack:any=seldiv.querySelector('#grad1')
    // var img:any=seldiv.closest("img")

    // console.log(seldiv)
    // console.log(head)
    // console.log(img)
    
    

    head.style.transition = "all 0.01s ease-in";
    img.style.transition = "all 0.01s ease-in";
    capblack.style.transition ="all 0.01s ease-in";

    head.style.transform ="scale(1.08)";
    img.style.transform ="scale(1.08)";
    capblack.style.transform ="scale(1.08)";
  }

  touchendfuncpoptv(event:any,i:any)
  {


    var num = i;
    num.toString()
    var sel="nowplayingmoviecapimgmobilepoptv"+num.toString()
    console.log(sel)
    var seldiv:any= document.getElementById(sel)
    // seldiv.querySelector('.mobilemediatitle')
    var head:any=seldiv.querySelector('.mobilemediatitlenomain')
    // var head:any=seldiv.closest("h3")
    
    var img:any=seldiv.querySelector('.eachimgformobile')
    var capblack:any=seldiv.querySelector('#grad1')


    head.style.transition = "all 0.01s ease-in";
    img.style.transition = "all 0.01s ease-in";
    capblack.style.transition ="all 0.01s ease-in";

    head.style.transform ="scale(1)";
    img.style.transform ="scale(1)";
    capblack.style.transform ="scale(1)";

  }










  // Top rated TV shows
  touchstartfunctopratv(event:any,i:any)
  {

    // console.log("touchstartfunc")
    // console.log(typeof i)
    var num = i;
    num.toString()
    var sel="nowplayingmoviecapimgmobiletopratv"+num.toString()
    console.log(sel)
    var seldiv:any= document.getElementById(sel)
    // seldiv.querySelector('.mobilemediatitle')
    var head:any=seldiv.querySelector('.mobilemediatitlenomain')
    // var head:any=seldiv.closest("h3")
    
    var img:any=seldiv.querySelector('.eachimgformobile')

    var capblack:any=seldiv.querySelector('#grad1')
    // var img:any=seldiv.closest("img")

    // console.log(seldiv)
    // console.log(head)
    // console.log(img)
    
    

    head.style.transition = "all 0.01s ease-in";
    img.style.transition = "all 0.01s ease-in";
    capblack.style.transition ="all 0.01s ease-in";

    head.style.transform ="scale(1.08)";
    img.style.transform ="scale(1.08)";
    capblack.style.transform ="scale(1.08)";
  }

  touchendfunctopratv(event:any,i:any)
  {


    var num = i;
    num.toString()
    var sel="nowplayingmoviecapimgmobiletopratv"+num.toString()
    console.log(sel)
    var seldiv:any= document.getElementById(sel)
    // seldiv.querySelector('.mobilemediatitle')
    var head:any=seldiv.querySelector('.mobilemediatitlenomain')
    // var head:any=seldiv.closest("h3")
    
    var img:any=seldiv.querySelector('.eachimgformobile')
    var capblack:any=seldiv.querySelector('#grad1')


    head.style.transition = "all 0.01s ease-in";
    img.style.transition = "all 0.01s ease-in";
    capblack.style.transition ="all 0.01s ease-in";

    head.style.transform ="scale(1)";
    img.style.transform ="scale(1)";
    capblack.style.transform ="scale(1)";

  }







  // Trend TV shows
  touchstartfunctrendtv(event:any,i:any)
  {

    // console.log("touchstartfunc")
    // console.log(typeof i)
    var num = i;
    num.toString()
    var sel="nowplayingmoviecapimgmobiletrendtv"+num.toString()
    console.log(sel)
    var seldiv:any= document.getElementById(sel)
    // seldiv.querySelector('.mobilemediatitle')
    var head:any=seldiv.querySelector('.mobilemediatitlenomain')
    // var head:any=seldiv.closest("h3")
    
    var img:any=seldiv.querySelector('.eachimgformobile')

    var capblack:any=seldiv.querySelector('#grad1')
    // var img:any=seldiv.closest("img")

    // console.log(seldiv)
    // console.log(head)
    // console.log(img)
    
    

    head.style.transition = "all 0.01s ease-in";
    img.style.transition = "all 0.01s ease-in";
    capblack.style.transition ="all 0.01s ease-in";

    head.style.transform ="scale(1.08)";
    img.style.transform ="scale(1.08)";
    capblack.style.transform ="scale(1.08)";
  }

  touchendfunctrendtv(event:any,i:any)
  {


    var num = i;
    num.toString()
    var sel="nowplayingmoviecapimgmobiletrendtv"+num.toString()
    console.log(sel)
    var seldiv:any= document.getElementById(sel)
    // seldiv.querySelector('.mobilemediatitle')
    var head:any=seldiv.querySelector('.mobilemediatitlenomain')
    // var head:any=seldiv.closest("h3")
    
    var img:any=seldiv.querySelector('.eachimgformobile')
    var capblack:any=seldiv.querySelector('#grad1')


    head.style.transition = "all 0.01s ease-in";
    img.style.transition = "all 0.01s ease-in";
    capblack.style.transition ="all 0.01s ease-in";

    head.style.transform ="scale(1)";
    img.style.transform ="scale(1)";
    capblack.style.transform ="scale(1)";

  }

















  // watchlist
  touchstartfuncwatchlist(event:any,i:any)
  {

    // console.log("touchstartfunc")
    // console.log(typeof i)
    var num = i;
    num.toString()
    var sel="watchlist"+num.toString()
    console.log(sel)
    var seldiv:any= document.getElementById(sel)
    // seldiv.querySelector('.mobilemediatitle')
    // var head:any=seldiv.querySelector('.mobilemediatitlenomain')
    // var head:any=seldiv.querySelector('.realtitleverfivinmylistmobile')
    // var head:any=seldiv.closest("h3")
    
    var img:any=seldiv.querySelector('.eachimgforcollelemmobile')

    var capblack:any=seldiv.querySelector('.eachcap')
    // var img:any=seldiv.closest("img")

    // console.log(seldiv)
    // console.log(head)
    // console.log(img)
    
    

    // head.style.transition = "all 0.01s ease-in";
    img.style.transition = "all 0.01s ease-in";
    capblack.style.transition ="all 0.01s ease-in";

    // head.style.transform ="scale(1.08)";
    img.style.transform ="scale(1.08)";
    capblack.style.transform ="scale(1.08)";
  }

  touchendfuncwatchlist(event:any,i:any)
  {


    var num = i;
    num.toString()
    var sel="watchlist"+num.toString()
    console.log(sel)
    var seldiv:any= document.getElementById(sel)
    // seldiv.querySelector('.mobilemediatitle')
    // var head:any=seldiv.querySelector('.realtitleverfivinmylistmobile')
    // var head:any=seldiv.closest("h3")
    
    var img:any=seldiv.querySelector('.eachimgforcollelemmobile')

    var capblack:any=seldiv.querySelector('.eachcap')

    // head.style.transition = "all 0.01s ease-in";
    img.style.transition = "all 0.01s ease-in";
    capblack.style.transition ="all 0.01s ease-in";

    // head.style.transform ="scale(1)";
    img.style.transform ="scale(1)";
    capblack.style.transform ="scale(1)";

  }










  
  

}
