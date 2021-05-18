import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { LocalStorageService } from '../local-storage.service';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
var castandcrew: any;
var temppersondata: any;
var temppersonexternaldata: any;


var recormoviesmedia: any;


var simimoviesmedia: any;

var moviereview: any;

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./moviedetail.component.css', './moviedetail.component.scss'],
  providers: [NgbPopoverConfig]
})
export class MoviedetailComponent implements OnInit {
  closeResult: string | undefined;
  // product: any;
  mobile: boolean = false;

  movieid: any

  moviedata: any;
  // movidyoutubekey: any;
  moviereivew: any;
  tvgenre: any;
  moviereleaseyear: any;
  moviepoint: any;
  movieruningtime: any;
  thismoviegenrename: any;
  moviespoklan: any;

  movieoverview: any;
  movietitle: any;
  // movievoteaver: any;
  movietagline: any;
  moviecredits: any;
  // movierecommended: any;
  moviesimilar: any;
  movievideo: any;

  moviedetail: any;

  addedwatchlist: any[] = [];
  addedcheck: any = 0;
  countilistandaddedwatch: any[] = [];
  countilistandaddedwatchexitolast: any[] = [];
  exidlocation: any = "nope";


  existinaddedwatlist: any;

  persondata: any




  recomoviesmediainfoset: any;
  arraytemprecomovieinfoglo: any
  arraytemprecomovieinfogloformobile:any;
  recomoviesmediainfosetformobile:any;

  arraytempsimimovieinfoglo: any
  simimoviesmediainfoset: any;
  simimoviesmediainfosetformobile:any;
  arraytempsimimovieinfogloformobile:any;


  reviewinfo: any[] = [];

  curwinsizedivided: any;

  youtubewidth: any;
  youtubeheight: any;


  castwidth: any;

  castheight: any;

  inisettiout:any=null;


  recmov:any=null;
  simimov:any=null;

  constructor(public activatedRoute: ActivatedRoute, private router: Router, private httpClient: HttpClient, private localStorageService: LocalStorageService, private modalService: NgbModal, config: NgbPopoverConfig, public breakpointObserver: BreakpointObserver ) {
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    // customize default values of popovers used by this component tree
    config.placement = 'top';
    config.triggers = 'hover';



    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }


  ngOnInit() {
    // this.state$ = this.activatedRoute.paramMap.pipe(map(() => window.history.state))

    this.mobile = false;




    // // // // // // console.log("window.screen.width")
    // // // // // // console.log(window.screen.width/6)

    this.curwinsizedivided = Math.round(window.screen.width / 6);

    // this.youtubewidth=Math.round(window.screen.width/2.5);

    // this.youtubeheight=Math.round(window.screen.width/4);

    // var reimcrita=1024;
    var reimcrita= 700;
    if (window.screen.width < reimcrita) { // 768px portrait
      this.mobile = true;
      // // // // // // console.log("This is mobile!.")


    }


    if (this.mobile == true) {
      this.youtubewidth = Math.round(window.screen.width * 0.8);

      this.youtubeheight = Math.round(window.screen.width * 0.65);

      this.castwidth = Math.round(window.screen.width * 0.41);

      this.castheight = Math.round(window.screen.width * 0.2);
      // // // // // // console.log("This is mobile!.")
    }


    if (this.mobile == false) {
      this.youtubewidth = Math.round(window.screen.width / 2);

      this.youtubeheight = Math.round(window.screen.width / 3.4);

      // this.castwidth = Math.round(window.screen.width * 0.5);

      // this.castheight = Math.round(window.screen.width * 0.6);
      // // // // // // console.log("This is not mobile!.")
    }



    // // // // // // // // // // // // // // // // // console.log('movie movie')
    var id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieid = id;
    // // // // // // // // // // // // // // // // console.log("Hello movie inside")
    // // // // // // // // // // // // // // // // console.log(id)


    this.checkaddedlistandbutton(id)


    // Addingn to contiue watching
    this.addtocounwatlistfunc()


    // Movie review
    this.httpClient.get(`/getmoviereviews?&movieid=${id}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' })
      .subscribe(
        data => {

          moviereview = data

          // // // // // // console.log(moviereview)


          for (let i = 0; i < moviereview['results'].length; i++) {
            // moviereview['results'][i]['author']
            // moviereview['results'][i]['content']
            // moviereview['results'][i]['created_at']
            // moviereview['results'][i]['url']
            // moviereview['results'][i]['author_details']['rating']
            var avapath;

            // // // // // // // console.log(moviereview['results'][i]['avatar_path'])
            // // // // // // // console.log(moviereview['results'][i]['avatar_path'])

            if (moviereview['results'][i]['author_details']['avatar_path']) {
              // // // // // // // console.log("KKKKKKKKKK")
              if (moviereview['results'][i]['author_details']['avatar_path'].indexOf('http') >= 0) {
                avapath = moviereview['results'][i]['author_details']['avatar_path']
                // // // // // // // console.log(avapath[0])
                avapath = avapath.slice(1);

              } else {
                avapath = "https://image.tmdb.org/t/p/original/" + moviereview['results'][i]['author_details']['avatar_path']

              }


            }
            if (moviereview['results'][i]['author_details']['avatar_path'] == undefined || moviereview['results'][i]['author_details']['avatar_path'] == null) {
              avapath = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU%E2%80%9D"


            }

            if (moviereview['results'][i]['author_details']['rating'] == null) {
              moviereview['results'][i]['author_details']['rating'] = 0
            }

            var utcDate = moviereview['results'][i]['created_at'];
            // var localDate = new Date(utcDate)

            const monthNames = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"
            ];

            var d = new Date(utcDate);
            var monthfullname = monthNames[d.getMonth()]

            // var dt = new Date();
            var date = d.getDay()
            var h = d.getHours(), m = d.getMinutes(), s = d.getSeconds();
            var _time = (h > 12) ? (h - 12 + ':' + m + ':' + s + ' PM') : (h + ':' + m + ':' + s + ' AM');

            // // // // // console.log([monthfullname, date, _time])
            var datainf = monthfullname.toString() + " " + date.toString() + ", " + _time.toString()

            // var utcdate= Date.UTC(localDate)

            this.reviewinfo.push([
              moviereview['results'][i]['author'],
              moviereview['results'][i]['content'],
              datainf,
              moviereview['results'][i]['url'],
              moviereview['results'][i]['author_details']['rating'],
              avapath,
              moviereview['results'].length])

            if (i == 9) {
              break;
            }

          }


          // // // // console.log('this.reviewinfo')
          // // // // console.log(this.reviewinfo)




        })




    // Full cast and crew
    this.httpClient.get(`/getmoviecredits?&movieid=${id}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' })
      .subscribe(
        data => {

          castandcrew = data

          // // // // // // // console.log(castandcrew)




          var arraytempinfo = [];
          // var castlistlength=castandcrew['cast'].length;

          for (let i = 0; i < castandcrew['cast'].length; i++) {

            // // // // // // // // console.log(`https://image.tmdb.org/t/p/original/${castandcrew['cast'][i]['profile_path']}`)


            // if (castandcrew['cast'][i]['profile_path']==undefined)
            // {
            //   arraytempinfo.push([`https://image.tmdb.org/t/p/original/${castandcrew['cast'][i]['profile_path']}`, castandcrew['cast'][i]['name'], castandcrew['cast'][i]['character'], castandcrew['cast'][i]['id']])

            // }

            if (castandcrew['cast'][i]['profile_path'] != undefined) {
              arraytempinfo.push([`https://image.tmdb.org/t/p/original/${castandcrew['cast'][i]['profile_path']}`, castandcrew['cast'][i]['name'], castandcrew['cast'][i]['character'], castandcrew['cast'][i]['id']])
            }


          }
          this.moviecredits = arraytempinfo



        }
      );



    // 4.1.6 Recommended Movies Endpoint
    this.httpClient.get(`/getmovierecommended?&movieid=${id}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' })
      .subscribe(
        data => {

          // this.movierecommended

          recormoviesmedia = data



          this.arraytemprecomovieinfoglo = [];
          this.arraytemprecomovieinfogloformobile = [];

          for (let i = 0; i < Object.keys(recormoviesmedia["results"]).length; i++) {
            // // // // // // // // // // // // consolelog (nowplayingmedia['results'][i]);
            if(recormoviesmedia['results'][i]['poster_path']!=null)
            {
            this.arraytemprecomovieinfoglo.push([`https://image.tmdb.org/t/p/w500/${recormoviesmedia['results'][i]['poster_path']}`, recormoviesmedia['results'][i]['title'], `/watch/movie/${recormoviesmedia['results'][i]['id']}`])
            this.arraytemprecomovieinfogloformobile.push([`https://image.tmdb.org/t/p/w500/${recormoviesmedia['results'][i]['poster_path']}`, recormoviesmedia['results'][i]['title'], `/watch/movie/${recormoviesmedia['results'][i]['id']}`])
            }
            // this.arraytemprecomovieinfoglo.push(`https://image.tmdb.org/t/p/w500/${recormoviesmedia['results'][i]['poster_path']}`)


          }
          // // // // // // // // // // // // consolelog(this.arraytemprecomovieinfoglo)
          // this.popularmoviesmediainfo=arraytempinfo;

          // this.games = ["a", "b", "c", "d", "e"]; // arraytempinfo
          // this.gamesFormatted = []; // this.popularmoviesmediainfo
          this.recomoviesmediainfoset = [];
          this.recomoviesmediainfosetformobile = [];
          var j = -1;

          if (true) {
            for (var i = 0; i < this.arraytemprecomovieinfoglo.length; i++) {

              // // // // // // // // // // // // consolelog("haha")
              // // // // // // // // // // // // consolelog(this.mobile)
              // // // // // // // // // // consolelog("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
              // // // // // // // // // // consolelog(this.arraytemprecomovieinfoglo[i])
              this.recmov=1

              if (i % 6 == 0) {
                j++;
                this.recomoviesmediainfoset[j] = [];
                this.recomoviesmediainfoset[j].push(this.arraytemprecomovieinfoglo[i]);
              }
              else {
                this.recomoviesmediainfoset[j].push(this.arraytemprecomovieinfoglo[i]);
              }
            }
          }

          if (true) {
            // this.recomoviesmediainfoset = this.arraytemprecomovieinfoglo
            this.recomoviesmediainfosetformobile = this.arraytemprecomovieinfogloformobile;
            // // // // console.log()
          }









        }
      );



    // 4.1.7 Similar Movies Endpoint
    this.httpClient.get(`/getmovieresimilar?&movieid=${id}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' })
      .subscribe(
        data => {

          // this.moviesimilar = data




          simimoviesmedia = data
          // // // // // // // // // // // consolelog(Object.keys(simimoviesmedia).length)

          this.arraytempsimimovieinfoglo = [];
          this.arraytempsimimovieinfogloformobile = [];

          for (let i = 0; i < Object.keys(simimoviesmedia["results"]).length; i++) {
            // // // // // // // // // // // // consolelog (nowplayingmedia['results'][i]);
            if(simimoviesmedia['results'][i]['poster_path']!=null)
            {
            this.arraytempsimimovieinfoglo.push([`https://image.tmdb.org/t/p/w500/${simimoviesmedia['results'][i]['poster_path']}`, simimoviesmedia['results'][i]['title'], `/watch/movie/${simimoviesmedia['results'][i]['id']}`])
            this.arraytempsimimovieinfogloformobile.push([`https://image.tmdb.org/t/p/w500/${simimoviesmedia['results'][i]['poster_path']}`, simimoviesmedia['results'][i]['title'], `/watch/movie/${simimoviesmedia['results'][i]['id']}`])
            }
            // this.arraytempsimimovieinfoglo.push(`https://image.tmdb.org/t/p/w500/${simimoviesmedia['results'][i]['poster_path']}`)


          }
          // // // // // // // // // // // // consolelog(this.arraytempsimimovieinfoglo)
          // this.simimoviesmediainfo=arraytempinfo;

          // this.games = ["a", "b", "c", "d", "e"]; // arraytempinfo
          // this.gamesFormatted = []; // this.simimoviesmediainfo
          this.simimoviesmediainfoset = [];
          this.simimoviesmediainfosetformobile = [];
          var j = -1;

          if (true) {

            for (var i = 0; i < this.arraytempsimimovieinfoglo.length; i++) {

              // // // // // // // // // // // // consolelog("haha")
              // // // // // // // // // // // // consolelog(this.mobile)
              // // // // // // // // // // consolelog("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
              // // // // // // // // // // consolelog(this.arraytempsimimovieinfoglo[i])
              this.simimov=1;
              if (i % 6 == 0) {
                j++;
                this.simimoviesmediainfoset[j] = [];
                this.simimoviesmediainfoset[j].push(this.arraytempsimimovieinfoglo[i]);
              }
              else {
                this.simimoviesmediainfoset[j].push(this.arraytempsimimovieinfoglo[i]);
              }
            }
          }

          if (true) {
            // this.simimoviesmediainfoset = this.arraytempsimimovieinfoglo
            this.simimoviesmediainfosetformobile=this.arraytempsimimovieinfogloformobile
          }
          // // // // // // // // // // // console.log(this.moviesimilar)
        }
      );

    // 4.1.8 Movies Video Endpoint

    this.httpClient.get(`/getmovievideo?&movieid=${id}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' })
      .subscribe(
        data => {

          this.movievideo = data
          // // // // // // // // // // // // // // console.log("HAHA")  
          // // // // // // // // // // // // // // console.log(this.movievideo['results'][0]['key'])

          // // // // // // console.log("this.movievideo")
          // // // // // // console.log(this.movievideo['results'])
          var passtemp = 0;
          if (this.movievideo['results'].length == 0) {
            this.movievideo = "tzkWB85ULJY";
            passtemp = 1;

          }

          if (passtemp == 0) {
            // // // // // // console.log("Ah?")
            this.movievideo = this.movievideo['results'][0]['key'];

          }





          this.httpClient.get(`/getmoviedetails?&movieid=${id}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' })
            .subscribe(
              data => {

                this.moviedata = data

                this.movietitle = this.moviedata['title'];

                this.socialtweethfreset()



                // moviedescription:any;



              }
            );



          // this.socialtweethfreset()

        }
      );

    // this.socialtweethfreset()



    // 4.1.8 Movies detail

    // this.httpClient.get(`/moviesearchwithid?&movieid=${id}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' })
    this.httpClient.get(`/getmoviedetails?&movieid=${id}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' })
      .subscribe(
        data => {

          this.moviedata = data
          // // // // // // // // // // // // // // // console.log(this.moviedata)
          // // // // // // // // // // // // // // // // console.log(this.moviedata['videos']['results'])
          // // // // // // // // // // // // // // // // // console.log(this.moviedata['videos']['results'][0]['key'])
          // this.movidyoutubekey = this.moviedata['videos']['results'][0]['key']
          // this.movidyoutubekey=this.movievideo

          this.moviereleaseyear = this.moviedata['release_date']
          var res = this.moviereleaseyear.split("-")
          this.moviereleaseyear = res[0]

          this.moviepoint = this.moviedata['vote_average']
          if (this.moviepoint == null || this.moviepoint == undefined) {
            this.moviepoint = "0"
          }
          this.movieruningtime = this.moviedata['runtime']
          var hours = Math.floor(this.movieruningtime / 60);
          var minutes = this.movieruningtime % 60;
          // hours + ":" + minutes;    
          this.movieruningtime = hours + "hrs" + " " + minutes + "mins";

          if(hours==0 && minutes!=0)
          {
            this.movieruningtime = minutes + "mins";
          }

          if(hours!=0 && minutes==0)
          {
            this.movieruningtime = hours + "hrs";
          }

          if(hours!=0 && minutes!=0)
          {
            this.movieruningtime = hours + "hrs" + " " + minutes + "mins";
          }

          // var temparr: any[] = [];
          var temparr: any;
          var templ: any = this.moviedata['genres'].length - 1;
          // console.log(this.moviedata)
          for (let i = 0; i < this.moviedata['genres'].length; i++) {

            // temparr.push(this.moviedata['genres'][i]['name'])
            if (i == 0 && this.moviedata['genres'].length != 1) {
              // // // // // // console.log(this.moviedata['genres'][i]['name'])
              temparr = this.moviedata['genres'][i]['name'] + ", "
            }
            if (i == 0 && this.moviedata['genres'].length == 1) {
              // // // // // // console.log(this.moviedata['genres'][i]['name'])
              temparr = this.moviedata['genres'][i]['name']
            }

            if (i < templ && i > 0) {
              // // // // // // console.log(this.moviedata['genres'][i]['name'])
              temparr += this.moviedata['genres'][i]['name'] + ", "
            }

            if (i == templ) {
              temparr += this.moviedata['genres'][i]['name']
            }
            // // // // // // console.log(this.moviedata['genres'][i]['name'])
          }
          this.thismoviegenrename = temparr
          // // // // // console.log(temparr)

          temparr = [];
          for (let i = 0; i < this.moviedata['spoken_languages'].length; i++) {

            // temparr.push(this.moviedata['spoken_languages'][i]['english_name'])

            if (i == 0 && this.moviedata['spoken_languages'].length != 1) {
              // // // // // // console.log(this.moviedata['genres'][i]['name'])
              temparr = this.moviedata['spoken_languages'][i]['english_name'] + ", "

            }
            if (i == 0 && this.moviedata['spoken_languages'].length == 1) {
              // // // // // // console.log(this.moviedata['genres'][i]['name'])
              temparr = this.moviedata['spoken_languages'][i]['english_name']

            }
            if (i < templ && i > 0) {
              // // // // // // console.log(this.moviedata['genres'][i]['name'])
              temparr += this.moviedata['spoken_languages'][i]['english_name'] + ", "
            }
            if (i == templ) {
              temparr += this.moviedata['genres'][i]['name']
            }

          }
          this.moviespoklan = temparr


          this.movieoverview = this.moviedata['overview'];
          this.movietitle = this.moviedata['title'];

          this.movietagline = this.moviedata['tagline']




          // moviedescription:any;



        }
      );

    



      this.breakpointObserver
      // .observe(['(max-width: 768px)', '(min-width: 320px)'])
      // .observe(['(min-width: 600px)'])
      .observe(['(min-width: 700px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          // // // console.log('Viewport is 500px or over!');
          // // // console.log(state.matches);
          // // // console.log('comport Moviedetail!');
          
          // var temp: any=document.getElementById("jajaja");
          // temp.style.display = "none";

          // this.mobile = false;


          var temp: any=document.getElementById("recmoviedetailfornonmobile");
          if(temp!=null)
          {temp.style.display = "block";}
          var temp: any = document.getElementById("recmoviedetailformobile");
          if(temp!=null)
          {temp.style.display = "none";}


          var temp: any=document.getElementById("simimoviedetailfornonmobile");
          if(temp!=null)
          {temp.style.display = "block";}
          var temp: any = document.getElementById("simimoviedetailformobile");
          if(temp!=null)
          {temp.style.display = "none";}

          // var temp: any=document.getElementById("recmoviedetailfornonmobile");
          // if(temp!=null)
          // {temp.style.display = "block";}
          // var temp: any = document.getElementById("recmoviedetailformobile");
          // if(temp!=null)
          // {temp.style.display = "none";}


          // var temp: any=document.getElementById("simimoviedetailfornonmobile");
          // if(temp!=null)
          // {temp.style.display = "block";}
          // var temp: any = document.getElementById("simimoviedetailformobile");
          // if(temp!=null)
          // {temp.style.display = "none";}

          // var temp: any=document.getElementById("nonmobileconwatch");
          // temp.style.display = "block";
          // var temp: any = document.getElementById("mobileconwatch");
          // temp.style.display = "none";

          
          // window.location.reload();
        } 
        else {
          // // // console.log('Viewport is getting smaller!');
          // window.location.reload();
          // var temp: any=document.getElementById("jajaja");
          // temp.style.display = "block";

          // this.mobile = true;
          // window.location.reload();

          var temp: any=document.getElementById("recmoviedetailfornonmobile");
          if(temp!=null)
          {temp.style.display = "none";}
          var temp: any = document.getElementById("recmoviedetailformobile");
          if(temp!=null)
          {temp.style.display = "block";}

          var temp: any=document.getElementById("simimoviedetailfornonmobile");
          if(temp!=null)
          {temp.style.display = "none";}
          var temp: any = document.getElementById("simimoviedetailformobile");
          if(temp!=null)
          {temp.style.display = "block";}

          // var temp: any=document.getElementById("recmoviedetailfornonmobile");
          // if(temp!=null)
          // {temp.style.display = "none";}
          // var temp: any = document.getElementById("recmoviedetailformobile");
          // if(temp!=null)
          // {temp.style.display = "block";}

          // var temp: any=document.getElementById("simimoviedetailfornonmobile");
          // if(temp!=null)
          // {temp.style.display = "none";}
          // var temp: any = document.getElementById("simimoviedetailformobile");
          // if(temp!=null)
          // {temp.style.display = "block";}

          // var temp: any=document.getElementById("nonmobileconwatch");
          // temp.style.display = "none";
          // var temp: any = document.getElementById("mobileconwatch");
          // temp.style.display = "block";

          
        }
      });




  }



  checkaddedlistandbutton(id: any) {
    // this.addedcheck = 1;
    // this.countilistandaddedwatch=[];

    // this.movieid=id

    // // // // // // // // // // // console.log("ENTER!!!")

    this.existinaddedwatlist = 0

    const items = { ...localStorage };

    // // // // // // // // // // // // console.log("items")
    // // // // // // // // // // // // console.log(items)


    if (Object.keys(items).length != 0) {


      var tempdata = JSON.parse(items['local_todolist'])


      for (let i = 0; i < tempdata.length; i++) {

        var tempcandi = tempdata[i]

        tempcandi = JSON.parse(tempcandi['title'])
        tempcandi = tempcandi[0]



        const mediatypeKey = 'mediatype';
        const mediaidKey = 'mediaid';
        const addedwatlistKey = 'addedtowatchlist';

        if (mediatypeKey in tempcandi) {

          var temptypeKey = tempcandi[mediatypeKey as keyof typeof tempcandi]

        }

        if (mediaidKey in tempcandi) {

          var tempidKey = tempcandi[mediaidKey as keyof typeof tempcandi]
        }

        if (addedwatlistKey in tempcandi) {

          var tempaddedwatlistKey = tempcandi[addedwatlistKey as keyof typeof tempcandi]

          // // // // // // // // // // // // // // console.log("tempaddedwatlistKey")
          // // // // // // // // // // // // // // console.log(tempaddedwatlistKey)
          // // // // // // // // // // // // // // console.log(this.movieid)
        }


        if (temptypeKey == "movie") {
          // if (tempcandi[0]['mediatype'] == "movie") {


          if (tempidKey == this.movieid.toString()) {

            if (tempaddedwatlistKey == 1) {
              // // // // // // // // // // // // // // console.log("alreadyadded to watch list")
              this.existinaddedwatlist = 1;

              var tempbtn: any = document.getElementById("addwatchlistbutton")
              tempbtn.textContent = "Remove from watchlist"

              break;
            }

            if (tempaddedwatlistKey == 0) {
              // // // // // // // // // // // // // // console.log("alreadyadded to watch list")
              this.existinaddedwatlist = 1;

              var tempbtn: any = document.getElementById("addwatchlistbutton")
              tempbtn.textContent = "Add to Watchlist"

              break;
            }

          }

        }
      }
      // // // // // // // // // // // // // // // console.log("existinaddedwatlist")
      // // // // // // // // // // // // // // // console.log(existinaddedwatlist)





    }























  }



  // removewatchlistelement() {
  //   // this.movieid
  //   // alert("test");
  //   // // // // // // // // // // // // // console.log("clicked@@@@@@@@@@@@@")
  //   // // // // // // // // // // // // // console.log(this.movieid)
  // }

  addtocounwatlistfunc() {
    this.addedcheck = 0;
    // this.movieid = id

    var canbeadded = 0
    var existingdataindex:any;

    const items = { ...localStorage };
    // // // // // // // // // // // // // // // // console.log("item length")
    // // // // // // // // // // // // // // // // console.log(Object.keys(items).length)
    // // // // // // // // // // // // // // // // // console.log(items['local_todolist'].length)

    if (Object.keys(items).length != 0) {
      // // // // // // // // // // // // // // // // // console.log("items['local_todolist'].length")
      // // // // // // // // // // // // // // // // // console.log(JSON.parse(items['local_todolist']))
      // JSON.stringify(items['local_todolist'])

      var tempdata = JSON.parse(items['local_todolist'])
      // // // // // // // // // // // // // // // // console.log('tempdata')
      // // // // // // // // // // // // // // // // console.log(tempdata)

      for (let i = 0; i < tempdata.length; i++) {
        // // // // // // // // // // // // // // // // // console.log("ele")
        // // // // // // // // // // // // // // // // // console.log(tempdata[i])
        var tempcandi = JSON.parse(tempdata[i]['title'])
        // // // // // // // // // // // // // // // // console.log("tempcandi")
        // // // // // // // // // // // // // // // // console.log(tempcandi)

        // // // // // // // // // // // // // // // // // console.log(tempcandi['mediatype'])
        // mediatype: "movie", mediaid: "399566", addedtowatchlist: 0
        if (tempcandi[0]['mediatype'] == "movie") {
          // // // // // // // // // // // // // // // // console.log("checktype")
          // // // // // // // // // // // // // // // // // console.log(typeof(this.movieid))
          // // // // // // // // // // // // // // // // // console.log(typeof(tempcandi['mediaid']))
          if (tempcandi[0]['mediaid'] == this.movieid.toString()) {
            // // // // // // // // // // // // // // // // console.log("No!!!!!!!!!!!!")
            canbeadded = 1
            existingdataindex=i
          }
        }
      }

      // If it does not exist in localstorage, add it
      if (canbeadded == 0) {
        localStorage.clear()
        var movieObject = { mediatype: "movie", mediaid: this.movieid, addedtowatchlist: this.addedcheck };
        // // console.log(this.countilistandaddedwatch)
        this.countilistandaddedwatch.push(movieObject)

        // localStorage.setItem('conwatchlist', JSON.stringify(this.countilistandaddedwatch));
        this.localStorageService.storeOnLocalStorage(JSON.stringify(this.countilistandaddedwatch));

        for (let i =  0 ; i <tempdata.length; i++) {
          // for (let i =  tempdata.length - 1 ; i >= 0; i--) {
          
          
            var tempcandi = JSON.parse(tempdata[i]['title'])
            this.countilistandaddedwatch=[]

            movieObject = { mediatype: tempcandi[0]['mediatype'], mediaid: tempcandi[0]['mediaid'], addedtowatchlist: tempcandi[0]['addedtowatchlist']};
            this.countilistandaddedwatch.push(movieObject)
            this.localStorageService.storeOnLocalStorage(JSON.stringify(this.countilistandaddedwatch));
  
          
        }
      }


      // If it exists in localstorage, remove ex and add it at the end
      if (canbeadded ==  1) {
        


        localStorage.clear()
        var tempcandi = JSON.parse(tempdata[existingdataindex]['title'])
        this.countilistandaddedwatchexitolast=[]

        movieObject = { mediatype: tempcandi[0]['mediatype'], mediaid: tempcandi[0]['mediaid'], addedtowatchlist: tempcandi[0]['addedtowatchlist'] };
        this.countilistandaddedwatchexitolast.push(movieObject)
        this.localStorageService.storeOnLocalStorage(JSON.stringify(this.countilistandaddedwatchexitolast));


        // for (let i =  tempdata.length - 1 ; i >= 0; i--) {
          for (let i =  0 ; i <tempdata.length; i++){
          
          if(existingdataindex!=i)
          {
            var tempcandi = JSON.parse(tempdata[i]['title'])
            this.countilistandaddedwatch=[]

            movieObject = { mediatype: tempcandi[0]['mediatype'], mediaid: tempcandi[0]['mediaid'], addedtowatchlist: tempcandi[0]['addedtowatchlist'] };
            this.countilistandaddedwatch.push(movieObject)
            this.localStorageService.storeOnLocalStorage(JSON.stringify(this.countilistandaddedwatch));
  
          }
          // if(existingdataindex==i)
          // {
          //   var tempcandi = JSON.parse(tempdata[existingdataindex]['title'])
          //   this.countilistandaddedwatchexitolast=[]

          //   movieObject = { mediatype: tempcandi[0]['mediatype'], mediaid: tempcandi[0]['mediaid'], addedtowatchlist: this.addedcheck };
          //   this.countilistandaddedwatchexitolast.push(movieObject)
          //   // this.localStorageService.storeOnLocalStorage(JSON.stringify(this.countilistandaddedwatchexitolast));
  
          // }
 
        }

        // localStorage.clear()
        // this.localStorageService.storeOnLocalStorage(JSON.stringify(this.countilistandaddedwatchexitolast));





       
      }

    }


    if (Object.keys(items).length == 0) {
      var movieObject = { mediatype: "movie", mediaid: this.movieid, addedtowatchlist: this.addedcheck };
      this.countilistandaddedwatch.push(movieObject)

      // localStorage.setItem('conwatchlist', JSON.stringify(this.countilistandaddedwatch));
      this.localStorageService.storeOnLocalStorage(JSON.stringify(this.countilistandaddedwatch));

    }



  }



  // add to watch list
  addtowatchlistfunc() {

    // // // // console.log("this.inisettiout!=null")
    // // // // console.log(this.inisettiout)

    if(this.inisettiout!=null)
    {
      // // // // // console.log("this.inisettiout!=null")
      clearTimeout(this.inisettiout)
    }






    // check button part
    var checkalert: any = document.getElementById("addwatchlistbutton")
    if (checkalert.textContent == "Add to Watchlist") {

      var alertbutton: any = document.getElementById("alertunder")
      if(alertbutton!=null){
      alertbutton.style.display = "block";

      alertbutton.className = "alert alert-success"
      }

      var tempbtn: any = document.getElementById("buttontext")
      if(tempbtn!=null)
      {
      tempbtn.textContent = "Added to watchlist."

      }
      this.inisettiout=setTimeout(this.hidealertelem, 5000)



    }

    if (checkalert.textContent == "Remove from watchlist") {
      var alertbutton: any = document.getElementById("alertunder")

      if(alertbutton!=null){
        alertbutton.style.display = "block";

      alertbutton.className = "alert alert-danger"

      }
      // alertbutton.style.display = "block";

      // alertbutton.className = "alert alert-danger"

      var tempbtn: any = document.getElementById("buttontext")
      if(tempbtn!=null)
      {
        tempbtn.textContent = "Removed from watchlist."
      }
      // tempbtn.textContent = "Removed from watchlist."


      this.inisettiout=setTimeout(this.hidealertelem, 5000)
    }


    //////////////////////////////////////////////////////////////////













    var tempbtn: any = document.getElementById("addwatchlistbutton")
    tempbtn.textContent = "Add to Watchlist"



    this.addedcheck = 1;
    this.countilistandaddedwatch = [];

    // this.movieid=id

    var canbeadded = 0

    const items = { ...localStorage };
    // // // // // // // // // // // // // // // // console.log("item length")
    // // // // // // // // // // // // // // // // console.log(Object.keys(items).length)
    // // // // // // // // // // // // // // // // // console.log(items['local_todolist'].length)

    if (Object.keys(items).length != 0) {
      // // // // // // // // // // // // // // // // // console.log("items['local_todolist'].length")
      // // // // // // // // // // // // // // // // // console.log(JSON.parse(items['local_todolist']))
      // JSON.stringify(items['local_todolist'])

      var tempdata = JSON.parse(items['local_todolist'])
      // // // // // // // // // // // // // // // // console.log('// // // // // // // // // // // // // // // console.log(tempdata.length)')
      // // // // // // // // // // // // // // // // console.log(tempdata.length)

      for (let i = 0; i < tempdata.length; i++) {
        // // // // // // // // // // // // // // // // console.log("i")
        // // // // // // // // // // // // // // // // console.log(i)
        // // // // // // // // // // // // // // // // // console.log(tempdata[i])
        // var tempcandi = JSON.parse(tempdata[i])
        var tempcandi = tempdata[i]
        // // // // // // // // // // // // // // // console.log("tempcandi")
        // // // // // // // // // // // // // // // console.log(tempcandi)
        tempcandi = JSON.parse(tempcandi['title'])
        tempcandi = tempcandi[0]

        // tempcandi=JSON.parse(tempcandi)

        // // // // // // // // // // // // // // // // console.log('tempcandi')

        // // // // // // // // // // // // // // // // console.log(tempcandi)
        // // // // // // // // // // // // // // // // console.log(tempcandi[0])

        const mediatypeKey = 'mediatype';
        const mediaidKey = 'mediaid';
        const addedwatlistKey = 'addedtowatchlist';

        if (mediatypeKey in tempcandi) {
          // // // // // // // // // // // // // // // // console.log("!!!!!!!")
          // // // // // // // // // // // // // // // // console.log(tempcandi[myObjKey as keyof typeof tempcandi]);
          var temptypeKey = tempcandi[mediatypeKey as keyof typeof tempcandi]
          // // // // // // // // // // // // // // // // console.log(temptypeKey)
        }

        if (mediaidKey in tempcandi) {
          // // // // // // // // // // // // // // // // console.log("!!!!!!!")
          // // // // // // // // // // // // // // // // console.log(tempcandi[myObjKey as keyof typeof tempcandi]);
          var tempidKey = tempcandi[mediaidKey as keyof typeof tempcandi]
        }

        if (addedwatlistKey in tempcandi) {
          // // // // // // // // // // // // // // // // console.log("!!!!!!!")
          // // // // // // // // // // // // // // // // console.log(tempcandi[myObjKey as keyof typeof tempcandi]);
          var tempaddedwatlistKey = tempcandi[addedwatlistKey as keyof typeof tempcandi]
        }

        // // // // // // // // // // // // // // // // console.log("tempcandi['mediatype']")
        // // // // // // // // // // // // // // // // console.log(tempcandi['mediatype'])
        // mediatype: "movie", mediaid: "399566", addedtowatchlist: 0
        if (temptypeKey == "movie") {
          // if (tempcandi[0]['mediatype'] == "movie") {

          // // // // // // // // // // // // // console.log("this.movieid")

          // // // // // // // // // // // // // console.log(this.movieid)

          if (tempidKey == this.movieid.toString()) {
            // // // // // // // // // console.log("Here!!!!")
            // // // // // // // // // console.log(tempaddedwatlistKey)
            // if (tempcandi[0]['mediaid'] == this.movieid.toString()) {
            if (tempaddedwatlistKey == 0) {
              // // // // // // // // // // // // // // console.log("alreadyadded to watch list")
              // // // // // // // // console.log("Here aaaa!!!!")
              this.existinaddedwatlist = 1;
              canbeadded = 1
              this.exidlocation = i


              var tempbtn: any = document.getElementById("addwatchlistbutton")
              tempbtn.textContent = "Remove from watchlist"


              break;
            }

            if (tempaddedwatlistKey == 1) {

              // // // // // // // // console.log("Here bbbb!!!!")
              // // this.existinaddedwatlist = 1;
              canbeadded = 1
              this.exidlocation = i
              // // // // // // // // // // // console.log("I want to remove!!!")
              // // // // // // // // // // // console.log(this.exidlocation )
              break;


              // var tempbtn: any = document.getElementById("addwatchlistbutton")
              // tempbtn.textContent = "Add to Watchlist"


              // break;
            }
            // // // // // // // // // // // // // // // console.log("OMGA")

          }

        }
      }
      // // // // // // // // // // // // // // // console.log("OMGB")
      if (canbeadded == 1) {

        // // // // // // // // // // console.log("OMG")

        var tempdata = JSON.parse(items['local_todolist'])
        // // // // // // // // // // // // // // // // console.log('tempdata')
        // // // // // // // // // // // // // // // // console.log(tempdata)

        localStorage.clear()

        for (let i = 0; i < tempdata.length; i++) {
          // // // // // // // // // // // // // // // // // console.log("ele")
          // // // // // // // // // // // // // // // // // console.log(tempdata[i])

          // // // // // // // // // // console.log("OMG")
          var tempcandi = JSON.parse(tempdata[i]['title'])

          if (i == this.exidlocation) {

            var tempmovieObject: any;
            // // // // // // // // // console.log("OMG")
            // // // // // // // // // console.log(tempaddedwatlistKey)

            // If you do want to remove, use this code two if statement
            // register ele into addedwatchlist
            if (tempaddedwatlistKey == 0) {
              // // // // // // // // console.log("Here aaaa!!!!!!!!!!")
              tempmovieObject = [{ mediatype: tempcandi[0]['mediatype'], mediaid: tempcandi[0]['mediaid'], addedtowatchlist: this.addedcheck }];
              // this.localStorageService.storeOnLocalStorage(JSON.stringify(tempmovieObject));
            }

            // unregister ele from addedwatchlist
            if (tempaddedwatlistKey == 1) {
              // // // // // // // // console.log("Here bbbbb!!!!!!!!!!")
              tempmovieObject = [{ mediatype: tempcandi[0]['mediatype'], mediaid: tempcandi[0]['mediaid'], addedtowatchlist: 0 }];
              // tempmovieObject = [];
            }
            this.localStorageService.storeOnLocalStorage(JSON.stringify(tempmovieObject));





            // If you want to just remove from localstorage, use this code two if statement
            // register ele into addedwatchlist
            // if (tempaddedwatlistKey == 0) {
            //   tempmovieObject = [{ mediatype: tempcandi[0]['mediatype'], mediaid: tempcandi[0]['mediaid'], addedtowatchlist: this.addedcheck }];
            //   this.localStorageService.storeOnLocalStorage(JSON.stringify(tempmovieObject));
            // }

            // // unregister ele from addedwatchlist
            // if (tempaddedwatlistKey == 1) { }


          }






          if (i != this.exidlocation) {
            this.localStorageService.storeOnLocalStorage(JSON.stringify(tempcandi));


          }

        }

      }




    }


    if (Object.keys(items).length == 0) {
      var movieObject = { mediatype: "movie", mediaid: this.movieid, addedtowatchlist: this.addedcheck };
      this.countilistandaddedwatch.push(movieObject)

      // localStorage.setItem('conwatchlist', JSON.stringify(this.countilistandaddedwatch));
      this.localStorageService.storeOnLocalStorage(JSON.stringify(this.countilistandaddedwatch));

    }



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




  openLg(content: any, tempid: any) {
    // 
    // // // // // // // // console.log('tempid')
    // // // // // // // // console.log(tempid)



    this.httpClient.get(`/personsearch?&personid=${tempid}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' })
      .subscribe(
        data => {



          // // // // // // // // console.log("persondata")
          // // // // // // // // console.log(data)

          temppersondata = data

          // // // // // // // console.log(temppersondata)




          var arraytempinfo: any[] = [];
          // var castlistlength=castandcrew['cast'].length;

          // arraytempinfo.push([
          //   `https://image.tmdb.org/t/p/original/${temppersondata['profile_path']}`,
          //   temppersondata['name'],
          //   temppersondata['birthday'],
          //   temppersondata['place_of_birth'],
          //   temppersondata['gender'],
          //   temppersondata['homepage'],
          //   temppersondata['also_known_as'],
          //   temppersondata['known_for_department'],
          //   temppersondata['biography']

          // ])

          this.httpClient.get(`/externalinfo?&personid=${tempid}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' })
            .subscribe(
              data => {
                temppersonexternaldata = data

                if (temppersondata['gender'] == 1) {
                  temppersondata['gender'] = "Female"
                }
                if (temppersondata['gender'] == 2) {
                  temppersondata['gender'] = "Male"
                }

                arraytempinfo.push([
                  `https://image.tmdb.org/t/p/original/${temppersondata['profile_path']}`,
                  temppersondata['name'],
                  temppersondata['birthday'],
                  temppersondata['place_of_birth'],
                  temppersondata['gender'],
                  temppersondata['homepage'],
                  temppersondata['also_known_as'],
                  temppersondata['known_for_department'],
                  temppersondata['biography'],
                  temppersonexternaldata['imdb_id'],
                  temppersonexternaldata['facebook_id'],
                  temppersonexternaldata['instagram_id'],
                  temppersonexternaldata['twitter_id']

                ])

                // "http://imdb.com/name/"+
                // "http://facebook.com/"+
                // "http://instagram.com/"+
                // "http://twitter.com/"+

                this.persondata = arraytempinfo

                // // // // // // // console.log('arraytempinfo')
                // // // // // // // console.log(arraytempinfo)



              })


          // https://api.themoviedb.org/3/person/<<person_id>>/external_ids?api_key=<<api_key>>&language=en-US&page=1



























        }

      )


    this.modalService.open(content, { size: 'lg', scrollable: true });
  }



  socialtweethfreset() {
    var tweetanchor: any = document.getElementById("socialtweet")
    var youtubeaddresstweet = "https://twitter.com/intent/tweet?text=" + "Watch%20" + this.movietitle + "%20" + "https://www.youtube.com/watch?v=" + this.movievideo + "%20%23USC%20%23CSCI571%20%23FightOn"

    // var youtubeaddress="https://twitter.com/intent/tweet?text=https://www.youtube.com/watch?v="

    // `https://image.tmdb.org/t/p/original/${temppersondata['profile_path']}`

    if(tweetanchor!=null)
    {
      tweetanchor.href = youtubeaddresstweet

    }
    

    // https://www.facebook.com/sharer/sharer.php?u=example.org

    var facebookanchor: any = document.getElementById("socialfacebook")
    var youtubeaddressface = "https://www.facebook.com/sharer/sharer.php?u=" + "https://www.youtube.com/watch?v=" + this.movievideo
    
    if(facebookanchor!=null)
    {
      facebookanchor.href = youtubeaddresstweet

    }
    
  }



  // fadeOutIn(elem: any, speed: any) {

  //   if (!elem.style.opacity) {
  //     elem.style.opacity = 1;
  //   } // end if

  //   var outInterval = setInterval(function () {
  //     elem.style.opacity -= 0.02;
  //     if (elem.style.opacity <= 0) {
  //       clearInterval(outInterval);
  //       var inInterval = setInterval(function () {
  //         elem.style.opacity = Number(elem.style.opacity) + 0.02;
  //         if (elem.style.opacity >= 1)
  //           clearInterval(inInterval);
  //       }, speed / 50);
  //     } // end if
  //   }, speed / 50);

  // } // end fadeOut()


  //click x button on alert
  hidealertelem() {
    var alertbutton: any = document.getElementById("alertunder")



    if(this.inisettiout!=null)
    {
      clearTimeout(this.inisettiout)
    }




    // // 
    // var elem = alertbutton
    // var speed = 5000
    // if (!elem.style.opacity) {
    //   elem.style.opacity = 1;
    // } // end if

    // var outInterval = setInterval(function () {
    //   elem.style.opacity -= 0.02;
    //   if (elem.style.opacity <= 0) {
    //     clearInterval(outInterval);
    //     var inInterval = setInterval(function () {
    //       elem.style.opacity = Number(elem.style.opacity) + 0.02;
    //       if (elem.style.opacity >= 1)
    //         clearInterval(inInterval);
    //     }, speed / 100);
    //   } // end if
    // }, speed / 100);
    // // 




    if(alertbutton!=null)
    {
      alertbutton.style.display = "none";
    } 

    // alertbutton.style.display = "none";

  }












 // rec movie
 touchstartfuncrecmo(event:any,i:any)
 {

   // // console.log("touchstartfunc")
   // // console.log(typeof i)
   var num = i;
   num.toString()
   var sel="moviedetailrec"+num.toString()
   // console.log(sel)
   var seldiv:any= document.getElementById(sel)
   // seldiv.querySelector('.mobilemediatitle')
   var head:any=seldiv.querySelector('.mobilemediatitlenomain')
   // var head:any=seldiv.closest("h3")
   
   var img:any=seldiv.querySelector('.eachimgformobile')

   var capblack:any=seldiv.querySelector('#grad1')
   // var img:any=seldiv.closest("img")

   // // console.log(seldiv)
   // // console.log(head)
   // // console.log(img)
   
   

   head.style.transition = "all 0.01s ease-in";
   img.style.transition = "all 0.01s ease-in";
   capblack.style.transition ="all 0.01s ease-in";

   head.style.transform ="scale(1.08)";
   img.style.transform ="scale(1.08)";
   capblack.style.transform ="scale(1.08)";
 }

 touchendfuncrecmo(event:any,i:any)
 {


   var num = i;
   num.toString()
   var sel="moviedetailrec"+num.toString()
   // console.log(sel)
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











  // Simi movie
  touchstartfuncsimimo(event:any,i:any)
  {

    // // console.log("touchstartfunc")
    // // console.log(typeof i)
    var num = i;
    num.toString()
    var sel="moviedetailsimi"+num.toString()
    // console.log(sel)
    var seldiv:any= document.getElementById(sel)
    // seldiv.querySelector('.mobilemediatitle')
    var head:any=seldiv.querySelector('.mobilemediatitlenomain')
    // var head:any=seldiv.closest("h3")
    
    var img:any=seldiv.querySelector('.eachimgformobile')

    var capblack:any=seldiv.querySelector('#grad1')
    // var img:any=seldiv.closest("img")

    // // console.log(seldiv)
    // // console.log(head)
    // // console.log(img)
    
    

    head.style.transition = "all 0.01s ease-in";
    img.style.transition = "all 0.01s ease-in";
    capblack.style.transition ="all 0.01s ease-in";

    head.style.transform ="scale(1.08)";
    img.style.transform ="scale(1.08)";
    capblack.style.transform ="scale(1.08)";
  }

  touchendfuncsimimo(event:any,i:any)
  {


    var num = i;
    num.toString()
    var sel="moviedetailsimi"+num.toString()
    // console.log(sel)
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













}
