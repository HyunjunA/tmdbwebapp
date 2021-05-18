import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

import { LocalStorageService } from '../local-storage.service';
import { NgbCarousel, NgbModal, NgbPopoverConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

var castandcrew: any;
var temppersondata: any;
var temppersonexternaldata: any;


var recortvsmedia: any;

var simimoviesmedia: any;

var tvreview:any;

@Component({
  selector: 'app-tvdetail',
  templateUrl: './tvdetail.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./tvdetail.component.css'],
  providers: [NgbPopoverConfig]
})
export class TvdetailComponent implements OnInit {

  closeResult: string | undefined;

  mobile: boolean = false;



  tvid:any

  tvdata: any;
  tvidyoutubekey: any;
  tvreivew: any;
  tvreleaseyear:any;
  tvpoint:any;
  tvruningtime:any;
  thistvgenrename:any;
  tvspoklan:any;

  tvoverview:any;
  tvtitle:any;
  tvvoteaver:any;
  tvtagline:any;
  tvcredits:any;
  tvrecommended:any;
  tvsimilar:any;
  tvvideo:any;

  tvepiruntime:any;

  addedwatchlist:any[] =[];
  addedcheck:any=0;
  countilistandaddedwatch: any[] = [];
  countilistandaddedwatchexitolast: any[] = [];

  exidlocation: any = "nope";


  existinaddedwatlist:any;

  persondata: any


  recotvsmediainfoset:any;
  arraytemprecomovieinfoglo: any
  arraytemprecomovieinfogloformobile:any;
  recotvsmediainfosetformobile:any;

  arraytempsimimovieinfoglo: any
  simitvmediainfoset:any;
  arraytempsimimovieinfogloformobile:any;
  simitvmediainfosetformobile:any;


  reviewinfo:any[]=[];


  curwinsizedivided:any;

  youtubewidth:any;
  youtubeheight:any;

  
  castwidth:any;

  castheight:any;

  inisettiout:any=null;



  rectv:any=null;
  simitv:any=null;


  constructor(public activatedRoute: ActivatedRoute ,private router:Router, private httpClient: HttpClient,private localStorageService: LocalStorageService, private modalService: NgbModal, config: NgbPopoverConfig, public breakpointObserver: BreakpointObserver) {
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    config.placement = 'top';
    config.triggers = 'hover';
    
    
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };  }
  
  ngOnInit() {


    this.mobile = false;
    
   


    // console.log("window.screen.width")
    // console.log(window.screen.width/6)

    this.curwinsizedivided = Math.round(window.screen.width/6);

    // this.youtubewidth=Math.round(window.screen.width/2.5);

    // this.youtubeheight=Math.round(window.screen.width/4);

    // var reimcrita=1024;
    var reimcrita= 700;
    if (window.screen.width <= reimcrita) { // 768px portrait
      this.mobile = true;
      // console.log("This is mobile!.")


    }


    if (this.mobile == true)
    {
      this.youtubewidth = Math.round(window.screen.width * 0.8);

      this.youtubeheight = Math.round(window.screen.width * 0.65);

      this.castwidth = Math.round(window.screen.width * 0.41);

      this.castheight = Math.round(window.screen.width * 0.2);
         // console.log("This is mobile!.")
    }


    if (this.mobile == false)
    {
      this.youtubewidth = Math.round(window.screen.width / 2);

      this.youtubeheight = Math.round(window.screen.width / 3.4);
    // console.log("This is not mobile!.")
    }


    // this.state$ = this.activatedRoute.paramMap.pipe(map(() => window.history.state))
    // // // console.log('haha tv')
    var id=this.activatedRoute.snapshot.paramMap.get('id');
    // // console.log("Hello tv inside")
    // // console.log(id)
    this.tvid=id


    this.checkaddedlistandbutton(id)

    // addingn to contiue watching
    this.addtocounwatlistfunc(id)


    // Full cast and crew
    this.httpClient.get(`/gettvshowcredits?&tvid=${id}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' })
    .subscribe(
      data => {

        this.tvcredits = data

        castandcrew = data

          // // console.log(castandcrew)




          var arraytempinfo = [];
          
          // var castlistlength=castandcrew['cast'].length;

          for (let i = 0; i < castandcrew['cast'].length; i++) {

            // // console.log(`https://image.tmdb.org/t/p/original/${castandcrew['cast'][i]['profile_path']}`)


            // if (castandcrew['cast'][i]['profile_path']==undefined)
            // {
            //   arraytempinfo.push([`https://image.tmdb.org/t/p/original/${castandcrew['cast'][i]['profile_path']}`, castandcrew['cast'][i]['name'], castandcrew['cast'][i]['character'], castandcrew['cast'][i]['id']])
            
            // }

            if (castandcrew['cast'][i]['profile_path']!=undefined)
            {
              arraytempinfo.push([`https://image.tmdb.org/t/p/original/${castandcrew['cast'][i]['profile_path']}`, castandcrew['cast'][i]['name'], castandcrew['cast'][i]['character'], castandcrew['cast'][i]['id']])
            }            
            

          }
          this.tvcredits = arraytempinfo

      }
    );


    // Recommended TV Shows
    this.httpClient.get(`/gettvrecommended?&tvid=${id}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' })
    .subscribe(
      data => {

        // this.tvrecommended = data

        recortvsmedia  = data
          
          

          this.arraytemprecomovieinfoglo = [];
          this.arraytemprecomovieinfogloformobile = [];

          for (let i = 0; i < Object.keys(recortvsmedia["results"]).length; i++) {
            // // // // // // consolelog (nowplayingmedia['results'][i]);
            if(recortvsmedia['results'][i]['poster_path']!=null)
            {
            this.arraytemprecomovieinfoglo.push([`https://image.tmdb.org/t/p/w500/${recortvsmedia['results'][i]['poster_path']}`, recortvsmedia['results'][i]['name'], `/watch/tv/${recortvsmedia['results'][i]['id']}`])
            this.arraytemprecomovieinfogloformobile.push([`https://image.tmdb.org/t/p/w500/${recortvsmedia['results'][i]['poster_path']}`, recortvsmedia['results'][i]['name'], `/watch/tv/${recortvsmedia['results'][i]['id']}`])
            }
            // this.arraytemprecomovieinfoglo.push(`https://image.tmdb.org/t/p/w500/${recormoviesmedia['results'][i]['poster_path']}`)


          }
          // // // // // // consolelog(this.arraytemprecomovieinfoglo)
          // this.popularmoviesmediainfo=arraytempinfo;

          // this.games = ["a", "b", "c", "d", "e"]; // arraytempinfo
          // this.gamesFormatted = []; // this.popularmoviesmediainfo
          this.recotvsmediainfoset = [];
          this.recotvsmediainfosetformobile = [];
          var j = -1;

          if(true){

          

          for (var i = 0; i < this.arraytemprecomovieinfoglo.length; i++) {

            // // // // // // consolelog("haha")
            // // // // // // consolelog(this.mobile)
            // // // // consolelog("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
            // // // // consolelog(this.arraytemprecomovieinfoglo[i])

            this.rectv=1;
  // simitv:any=null;
            if (i % 6 == 0) {
              j++;
              this.recotvsmediainfoset[j] = [];
              this.recotvsmediainfoset[j].push(this.arraytemprecomovieinfoglo[i]);
            }
            else {
              this.recotvsmediainfoset[j].push(this.arraytemprecomovieinfoglo[i]);
            }
          }
        }
        if(true){
          // this.recotvsmediainfoset = this.arraytemprecomovieinfoglo
          this.recotvsmediainfosetformobile=this.arraytemprecomovieinfogloformobile
        }

      }
    );

    // Similar
    this.httpClient.get(`/gettvresimilar?&tvid=${id}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' })
    .subscribe(
      data => {

        // this.tvsimilar = data
        simimoviesmedia = data
        // // // // // consolelog(Object.keys(simimoviesmedia).length)

        this.arraytempsimimovieinfoglo = [];
        this.arraytempsimimovieinfogloformobile = [];

        for (let i = 0; i < Object.keys(simimoviesmedia["results"]).length; i++) {
          // // // // // // consolelog (nowplayingmedia['results'][i]);

          if(simimoviesmedia['results'][i]['poster_path']!=null)
          {
          this.arraytempsimimovieinfoglo.push([`https://image.tmdb.org/t/p/w500/${simimoviesmedia['results'][i]['poster_path']}`, simimoviesmedia['results'][i]['name'], `/watch/tv/${simimoviesmedia['results'][i]['id']}`])
          this.arraytempsimimovieinfogloformobile.push([`https://image.tmdb.org/t/p/w500/${simimoviesmedia['results'][i]['poster_path']}`, simimoviesmedia['results'][i]['name'], `/watch/tv/${simimoviesmedia['results'][i]['id']}`])
        }
          // this.arraytempsimimovieinfoglo.push(`https://image.tmdb.org/t/p/w500/${simimoviesmedia['results'][i]['poster_path']}`)


        }
        // // // // // // consolelog(this.arraytempsimimovieinfoglo)
        // this.simimoviesmediainfo=arraytempinfo;

        // this.games = ["a", "b", "c", "d", "e"]; // arraytempinfo
        // this.gamesFormatted = []; // this.simimoviesmediainfo
        this.simitvmediainfoset = [];
        this.simitvmediainfosetformobile = [];
        var j = -1;

        if(true){

        for (var i = 0; i < this.arraytempsimimovieinfoglo.length; i++) {

          // // // // // // consolelog("haha")
          // // // // // // consolelog(this.mobile)
          // // // // consolelog("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
          // // // // consolelog(this.arraytempsimimovieinfoglo[i])
          this.simitv=1;
          if (i % 6 == 0) {
            j++;
            this.simitvmediainfoset[j] = [];
            this.simitvmediainfoset[j].push(this.arraytempsimimovieinfoglo[i]);
          }
          else {
            this.simitvmediainfoset[j].push(this.arraytempsimimovieinfoglo[i]);
          }
        }
      }
      if(true)
      {
        // this.simitvmediainfoset =  this.arraytempsimimovieinfoglo
        this.simitvmediainfosetformobile = this.arraytempsimimovieinfogloformobile
      }

      }
    );


    //TV Video Endpoint
    this.httpClient.get(`/gettvvideo?&tvid=${id}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' })
      .subscribe(
        data => {

          this.tvvideo = data

          // this.tvvideo = data
          // // console.log("HAHA")  
          // // console.log(this.tvvideo['results'][0]['key'])
          // this.tvvideo=this.tvvideo['results'][0]['key']


          // console.log("this.movievideo")
          // console.log(this.tvvideo['results'])
          var passtemp=0;
          if(this.tvvideo['results'].length==0)
          {
            this.tvvideo ="tzkWB85ULJY";
            passtemp=1;
            
          }

          if(passtemp==0)
          {
            // console.log("Ah?")
            this.tvvideo = this.tvvideo['results'][0]['key'];

          }

          this.httpClient.get(`/tvsearchwithid?&tvid=${id}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' })
      .subscribe(
        data => {
          // // // console.log(data["adults"])
          this.tvdata = data
          // // // console.log(this.tvdata)
         
          this.tvtitle=this.tvdata['name'];
          
          this.socialtweethfreset()

         

        }
      );

        }
      );

    

    // TV review data
    this.httpClient.get(`/gettvshowreviews?&tvid=${id}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' })
      .subscribe(
        data => {
          
          // this.tvreivew = data
          // // console.log(this.tvreivew)
          tvreview=data
        
        // // console.log(tvreview)
        

        for(let i=0;i<tvreview['results'].length;i++)
        {
          // tvreview['results'][i]['author']
          // tvreview['results'][i]['content']
          // tvreview['results'][i]['created_at']
          // tvreview['results'][i]['url']
          // tvreview['results'][i]['author_details']['rating']
          var avapath;

          // // console.log(tvreview['results'][i]['avatar_path'])
          // // console.log(tvreview['results'][i]['avatar_path'])
          
          if(tvreview['results'][i]['author_details']['avatar_path'])
          {
            // // console.log("KKKKKKKKKK")
            if (tvreview['results'][i]['author_details']['avatar_path'].indexOf('http') >= 0) { 
              avapath=tvreview['results'][i]['author_details']['avatar_path']
              // // console.log(avapath[0])
              avapath = avapath.slice(1);
            
            } else { 
              avapath="https://image.tmdb.org/t/p/original/"+tvreview['results'][i]['author_details']['avatar_path']
            
            }
            

          }
          if(tvreview['results'][i]['author_details']['avatar_path']==undefined || tvreview['results'][i]['author_details']['avatar_path']==null)
          {
            avapath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU%E2%80%9D"


          }

          if(tvreview['results'][i]['author_details']['rating']==null)
          {
            tvreview['results'][i]['author_details']['rating']=0
          }


          var utcDate = tvreview['results'][i]['created_at'];
            // var localDate = new Date(utcDate)

            const monthNames = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"
            ];

            var d = new Date(utcDate);
            var monthfullname=monthNames[d.getMonth()]

            // var dt = new Date();
            var date = d.getDay()
            var h = d.getHours(), m = d.getMinutes(), s=d.getSeconds();
            var _time = (h > 12) ? (h - 12 + ':' + m + ':' + s + ' PM') : (h + ':' + m + ':' + s + ' AM');

            // // console.log([monthfullname, date, _time])
            var datainf=monthfullname.toString() + " " + date.toString() + ", " + _time.toString()


          this.reviewinfo.push([
            tvreview['results'][i]['author'],
            tvreview['results'][i]['content'],
            datainf,
            tvreview['results'][i]['url'],
            tvreview['results'][i]['author_details']['rating'],
            avapath,
            tvreview['results'].length])
          
            if (i==9)
            {
              break;
            }
        
          }
          // console.log("this.reviewinfo")
          // console.log(this.reviewinfo)
        }
      );

    // TV detail
    this.httpClient.get(`/tvsearchwithid?&tvid=${id}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' })
      .subscribe(
        data => {
          // // // console.log(data["adults"])
          this.tvdata = data
          // // // console.log(this.tvdata)
          // // // console.log(this.tvdata['videos']['results'])
          
          // this.tvidyoutubekey = this.tvdata['videos']['results'][0]['key']
          // // // console.log(this.tvidyoutubekey)

          this.tvreleaseyear=this.tvdata['first_air_date']
          var res = this.tvreleaseyear.split("-")
          this.tvreleaseyear = res[0];

          this.tvpoint=this.tvdata['vote_average']
          if (this.tvpoint == null || this.tvpoint == undefined) {
            this.tvpoint = "0"
          }
          this.tvruningtime=this.tvdata['episode_run_time']

          console.log(this.tvdata['episode_run_time'])
          
          // this.movieruningtime = this.moviedata['runtime']
          var hours = Math.floor(this.tvruningtime / 60);
          var minutes = this.tvruningtime % 60;
          // hours + ":" + minutes;    

          if(hours==0 && minutes!=0)
          {
            this.tvruningtime = minutes + "mins";
          }

          if(hours!=0 && minutes==0)
          {
            this.tvruningtime = hours + "hrs";
          }

          if(hours!=0 && minutes!=0)
          {
            this.tvruningtime = hours + "hrs" + " " + minutes + "mins";
          }

          // this.tvruningtime = hours + "hrs" + " " + minutes + "mins";
          // this.thistvgenrename
           // var temparr: any[] = [];
           var temparr: any;
           var templ: any = this.tvdata['genres'].length - 1;
          
           
           for (let i = 0; i < this.tvdata['genres'].length; i++) {
 
             // temparr.push(this.moviedata['genres'][i]['name'])
             if (i == 0 && this.tvdata['genres'].length!=1) {
               // // // console.log(this.moviedata['genres'][i]['name'])
               temparr = this.tvdata['genres'][i]['name'] + ", "
             }
             if (i == 0 && this.tvdata['genres'].length==1) {
              // // // console.log(this.moviedata['genres'][i]['name'])
              temparr = this.tvdata['genres'][i]['name'] 
            }

             if (i == 0) {
              // // // console.log(this.moviedata['genres'][i]['name'])
              temparr = this.tvdata['genres'][i]['name'] + ", "
            }
 
             if (i < templ && i > 0) {
               // // // console.log(this.moviedata['genres'][i]['name'])
               temparr += this.tvdata['genres'][i]['name'] + ", "
             }
 
             if (i == templ) {
               temparr += this.tvdata['genres'][i]['name']
             }
             // // // console.log(this.moviedata['genres'][i]['name'])
           }
           this.thistvgenrename = temparr

          temparr=[];
          for (let i = 0; i < this.tvdata['spoken_languages'].length; i++) {
            
            // temparr.push(this.moviedata['spoken_languages'][i]['english_name'])
            
            if (i == 0 && this.tvdata['spoken_languages'].length!=1) {
              // // // console.log(this.moviedata['genres'][i]['name'])
              temparr = this.tvdata['spoken_languages'][i]['english_name'] + ", "
          
            }
            if (i == 0 && this.tvdata['spoken_languages'].length==1) {
              // // // console.log(this.moviedata['genres'][i]['name'])
              temparr = this.tvdata['spoken_languages'][i]['english_name'] 
          
            }
            if (i < templ && i > 0) {
              // // // console.log(this.moviedata['genres'][i]['name'])
              temparr += this.tvdata['spoken_languages'][i]['english_name'] + ", "
            }
            if (i == templ) {
              temparr += this.tvdata['spoken_languages'][i]['english_name']
            }

          }
          this.tvspoklan=temparr


          this.tvoverview=this.tvdata['overview'];
          this.tvtitle=this.tvdata['name'];
          this.tvvoteaver=this.tvdata['overview'];
          this.tvtagline=this.tvdata['tagline']
          

          temparr=[];
          for (let i = 0; i < this.tvdata['episode_run_time'].length; i++) {
            temparr.push(this.tvdata['episode_run_time'][i])
          }
          this.tvepiruntime=temparr
         

         

        }
      );



      this.breakpointObserver
      // .observe(['(max-width: 768px)', '(min-width: 320px)'])
      // .observe(['(min-width: 600px)'])
      .observe(['(min-width: 700px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          // console.log('Viewport is 500px or over!');
          // console.log(state.matches);
          // console.log("comport tvdetail!!!")
          // var temp: any=document.getElementById("jajaja");
          // temp.style.display = "none";

          // this.mobile = false;

          var temp: any=document.getElementById("rectvdetailfornonmobile");
          if(temp!=null)
          {temp.style.display = "block";}
          var temp: any = document.getElementById("rectvdetailformobile");
          if(temp!=null)
          {temp.style.display = "none";}


          var temp: any=document.getElementById("simitvdetailfornonmobile");
          if(temp!=null)
          {temp.style.display = "block";}
          var temp: any = document.getElementById("simitvdetailformobile");
          if(temp!=null)
          {temp.style.display = "none";}

          // var temp: any=document.getElementById("nonmobileconwatch");
          // temp.style.display = "block";
          // var temp: any = document.getElementById("mobileconwatch");
          // temp.style.display = "none";

          
          // window.location.reload();
        } 
        else {
          // console.log('Viewport is getting smaller!');
          // window.location.reload();
          // var temp: any=document.getElementById("jajaja");
          // temp.style.display = "block";

          // this.mobile = true;
          // window.location.reload();



          var temp: any=document.getElementById("rectvdetailfornonmobile");
          if(temp!=null)
          {temp.style.display = "none";}
          var temp: any = document.getElementById("rectvdetailformobile");
          if(temp!=null)
          {temp.style.display = "block";}

          var temp: any=document.getElementById("simitvdetailfornonmobile");
          if(temp!=null)
          {temp.style.display = "none";}
          var temp: any = document.getElementById("simitvdetailformobile");
          if(temp!=null)
          {temp.style.display = "block";}

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

    // this.tvid=id

    // // console.log("ENTER!!!")

    this.existinaddedwatlist = 0

    const items = { ...localStorage };

    // // // console.log("items")
    // // // console.log(items)


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

          // // // // // console.log("tempaddedwatlistKey")
          // // // // // console.log(tempaddedwatlistKey)
          // // // // // console.log(this.tvid)
        }


        if (temptypeKey == "tv") {
          // if (tempcandi[0]['mediatype'] == "tv") {


          if (tempidKey == this.tvid.toString()) {

            if (tempaddedwatlistKey == 1) {
              // // // // // console.log("alreadyadded to watch list")
              this.existinaddedwatlist = 1;

              var tempbtn: any = document.getElementById("addwatchlistbutton")
              tempbtn.textContent = "Remove from watchlist"

              break;
            }

            if (tempaddedwatlistKey == 0) {
              // // // // // console.log("alreadyadded to watch list")
              this.existinaddedwatlist = 1;

              var tempbtn: any = document.getElementById("addwatchlistbutton")
              tempbtn.textContent = "Add to Watchlist"
              
              break;
            }

          }

        }
      }
      // // // // // // console.log("existinaddedwatlist")
      // // // // // // console.log(existinaddedwatlist)





    }

    












    

   






  }













  addtocounwatlistfunc(id: any) {
    this.addedcheck = 0;
    this.tvid = id

    var canbeadded = 0
    var existingdataindex:any;

    const items = { ...localStorage };
    // // // console.log("item length")
    // // // console.log(Object.keys(items).length)
    // // // // console.log(items['local_todolist'].length)

    if (Object.keys(items).length != 0) {
      // // // // console.log("items['local_todolist'].length")
      // // // // console.log(JSON.parse(items['local_todolist']))
      // JSON.stringify(items['local_todolist'])

      var tempdata = JSON.parse(items['local_todolist'])
      // // // console.log('tempdata')
      // // // console.log(tempdata)

      for (let i = 0; i < tempdata.length; i++) {
        // // // // console.log("ele")
        // // // // console.log(tempdata[i])
        var tempcandi = JSON.parse(tempdata[i]['title'])
        // // // console.log("tempcandi")
        // // // console.log(tempcandi)

        // // // // console.log(tempcandi['mediatype'])
        // mediatype: "tv", mediaid: "399566", addedtowatchlist: 0
        if (tempcandi[0]['mediatype'] == "tv") {
          // // // console.log("checktype")
          // // // // console.log(typeof(this.tvid))
          // // // // console.log(typeof(tempcandi['mediaid']))
          if (tempcandi[0]['mediaid'] == this.tvid.toString()) {
            // // // console.log("No!!!!!!!!!!!!")
            canbeadded = 1
            existingdataindex=i
          }
        }
      }

      // If it does not exist in localstorage, add it
      if (canbeadded == 0) {
        localStorage.clear()
        var tvObject = { mediatype: "tv", mediaid: id, addedtowatchlist: this.addedcheck };
        this.countilistandaddedwatch.push(tvObject)

        // localStorage.setItem('conwatchlist', JSON.stringify(this.countilistandaddedwatch));
        this.localStorageService.storeOnLocalStorage(JSON.stringify(this.countilistandaddedwatch));

        for (let i =  0 ; i <tempdata.length; i++) {
          // for (let i =  tempdata.length - 1 ; i >= 0; i--) {
          
          
            var tempcandi = JSON.parse(tempdata[i]['title'])
            this.countilistandaddedwatch=[]

            tvObject = { mediatype: tempcandi[0]['mediatype'], mediaid: tempcandi[0]['mediaid'], addedtowatchlist: tempcandi[0]['addedtowatchlist']};
            this.countilistandaddedwatch.push(tvObject)
            this.localStorageService.storeOnLocalStorage(JSON.stringify(this.countilistandaddedwatch));
  
          
        }
      
      
      }
      // If it exists in localstorage, remove ex and add it at the end
      if (canbeadded ==  1) {
        

        
        localStorage.clear()
        var tempcandi = JSON.parse(tempdata[existingdataindex]['title'])
        this.countilistandaddedwatchexitolast=[]

        tvObject = { mediatype: tempcandi[0]['mediatype'], mediaid: tempcandi[0]['mediaid'], addedtowatchlist: tempcandi[0]['addedtowatchlist'] };
        this.countilistandaddedwatchexitolast.push(tvObject)
        this.localStorageService.storeOnLocalStorage(JSON.stringify(this.countilistandaddedwatchexitolast));


        // for (let i =  tempdata.length - 1 ; i >= 0; i--) {
          for (let i =  0 ; i <tempdata.length; i++){
          
          if(existingdataindex!=i)
          {
            var tempcandi = JSON.parse(tempdata[i]['title'])
            this.countilistandaddedwatch=[]

            tvObject = { mediatype: tempcandi[0]['mediatype'], mediaid: tempcandi[0]['mediaid'], addedtowatchlist: tempcandi[0]['addedtowatchlist'] };
            this.countilistandaddedwatch.push(tvObject)
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
      var tvObject = { mediatype: "tv", mediaid: id, addedtowatchlist: this.addedcheck };
      this.countilistandaddedwatch.push(tvObject)

      // localStorage.setItem('conwatchlist', JSON.stringify(this.countilistandaddedwatch));
      this.localStorageService.storeOnLocalStorage(JSON.stringify(this.countilistandaddedwatch));

    }



  }

  async addtowatchlistfunc() {



    // // console.log("this.inisettiout!=null")
    // // console.log(this.inisettiout)

    if(this.inisettiout!=null)
    {
      // // // console.log("this.inisettiout!=null")
      clearTimeout(this.inisettiout)
    }




    // check button part
    var checkalert: any = document.getElementById("addwatchlistbutton")
    if (checkalert.textContent == "Add to Watchlist") {

      var alertbutton: any = document.getElementById("alertunder")
      if(alertbutton!=null)
      {alertbutton.style.display = "block";

      alertbutton.className = "alert alert-success"
    }

    if(tempbtn!=null)
      {
      var tempbtn: any = document.getElementById("buttontext")
      tempbtn.textContent = "Added to watchlist."
      }

      this.inisettiout=setTimeout(this.hidealertelem, 5000)



    }

    if (checkalert.textContent == "Remove from watchlist") {
      var alertbutton: any = document.getElementById("alertunder")
      if(alertbutton!=null)
      {
      alertbutton.style.display = "block";

      alertbutton.className = "alert alert-danger"
      }

      if(tempbtn!=null)
      {
      var tempbtn: any = document.getElementById("buttontext")
      tempbtn.textContent = "Removed from watchlist."
      }

      this.inisettiout=setTimeout(this.hidealertelem, 5000)
    }


    //////////////////////////////////////////////////////////////////
  



    var tempbtn: any = document.getElementById("addwatchlistbutton")
    tempbtn.textContent = "Add to Watchlist"



    this.addedcheck = 1;
    this.countilistandaddedwatch = [];

    // this.tvid=id

    var canbeadded = 0

    const items = { ...localStorage };
    // // // // // // // console.log("item length")
    // // // // // // // console.log(Object.keys(items).length)
    // // // // // // // // console.log(items['local_todolist'].length)

    if (Object.keys(items).length != 0) {
      // // // // // // // // console.log("items['local_todolist'].length")
      // // // // // // // // console.log(JSON.parse(items['local_todolist']))
      // JSON.stringify(items['local_todolist'])

      var tempdata = JSON.parse(items['local_todolist'])
      // // // // // // // console.log('// // // // // // console.log(tempdata.length)')
      // // // // // // // console.log(tempdata.length)

      for (let i = 0; i < tempdata.length; i++) {
        // // // // // // // console.log("i")
        // // // // // // // console.log(i)
        // // // // // // // // console.log(tempdata[i])
        // var tempcandi = JSON.parse(tempdata[i])
        var tempcandi = tempdata[i]
        // // // // // // console.log("tempcandi")
        // // // // // // console.log(tempcandi)
        tempcandi = JSON.parse(tempcandi['title'])
        tempcandi = tempcandi[0]

        // tempcandi=JSON.parse(tempcandi)

        // // // // // // // console.log('tempcandi')

        // // // // // // // console.log(tempcandi)
        // // // // // // // console.log(tempcandi[0])

        const mediatypeKey = 'mediatype';
        const mediaidKey = 'mediaid';
        const addedwatlistKey = 'addedtowatchlist';

        if (mediatypeKey in tempcandi) {
          // // // // // // // console.log("!!!!!!!")
          // // // // // // // console.log(tempcandi[myObjKey as keyof typeof tempcandi]);
          var temptypeKey = tempcandi[mediatypeKey as keyof typeof tempcandi]
          // // // // // // // console.log(temptypeKey)
        }

        if (mediaidKey in tempcandi) {
          // // // // // // // console.log("!!!!!!!")
          // // // // // // // console.log(tempcandi[myObjKey as keyof typeof tempcandi]);
          var tempidKey = tempcandi[mediaidKey as keyof typeof tempcandi]
        }

        if (addedwatlistKey in tempcandi) {
          // // // // // // // console.log("!!!!!!!")
          // // // // // // // console.log(tempcandi[myObjKey as keyof typeof tempcandi]);
          var tempaddedwatlistKey = tempcandi[addedwatlistKey as keyof typeof tempcandi]
        }

        // // // // // // // console.log("tempcandi['mediatype']")
        // // // // // // // console.log(tempcandi['mediatype'])
        // mediatype: "tv", mediaid: "399566", addedtowatchlist: 0
        if (temptypeKey == "tv") {
          // if (tempcandi[0]['mediatype'] == "tv") {

          // // // // console.log("this.tvid")

          // // // // console.log(this.tvid)

          if (tempidKey == this.tvid.toString()) {
            // if (tempcandi[0]['mediaid'] == this.tvid.toString()) {
              if (tempaddedwatlistKey == 0) {
                // // // // // console.log("alreadyadded to watch list")
                this.existinaddedwatlist = 1;
                canbeadded = 1
                this.exidlocation = i


                var tempbtn: any = document.getElementById("addwatchlistbutton")
                tempbtn.textContent = "Remove from watchlist"


                break;
              }

              if (tempaddedwatlistKey == 1) {
                
                
                // // this.existinaddedwatlist = 1;
                canbeadded = 1
                this.exidlocation = i
                // // console.log("I want to remove!!!")
                // // console.log(this.exidlocation )

                

                // var tempbtn: any = document.getElementById("addwatchlistbutton")
                // tempbtn.textContent = "Add to Watchlist"


                break;
              }
            // // // // // // console.log("OMGA")
            
          }

        }
      }
      // // // // // // console.log("OMGB")
      if (canbeadded == 1) {

        // // // // // // // console.log("OMG")

        var tempdata = JSON.parse(items['local_todolist'])
        // // // // // // // console.log('tempdata')
        // // // // // // // console.log(tempdata)

        localStorage.clear()

        for (let i = 0; i < tempdata.length; i++) {
          // // // // // // // // console.log("ele")
          // // // // // // // // console.log(tempdata[i])
          // items['local_todolist'] only has title attribute
          var tempcandi = JSON.parse(tempdata[i]['title'])

          if (i == this.exidlocation) {
            
            var temptvObject:any;



            // register ele into addedwatchlist
            if (tempaddedwatlistKey == 0) {
              temptvObject = [{ mediatype: tempcandi[0]['mediatype'], mediaid: tempcandi[0]['mediaid'], addedtowatchlist: this.addedcheck }];
              // this.localStorageService.storeOnLocalStorage(JSON.stringify(temptvObject));
             }

           // unregister ele from addedwatchlist
           if (tempaddedwatlistKey == 1) {
             temptvObject = [{ mediatype: tempcandi[0]['mediatype'], mediaid: tempcandi[0]['mediaid'], addedtowatchlist: 0 }];
             // temptvObject = [];
          }

           this.localStorageService.storeOnLocalStorage(JSON.stringify(temptvObject));





            // If you want to just remove, use this code two if statement
            // // register ele into addedwatchlist
            // if (tempaddedwatlistKey == 0) {
            //    temptvObject = [{ mediatype: tempcandi[0]['mediatype'], mediaid: tempcandi[0]['mediaid'], addedtowatchlist: this.addedcheck }];
            //    this.localStorageService.storeOnLocalStorage(JSON.stringify(temptvObject));
            //   }

            // // unregister ele from addedwatchlist
            // if (tempaddedwatlistKey == 1) {}

            
          }
          if (i != this.exidlocation) {
            this.localStorageService.storeOnLocalStorage(JSON.stringify(tempcandi));


          }

        }

      }




    }


    if (Object.keys(items).length == 0) {
      var tvObject = { mediatype: "tv", mediaid: this.tvid, addedtowatchlist: this.addedcheck };
      this.countilistandaddedwatch.push(tvObject)

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
    // // console.log('tempid')
    // // console.log(tempid)



    this.httpClient.get(`/personsearch?&personid=${tempid}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' })
      .subscribe(
        data => {



          // // console.log("persondata")
          // // console.log(data)

          temppersondata = data

          // console.log(temppersondata)




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

                // console.log('arraytempinfo')
                // console.log(arraytempinfo)



              })


          // https://api.themoviedb.org/3/person/<<person_id>>/external_ids?api_key=<<api_key>>&language=en-US&page=1




          






















        }

      )


    this.modalService.open(content, { size: 'lg', scrollable: true });
  }

  socialtweethfreset() {
    var tweetanchor: any = document.getElementById("socialtweet")
    var youtubeaddresstweet = "https://twitter.com/intent/tweet?text=" +"Watch%20" + this.tvtitle + "%20" + "https://www.youtube.com/watch?v=" + this.tvvideo + "%20%23USC%20%23CSCI571%20%23FightOn"

    // var youtubeaddress="https://twitter.com/intent/tweet?text=https://www.youtube.com/watch?v="

    // `https://image.tmdb.org/t/p/original/${temppersondata['profile_path']}`

    tweetanchor.href = youtubeaddresstweet


    // https://www.facebook.com/sharer/sharer.php?u=example.org

    var facebookanchor: any = document.getElementById("socialfacebook")
    var youtubeaddressface = "https://www.facebook.com/sharer/sharer.php?u=" + "https://www.youtube.com/watch?v=" + this.tvvideo
    facebookanchor.href = youtubeaddressface 
  }





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
  }








  // rec tv
 touchstartfuncrectv(event:any,i:any)
 {

   // // console.log("touchstartfunc")
   // // console.log(typeof i)
   var num = i;
   num.toString()
   var sel="tvdetailrec"+num.toString()
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

 touchendfuncrectv(event:any,i:any)
 {


   var num = i;
   num.toString()
   var sel="tvdetailrec"+num.toString()
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

















 // Simi tv
 touchstartfuncsimitv(event:any,i:any)
 {

   // // console.log("touchstartfunc")
   // // console.log(typeof i)
   var num = i;
   num.toString()
   var sel="tvdetailsimi"+num.toString()
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

 touchendfuncsimitv(event:any,i:any)
 {


   var num = i;
   num.toString()
   var sel="tvdetailsimi"+num.toString()
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


