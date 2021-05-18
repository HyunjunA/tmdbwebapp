import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Observable, forkJoin } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

var tempdata: any;

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MylistComponent implements OnInit {

  movielist: any[] = [];
  movieHttplists: any[] = [];
  addObjdatalist: any[] = [];

  arraytempmovieinfoglo: any[] = [];
  moviesmediainfoset: any[] = [];


  tvlist: any[] = [];
  tvHttplists: any[] = [];
  tvObjdatalist: any[] = [];

  movietvtoglist: any[] = [];

  mobile: boolean = false;

  Httplists: any[] = [];

  curwinsizedivided:any;

  constructor(private httpClient: HttpClient, public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {

    this.mobile = false;
    
   


    // console.log("window.screen.width")
    // console.log(window.screen.width/6)

    this.curwinsizedivided = Math.round(window.screen.width/6);

    var reimcrita=700;
    if (window.screen.width < reimcrita) { // 768px portrait
      this.mobile = true;
      // console.log("This is mobile!.")


    }
    

    this.showingallconwatlist()



    // for (let i = 0; i < this.movielist.length; i++) {
    //   var tempid = this.movielist[i]


    //   // // // // // // console.log("movieid")
    //   // // // // // // console.log(tempid)
    //   // this.movieHttplists.push(this.httpClient.get(`/getmoviedetails?&movieid=${tempid}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' }))
    //   this.Httplists.push(this.httpClient.get(`/getmoviedetails?&movieid=${tempid}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' }))


    // }

    // var lenformoviehttplist=this.Httplists.length
    

    // // console.log("lenformoviehttplist")
    // // console.log(lenformoviehttplist)



    // for (let i = 0; i < this.tvlist.length; i++) {
    //   var tempid = this.tvlist[i]


    //   // // // // // // console.log("movieid")
    //   // // // // // // console.log(tempid)
    //   // this.tvHttplists.push(this.httpClient.get(`/gettvshowdetails?&tvid=${tempid}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' }))
    //   this.Httplists.push(this.httpClient.get(`/gettvshowdetails?&tvid=${tempid}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' }))



    // }




    // for (let i = 0; i < this.tvlist.length; i++) {
    //   var tempid = this.tvlist[i]


    //   // // // // // // console.log("movieid")
    //   // // // // // // console.log(tempid)
    //   // this.tvHttplists.push(this.httpClient.get(`/gettvshowdetails?&tvid=${tempid}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' }))
    //   this.Httplists.push(this.httpClient.get(`/gettvshowdetails?&tvid=${tempid}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' }))



    // }
    var tempidandtype = this.movietvtoglist
    for (let i = 0; i < tempidandtype.length; i++) {
      
      // console.log(tempidandtype)

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






    forkJoin(this.Httplists).subscribe(results => {


      // this.addObjdatalist = results 
      for (let i = 0; i < results.length; i++) {
        var tempdata = results[i]
        this.addObjdatalist.push(tempdata)
        

      }


      // // console.log(this.addObjdatalist.length)


      this.arraytempmovieinfoglo = [];

      // lenformoviehttplist

      // for (let i = 0; i < lenformoviehttplist; i++) {
      //   // // console.log("this.addObjdatalist[i]['poster_path']")

      //   // console.log(this.addObjdatalist[i])

      //   this.arraytempmovieinfoglo.push([`https://image.tmdb.org/t/p/w500/${this.addObjdatalist[i]['poster_path']}`, this.addObjdatalist[i]['title'], `/watch/movie/${this.addObjdatalist[i]['id']}`])


      // }
      // for (let i = lenformoviehttplist; i < this.addObjdatalist.length; i++) {
      //   // // console.log("this.addObjdatalist[i]['poster_path']")

      //   // console.log(this.addObjdatalist[i])

      //   this.arraytempmovieinfoglo.push([`https://image.tmdb.org/t/p/w500/${this.addObjdatalist[i]['poster_path']}`, this.addObjdatalist[i]['name'], `/watch/tv/${this.addObjdatalist[i]['id']}`])


      // }
      // this.gamesFormatted = []; // this.popularmoviesmediainfo



      for (let i = 0; i < this.addObjdatalist.length; i++) {

        if(this.addObjdatalist[i]['name']==null)
        {
          this.arraytempmovieinfoglo.push([`https://image.tmdb.org/t/p/w500/${this.addObjdatalist[i]['poster_path']}`, this.addObjdatalist[i]['title'], `/watch/movie/${this.addObjdatalist[i]['id']}`])
          // this.arraytempmovieinfogloformobile.push([`https://image.tmdb.org/t/p/w500/${this.addObjdatalist[i]['poster_path']}`, this.addObjdatalist[i]['title'], `/watch/movie/${this.addObjdatalist[i]['id']}`])
  
        }
        if(this.addObjdatalist[i]['title']==null)
        {
          this.arraytempmovieinfoglo.push([`https://image.tmdb.org/t/p/w500/${this.addObjdatalist[i]['poster_path']}`, this.addObjdatalist[i]['name'], `/watch/tv/${this.addObjdatalist[i]['id']}`])
          // this.arraytempmovieinfogloformobile.push([`https://image.tmdb.org/t/p/w500/${this.addObjdatalist[i]['poster_path']}`, this.addObjdatalist[i]['name'], `/watch/tv/${this.addObjdatalist[i]['id']}`])
  
        }
 

      }



      this.moviesmediainfoset = [];
      var j = -1;

     

      for (var i = 0; i < this.arraytempmovieinfoglo.length; i++) {

        

        if (i % 6 == 0) {
          j++;
          this.moviesmediainfoset[j] = [];
          this.moviesmediainfoset[j].push(this.arraytempmovieinfoglo[i]);
        }
        else {
          this.moviesmediainfoset[j].push(this.arraytempmovieinfoglo[i]);
        }
      }

    });


    this.breakpointObserver
      // .observe(['(max-width: 768px)', '(min-width: 320px)'])
      // .observe(['(min-width: 600px)'])
      .observe(['(min-width: 700px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {


          // // console.log("I am ")


          var temp: any=document.getElementById("mobilewatchlist");
          if(temp!=null)
          {temp.style.display = "none";}
          var temp: any = document.getElementById("nonmobilewatchlist");
          if(temp!=null)
          {temp.style.display = "block";}

          // console.log("non mobile version")
          // console.log(temp)
          // window.location.reload();
        } 
        else {



          
          var temp: any=document.getElementById("mobilewatchlist");
          if(temp!=null)
          {temp.style.display = "block";}
          var temp: any = document.getElementById("nonmobilewatchlist");
          if(temp!=null)
          {temp.style.display = "none";}

          // console.log("mobile version")
          // console.log(temp)

          
        }
      });



   
  }




  showingallconwatlist() {


    const items = { ...localStorage };

    if (Object.keys(items).length != 0) {


      var tempdata = JSON.parse(items['local_todolist'])
      // // // // // // // // // // // console.log('// // // // // // // // // // console.log(tempdata.length)')
      // // // // // // // // // // // console.log(tempdata.length)

      for (let i = 0; i < tempdata.length; i++) {

        var tempcandi = tempdata[i]
        // // // // // // // // // // console.log("tempcandi")
        // // // // // // // // // // console.log(tempcandi)
        tempcandi = JSON.parse(tempcandi['title'])
        tempcandi = tempcandi[0]

        // tempcandi=JSON.parse(tempcandi)

        // // // // // // // // // // // console.log('tempcandi')

        // // // // // // // // // // // console.log(tempcandi)
        // // // // // // // // // // // console.log(tempcandi[0])

        const mediatypeKey = 'mediatype';
        const mediaidKey = 'mediaid';
        const addedwatlistKey = 'addedtowatchlist';

        if (mediatypeKey in tempcandi) {
          // // // // // // // // // // // console.log("!!!!!!!")
          // // // // // // // // // // // console.log(tempcandi[myObjKey as keyof typeof tempcandi]);
          var temptypeKey = tempcandi[mediatypeKey as keyof typeof tempcandi]
          // // // // // // // // // // // console.log(temptypeKey)
        }

        if (mediaidKey in tempcandi) {
          // // // // // // // // // // // console.log("!!!!!!!")
          // // // // // // // // // // // console.log(tempcandi[myObjKey as keyof typeof tempcandi]);
          var tempidKey = tempcandi[mediaidKey as keyof typeof tempcandi]
        }

        if (addedwatlistKey in tempcandi) {
          // // // // // // // // // // // console.log("!!!!!!!")
          // // // // // // // // // // // console.log(tempcandi[myObjKey as keyof typeof tempcandi]);
          var tempaddedwatlistKey = tempcandi[addedwatlistKey as keyof typeof tempcandi]
        }

        // // // // // // // // // // // console.log("tempcandi['mediatype']")
        // // // // // // // // // // // console.log(tempcandi['mediatype'])
        // mediatype: "movie", mediaid: "399566", addedtowatchlist: 0
        // if (temptypeKey == "movie" && tempaddedwatlistKey==1) {
        //   // tempidKey
        //   this.movielist.push(tempidKey)


        // }
        // if (temptypeKey == "tv"  && tempaddedwatlistKey==1 ) {
        //   // tempidKey
        //   this.tvlist.push(tempidKey)


        // }

        if (temptypeKey == "tv" ||temptypeKey == "movie") {
          // tempidKey
          if (tempaddedwatlistKey==1)
          {
            this.movietvtoglist.push([tempidKey,temptypeKey])
          }
          
        }

      }





    }






  }


  callandpaint() {

  }


  async moviedataget() {


    for (let i = 0; i < this.movielist.length; i++) {
      var tempid = this.movielist[i]


      // // // // // // console.log("movieid")
      // // // // // // console.log(tempid)
      await this.httpClient.get(`/getmoviedetails?&movieid=${tempid}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' }).toPromise().then(
        async data => {
          // // // // // // console.log(data)

          tempdata = data;
          // // // // // // console.log(tempdata)
          await this.addObjdatalist.push(tempdata)
        })


    }

    return this.addObjdatalist
  }


  async tvdataget() {
    for (let i = 0; i < this.tvlist.length; i++) {
      var tempid = this.tvlist[i]
      // // // // // // console.log("tvid")
      // // // // // // console.log(tempid)
      await this.httpClient.get(`/gettvshowdetails?&tvid=${tempid}&apikey=ebcb324f3d940e9599200a81e3b4c007`, { responseType: 'json' }).toPromise().then(
        async data => {
          // // // // // // console.log(this.tvlist[i])
          tempdata = data;
          await this.tvObjdatalist.push(tempdata)
        })
    }

    return this.tvObjdatalist
  }



  over() {
    // // // // // // // // console.log("Mouseover called");
    // var tempel:any = document.getElementById("nowplayingmovietitle");
    var tempel: any = document.getElementsByClassName("nowplayingmovietitleclass");
    Array.prototype.forEach.call(tempel, function (el) {
      // Do stuff here
      // // // // // // // // console.log(el.tagName);
      // // // // // // // // console.log(el);
      el.style.display = "block"
    });
    // tempel.style.visibility='visible';
    // tempel.style.display="block"
  }

  out() {
    // // // // // // // // console.log("Mouseout called");
    // var tempel:any = document.getElementById("nowplayingmovietitle");
    var tempel: any = document.getElementsByClassName("nowplayingmovietitleclass");
    Array.prototype.forEach.call(tempel, function (el) {
      // Do stuff here
      // // // // // // // // console.log(el);
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




  // watchlist
  touchstartfuncwatchlist(event:any,i:any)
  {

    // // console.log("touchstartfunc")
    // // console.log(typeof i)
    var num = i;
    num.toString()
    var sel="watchlist"+num.toString()
    // console.log(sel)
    var seldiv:any= document.getElementById(sel)
    // seldiv.querySelector('.mobilemediatitle')
    // var head:any=seldiv.querySelector('.mobilemediatitlenomain')
    // var head:any=seldiv.querySelector('.realtitleverfivinmylistmobile')
    // var head:any=seldiv.closest("h3")
    
    var img:any=seldiv.querySelector('.eachimgforcollelemmobile')

    var capblack:any=seldiv.querySelector('.eachcap')
    // var img:any=seldiv.closest("img")

    // // console.log(seldiv)
    // // console.log(head)
    // // console.log(img)
    
    

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
    // console.log(sel)
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




















  // watchlist
  mousestartfuncwatchlist(event:any,i:any)
  {

    // console.log("mousein")
    // // console.log(typeof i)
    var num = i;
    num.toString()
    var sel="mousewatchlist"+num.toString()
    // console.log(sel)
    var seldiv:any= document.getElementById(sel)
    // seldiv.querySelector('.mobilemediatitle')
    // var head:any=seldiv.querySelector('.mobilemediatitlenomain')
    // var head:any=seldiv.querySelector('.realtitleverfivinmylistmobile')
    // var head:any=seldiv.closest("h3")
    
    var img:any=seldiv.querySelector('.eachimgforcollelem')

    // console.log("img")
    // console.log(img)

    var capblack:any=seldiv.querySelector('.eachcapnonmobile')

    // console.log("capblack")
    // console.log(capblack)
    // capblack.style.display="block"
    // var img:any=seldiv.closest("img")

    // // console.log(seldiv)
    // // console.log(head)
    // // console.log(img)
    
    capblack.style.display="block"

    // head.style.transition = "all 0.01s ease-in";
    img.style.transition = "all 0.01s ease-in";
    capblack.style.transition ="all 0.01s ease-in";

    // head.style.transform ="scale(1.08)";
    img.style.transform ="scale(1.08)";
    capblack.style.transform ="scale(1.08)";
  }

  mouseendfuncwatchlist(event:any,i:any)
  {

    // console.log("mouseout")
    var num = i;
    num.toString()
    var sel="mousewatchlist"+num.toString()
    // console.log(sel)
    var seldiv:any= document.getElementById(sel)
    // seldiv.querySelector('.mobilemediatitle')
    // var head:any=seldiv.querySelector('.realtitleverfivinmylistmobile')
    // var head:any=seldiv.closest("h3")
    
    var img:any=seldiv.querySelector('.eachimgforcollelem')

    var capblack:any=seldiv.querySelector('.eachcapnonmobile')

    // capblack.style.display="none!important"

    // head.style.transition = "all 0.01s ease-in";
    img.style.transition = "all 0.01s ease-in";
    capblack.style.transition ="all 0.01s ease-in";

    // head.style.transform ="scale(1)";
    img.style.transform ="scale(1)";
    capblack.style.transform ="scale(1)";

    capblack.style.display="none"

  }



}
