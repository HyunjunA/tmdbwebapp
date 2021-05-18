import { Component, ViewEncapsulation, OnInit, Inject } from '@angular/core';

import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DOCUMENT } from '@angular/common';

// var searchdata = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
// 'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
// 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
// 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
// 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
// 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
// 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
// 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

var searchdata: { results: any[]; };

// var model:any;
// var maindatabyusersearchpublic:any;

@Component({
  selector: 'app-compzero',
  templateUrl: './compzero.component.html',
  styleUrls: ['./compzero.component.css'],
  encapsulation: ViewEncapsulation.None

})
// export class HeaderComponent implements OnInit {
export class CompzeroComponent {

  public model: any;
  // public maindatabyusersearchpublic:any;


  // constructor(private route: ActivatedRoute,) { }

  constructor( private _router: Router, @Inject(DOCUMENT) private _document: Document) {}
  // changeUrl(event: any){
  //   this._router.navigateByUrl('event.Url')
  // }
  changeUrl(model:any){
    if(model.media_type=='movie' || model.media_type=='tv')
      // {this._router.navigateByUrl('/watch'+'/'+model.media_type+'/'+model.id)}
      // {this._router.navigateByUrl('/watch'+'/'+model.media_type+'/'+model.id, { state: {model} })}
      {
        // // console.log(model.media_type)
        this._router.navigateByUrl('/watch'+'/'+model.media_type+'/'+model.id)
        // this._router.navigate(['watch', model.media_type, model.id]);
      }
      // {this._router.navigate(['watch', model.media_type, model.id], {relativeTo: _router});}
    // else
    //   {
        
    //     // // console.log("model.media_type")
    //     // // console.log(model.media_type)
    //   }
  }
  
  

  ngOnInit(): void {

    

    // searchdata
    // getdata(): any { 
    // From this line, there are all function definitions.


    // Function definitions and Global variables
    let glodatashowtrend;

    // This function load the "Trending Movies" and the "TV Shows On-Air Today".
    // In addition, it sets the Home button is red and under line is white, when page is loaded.
    function firstload() {

      // Hide search page
      var se: HTMLHeadElement = document.getElementById("searchpage") as HTMLHeadElement;
      se.style.display = "none";
      // var reqs = document.getElementsByClassName("requiredsear");
      // reqs.style.display = "block";


      // Sets the Home button is red
      var temph: HTMLHeadElement = document.getElementById("homebuttonreal") as HTMLHeadElement;
      temph.style.color = '#a51916';

      // And under line is white, when page is loaded.
      var temphpa: HTMLHeadElement = document.getElementById("homebuttonpanel") as HTMLHeadElement;
      temphpa.style.borderBottom = "1px solid rgb(255, 255, 255)";





    }



    // Search page function definition
    // Display search page, non display two slideshows in first page
    // function searchpage() {

    //   // show search page
    //   var se: HTMLHeadElement = document.getElementById("searchpage") as HTMLHeadElement;
    //   se.style.display = "block";

    //   // Hide slideshows
    //   var mp: HTMLHeadElement = document.getElementById("maincontentpart") as HTMLHeadElement;
    //   mp.style.display = "none";

    //   var mps: HTMLHeadElement = document.getElementById("maincontentpartsecond") as HTMLHeadElement;
    //   mps.style.display = "none";


    // };


    // Reload main page 
    // Non display search page, Display two slideshows in first page
    // function reloadfirstpage() {

    //   // non display search page
    //   var se: HTMLHeadElement = document.getElementById("searchpage") as HTMLHeadElement;
    //   se.style.display = "none";

    //   // Display slideshows
    //   var mp: HTMLHeadElement = document.getElementById("maincontentpart") as HTMLHeadElement;
    //   mp.style.display = "block";

    //   var mps: HTMLHeadElement = document.getElementById("maincontentpartsecond") as HTMLHeadElement;
    //   mps.style.display = "block";

    // };

    // Slideshow functions
    // async function showSlides() {
    //   var i;
    //   var slides: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;

    //   for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";
    //   }
    //   slideIndex++;
    //   if (slideIndex > slides.length) { slideIndex = 1 }

    //   slides[slideIndex - 1].style.display = "block";

    //   await setTimeout(showSlides, 4500); // Change image every 2 seconds
    // }
    // async function showSlidessec() {
    //   var i;
    //   var slides: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("mySlidessec") as HTMLCollectionOf<HTMLElement>;

    //   for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";
    //   }
    //   slideIndex++;
    //   if (slideIndex > slides.length) { slideIndex = 1 }

    //   slides[slideIndex - 1].style.display = "block";

    //   await setTimeout(showSlidessec, 4500); // Change image every 2 seconds
    // }

















    // var url = "/trend?mediatype=movie&timewindow=week&apikey=ebcb324f3d940e9599200a81e3b4c007";

    //3.2.5 TMDB Trending Endpoint 
    // Trend functiond definition    
    // var showtrendprom = new Promise((resolve, reject) => {
    //   var mediatype = "movie/";
    //   var timewindow = "week?";
    //   var apikey = "apikey=ebcb324f3d940e9599200a81e3b4c007";

    //   var metiap = mediatype.concat(timewindow, apikey)


    //   var routeurl = "/trend?";
    //   // const routeurl = "https://choicsci571test.azurewebsites.net/trend?";

    //   // const routeurl = "http://csci571-hw6-backend.azurewebsites.net/trend?";
    //   var url = routeurl.concat(metiap);



    //   var url = "/trend?mediatype=movie&timewindow=day?&apikey=ebcb324f3d940e9599200a81e3b4c007";

    //   var xhttp = new XMLHttpRequest();
    //   xhttp.onreadystatechange = function () {
    //     if (xhttp.readyState == 4 && xhttp.status == 200) {
    //       // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log"Catched Trend data response!")
    //       // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logxhttp.readyState)

    //       // Trend JSON data
    //       var obj = JSON.parse(xhttp.responseText);
    //       // // // // // // // // // console(obj)
    //       var fivedata = [];
    //       var numofelements = 5;
    //       // var newArray = obj.slice(0, 9)

    //       for (var i = 0; i < numofelements; i++) {
    //         obj['results'][i]
    //         fivedata.push(obj['results'][i]);
    //       }

    //       // title
    //       // - the title of the movie.

    //       // backdrop_path
    //       // - the path for the image of the movie.

    //       // release_date
    //       // - the date the movie was
    //       // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logfivedata)

    //       // return fivedata
    //       resolve(fivedata);


    //     }
    //   };
    //   xhttp.open("GET", url, false);
    //   xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
    //   xhttp.send(null);

    // });



    // showtrendprom.then((datashowtrend) => {


    // });




    //3.2.8 Trending TV shows Section
    // var showtvairingprom = new Promise((resolve, reject) => {
    //   // mediatype = "movie/";
    //   // timewindow = "week?";
    //   // apikey = "apikey=ebcb324f3d940e9599200a81e3b4c007";

    //   // metiap = apikey


    //   // var routeurl = "/tvairing?";
    //   // const routeurl = "https://choicsci571test.azurewebsites.net/tvairing?";
    //   // var url = routeurl.concat(metiap);

    //   var url = "/tvairing?mediatype=tv&timewindow=day?&apikey=ebcb324f3d940e9599200a81e3b4c007";

    //   var xhttp = new XMLHttpRequest();
    //   xhttp.onreadystatechange = function () {
    //     if (xhttp.readyState == 4 && xhttp.status == 200) {
    //       // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log"Catched TV airing!")
    //       // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logxhttp.readyState)

    //       // Trend JSON data
    //       var obj = JSON.parse(xhttp.responseText);
    //       var fivedata = [];
    //       var numofelements = 5;
    //       // var newArray = obj.slice(0, 9)

    //       for (var i = 0; i < numofelements; i++) {
    //         obj['results'][i]
    //         fivedata.push(obj['results'][i]);
    //       }

    //       // name
    //       // - the name of the show

    //       // backdrop_path
    //       // - the path for the image of the show.

    //       // first_air_date
    //       // - the date the show was first aired
    //       // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logfivedata)

    //       resolve(fivedata)




    //     }
    //   };
    //   xhttp.open("GET", url, false);
    //   xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
    //   xhttp.send(null);
    // });





    // Global Variables
    // var userkeyword;
    // var usercateg
    function getkeyword() {

      // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log"Ja?")
      var temuserkew: HTMLInputElement = document.getElementById("Keyword") as HTMLInputElement;
      var userkeyword = temuserkew.value;

      var tempseca: HTMLInputElement = document.getElementById('selectca') as HTMLInputElement;
      var usercateg = tempseca.innerHTML;

      // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...loguserkeyword);
      // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logusercateg);


      // Empty query process
      if (userkeyword == "") {
        // popup need to be implemented.
        // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("userkeyword Empty");
      }
      if (usercateg == "") {
        // popup need to be implemented.
        // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("usercateg Empty");
      }


    }









    // moive genre
    moviegenreget();
    // // // // // // // // // // // // // // // ("moviegenreget()")

    // tv genres 
    tvgenreget();



    // This function just set the Home button initial color and the white underline of the button.
    // firstload();

    var slideIndex = 0;


    // show movie trend
    // showtrendprom.then((datashowtrend: any) => {

    //   // In this process, slideshow-container is made using JS.
    //   // In this slideshow-container, there are two slideshows such as Trending movies and TV airing.
    //   var movietrendtitle = document.createElement("div");
    //   movietrendtitle.setAttribute("class", "titleinslideshow");
    //   movietrendtitle.setAttribute("id", "movietrendtitle");
    //   var temmcp: HTMLInputElement = document.getElementById("maincontentpart") as HTMLInputElement;
    //   temmcp.appendChild(movietrendtitle);
    //   movietrendtitle.innerHTML = "<span class='slidtitle' style='color:white;'>" + "Trending Movies" + "</span>";

    //   var slidecontainer = document.createElement("div");
    //   slidecontainer.setAttribute("class", "slideshow-container");
    //   slidecontainer.setAttribute("id", "sc1");
    //   var tempmcp = <HTMLInputElement>document.getElementById("maincontentpart")
    //   tempmcp.appendChild(slidecontainer);






    //   // </div>
    //   // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logdatashowtrend)
    //   var i: any;
    //   for (i = 0; i < datashowtrend.length; i++) {
    //     // for (i = 0; i < 2; i++) {
    //     // Setting mySlides fade   
    //     var mySlidesfade = document.createElement("div");
    //     mySlidesfade.setAttribute("class", "mySlides fade");
    //     var ids = "mf";
    //     var numi = i + 1;
    //     var idn = numi.toString();
    //     var idr = ids.concat(idn);
    //     mySlidesfade.setAttribute("id", idr);
    //     var temsc = <HTMLInputElement>document.getElementById("sc1");
    //     temsc.appendChild(mySlidesfade);

    //     // Setting img in mySlides fade
    //     var imageele = document.createElement("IMG");
    //     var idsim = "imges";
    //     var numiim = i + 1;
    //     var idnim = numiim.toString();
    //     var idrim = idsim.concat(idnim);
    //     imageele.setAttribute("id", idrim);
    //     imageele.setAttribute("class", "imges");


    //     var tempidr = <HTMLInputElement>document.getElementById(idr)
    //     tempidr.appendChild(imageele);

    //     var imagefixurl = "https://image.tmdb.org/t/p/w780/";
    //     var imgparturl = datashowtrend[i]['backdrop_path'];
    //     // // // // // // // // // // // // // // // // // // // // console..log(imgparturl)
    //     var imgurl = imagefixurl.concat(imgparturl);


    //     if (imgparturl == null) { imgurl = "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg" }

    //     var tempidrim = <HTMLInputElement>document.getElementById(idrim);
    //     tempidrim.src = imgurl;


    //     var capdiv = document.createElement("div");
    //     capdiv.setAttribute("class", "text");
    //     var idtex = "tex"
    //     var numtx = i + 1;
    //     var idntx = numtx.toString();
    //     var idrtx = idtex.concat(idntx);
    //     capdiv.setAttribute("id", idrtx);
    //     var tempidr = <HTMLInputElement>document.getElementById(idr);
    //     tempidr.appendChild(capdiv);

    //     var tit = datashowtrend[i]['title']
    //     if (tit == null || tit == '' || tit == undefined) {
    //       tit = "N/A";
    //     }
    //     var date = datashowtrend[i]['release_date']

    //     if (date == null || date == '' || date == undefined) {
    //       date = "N/A";
    //     }
    //     date = date.split("-");
    //     var spc = '&nbsp';
    //     tit = tit.concat(spc);
    //     tit = tit.concat("(");
    //     tit = tit.concat(date[0]);
    //     tit = tit.concat(")");

    //     var tempidrtx = <HTMLInputElement>document.getElementById(idrtx);
    //     tempidrtx.innerHTML = tit;
    //     //    <div class="text">Caption Two</div>
    //   }

    //   // show trending movie
    //   showSlides();

    // });



    // showtvairingprom.then((datatvshows: any) => {
    //   // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logdatatvshows);
    //   var tvtrendtitle = document.createElement("div");
    //   tvtrendtitle.setAttribute("class", "titleinslideshow");
    //   tvtrendtitle.setAttribute("id", "tvtrendtitle");
    //   var tempmap = <HTMLInputElement>document.getElementById("maincontentpart");
    //   tempmap.appendChild(tvtrendtitle);
    //   tvtrendtitle.innerHTML = "<span class='slidtitle' style='color:white;'>" + "TV Shows On-Air Today" + "</span>";
    //   // movietrendtitle.innerHTML="<p>"+"Trending Movies"+"</p>";

    //   var slidecontainer = document.createElement("div");
    //   slidecontainer.setAttribute("class", "slideshow-container");
    //   slidecontainer.setAttribute("id", "sc2");
    //   var tempmcps = <HTMLInputElement>document.getElementById("maincontentpartsecond");
    //   tempmcps.appendChild(slidecontainer);

    //   var i: any;
    //   for (i = 0; i < datatvshows.length; i++) {
    //     // Setting mySlides fade   
    //     var mySlidesfadesec = document.createElement("div");
    //     mySlidesfadesec.setAttribute("class", "mySlidessec fade");
    //     var idssec = "mfsecond";
    //     var numisec = i + 1;
    //     var idnsec = numisec.toString();
    //     var idrsec = idssec.concat(idnsec);
    //     mySlidesfadesec.setAttribute("id", idrsec);
    //     var tempsctw = <HTMLInputElement>document.getElementById("sc2");
    //     tempsctw.appendChild(mySlidesfadesec);

    //     // Setting img in mySlides fade
    //     var imageelesec = document.createElement("IMG");
    //     var idsimsec = "imgessecond";
    //     var numiimsec = i + 1;
    //     var idnimsec = numiimsec.toString();
    //     var idrimsec = idsimsec.concat(idnimsec);
    //     imageelesec.setAttribute("id", idrimsec);
    //     imageelesec.setAttribute("class", "imges");

    //     var tempidrsec = <HTMLInputElement>document.getElementById(idrsec)
    //     tempidrsec.appendChild(imageelesec);

    //     var imagefixurlsec = "https://image.tmdb.org/t/p/w780/";
    //     var imgparturlsec = datatvshows[i]['backdrop_path'];
    //     var imgurlsec = imagefixurlsec.concat(imgparturlsec);

    //     if (imgparturlsec == null) { imgurlsec = "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg" }

    //     var tempidrimsec = <HTMLInputElement>document.getElementById(idrimsec);
    //     tempidrimsec.src = imgurlsec;

    //     var capdivsec = document.createElement("div");
    //     capdivsec.setAttribute("class", "text");
    //     var idtexsec = "texsecond"
    //     var numtxsec = i + 1;
    //     var idntxsec = numtxsec.toString();
    //     var idrtxsec = idtexsec.concat(idntxsec);
    //     capdivsec.setAttribute("id", idrtxsec);
    //     var tempidrsec = <HTMLInputElement>document.getElementById(idrsec);
    //     tempidrsec.appendChild(capdivsec);

    //     var tit = datatvshows[i]['name']
    //     if (tit == null || tit == '' || tit == undefined) {
    //       tit = "N/A";
    //     }
    //     var date = datatvshows[i]['first_air_date']
    //     if (date == null || date == '' || date == undefined) {
    //       date = "N/A";
    //     }

    //     date = date.split("-");
    //     var spc = '&nbsp';
    //     tit = tit.concat(spc);
    //     tit = tit.concat("(");
    //     tit = tit.concat(date[0]);
    //     tit = tit.concat(")");

    //     var tempidrtxsec = <HTMLInputElement>document.getElementById(idrtxsec);
    //     tempidrtxsec.innerHTML = tit;
    //     //    <div class="text">Caption Two</div>
    //   }

    //   // show air tv
    //   showSlidessec();


    // });


    // hover searchbutton
    // var tempsbr = <HTMLInputElement>document.getElementById("searchbuttonreal")
    // tempsbr.onmouseover = function () {
    //   tempsbr.style.color = "#a51916";
    // }

    // tempsbr.onmouseout = function () {
    //   if (searchbuttonrealclickedhis == 1) {
    //     tempsbr.style.color = "#a51916";
    //   }

    //   if (searchbuttonrealclickedhis == 0) {
    //     tempsbr.style.color = "white";
    //   }

    // }

    // hover homebutton
    // var temphbr = <HTMLInputElement>document.getElementById("homebuttonreal");
    // temphbr.onmouseover = function () {
    //   temphbr.style.color = "#a51916";
    // }

    // temphbr.onmouseout = function () {
    //   if (homebuttonrealclickedhis == 1) {
    //     temphbr.style.color = "#a51916";
    //   }

    //   if (homebuttonrealclickedhis == 0) {
    //     temphbr.style.color = "white";
    //   }
    // }




    // This response user'click for searchbuttonreal on the leftbar.
    // var tempsbr = <HTMLInputElement>document.getElementById("searchbuttonreal")
    // tempsbr.addEventListener("click", function (e) {


    //   // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log"searchbuttonreal!!!")
    //   e.preventDefault();
    //   var tempsb = <HTMLInputElement>document.getElementById("showingbox")
    //   tempsb.style.display = "block";

    //   searchbuttonrealclickedhis = 1;
    //   homebuttonrealclickedhis = 0;


    //   // Remove the logo main page.
    //   developbottomlogoformainpage();

    //   // create empty black page
    //   // blackpageforsearchpage();


    //   // create bottom logo search page
    //   developbottomlogoforsearchpage();






    //   if (memoryofnonresultfound == 1) {
    //     var tempnrf = <HTMLInputElement>document.getElementById("noresultfound");
    //     tempnrf.style.display = "block";
    //     memoryofnonresultfound = 0;

    //   }


    //   if (document.getElementById("shwrel") != null) {
    //     var tempshrel = <HTMLInputElement>document.getElementById("shwrel");
    //     tempshrel.style.display = "block"
    //   }


    //   if (document.getElementById("searchshow") != null) {
    //     // // ("Not null")
    //     var tempsearchsow = <HTMLInputElement>document.getElementById("searchshow");
    //     tempsearchsow.style.display = "block";
    //   }

    //   // process homebutton
    //   var temphbr = <HTMLInputElement>document.getElementById("homebuttonreal");
    //   temphbr.style.color = 'white';
    //   var temphbp = <HTMLInputElement>document.getElementById("homebuttonpanel");
    //   temphbp.style.borderBottom = "1px solid black";

    //   // process searchbutton
    //   var tempsbr = <HTMLInputElement>document.getElementById("searchbuttonreal")
    //   tempsbr.style.color = '#a51916';
    //   var tempsbp = <HTMLInputElement>document.getElementById("searchbuttonpanel");
    //   tempsbp.style.borderBottom = "1px solid rgb(255, 255, 255)";

    //   // Making Search Page 
    //   searchpage();

    // });


    // // This response user'click for homebutton on the leftbar.
    // temphbr.addEventListener("click", function (e) {
    //   // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log"homebuttonreal!!!")
    //   e.preventDefault();
    //   var tempsb = <HTMLInputElement>document.getElementById("showingbox")
    //   tempsb.style.display = "none";

    //   searchbuttonrealclickedhis = 0;
    //   homebuttonrealclickedhis = 1;

    //   // Remove the logo search page.
    //   developbottomlogoforsearchpage();

    //   // Remove empty black page
    //   // blackpageforsearchpage();    

    //   // create the logo main page.
    //   developbottomlogoformainpage();





    //   // // ("Homebutton clicked")
    //   // document.getElementById("searchpage").style.display="none"
    //   if (document.getElementById("searchshow") != null) {
    //     // // ("Not null")
    //     var tempss = <HTMLInputElement>document.getElementById("searchshow")
    //     tempss.style.display = "none"
    //   }
    //   // process searchbutton
    //   var tempsbr = <HTMLInputElement>document.getElementById("searchbuttonreal");
    //   tempsbr.style.color = 'white';
    //   var tempsbp = <HTMLInputElement>document.getElementById("searchbuttonpanel");
    //   tempsbp.style.borderBottom = "1px solid black";

    //   // 
    //   var temphbr = <HTMLInputElement>document.getElementById("homebuttonreal");
    //   temphbr.style.color = '#a51916';
    //   var temphbp = <HTMLInputElement>document.getElementById("homebuttonpanel");
    //   temphbp.style.borderBottom = "1px solid rgb(255, 255, 255)";


    //   // hide "noresult" sentence
    //   if (document.getElementById("noresultfound") != null) {
    //     var tempnrsf = <HTMLInputElement>document.getElementById("noresultfound")
    //     if (tempnrsf.style.display == "block") {
    //       tempnrsf.style.display = "none";
    //       memoryofnonresultfound = 1;

    //     }
    //   }

    //   // hide "show results" sentence
    //   if (document.getElementById("shwrel") != null) {
    //     var tempshrel = <HTMLInputElement>document.getElementById("shwrel")
    //     tempshrel.style.display = "none"
    //   }



    //   // Relod first main page (two slideshows) 
    //   // reloadfirstpage();







    // });


















    // Global variables
    var maindatabyusersearch: any;
    var userquery: any;
    var checker = 0;
    var searchtimes = 0;

    var removeexmoviedetail = 0;

    // if searchresult was no found and home button is clicked, when searchbutton is again clicked, it should show the no result.
    var memoryofnonresultfound = 0;

    // 1 means searchbutton clicked
    var searchbuttonrealclickedhis = 0;

    // 1 means homebutton clicked (Because initial webpage assume that homebutton is on.)
    var homebuttonrealclickedhis = 1;

    // movie genre data
    var moviegenredata: any; //moviegenreget()
    var tvegenredata: any; //tvgenreget()

    var moviedetailinfor: any; //getmoviedetails(movieidfromevent)
    var tvdetailinfor: any; //gettvdetails(tvidfromevent)
    //2.4.2
    var moviecreditsdata: any; //getmoviecredits(movieidfromevent)
    var tvcreditsdata: any; //gettvcredits(tvidfromevent)
    //2.4.3
    var moviereviewdata: any; //getemoviereviews(movieidfromevent)
    var tvreviewdata: any; //gettvreviews(tvidfromevent)









    function developbottomlogoformainpage() {

      // home button clicked
      if (homebuttonrealclickedhis == 1) {

        ("I am here.")

        if (document.getElementById("devinfo") == null) {
          var develname = document.createElement("div");
          develname.setAttribute("id", "devinfo");
          develname.setAttribute("class", "two");
          develname.style.backgroundColor = "#a51916";
          develname.style.height = "60px";
          develname.style.fontStyle = "italic";
          develname.style.color = "white";
          develname.style.fontSize = "13px"


          develname.innerHTML = "Designed and developed by Hyunjun Choi <br> Powered by TMDB"

          develname.style.textAlign = "right";

          develname.style.marginLeft = "1%";
          // develname.style.marginRight = "1%";
          develname.style.marginTop = "200px";

          develname.style.paddingTop = "1.3%";
          develname.style.paddingRight = "1%";


          var tempmainbo = <HTMLInputElement>document.getElementById("mainboth");
          // tempmainbo.appendChild(develname);
        }
      }

      // search button clicked
      if (homebuttonrealclickedhis == 0) {
        if (document.getElementById("devinfo") != null) {
          var tempdevinfo = <HTMLInputElement>document.getElementById("devinfo");
          tempdevinfo.remove()
        }
      }


    }




    function developbottomlogoforsearchpage() {


      // // // // // // // // // // // // // // // // // // // // // // console..log("1")
      // search button clicked
      if (searchbuttonrealclickedhis == 1) {

        // ("I am here.")



        if (document.getElementById("devinfosearchpage") == null) {
          var develname = document.createElement("div");
          develname.setAttribute("id", "devinfosearchpage");
          develname.setAttribute("class", "two");
          develname.style.backgroundColor = "#a51916";
          develname.style.height = "60px";
          develname.style.fontStyle = "italic";
          develname.style.color = "white";
          develname.style.fontSize = "13px"


          develname.innerHTML = "Designed and developed by Hyunjun Choi <br> Powered byTMDB"

          develname.style.textAlign = "right";

          develname.style.marginLeft = "1%";
          // develname.style.marginRight = "1%";
          // develname.style.marginTop = "150px";

          develname.style.paddingTop = "1.3%";
          develname.style.paddingRight = "1%";


          var tempmainbo = <HTMLInputElement>document.getElementById("mainboth")
          // tempmainbo.appendChild(develname);
        }
      }


      // home button clicked
      if (searchbuttonrealclickedhis == 0) {
        if (document.getElementById("devinfosearchpage") != null) {
          var tempdevinfosearchpagedein = <HTMLInputElement>document.getElementById("devinfosearchpage");
          tempdevinfosearchpagedein.remove();
        }

      }


    }






    function blackpageforsearchpage() {




      if (searchbuttonrealclickedhis == 1) {
        var blackpage = document.createElement("div")
        blackpage.setAttribute("id", "blackpageforsearch")

        //Width, Height, Color
        blackpage.style.height = "200px";
        // blackpage.backgroundColor="white";
        var tempmainboth = <HTMLInputElement>document.getElementById("mainboth");
        // tempmainboth.appendChild(blackpage)
      }


      if (homebuttonrealclickedhis == 1) {

        var tempblackpageforsearch = <HTMLInputElement>document.getElementById("blackpageforsearch")
        tempblackpageforsearch.remove()
      }



    }


    // // dropdown 
    // var tics = "✓ ";
    // var tempscw = <HTMLInputElement>document.querySelector('.custom-select-wrapper');

    // tempscw.addEventListener('click', function () {
    //   var tempcs = <HTMLInputElement>tempscw.querySelector('.custom-select');
    //   tempcs.classList.toggle('open');
    // })

    // var tempcop = <any>document.querySelectorAll(".custom-option");
    // // // // // // // // // // console(typeof tempcop)
    // for (const option of tempcop) {
    //   option.addEventListener('click', function () {

    //     // // // // // // // // // console(tempcop)
    //     if (!option.classList.contains('selected')) {
    //       option.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
    //       option.classList.add('selected');
    //       option.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent;

    //       // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log"Out!!!!!")

    //       // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(typeof (this.textContent))

    //       var string = option.textContent;

    //       string = string.replace(/\s\s+/g, ' ');

    //       var str0 = "";
    //       var str1 = 'Movies';
    //       var str2 = 'TV Shows';
    //       var str3 = 'Movies and TV Shows';

    //       var m0 = string.localeCompare(str0);
    //       var m1 = string.localeCompare(str1);
    //       var m2 = string.localeCompare(str2);
    //       var m3 = string.localeCompare(str3);


    //       // (m0)
    //       // (m1)
    //       // (m2)
    //       // (m3)



    //       if (m0 == 0) {
    //         // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logtics.concat(this.textContent))
    //         // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logthis.closest('.custom-select').querySelector('#sectick').textContent)
    //         // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("Movies clicked!")
    //         option.closest('.custom-select').querySelector('#firtick').textContent = tics;
    //         option.closest('.custom-select').querySelector('#sectick').textContent = "";
    //         option.closest('.custom-select').querySelector('#thetick').textContent = "";
    //         option.closest('.custom-select').querySelector('#foutick').textContent = "";
    //       }
    //       if (m1 == 0) {
    //         // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logtics.concat(this.textContent))
    //         // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logthis.closest('.custom-select').querySelector('#sectick').textContent)
    //         // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("Movies clicked!")
    //         option.closest('.custom-select').querySelector('#firtick').textContent = "";
    //         option.closest('.custom-select').querySelector('#sectick').textContent = tics;
    //         option.closest('.custom-select').querySelector('#thetick').textContent = "";
    //         option.closest('.custom-select').querySelector('#foutick').textContent = "";
    //       } else if (m2 == 0) {

    //         // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("TV Show clicked!")
    //         // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logtics.concat(this.textContent))
    //         // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logthis.closest('.custom-select').querySelector('#sectick').textContent)
    //         option.closest('.custom-select').querySelector('#firtick').textContent = "";
    //         option.closest('.custom-select').querySelector('#sectick').textContent = "";
    //         option.closest('.custom-select').querySelector('#thetick').textContent = tics;
    //         option.closest('.custom-select').querySelector('#foutick').textContent = "";
    //       } else if (m3 == 0) {

    //         // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("Movies and TV Shows clicked!")
    //         // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logtics.concat(this.textContent))
    //         // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logthis.closest('.custom-select').querySelector('#sectick').textContent)
    //         option.closest('.custom-select').querySelector('#firtick').textContent = "";
    //         option.closest('.custom-select').querySelector('#sectick').textContent = "";
    //         option.closest('.custom-select').querySelector('#thetick').textContent = "";
    //         option.closest('.custom-select').querySelector('#foutick').textContent = tics;
    //       }
    //       // this.closest('.custom-select').querySelector('#firtick').textContent = tics.concat(this.textContent);
    //     }

    //     else if (option.classList.contains('selected')) {
    //       // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log"Iamhere")
    //       // this.closest('.custom-select').querySelector('#firtick').textContent = tics;
    //       // this.closest('.custom-select').querySelector('#sectick').textContent = "";
    //       // this.closest('.custom-select').querySelector('#thetick').textContent = "";
    //       // this.closest('.custom-select').querySelector('#foutick').textContent = "";
    //       if (m0 == 0) {
    //         // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logtics.concat(this.textContent))
    //         // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logthis.closest('.custom-select').querySelector('#sectick').textContent)
    //         // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("Movies clicked!")
    //         option.closest('.custom-select').querySelector('#firtick').textContent = tics;
    //         option.closest('.custom-select').querySelector('#sectick').textContent = "";
    //         option.closest('.custom-select').querySelector('#thetick').textContent = "";
    //         option.closest('.custom-select').querySelector('#foutick').textContent = "";
    //       }
    //       if (m1 == 0) {
    //         // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logtics.concat(this.textContent))
    //         // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logthis.closest('.custom-select').querySelector('#sectick').textContent)
    //         // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("Movies clicked!")
    //         option.closest('.custom-select').querySelector('#firtick').textContent = "";
    //         option.closest('.custom-select').querySelector('#sectick').textContent = tics;
    //         option.closest('.custom-select').querySelector('#thetick').textContent = "";
    //         option.closest('.custom-select').querySelector('#foutick').textContent = "";
    //       } else if (m2 == 0) {

    //         // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("TV Show clicked!")
    //         // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logtics.concat(this.textContent))
    //         // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logthis.closest('.custom-select').querySelector('#sectick').textContent)
    //         option.closest('.custom-select').querySelector('#firtick').textContent = "";
    //         option.closest('.custom-select').querySelector('#sectick').textContent = "";
    //         option.closest('.custom-select').querySelector('#thetick').textContent = tics;
    //         option.closest('.custom-select').querySelector('#foutick').textContent = "";
    //       } else if (m3 == 0) {

    //         // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("Movies and TV Shows clicked!")
    //         // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logtics.concat(this.textContent))
    //         // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logthis.closest('.custom-select').querySelector('#sectick').textContent)
    //         option.closest('.custom-select').querySelector('#firtick').textContent = "";
    //         option.closest('.custom-select').querySelector('#sectick').textContent = "";
    //         option.closest('.custom-select').querySelector('#thetick').textContent = "";
    //         option.closest('.custom-select').querySelector('#foutick').textContent = tics;
    //       }
    //     };
    //   })
    // }

    // window.addEventListener('click', function (e) {
    //   const select = <any>document.querySelector('.custom-select')
    //   if (!select.contains(e.target)) {
    //     select.classList.remove('open');
    //   }
    // });











    //2.4.1
    function getmoviedetails(movieidfromevent: any) {
      var apikey: any = "apikey=ebcb324f3d940e9599200a81e3b4c007";
      var apikeyand: any = apikey.concat("&")

      // This searchquery variable should receive the user input.
      var movieid = movieidfromevent;
      var movieidq = movieid.concat("?")


      // https://api.themoviedb.org/3/search/movie?apikey=apikey=ebcb324f3d940e9599200a81e3b4c007&language=en-US&query=avengers&page=1&include_adult=false

      // https://api.themoviedb.org/3/search/movie?apikey=apikey=ebcb324f3d940e9599200a81e3b4c007&language=en-US&query=avengers&page=1&include_adult=false


      // https://api.themoviedb.org/3/search/movie?apikey=<<apikey>>&query=<<search_query>>&language=en-US&page=1&include_adult=false

      // metiap = apikey
      var metiap = movieidq.concat(apikeyand)


      var routeurl = "/getmoviedetails?";
      // var url = routeurl.concat(metiap);
      var url = "/getmoviedetails?movieid=" + movieidq + "&apikey=ebcb324f3d940e9599200a81e3b4c007";

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log"Catched Movie details!")
          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logxhttp.readyState)

          // Trend JSON data
          moviedetailinfor = JSON.parse(xhttp.responseText);

          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(moviedetailinfor)
          // return obj;



        }
      };
      xhttp.open("GET", url, false);
      xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
      xhttp.send(null);
    }



    function gettvdetails(tvidfromevent: any) {
      var apikey: any = "apikey=ebcb324f3d940e9599200a81e3b4c007";
      var apikeyand: any = apikey.concat("&")

      // This searchquery variable should receive the user input.
      var tvid = tvidfromevent;
      var tvidq = tvid.concat("?")


      // https://api.themoviedb.org/3/search/movie?apikey=apikey=ebcb324f3d940e9599200a81e3b4c007&language=en-US&query=avengers&page=1&include_adult=false

      // https://api.themoviedb.org/3/search/movie?apikey=apikey=ebcb324f3d940e9599200a81e3b4c007&language=en-US&query=avengers&page=1&include_adult=false


      // https://api.themoviedb.org/3/search/movie?apikey=<<apikey>>&query=<<search_query>>&language=en-US&page=1&include_adult=false

      // metiap = apikey
      var metiap = tvidq.concat(apikeyand)


      var routeurl = "/gettvshowdetails?";




      // var url = routeurl.concat(metiap);


      var url = "/gettvshowdetails?tvid=" + tvidq + "&apikey=ebcb324f3d940e9599200a81e3b4c007";

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log"Catched Movie details!")
          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logxhttp.readyState)

          // Trend JSON data
          tvdetailinfor = JSON.parse(xhttp.responseText);

          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(moviedetailinfor)
          // return obj;



        }
      };
      xhttp.open("GET", url, false);
      xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
      xhttp.send(null);
    }




    //4.1.11 Movie Cast Endpoint
    function getmoviecredits(movieidfromevent: any) {


      var apikey: any = "apikey=ebcb324f3d940e9599200a81e3b4c007";
      var apikeyand: any = apikey.concat("&")

      // This searchquery variable should receive the user input.
      var movieid = movieidfromevent;
      var movieidcredit = movieid.concat("/credits?")


      // https://api.themoviedb.org/3/search/movie?apikey=apikey=ebcb324f3d940e9599200a81e3b4c007&language=en-US&query=avengers&page=1&include_adult=false

      // https://api.themoviedb.org/3/search/movie?apikey=apikey=ebcb324f3d940e9599200a81e3b4c007&language=en-US&query=avengers&page=1&include_adult=false


      // https://api.themoviedb.org/3/search/movie?apikey=<<apikey>>&query=<<search_query>>&language=en-US&page=1&include_adult=false

      // metiap = apikey
      var metiap = movieidcredit.concat(apikeyand)


      var routeurl = "/getmoviecredits?";
      var localurl = routeurl.concat(metiap);

      var localurl = "/getmoviecredits?movieid=" + movieid + " &apikey=ebcb324f3d940e9599200a81e3b4c007";
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log"Catched Movie Credits!")
          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logxhttp.readyState)

          // Trend JSON data
          moviecreditsdata = JSON.parse(xhttp.responseText);

          var eightactordata = [];
          var numofelements = 8;
          // // var newArray = obj.slice(0, 9)

          // for (var i = 0; i < numofelements; i++) {

          //     eightactordata.push(obj['cast'][i]);
          // }


          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logeightactor)

          // return eightactor
          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logeightactordata)


        }
      };
      xhttp.open("GET", localurl, false);
      xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
      xhttp.send(null);


    }


    // 4.1.20 TV show Cast Endpoint
    function gettvcredits(tvidfromevent: any) {


      var apikey: any = "apikey=ebcb324f3d940e9599200a81e3b4c007";
      var apikeyand: any = apikey.concat("&")

      // This searchquery variable should receive the user input.
      var tvid = tvidfromevent;
      var tvidcredit = tvid.concat("/credits?")


      // https://api.themoviedb.org/3/search/movie?apikey=apikey=ebcb324f3d940e9599200a81e3b4c007&language=en-US&query=avengers&page=1&include_adult=false

      // https://api.themoviedb.org/3/search/movie?apikey=apikey=ebcb324f3d940e9599200a81e3b4c007&language=en-US&query=avengers&page=1&include_adult=false


      // https://api.themoviedb.org/3/search/movie?apikey=<<apikey>>&query=<<search_query>>&language=en-US&page=1&include_adult=false

      // metiap = apikey
      var metiap = tvidcredit.concat(apikeyand)


      var routeurl = "/gettvshowcredits?";
      var localurl = routeurl.concat(metiap);
      // https://api.themoviedb.org/3/tv/<<tvshow_id>>/credits?apikey=<<apikey>>&language=en-US&page=1
      var localurl = "/gettvshowcredits?tvid=" + tvid + " &apikey=ebcb324f3d940e9599200a81e3b4c007";
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log"Catched Movie Credits!")
          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logxhttp.readyState)

          // Trend JSON data
          tvcreditsdata = JSON.parse(xhttp.responseText);

          // var eightactordata = [];
          // var numofelements = 8;
          // // var newArray = obj.slice(0, 9)

          // for (var i = 0; i < numofelements; i++) {

          //     eightactordata.push(obj['cast'][i]);
          // }


          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logeightactor)

          // return eightactor
          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logeightactordata)


        }
      };
      xhttp.open("GET", localurl, false);
      xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
      xhttp.send(null);


    }




    //4.1.10 Movie Reviews Endpoint
    function getemoviereviews(movieidfromevent: any) {
      var apikey: any = "apikey=ebcb324f3d940e9599200a81e3b4c007";
      var apikeyand: any = apikey.concat("&")

      // This searchquery variable should receive the user input.
      var movieid = movieidfromevent;
      var movieidcredit = movieid.concat("/reviews?")


      // https://api.themoviedb.org/3/search/movie?apikey=apikey=ebcb324f3d940e9599200a81e3b4c007&language=en-US&query=avengers&page=1&include_adult=false

      // https://api.themoviedb.org/3/search/movie?apikey=apikey=ebcb324f3d940e9599200a81e3b4c007&language=en-US&query=avengers&page=1&include_adult=false


      // https://api.themoviedb.org/3/search/movie?apikey=<<apikey>>&query=<<search_query>>&language=en-US&page=1&include_adult=false

      // metiap = apikey
      var metiap = movieidcredit.concat(apikeyand)


      var routeurl = "/getmoviereviews?";
      var localurl = routeurl.concat(metiap);

      var localurl = "/getmoviereviews?movieid=" + movieid + " &apikey=ebcb324f3d940e9599200a81e3b4c007";

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log"Catched Movie Reviews!")
          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logxhttp.readyState)

          // Trend JSON data
          moviereviewdata = JSON.parse(xhttp.responseText);

          var fivedata = [];
          var numofelements = 5;
          // var newArray = obj.slice(0, 9)

          // for (var i = 0; i < numofelements; i++) {
          //     // obj['results'][i]
          //     fivedata.push(obj['results'][i]);
          // }


          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logfivedata)

          // return fivedata





        }
      };
      xhttp.open("GET", localurl, false);
      xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
      xhttp.send(null);

    }







    // 4.1.19 TV show Reviews Endpoint
    function gettvreviews(tvidfromevent: any) {
      var apikey: any = "apikey=ebcb324f3d940e9599200a81e3b4c007";
      var apikeyand: any = apikey.concat("&")

      // This searchquery variable should receive the user input.
      var tvid = tvidfromevent;
      var tvidcredit = tvid.concat("/reviews?")


      // https://api.themoviedb.org/3/search/movie?apikey=apikey=ebcb324f3d940e9599200a81e3b4c007&language=en-US&query=avengers&page=1&include_adult=false

      // https://api.themoviedb.org/3/search/movie?apikey=apikey=ebcb324f3d940e9599200a81e3b4c007&language=en-US&query=avengers&page=1&include_adult=false


      // https://api.themoviedb.org/3/search/movie?apikey=<<apikey>>&query=<<search_query>>&language=en-US&page=1&include_adult=false

      // metiap = apikey
      var metiap = tvidcredit.concat(apikeyand)


      var routeurl = "/gettvshowreviews?";
      var localurl = routeurl.concat(metiap);

      var localurl = "/gettvshowreviews?tvid=" + tvid + " &apikey=ebcb324f3d940e9599200a81e3b4c007";

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log"Catched Movie Reviews!")
          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logxhttp.readyState)

          // Trend JSON data
          tvreviewdata = JSON.parse(xhttp.responseText);

          // var fivedata = [];
          // var numofelements = 5;
          // var newArray = obj.slice(0, 9)

          // for (var i = 0; i < numofelements; i++) {
          //     // obj['results'][i]
          //     fivedata.push(obj['results'][i]);
          // }


          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logfivedata)

          // return fivedata





        }
      };
      xhttp.open("GET", localurl, false);
      xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
      xhttp.send(null);

    }







    async function getSiblingsvert(elemid: any) {
      // for collecting siblings
      // For show more button, it stores all sibiling elements of the clicked button.
      var siblings = [];
      // // if no parent, return no sibling
      // if(!e.parentNode) {
      //     return siblings;
      // }
      // // first child of the parent node
      var tempel = <any>document.getElementById(elemid);
      var sibling = tempel.parentNode.firstChild;

      // collecting siblings
      while (sibling) {
        if (sibling.nodeType === 1 && sibling !== elemid) {
          await siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
      }
      // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("getSiblingsvert")
      // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(sibling);
      return siblings;
    };




    // var showtrendprom = new Promise((resolve, reject) => {

    // });

    async function showmoremovie(event: any) {


      // // // // // // // console("hi")
      // event.id is the clicked show more button id, and it is movie id.
      var element = event.target




      // Movie details data
      await getmoviedetails(element.id)

      await getmoviecredits(element.id)

      await getemoviereviews(element.id)


      // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("Clicked!!!!!!!!!!")
      // moviedetailinfor
      // Get the modal
      var modal = <any>document.getElementById("mainmodal")

      // Get the button that opens the modal
      var clickedbtn = document.getElementById(element.id);

      // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(clickedbtn)

      var closecrossbtn = <any>document.getElementById("closecross");


      // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("Hello!!!!!!!!!!")
      modal.style.display = "block";


      // When the user clicks on <span> (x), close the modal
      closecrossbtn.onclick = function () {
        modal.style.display = "none";
        removeexmoviedetail = 1;
      }

      // window.onclick = function (event) {
      //     if (event.target == modal) {
      //         modal.style.display = "none";
      //         removeexmoviedetail = 1;
      //     }
      // }




      // // // // // // ("moviedetaildata");
      // // // // // // (moviedetailinfor);

      var mdid = moviedetailinfor['id']
      var mdtitle = moviedetailinfor['title']
      var mdruntime = moviedetailinfor['runtime']
      var mdrelasetime = moviedetailinfor['release_data']

      // // // // // // // // // // // // // // // // // // // console..log(moviedetailinfor['spoken_languages'])
      // // // // // // // // // // // // // // // // // // // console..log(moviedetailinfor['spoken_languages'].length)


      if (moviedetailinfor['spoken_languages'].length == 0) {
        // // // // // // // // // // // // // // // // // // console..log("length 0")
        // // // // // // // // // // // // // // // // // // console..log(moviedetailinfor['spoken_languages'].length)
        var mdspokenlan: any = "";
      }
      if (moviedetailinfor['spoken_languages'].length != 0) {
        // // // // // // // // // // // // // // // // // // // console..log("length!=0")
        // // // // // // // // // // // // // // // // // // // console..log(moviedetailinfor['spoken_languages'].length)
        // var mdspokenlan = moviedetailinfor['spoken_languages'][0]['english_name']

        var ui = 0;
        var mdspokenlan: any = [];
        for (ui = 0; ui < moviedetailinfor['spoken_languages'].length; ui++) {
          mdspokenlan.push(moviedetailinfor['spoken_languages'][ui]['english_name'])
        }

      }

      // // // // // // // // // // // // // // // // console..log(mdspokenlan)

      if (mdspokenlan == undefined || mdspokenlan == '' || mdspokenlan == null) {
        mdspokenlan = "N/A"
      }

      var x = mdspokenlan.toString();
      mdspokenlan = x.replaceAll(",", ", ");
      // // // // // // // // // // // // // // // // console..log(mdspokenlan)


      var mdvoteaver = moviedetailinfor["vote_average"]
      var mdvotecount = moviedetailinfor["vote_count"]
      var mdposterpath = moviedetailinfor["poster_path"]
      var mdbackdroppath = moviedetailinfor["backdrop_path"]
      var mdgenres = moviedetailinfor["genres"]

      var movieaddintmdb = "https://www.themoviedb.org/movie/";
      movieaddintmdb = movieaddintmdb.concat(mdid);







      // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("sibilingsfromcurrentclicked")
      // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(sibilingsfromcurrentclicked)

      // var limlength=sibilingsfromcurrentclicked.length-2

      if (removeexmoviedetail == 1) {



        var parent = <any>document.getElementById("modalcontone")
        while (parent.firstChild) {
          await parent.firstChild.remove()
        }
        // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("Removing")
        removeexmoviedetail = 0;

      }










      var sibilingsfromcurrentclicked = await getSiblingsvert(element.id);

      await sibilingsfromcurrentclicked.pop()

      // // // // // // // // // // // // (sibilingsfromcurrentclicked)
      var tme: any;
      for (tme = 0; tme < sibilingsfromcurrentclicked.length; tme++) {
        if (sibilingsfromcurrentclicked[tme] != undefined) {

          if (sibilingsfromcurrentclicked[tme].attributes.class.nodeValue == "movieposterfromsearch") {

            var imgindetail = document.createElement("img");
            imgindetail.setAttribute("id", "imageindetailone")
            imgindetail.setAttribute("class", "imageindetailclass")

            // // // // // // // ("mdbackdroppath")
            // // // // // // // (mdbackdroppath)

            if (mdbackdroppath != null) {
              // // // // // // // ("Not null in backdrop")
              imgindetail.setAttribute("src", "https://image.tmdb.org/t/p/w780/" + mdbackdroppath)

              var tempmct = <any>document.getElementById("modalcontone");
              // tempmct.appendChild(imgindetail);
            }
            if (mdbackdroppath == null) {
              // // // // // // // ("Null in backdrop")
              imgindetail.setAttribute("src", "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg");
              var tempmct = <any>document.getElementById("modalcontone");
              // tempmct.appendChild(imgindetail);
            }
          }

          if (sibilingsfromcurrentclicked[tme].attributes.class.nodeValue != "movieposterfromsearch") {

            var cln = await sibilingsfromcurrentclicked[tme].cloneNode(true);

            // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("cln")
            // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(cln)

            if (cln.className == "rightpara") {
              // information symbols
              // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(cln.innerHTML);
              var temphref = "https://www.themoviedb.org/movie/" + mdid;
              var newtitlewithicon = cln.innerHTML + " " + "<span style='color:#a51916' >" + "<a id='movietmdbwebsite' target='_blank'>" + "\u24d8" + "</a>" + "</span>";
              cln.innerHTML = newtitlewithicon;
              cln.className = "rightparadetail"
              var tempmct = <any>document.getElementById("modalcontone")
              // await tempmct.appendChild(cln);

              var tempmtbs = <any>document.getElementById("movietmdbwebsite")
              tempmtbs.href = temphref;

            }
            if (cln.className == "yearandgenreclass") {
              cln.className = "yearandgenreclassdetail"
              var tempmct = <any>document.getElementById("modalcontone");
              // await tempmct.appendChild(cln);
            }
            if (cln.className == "pointandvotesclass") {
              cln.className = "pointandvotesclassdetail"
              cln.childNodes[1].style.color = "black";
              var tempmct = <any>document.getElementById("modalcontone");
              // await tempmct.appendChild(cln);


            }

            if (cln.className == "movieoverviewcontclass") {
              cln.className = "movieoverviewcontclassdetail"
              var tempmct = <any>document.getElementById("modalcontone")
              // await tempmct.appendChild(cln);
            }







          }

        }
      }








      var spoklandp = document.createElement("p");

      var tempmct = <any>document.getElementById("modalcontone")
      // tempmct.appendChild(spoklandp);

      spoklandp.setAttribute("id", "spoklandpone");
      spoklandp.setAttribute("class", "searchshowvclass");

      // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(mdspokenlan)
      var temps = "Spoken languages: ";
      temps = temps.concat(mdspokenlan)
      var t = document.createTextNode(temps);
      // spoklandp.appendChild(t);



      //Cast

      var casttitle = document.createElement("p");
      casttitle.setAttribute("id", "casttitleid")
      var tempmct = <any>document.getElementById("modalcontone")
      // tempmct.appendChild(casttitle);
      var temps = "Cast";
      // temps.bold();
      // temps = temps.concat(mdspokenlan)
      // var t = document.createTextNode(temps);
      // casttitle.appendChild(t);

      // casttitle.setAttribute("font-weight","bold");
      casttitle.innerHTML = temps;




      var castdiv = document.createElement("div");
      castdiv.setAttribute("id", "castdiv");
      castdiv.setAttribute("class", "castdivclass");
      var tempmct = <any>document.getElementById("modalcontone")
      // tempmct.appendChild(castdiv);


      if (moviecreditsdata["cast"].length == 0) {
        var na = document.createElement("p");
        na.setAttribute("class", "nasen")
        var tempmct = <any>document.getElementById("modalcontone")
        // tempmct.appendChild(na);
        na.textContent = "N/A";
      }




      var ac: any;
      var rowid: any;
      for (ac = 0; ac < moviecreditsdata["cast"].length; ac++) {

        if (ac == 0) {
          var rowdivforactor = document.createElement("div");
          var tempcd = <any>document.getElementById("castdiv")
          // tempcd.appendChild(rowdivforactor);
          rowid = "row" + ac;
          rowdivforactor.setAttribute("id", rowid);
          rowdivforactor.setAttribute("class", "rowcast");

        }

        if (ac >= 8) {
          break;
        }
        if (ac == 4) {

          var rowdivforactor = document.createElement("div");
          var tempcdi = <any>document.getElementById("castdiv");
          // tempcdi.appendChild(rowdivforactor);
          rowid = "row" + ac;
          rowdivforactor.setAttribute("id", rowid);
          rowdivforactor.setAttribute("class", "rowcast");


          // var tempbr=document.createElement("br");
          // document.getElementById("castdiv").appendChild( tempbr);
        }
        if (ac < 8) {
          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(moviecreditsdata["cast"][ac])

          var coldivforactor = document.createElement("div");
          var temprowid = <any>document.getElementById(rowid);
          // temprowid.appendChild(coldivforactor);
          var coluid = "col" + ac;
          coldivforactor.setAttribute("id", coluid)
          coldivforactor.setAttribute("class", "columncast")


          var eachactor = document.createElement("img");
          var eachactorimgid = "actor" + ac;
          eachactor.setAttribute("id", eachactorimgid)
          eachactor.setAttribute("class", "castedactor")

          // // // // // // // ("moviecreditsdata[cast][ac][profile_path]")
          // // // // // // // (moviecreditsdata["cast"][ac]['profile_path'])

          if (moviecreditsdata["cast"][ac]['profile_path'] != null) {
            // // // // // // // ("Not null")
            eachactor.setAttribute("src", "https://image.tmdb.org/t/p/w185" + moviecreditsdata["cast"][ac]['profile_path'])

            var tempcoluid = <any>document.getElementById(coluid)
            // tempcoluid.appendChild(eachactor);
          }


          if (moviecreditsdata["cast"][ac]['profile_path'] == null) {
            // // // // // // // ("null")
            eachactor.setAttribute("src", "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/person-placeholder.png")

            var tempcoluid = <any>document.getElementById(coluid)
            // tempcoluid.appendChild(eachactor);
          }



          var name = document.createElement("p");
          name.setAttribute("class", "actorname")
          var tempcoluid = <any>document.getElementById(coluid)
          // tempcoluid.appendChild(name);

          name.innerHTML = moviecreditsdata["cast"][ac]['name']

          var asas = document.createElement("p");
          asas.setAttribute("class", "asasjust")
          // tempcoluid.appendChild(asas);

          asas.innerHTML = "AS";

          var char = document.createElement("p");
          char.setAttribute("class", "actorchara")
          // tempcoluid.appendChild(char);

          char.innerHTML = moviecreditsdata["cast"][ac]['character']








        }

      }


      //Review

      var reviewtitle = document.createElement("p");
      reviewtitle.setAttribute("class", "reviewdetailtitle")
      var tempmct = <any>document.getElementById("modalcontone");
      // tempmct.appendChild(reviewtitle);
      var temps = "Reviews";
      // temps = temps.concat(mdspokenlan)
      // var t = document.createTextNode(temps);
      // casttitle.appendChild(t);
      reviewtitle.innerHTML = temps;

      if (moviereviewdata["results"].length == 0) {
        var na = document.createElement("p");
        na.setAttribute("class", "nasen")
        var tempmct = <any>document.getElementById("modalcontone");
        // tempmct.appendChild(na);
        na.textContent = "N/A";
      }


      var ri: any;
      for (ri = 0; ri < moviereviewdata["results"].length; ri++) {
        if (ri >= 5) {
          break;
        }
        if (ri < 5) {
          var username = moviereviewdata["results"][ri]["author_details"]["username"]
          var content = moviereviewdata["results"][ri]["content"]
          var rating = moviereviewdata["results"][ri]["author_details"]["rating"]
          var createdat = moviereviewdata["results"][ri]["created_at"]


          // name and date
          var parausername = document.createElement('p');
          parausername.setAttribute("class", "detailparausernamedate");
          var tempmct = <any>document.getElementById("modalcontone");
          // tempmct.appendChild(parausername);

          var dateObj = new Date(createdat);
          var month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
          var date = ('0' + dateObj.getDate()).slice(-2);
          var year = dateObj.getFullYear();
          var shortDate = month + '/' + date + '/' + year;
          // alert(shortDate);

          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(shortDate)

          parausername.innerHTML = "<span class='reviewername'>" + username + "</span>" + " on " + shortDate;


          // red star rating and review content
          if (rating != null) {
            // rating
            var ratingparagr = document.createElement('p');
            ratingparagr.setAttribute("class", "starinrewiew");
            var tempmct = <any>document.getElementById("modalcontone")
            // tempmct.appendChild(ratingparagr);
            var stringrating = '&#9733 ' + (rating / 2) + "/5";


            ratingparagr.innerHTML = stringrating;
            ratingparagr.setAttribute("style", "color: #a51916;");
            ratingparagr.style.fontSize = "13px";

            var tempspancontent = document.createElement('p');
            tempspancontent.setAttribute("class", "reviewcontentoverflow")
            // ratingparagr.appendChild(tempspancontent);
            tempspancontent.innerHTML = content;
            tempspancontent.setAttribute("style", "color: black");



            var hrperreview = document.createElement("hr");
            hrperreview.setAttribute("class", "linebetreview");
            var tempmct = <any>document.getElementById("modalcontone");
            // tempmct.appendChild(hrperreview);
            hrperreview.setAttribute("width", "80%")



          }
          if (rating == null) {
            // rating
            var ratingparagr = document.createElement('p');
            var tempmct = <any>document.getElementById("modalcontone");
            // tempmct.appendChild(ratingparagr);
            var stringrating = "";

            var tempspancontent = document.createElement('p');
            tempspancontent.setAttribute("class", "reviewcontentoverflow")
            // ratingparagr.appendChild(tempspancontent);
            tempspancontent.innerHTML = content;
            tempspancontent.setAttribute("style", "color: black");

            // boader line between reviews 
            var hrperreview = document.createElement("hr");
            hrperreview.setAttribute("class", "linebetreview");
            var tempmct = <any>document.getElementById("modalcontone")
            // tempmct.appendChild(hrperreview);
            hrperreview.setAttribute("width", "80%")
            // ratingparagr.setAttribute("style", "color: #a51916;"); 


          }




















        }

      }



    }





    async function showmoretve(event: any) {

      // // // // // // // // // // // console("showmoretve(event)")


      // event.id is the clicked show more button id, and it is movie id.
      var element = event.target




      // Movie details data
      // await getmoviedetails(element.id)
      await gettvdetails(element.id)

      // await getmoviecredits(element.id)
      await gettvcredits(element.id)

      // await getemoviereviews(element.id)
      await gettvreviews(element.id)


      // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("Clicked!!!!!!!!!!")
      // moviedetailinfor
      // Get the modal
      var modal = <any>document.getElementById("mainmodal")

      // Get the button that opens the modal
      var clickedbtn = document.getElementById(element.id);

      // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(clickedbtn)

      var closecrossbtn = <any>document.getElementById("closecross");


      // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("Hello!!!!!!!!!!")
      modal.style.display = "block";


      // When the user clicks on <span> (x), close the modal
      closecrossbtn.onclick = function () {
        modal.style.display = "none";
        removeexmoviedetail = 1;
      }

      // window.onclick = function (event) {
      //     if (event.target == modal) {
      //         modal.style.display = "none";
      //         removeexmoviedetail = 1;
      //     }
      // }






      var mdid = tvdetailinfor['id']
      var mdtitle = tvdetailinfor['name']
      var mdruntime = tvdetailinfor['episode_run_time']
      var mdrelasetime = tvdetailinfor['first_air_date']



      if (tvdetailinfor['spoken_languages'].length == 0) {
        // // // // // // // // // // // // // // // // // // console..log("length 0")
        // // // // // // // // // // // // // // // // // // console..log(tvdetailinfor['spoken_languages'].length)
        var mdspokenlan: any = "";
      }
      if (tvdetailinfor['spoken_languages'].length != 0) {
        // // // // // // // // // // // // // // // // // // console..log("length!=0")
        // // // // // // // // // // // // // // // // // // console..log(tvdetailinfor['spoken_languages'].length)
        // var mdspokenlan = tvdetailinfor['spoken_languages'][0]['english_name']
        var ui = 0;
        var mdspokenlan: any = [];
        for (ui = 0; ui < tvdetailinfor['spoken_languages'].length; ui++) {
          mdspokenlan.push(tvdetailinfor['spoken_languages'][ui]['english_name'])
        }
      }


      // // // // // // // // // // // // // // // console..log(mdspokenlan)
      if (mdspokenlan == undefined || mdspokenlan == '' || mdspokenlan == null) {
        mdspokenlan = "N/A"
      }
      var x = mdspokenlan.toString();
      mdspokenlan = x.replaceAll(",", ", ");
      // // // // // // // // // // // // // // // // // console..log(mdspokenlan)

      var mdvoteaver = tvdetailinfor["vote_average"]
      var mdvotecount = tvdetailinfor["vote_count"]
      var mdposterpath = tvdetailinfor["poster_path"]
      var mdbackdroppath = tvdetailinfor["backdrop_path"]
      var mdgenres = tvdetailinfor["genres"]
      var mdnos = tvdetailinfor["number_of_seasons"]
      var mdoverview = tvdetailinfor["overview"]

      // // // // // // // // // // console(mdoverview)


      var movieaddintmdb = "https://www.themoviedb.org/tv/";
      movieaddintmdb = movieaddintmdb.concat(mdid);



      if (removeexmoviedetail == 1) {



        var parent = <any>document.getElementById("modalcontone")
        while (parent.firstChild) {
          await parent.firstChild.remove()
        }
        // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("Removing")
        removeexmoviedetail = 0;

      }










      var sibilingsfromcurrentclicked = await getSiblingsvert(element.id);

      await sibilingsfromcurrentclicked.pop()

      var tme: any;
      for (tme = 0; tme < sibilingsfromcurrentclicked.length; tme++) {
        if (sibilingsfromcurrentclicked[tme] != undefined) {
          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("tme")
          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(tme)
          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("sibilingsfromcurrentclicked[tme].attributes.class.nodeValue")
          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(sibilingsfromcurrentclicked[tme].id)
          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(sibilingsfromcurrentclicked[tme].attributes.class.nodeValue)


          // // // // // // ("sibilingsfromcurrentclicked[tme].attributes.class.nodeValue")
          // // // // // // (sibilingsfromcurrentclicked[tme].attributes.class.nodeValue)

          if (sibilingsfromcurrentclicked[tme].attributes.class.nodeValue == "movieposterfromsearch") {

            var imgindetail = document.createElement("img");
            imgindetail.setAttribute("id", "imageindetailone")
            imgindetail.setAttribute("class", "imageindetailclass")

            // // // // // // ("mdbackdroppath")
            // // // // // // (mdbackdroppath)

            if (mdbackdroppath != null) {
              // // // // // // ("TV not null")
              imgindetail.setAttribute("src", "https://image.tmdb.org/t/p/w780/" + mdbackdroppath)
              var tempmct = <any>document.getElementById("modalcontone")
              // tempmct.appendChild(imgindetail);
            }
            if (mdbackdroppath == null) {

              // // // // // // ("TV null")
              imgindetail.setAttribute("src", "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg")
              var tempmct = <any>document.getElementById("modalcontone")
              // tempmct.appendChild(imgindetail);
            }

          }

          if (sibilingsfromcurrentclicked[tme].attributes.class.nodeValue != "movieposterfromsearch") {

            var cln = await sibilingsfromcurrentclicked[tme].cloneNode(true);

            // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("cln")
            // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(cln)

            if (cln.className == "rightpara") {
              // information symbols
              // \u24d8
              // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(cln.innerHTML);
              var temphref = "https://www.themoviedb.org/tv/" + mdid;
              var newtitlewithicon = cln.innerHTML + " " + "<span style='color:#a51916' >" + "<a id='movietmdbwebsite' target='_blank'>" + "\u24d8" + "</a>" + "</span>";
              cln.innerHTML = newtitlewithicon;
              cln.className = "rightparadetail"
              var tempmct = <any>document.getElementById("modalcontone");
              // await tempmct.appendChild(cln);

              var tempmtw = <any>document.getElementById("movietmdbwebsite")
              tempmtw.href = temphref;

            }
            if (cln.className == "yearandgenreclass") {
              cln.className = "yearandgenreclassdetail"
              var tempmct = <any>document.getElementById("modalcontone")
              // await tempmct.appendChild(cln);
            }
            if (cln.className == "pointandvotesclass") {
              cln.className = "pointandvotesclassdetail"
              cln.childNodes[1].style.color = "black";
              var tempmct = <any>document.getElementById("modalcontone")
              // await tempmct.appendChild(cln);


            }

            if (cln.className == "movieoverviewcontclass") {
              cln.className = "movieoverviewcontclassdetail"
              var tempmct = <any>document.getElementById("modalcontone")
              // await tempmct.appendChild(cln);
            }







          }

        }
      }








      var spoklandp = document.createElement("p");

      // var tempmct = <any>document.getElementById("modalcontone")
      // tempmct.appendChild(spoklandp);

      spoklandp.setAttribute("id", "spoklandpone");
      spoklandp.setAttribute("class", "searchshowvclass");

      // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(mdspokenlan)
      var temps = "Spoken languages: ";
      temps = temps.concat(mdspokenlan)
      var t = document.createTextNode(temps);
      // spoklandp.appendChild(t);



      //Cast

      var casttitle = document.createElement("p");
      var tempmct = <any>document.getElementById("modalcontone")
      // tempmct.appendChild(casttitle);
      var temps = "Cast";
      // temps.bold();
      // temps = temps.concat(mdspokenlan)
      // var t = document.createTextNode(temps);
      // casttitle.appendChild(t);

      // casttitle.setAttribute("font-weight","bold");
      casttitle.innerHTML = temps.bold();




      var castdiv = document.createElement("div");
      castdiv.setAttribute("id", "castdiv");
      castdiv.setAttribute("class", "castdivclass");
      var tempmct = <any>document.getElementById("modalcontone")
      // tempmct.appendChild(castdiv);



      if (tvcreditsdata["cast"].length == 0) {
        var na = document.createElement("p");
        na.setAttribute("class", "nasen")
        var tempmct = <any>document.getElementById("modalcontone")
        // tempmct.appendChild(na);
        na.textContent = "N/A";
      }


      var ac: any;
      var rowid: any;
      for (ac = 0; ac < tvcreditsdata["cast"].length; ac++) {

        if (ac == 0) {
          var rowdivforactor = document.createElement("div");
          var tempcd = <any>document.getElementById("castdiv")
          // tempcd.appendChild(rowdivforactor);
          rowid = "row" + ac;
          rowdivforactor.setAttribute("id", rowid);
          rowdivforactor.setAttribute("class", "rowcast");

        }

        if (ac >= 8) {
          break;
        }
        if (ac == 4) {

          var rowdivforactor = document.createElement("div");
          var tempcd = <any>document.getElementById("castdiv")
          // tempcd.appendChild(rowdivforactor);
          rowid = "row" + ac;
          rowdivforactor.setAttribute("id", rowid);
          rowdivforactor.setAttribute("class", "rowcast");


          // var tempbr=document.createElement("br");
          // document.getElementById("castdiv").appendChild( tempbr);
        }
        if (ac < 8) {
          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(tvcreditsdata["cast"][ac])

          var coldivforactor = document.createElement("div");
          var tempro = <any>document.getElementById(rowid)
          // tempro.appendChild(coldivforactor);
          var coluid = "col" + ac;
          coldivforactor.setAttribute("id", coluid)
          coldivforactor.setAttribute("class", "columncast")


          var eachactor = document.createElement("img");
          var eachactorimgid = "actor" + ac;
          eachactor.setAttribute("id", eachactorimgid)
          eachactor.setAttribute("class", "castedactor")

          // // // // // // // ("tvcreditsdata[cast][ac]['profile_path']")
          // // // // // // // (tvcreditsdata["cast"][ac]['profile_path'])

          if (tvcreditsdata["cast"][ac]['profile_path'] != null) {
            eachactor.setAttribute("src", "https://image.tmdb.org/t/p/w185" + tvcreditsdata["cast"][ac]['profile_path'])

            var tempcid = <any>document.getElementById(coluid)
            // tempcid.appendChild(eachactor);
          }

          if (tvcreditsdata["cast"][ac]['profile_path'] == null) {
            eachactor.setAttribute("src", "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/person-placeholder.png")
            var tempcid = <any>document.getElementById(coluid)
            // tempcid.appendChild(eachactor);
          }


          var name = document.createElement("p");
          name.setAttribute("class", "actorname")
          var tempcid = <any>document.getElementById(coluid)
          // tempcid.appendChild(name);

          name.innerHTML = tvcreditsdata["cast"][ac]['name']

          var asas = document.createElement("p");
          asas.setAttribute("class", "asasjust")
          // tempcid.appendChild(asas);

          asas.innerHTML = "AS";

          var char = document.createElement("p");
          char.setAttribute("class", "actorchara")
          // tempcid.appendChild(char);

          char.innerHTML = tvcreditsdata["cast"][ac]['character']








        }

      }


      //Review

      var reviewtitle = document.createElement("p");
      reviewtitle.setAttribute("class", "reviewdetailtitle")
      var tempmct = <any>document.getElementById("modalcontone");
      // tempmct.appendChild(reviewtitle);
      var temps = "Reviews";
      // temps = temps.concat(mdspokenlan)
      // var t = document.createTextNode(temps);
      // casttitle.appendChild(t);
      reviewtitle.innerHTML = temps;

      if (tvreviewdata["results"].length == 0) {
        var na = document.createElement("p");
        na.setAttribute("class", "nasen");
        var tempmct = <any>document.getElementById("modalcontone");
        // tempmct.appendChild(na);
        na.textContent = "N/A";
      }

      var ri: any;
      for (ri = 0; ri < tvreviewdata["results"].length; ri++) {
        if (ri >= 5) {
          break;
        }
        if (ri < 5) {
          var username = tvreviewdata["results"][ri]["author_details"]["username"]
          var content = tvreviewdata["results"][ri]["content"]
          var rating = tvreviewdata["results"][ri]["author_details"]["rating"]
          var createdat = tvreviewdata["results"][ri]["created_at"]


          // name and date
          var parausername = document.createElement('p');
          parausername.setAttribute("class", "detailparausernamedate");
          var tempmct = <any>document.getElementById("modalcontone");
          // tempmct.appendChild(parausername);

          var dateObj = new Date(createdat);
          var month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
          var date = ('0' + dateObj.getDate()).slice(-2);
          var year = dateObj.getFullYear();
          var shortDate = month + '/' + date + '/' + year;
          // alert(shortDate);

          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(shortDate)

          // parausername.innerHTML = username.bold() + " on " + shortDate;
          parausername.innerHTML = "<span class='reviewername'>" + username + "</span>" + " on " + shortDate;

          // red star rating and review content
          if (rating != null) {
            // rating
            var ratingparagr = document.createElement('p');
            ratingparagr.setAttribute("class", "starinrewiew")
            var tempmct = <any>document.getElementById("modalcontone")
            // tempmct.appendChild(ratingparagr);
            var stringrating = '&#9733 ' + (rating / 2) + "/5";


            ratingparagr.innerHTML = stringrating;
            ratingparagr.setAttribute("style", "color: #a51916;");
            ratingparagr.style.fontSize = "13px";

            var tempspancontent = document.createElement('p');
            tempspancontent.setAttribute("class", "reviewcontentoverflow")
            // ratingparagr.appendChild(tempspancontent);
            tempspancontent.innerHTML = content;
            tempspancontent.setAttribute("style", "color: black");



            var hrperreview = document.createElement("hr");
            hrperreview.setAttribute("class", "linebetreview")

            var tempmct = <any>document.getElementById("modalcontone")
            // tempmct.appendChild(hrperreview);
            hrperreview.setAttribute("width", "80%")



          }
          if (rating == null) {
            // rating
            var ratingparagr = document.createElement('p');
            var tempmct = <any>document.getElementById("modalcontone")
            // tempmct.appendChild(ratingparagr);
            var stringrating = "";

            var tempspancontent = document.createElement('p');
            tempspancontent.setAttribute("class", "reviewcontentoverflow")
            // ratingparagr.appendChild(tempspancontent);
            tempspancontent.innerHTML = content;
            tempspancontent.setAttribute("style", "color: black");

            // boader line between reviews 
            var hrperreview = document.createElement("hr");
            hrperreview.setAttribute("class", "linebetreview")
            var tempmct = <any>document.getElementById("modalcontone")
            // tempmct.appendChild(hrperreview);
            hrperreview.setAttribute("width", "80%")
            // ratingparagr.setAttribute("style", "color: #a51916;"); 


          }




















        }

      }



    }




















    // print query results   
    async function userquerypaint(maindatabyusersearch: any) {

      // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("checker")
      // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(checker)
      // // // // // // // // // // // // console("I just clicked once!")
      if (searchtimes != 0) {
        // // // // // // // // // // // // // // ("I am here in temp A")   
        var parent = document.getElementById("searchshow");
        if (parent != null) {
          while (parent.firstChild) {
            parent.firstChild.remove()
          }
          parent.remove();
        }
      }

      if (checker == 0) {

        // // // // // // // // // // // // // // ("I am here in temp B")  

        // checker += 1
        // // // // // // // // // // // // // console("haha")
        checker = 0

        var i;
        var limlength = 10;
        // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("Hello!!!!!!!!")
        // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(checker)


        if (userquery[1] == "Movies") {
          for (i = 0; i < maindatabyusersearch['results'].length; i++) {
            // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("Hi!!!")

            if (i > 9) {
              // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("Hi")
              // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(i)
              break;
            }


            var numig = i + 1;
            var stringnumig = numig.toString();

            var searchshowv = "searchshow"

            var movibxid = "movierebox";
            movibxid = movibxid.concat(stringnumig)

            var movibximgid = "movieimg"
            movibximgid = movibximgid.concat(stringnumig)

            var paraforimg = "paraforimg"
            paraforimg = paraforimg.concat(stringnumig)


            var moviinfor = "movieinf"
            var moviinforid = moviinfor.concat(stringnumig)

            var parainfboxid = "paraid"
            parainfboxid = parainfboxid.concat(stringnumig)

            var showmorebuttonid = "showmorebuttonid"
            showmorebuttonid = showmorebuttonid.concat(stringnumig)



            if (i == 0) {
              var searchshow = document.createElement("div");
              // document.getElementById("mainboth").appendChild(searchshow);
              var tempsb = <any>document.getElementById("showingbox");
              // tempsb.appendChild(searchshow);

              searchshow.setAttribute("id", searchshowv);
              searchshow.setAttribute("class", "searchshowvclass");


            }



            var movieid = maindatabyusersearch['results'][i]['id']
            var movietitle = maindatabyusersearch['results'][i]['title']
            // // // // // // // // // // // // console..log(movietitle)
            var movieoverview = maindatabyusersearch['results'][i]['overview']
            var movieposterpath = maindatabyusersearch['results'][i]['poster_path']
            var reldate = maindatabyusersearch['results'][i]['release_date']
            var voteaverage: any = maindatabyusersearch['results'][i]['vote_average'] / 2
            // var voteaverage = maindatabyusersearch['results'][i]['vote_average']
            // // // // // // // // // // // // // // // console..log(voteaverage)
            var votecount = maindatabyusersearch['results'][i]['vote_count']
            // // // // // // // // // // // // // // // console..log(votecount)
            var genreids = maindatabyusersearch['results'][i]['genre_ids']
            if (genreids == [] || genreids == undefined) {
              genreids = []
            }
            // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(movietitle)

            // // Box for one movie
            var movieresultbox = document.createElement("div");
            var tempssv = <any>document.getElementById(searchshowv);
            // tempssv.appendChild(movieresultbox);

            movieresultbox.setAttribute("id", movibxid);
            movieresultbox.setAttribute("class", "movierebox");

            // document.getElementById(movibxid).style.width = "600px";
            // document.getElementById(movibxid).style.height = "150px"; 


            // Redline next to img
            var redlinenearimg = document.createElement("div");
            var tempmb = <any>document.getElementById(movibxid)
            // tempmb.appendChild(redlinenearimg);
            // movieresultimg.setAttribute("id", movibximgid);

            redlinenearimg.setAttribute("class", "movieposterredline");
            redlinenearimg.style.width = "5px";
            redlinenearimg.style.height = "290px";
            redlinenearimg.style.backgroundColor = "red";


            // Poster for one movie

            var movieresultimg = document.createElement("IMG");
            // tempmb.appendChild(movieresultimg);

            movieresultimg.setAttribute("id", movibximgid);
            movieresultimg.setAttribute("class", "movieposterfromsearch");


            // // // // // // // // (movieposterpath)

            if (movieposterpath === null) {

              var tempmmid = <any>document.getElementById(movibximgid);
              tempmmid.src = "https://cinemaone.net/images/movie_placeholder.png";
            }

            if (movieposterpath != null) {
              var tempmmid = <any>document.getElementById(movibximgid);
              tempmmid.src = "https://image.tmdb.org/t/p/w185/" + movieposterpath;

            }




            // Exception process for image file






            //movie title
            var parainfbox = document.createElement("p");

            var tempmdid = <any>document.getElementById(movibxid)
            // tempmdid.appendChild(parainfbox);
            parainfbox.setAttribute("id", parainfboxid);
            parainfbox.setAttribute("class", "rightpara");

            if (movietitle == null || movietitle == undefined || movietitle == '') {
              movietitle = "N/A"
            }

            // var t = document.createTextNode(movietitle);
            // document.getElementById(parainfboxid).appendChild(t);

            // window.onload = function() {
            var temppfid = <any>document.getElementById(parainfboxid)
            temppfid.textContent = movietitle;
            // }

            // // // // // // // // // console(document.getElementById(parainfboxid).innerHTML)
            // // // // // // // // // // // // console("")


            //year and genre
            var yearandgenre = document.createElement("p");
            var tempmbid = <any>document.getElementById(movibxid)
            // tempmbid.appendChild(yearandgenre);
            yearandgenre.setAttribute("class", "yearandgenreclass");



            var genrestringlist = "";
            var genrelistpermovie = [];
            var j: any;
            for (j = 0; j < genreids.length; j++) {

              // genrelistpermovie.push();
              var k: any;
              for (k = 0; k < moviegenredata["genres"].length; k++) {

                // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(genreids[i])
                // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(typeof(moviegenredata["genres"][k]["id"]))
                if (genreids[j] == moviegenredata["genres"][k]["id"]) {


                  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(genreids[i])
                  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(moviegenredata["genres"][k]["id"])

                  // genrelistpermovie.push(moviegenredata["genres"][k]["name"]);
                  genrestringlist = genrestringlist.concat(moviegenredata["genres"][k]["name"]);
                  if (j < genreids.length - 1) { genrestringlist = genrestringlist.concat(", "); }

                  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(genrelistpermovie)

                }
              }

            }



            // // // // // // console(genreids)  
            if (genreids.length == 0) {
              genrestringlist = "N/A"
            }






            if (reldate != undefined && reldate != '' && reldate != null) {
              var relyeardate = reldate.split("-");
              var yeargenrefinal: any = relyeardate[0].concat(" | ", genrestringlist)

            }


            // var yeargenrefinal = relyeardate[0].concat(" | ", genrestringlist)

            if (reldate === undefined || reldate === '' || reldate === null) {

              var relyeardatete = "N/A";
              var yeargenrefinal: any = relyeardatete.concat(" | ", genrestringlist)
              // var yeargenrefinal = "N/A";


            }




            var t = document.createTextNode(yeargenrefinal);
            // yearandgenre.appendChild(t);




            //point and votes
            var pointandvotes = document.createElement("p");
            var tempmbid = <any>document.getElementById(movibxid)
            // tempmbid.appendChild(pointandvotes);
            pointandvotes.setAttribute("class", "pointandvotesclass");


            // // // // // // // // // // // // // // // console..log("voteaverage")
            // // // // // // // // // // // // // // // console..log(voteaverage)

            var voteaveragestring = voteaverage.toString();
            var crei = "/5";
            voteaveragestring = voteaveragestring.concat(crei);
            var starvar = '&#9733;'

            var pointvotetemp = starvar.concat(voteaveragestring)


            if (voteaverage === undefined || voteaverage === '' || voteaverage === null) {

              darkredpointvotetemp = "N/A"
            }
            var darkredpointvotetemp = pointvotetemp.fontcolor("#a51916");




            if (votecount === undefined || votecount === '' || votecount === null) {
              votecountstring = "N/A"
            }
            if (votecountstring != "N/A") {
              var votecountstring = votecount.toString();
            }
            var tempword = " votes";
            votecountstring = votecountstring.concat(tempword);


            var result = votecountstring.sup();


            result = result.fontcolor("white");


            // var exresult="Family";
            darkredpointvotetemp = darkredpointvotetemp.concat(result)
            // var t = document.createTextNode(darkredpointvotetemp);
            // pointandvotes.appendChild(t);

            pointandvotes.innerHTML = darkredpointvotetemp;







            //movie overview
            var movieoverviewcont = document.createElement("p");

            var tempmbid = <any>document.getElementById(movibxid);
            // tempmbid.appendChild(movieoverviewcont);
            movieoverviewcont.setAttribute("class", "movieoverviewcontclass");

            if (movieoverview === undefined || movieoverview === '' || movieoverview === null) {

              movieoverview = "N/A"
            }

            var t = document.createTextNode(movieoverview);
            // movieoverviewcont.appendChild(t);

            // Show more button
            var showmorebutton = document.createElement("button");
            var tempmbid = <any>document.getElementById(movibxid);
            // tempmbid.appendChild(showmorebutton);
            showmorebutton.setAttribute("class", "showmorebuttonclass");

            showmorebutton.setAttribute("id", movieid);

            // show more movie button clicked
            // showmorebutton.setAttribute("onClick", "showmoremovie(event)");
            showmorebutton.addEventListener("click", showmoremovie)
            // showmorebutton.onclick = showmoremovie(event)

            //   showmorebutton.onclick = function(){
            //     showmoremovie(e);
            // }


            // showmorebutton.setAttribute("onClick", "showmoremovieverthrstepone(event)");



            var t = document.createTextNode('Show more');

            // showmorebutton.appendChild(t);












          }
        }


        // if (userquery[1] == "TV Shows") {
        //   for (i = 0; i < maindatabyusersearch['results'].length; i++) {
        //     // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("Hi!!!")
        //     // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(maindatabyusersearch['results'])

        //     if (i > 9) {
        //       // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("Hi")
        //       // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(i)
        //       break;
        //     }


        //     var numig = i + 1;
        //     var stringnumig = numig.toString();

        //     var searchshowv = "searchshow"

        //     var tvbxid = "tvrebox";
        //     tvbxid = tvbxid.concat(stringnumig)

        //     var tvbximgid = "tveimg"
        //     tvbximgid = tvbximgid.concat(stringnumig)

        //     var paraforimg = "paraforimg"
        //     paraforimg = paraforimg.concat(stringnumig)


        //     var tvinfor = "tveinf"
        //     var tvinforid: any = tvinfor.concat(stringnumig)

        //     var parainfboxid = "paraid"
        //     parainfboxid = parainfboxid.concat(stringnumig)

        //     var showmorebuttonid = "showmorebuttonid"
        //     showmorebuttonid = showmorebuttonid.concat(stringnumig)



        //     if (i == 0) {
        //       var searchshow = document.createElement("div");
        //       // document.getElementById("mainboth").appendChild(searchshow);
        //       var tempsb = <any>document.getElementById("showingbox")
        //       // tempsb.appendChild(searchshow);

        //       searchshow.setAttribute("id", searchshowv);
        //       searchshow.setAttribute("class", "searchshowvclass");


        //     }



        //     var tveid = maindatabyusersearch['results'][i]['id']
        //     var tvetitle = maindatabyusersearch['results'][i]['name']
        //     var tveoverview = maindatabyusersearch['results'][i]['overview']
        //     var tveposterpath = maindatabyusersearch['results'][i]['poster_path']
        //     var reldate = maindatabyusersearch['results'][i]['first_air_date']
        //     var voteaverage: any = maindatabyusersearch['results'][i]['vote_average'] / 2
        //     var votecount = maindatabyusersearch['results'][i]['vote_count']
        //     var genreids = maindatabyusersearch['results'][i]['genre_ids']
        //     if (genreids == [] || genreids == undefined) {
        //       genreids = []
        //     }
        //     // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(genreids)

        //     // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(tvetitle)

        //     // // Box for one tv
        //     var tveresultbox = document.createElement("div");
        //     var tempss = <any>document.getElementById(searchshowv)
        //     // tempss.appendChild(tveresultbox);

        //     tveresultbox.setAttribute("id", tvbxid);
        //     tveresultbox.setAttribute("class", "tverebox");

        //     // document.getElementById(movibxid).style.width = "600px";
        //     // document.getElementById(tvbxid).style.height = "150px"; 

        //     // Redline next to img
        //     var redlinenearimg = document.createElement("div");
        //     var temptvid = <any>document.getElementById(tvbxid)
        //     // temptvid.appendChild(redlinenearimg);
        //     // movieresultimg.setAttribute("id", movibximgid);

        //     redlinenearimg.setAttribute("class", "tveposterredline");
        //     redlinenearimg.style.width = "5px";
        //     redlinenearimg.style.height = "290px";
        //     redlinenearimg.style.backgroundColor = "red";


        //     // Poster for one tve

        //     var tveresultimg = document.createElement("IMG");

        //     var temptvid = <any>document.getElementById(tvbxid)
        //     // temptvid.appendChild(tveresultimg);

        //     tveresultimg.setAttribute("id", tvbximgid);
        //     // For technical conveience, movieposterfromsearch is used as tveposterfromsearch
        //     tveresultimg.setAttribute("class", "movieposterfromsearch");
        //     // document.getElementById(tvbximgid).src = "https://image.tmdb.org/t/p/w185/" + tveposterpath;

        //     // // // // // // // // (tveposterpath)

        //     if (tveposterpath == null) {
        //       var temptvbximgid = <any>document.getElementById(tvbximgid)
        //       temptvbximgid.src = "https://cinemaone.net/images/movie_placeholder.png";
        //     }

        //     if (tveposterpath != null) {
        //       var temptvbximgid = <any>document.getElementById(tvbximgid)
        //       temptvbximgid.src = "https://image.tmdb.org/t/p/w185/" + tveposterpath;

        //     }






        //     //tv title
        //     var parainfbox = document.createElement("p");

        //     var temptvbxid = <any>document.getElementById(tvbxid)
        //     // temptvbxid.appendChild(parainfbox);
        //     parainfbox.setAttribute("id", parainfboxid);
        //     parainfbox.setAttribute("class", "rightpara");


        //     if (tvetitle === null || tvetitle === undefined || tvetitle === '') {
        //       tvetitle = "N/A"
        //     }

        //     var t = document.createTextNode(tvetitle);
        //     // document.getElementById(parainfboxid).appendChild(t);

        //     // window.onload = function() {
        //     var temppid = <any>document.getElementById(parainfboxid)
        //     temppid.textContent = tvetitle;

        //     // }



        //     // // // // // // // // // console(document.getElementById(parainfboxid).innerHTML)

        //     //year and genre
        //     var yearandgenre = document.createElement("p");

        //     var temptvbxid = <any>document.getElementById(tvbxid)
        //     // temptvbxid.appendChild(yearandgenre);
        //     yearandgenre.setAttribute("class", "yearandgenreclass");





        //     // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(genreids);
        //     // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(tvegenredata);

        //     // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("genreids");
        //     // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(genreids);

        //     // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("tvegenredata")
        //     // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(tvegenredata);

        //     var genrestringlist: string = "";
        //     var genrelistpertve = [];
        //     for (j = 0; j < genreids.length; j++) {

        //       // genrelistpertve.push();
        //       for (k = 0; k < tvegenredata["genres"].length; k++) {

        //         // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(genreids[i])
        //         // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(typeof(tvegenredata["genres"][k]["id"]))
        //         if (genreids[j] == tvegenredata["genres"][k]["id"]) {

        //           // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(genreids)
        //           // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(genreids[i])
        //           // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(tvegenredata["genres"][k]["id"])

        //           // genrelistpertve.push(tvegenredata["genres"][k]["name"]);
        //           genrestringlist = genrestringlist.concat(tvegenredata["genres"][k]["name"]);
        //           if (j < genreids.length - 1) {
        //             genrestringlist = genrestringlist.concat(", ");
        //           }

        //           // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(genrelistpertve)

        //         }
        //       }

        //     }

        //     // // // // // // console(genreids)

        //     if (genreids.length == 0) {
        //       genrestringlist = "N/A"
        //     }




        //     if (reldate !== undefined && reldate !== '' && reldate !== null) {
        //       var relyeardate = reldate.split("-");
        //       var yeargenrefinal: any = relyeardate[0].concat(" | ", genrestringlist)


        //     }

        //     // var yeargenrefinal = relyeardate[0].concat(" | ", genrestringlist)


        //     if (reldate === undefined || reldate === '' || reldate === null) {

        //       var relyeardatete = "N/A";
        //       var yeargenrefinal: any = relyeardatete.concat(" | ", genrestringlist)
        //       // var yeargenrefinal = "N/A";


        //     }


        //     var t = document.createTextNode(yeargenrefinal);
        //     // yearandgenre.appendChild(t);





        //     //point and votes
        //     var pointandvotes = document.createElement("p");

        //     var temptvbxid = <any>document.getElementById(tvbxid)
        //     // temptvbxid.appendChild(pointandvotes);
        //     pointandvotes.setAttribute("class", "pointandvotesclass");



        //     var voteaveragestring = voteaverage.toString();
        //     var crei = "/5";
        //     voteaveragestring = voteaveragestring.concat(crei);
        //     var starvar = '&#9733;'

        //     var pointvotetemp = starvar.concat(voteaveragestring)
        //     if (voteaverage === undefined || voteaverage === '' || voteaverage === null) {

        //       darkredpointvotetemp = "N/A"
        //     }

        //     var darkredpointvotetemp = pointvotetemp.fontcolor("#a51916");



        //     if (votecount === undefined || votecount === '' || votecount === null) {
        //       votecountstring = "N/A"
        //     }
        //     if (votecountstring != "N/A") {
        //       var votecountstring = votecount.toString();
        //     }

        //     var tempword = " votes";
        //     votecountstring = votecountstring.concat(tempword);



        //     // var str = "Hello World!";
        //     var result = votecountstring.sup();
        //     result = result.fontcolor("white");
        //     // var exresult="Family";
        //     darkredpointvotetemp = darkredpointvotetemp.concat(result)
        //     // var t = document.createTextNode(darkredpointvotetemp);
        //     // pointandvotes.appendChild(t);

        //     pointandvotes.innerHTML = darkredpointvotetemp;







        //     // //tve overview
        //     // var tveoverviewcont = document.createElement("p");
        //     // var temptvbxid = <any>document.getElementById(tvbxid)
        //     // // temptvbxid.appendChild(tveoverviewcont);

        //     // //Because of technical reason, tveoverviewcontclass is same with movieoverviewcontclass
        //     // tveoverviewcont.setAttribute("class", "movieoverviewcontclass");

        //     // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(tveoverview)

        //     // if (tveoverview === undefined || tveoverview === '' || tveoverview === null) {

        //     //   tveoverview = "N/A"
        //     // }

        //     // var t = document.createTextNode(tveoverview);
        //     // tveoverviewcont.appendChild(t);

        //     // // Show more button
        //     // var showmorebutton = document.createElement("button");
        //     // var temptvbxid = <any>document.getElementById(tvbxid);
        //     // temptvbxid.appendChild(showmorebutton);
        //     // showmorebutton.setAttribute("class", "showmorebuttonclass");

        //     // showmorebutton.setAttribute("id", tveid);

        //     // // show more tve button clicked
        //     // // showmorebutton.setAttribute("onClick", "showmoretve(event)");
        //     // showmorebutton.addEventListener("click", showmoretve)
        //     // // showmorebutton.setAttribute("onClick", "showmoretveverthrstepone(event)");



        //     // var t = document.createTextNode('Show more');

        //     // showmorebutton.appendChild(t);












        //   }
        // }

        if (userquery[1] == "Movies and TV Shows") {
          for (i = 0; i < maindatabyusersearch['results'].length; i++) {

            if ((maindatabyusersearch['results'][i]['media_type'] != "movie") && (maindatabyusersearch['results'][i]['media_type'] != "tv")) {
              continue;
            }
            if (i > 9) {
              // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("Hi")
              // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(i)
              break;
            }


            var numig = i + 1;
            var stringnumig = numig.toString();

            var searchshowv = "searchshow"

            var movibxid = "movierebox";
            movibxid = movibxid.concat(stringnumig)

            var movibximgid = "movieimg"
            movibximgid = movibximgid.concat(stringnumig)

            var paraforimg = "paraforimg"
            paraforimg = paraforimg.concat(stringnumig)


            var moviinfor = "movieinf"
            moviinforid = moviinfor.concat(stringnumig)

            var parainfboxid = "paraid"
            parainfboxid = parainfboxid.concat(stringnumig)

            var showmorebuttonid = "showmorebuttonid"
            showmorebuttonid = showmorebuttonid.concat(stringnumig)



            if (i == 0) {
              // var searchshow = document.createElement("div");
              // // document.getElementById("mainboth").appendChild(searchshow);
              // var tempsb = <any>document.getElementById("showingbox")
              // tempsb.appendChild(searchshow)

              // searchshow.setAttribute("id", searchshowv);
              // searchshow.setAttribute("class", "searchshowvclass");


            }




            var movieid = maindatabyusersearch['results'][i]['id']

            if (maindatabyusersearch['results'][i]['media_type'] == "movie") {

              var movietitle = maindatabyusersearch['results'][i]['title']
            }
            if (maindatabyusersearch['results'][i]['media_type'] == "tv") {

              var movietitle = maindatabyusersearch['results'][i]['name']
            }



            // // // // // // console(movietitle)

            var movieoverview = maindatabyusersearch['results'][i]['overview']
            var movieposterpath = maindatabyusersearch['results'][i]['poster_path']


            if (maindatabyusersearch['results'][i]['media_type'] == "movie") {

              var reldate = maindatabyusersearch['results'][i]['release_date']
            }
            if (maindatabyusersearch['results'][i]['media_type'] == "tv") {

              var reldate = maindatabyusersearch['results'][i]['first_air_date']
            }

            var voteaverage: any = maindatabyusersearch['results'][i]['vote_average'] / 2
            var votecount = maindatabyusersearch['results'][i]['vote_count']
            var genreids = maindatabyusersearch['results'][i]['genre_ids']
            if (genreids == [] || genreids == undefined) {
              genreids = []
            }
            // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(movietitle)

            // // Box for one movie
            var movieresultbox = document.createElement("div");
            var tempss = <any>document.getElementById(searchshowv)
            // tempss.appendChild(movieresultbox);

            movieresultbox.setAttribute("id", movibxid);
            movieresultbox.setAttribute("class", "movierebox");

            // document.getElementById(movibxid).style.width = "600px";
            // document.getElementById(movibxid).style.height = "150px"; 

            // Redline next to img
            var redlinenearimg = document.createElement("div");
            var tempmovibxid = <any>document.getElementById(movibxid)
            // tempmovibxid.appendChild(redlinenearimg);
            // movieresultimg.setAttribute("id", movibximgid);

            redlinenearimg.setAttribute("class", "movieposterredline");
            redlinenearimg.style.width = "5px";
            redlinenearimg.style.height = "290px";
            redlinenearimg.style.backgroundColor = "red";


            // Poster for one movie

            var movieresultimg = document.createElement("IMG");
            var tempmovibxid = <any>document.getElementById(movibxid);
            // tempmovibxid.appendChild(movieresultimg);

            movieresultimg.setAttribute("id", movibximgid);
            movieresultimg.setAttribute("class", "movieposterfromsearch");
            // document.getElementById(movibximgid).src = "https://image.tmdb.org/t/p/w185/" + movieposterpath;

            // Exception process for image file
            // // // // // // // // (movieposterpath)

            // if (movieposterpath == null) {
            //   var tempmovibximgid = <any>document.getElementById(movibximgid)
            //   tempmovibximgid.src = "https://cinemaone.net/images/movie_placeholder.png";
            // }

            // if (movieposterpath != null) {
            //   var tempmovibximgid = <any>document.getElementById(movibximgid)
            //   tempmovibximgid.src = "https://image.tmdb.org/t/p/w185/" + movieposterpath;

            // }





            //movie title
            // var parainfbox = document.createElement("p");

            // var tempmovibxid = <any>document.getElementById(movibxid);
            // // tempmovibxid.appendChild(parainfbox);
            // parainfbox.setAttribute("id", parainfboxid);
            // parainfbox.setAttribute("class", "rightpara");


            // if (movietitle === null || movietitle === undefined || movietitle == '') {
            //   movietitle = "N/A"
            // }


            // // var t = document.createTextNode(movietitle);
            // // document.getElementById(parainfboxid).appendChild(t);
            // var tempparainfboxid = <any>document.getElementById(parainfboxid)
            // tempparainfboxid.textContent = movietitle;


            // //year and genre
            // var yearandgenre = document.createElement("p");

            // var tempmovibxid = <any>document.getElementById(movibxid)
            // // tempmovibxid.appendChild(yearandgenre);
            // yearandgenre.setAttribute("class", "yearandgenreclass");





            // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(genreids);
            // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(moviegenredata);

            // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("genreids");
            // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(genreids);

            // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("moviegenredata")
            // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(moviegenredata);

            var genrestringlist: string = "";
            if (maindatabyusersearch['results'][i]['media_type'] == "movie") {
              // var genrestringlist:string  = "";
              var genrelistpermovie = [];
              for (j = 0; j < genreids.length; j++) {

                // genrelistpermovie.push();
                for (k = 0; k < moviegenredata["genres"].length; k++) {

                  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(genreids[i])
                  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(typeof(moviegenredata["genres"][k]["id"]))
                  if (genreids[j] == moviegenredata["genres"][k]["id"]) {


                    // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(genreids[i])
                    // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(moviegenredata["genres"][k]["id"])

                    // genrelistpermovie.push(moviegenredata["genres"][k]["name"]);
                    genrestringlist = genrestringlist.concat(moviegenredata["genres"][k]["name"]);
                    if (j < genreids.length - 1) { genrestringlist = genrestringlist.concat(", "); }

                    // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(genrelistpermovie)

                  }
                }

              }
            }
            var genrestringlist: string = "";
            if (maindatabyusersearch['results'][i]['media_type'] == "tv") {
              // var genrestringlist:string = "";
              var genrelistpertve = [];
              for (j = 0; j < genreids.length; j++) {

                // genrelistpertve.push();
                for (k = 0; k < tvegenredata["genres"].length; k++) {

                  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(genreids[i])
                  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(typeof(tvegenredata["genres"][k]["id"]))
                  if (genreids[j] == tvegenredata["genres"][k]["id"]) {

                    // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(genreids)
                    // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(genreids[i])
                    // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(tvegenredata["genres"][k]["id"])

                    // genrelistpertve.push(tvegenredata["genres"][k]["name"]);
                    genrestringlist = genrestringlist.concat(tvegenredata["genres"][k]["name"]);
                    if (j < genreids.length - 1) {
                      genrestringlist = genrestringlist.concat(", ");
                    }

                    // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(genrelistpertve)

                  }
                }

              }
            }
            // // // // // // console(genreids)
            if (genreids.length == 0) {
              genrestringlist = "N/A"
            }



            if (reldate !== undefined && reldate !== '' && reldate !== null) {
              var relyeardate = reldate.split("-");
              var yeargenrefinal = relyeardate[0].concat(" | ", genrestringlist)

            }

            // var yeargenrefinal = relyeardate[0].concat(" | ", genrestringlist)

            if (reldate === undefined || reldate === '' || reldate === null) {

              var relyeardatete = "N/A";
              var yeargenrefinal: any = relyeardatete.concat(" | ", genrestringlist)
              // var yeargenrefinal = "N/A";


            }

            var t = document.createTextNode(yeargenrefinal);
            // yearandgenre.appendChild(t);



            // var yeargenrefinal = relyeardate[0].concat(" | ", genrestringlist)


            // var t = document.createTextNode(yeargenrefinal);
            // yearandgenre.appendChild(t);


            //point and votes
            var pointandvotes = document.createElement("p");

            var tempmovibxid = <any>document.getElementById(movibxid)
            // tempmovibxid.appendChild(pointandvotes);
            pointandvotes.setAttribute("class", "pointandvotesclass");



            var voteaveragestring = voteaverage.toString();
            var crei = "/5";
            voteaveragestring = voteaveragestring.concat(crei);
            var starvar = '&#9733;'

            var pointvotetemp = starvar.concat(voteaveragestring)

            if (voteaverage === undefined || voteaverage === '' || voteaverage === null) {

              darkredpointvotetemp = "N/A"
            }

            var darkredpointvotetemp = pointvotetemp.fontcolor("#a51916");




            if (votecount === undefined || votecount === '' || votecount === null) {
              votecountstring = "N/A"
            }
            if (votecountstring != "N/A") {
              var votecountstring = votecount.toString();
            }
            var tempword = " votes";
            votecountstring = votecountstring.concat(tempword);


            // var str = "Hello World!";
            var result = votecountstring.sup();
            result = result.fontcolor("white");
            // var exresult="Family";
            darkredpointvotetemp = darkredpointvotetemp.concat(result)
            // var t = document.createTextNode(darkredpointvotetemp);
            // pointandvotes.appendChild(t);

            pointandvotes.innerHTML = darkredpointvotetemp;







            //movie overview
            var movieoverviewcont = document.createElement("p");
            var tempmovibxid = <any>document.getElementById(movibxid)
            // tempmovibxid.appendChild(movieoverviewcont);
            movieoverviewcont.setAttribute("class", "movieoverviewcontclass");


            if (movieoverview === undefined || movieoverview === '' || movieoverview === null) {

              movieoverview = "N/A"
            }

            var t = document.createTextNode(movieoverview);
            // movieoverviewcont.appendChild(t);

            // Show more button
            var showmorebutton = document.createElement("button");
            var tempmovibxid = <any>document.getElementById(movibxid)
            // tempmovibxid.appendChild(showmorebutton);
            showmorebutton.setAttribute("class", "showmorebuttonclass");

            showmorebutton.setAttribute("id", movieid);

            // show more movie button clicked

            if (maindatabyusersearch['results'][i]['media_type'] == "movie") {
              // showmorebutton.setAttribute("onClick", "showmoremovie(event)");
              showmorebutton.addEventListener("click", showmoremovie)
            }
            // showmorebutton.setAttribute("onClick", "showmoremovie(event)");
            if (maindatabyusersearch['results'][i]['media_type'] == "tv") {

              // showmorebutton.setAttribute("onClick", "showmoretve(event)");
              showmorebutton.addEventListener("click", showmoretve)

            }
            // showmorebutton.setAttribute("onClick", "showmoretve(event)");

            //

            // showmorebutton.setAttribute("onClick", "showmoremovieverthrstepone(event)");



            var t = document.createTextNode('Show more');

            // showmorebutton.appendChild(t);











          }
        }
      }



    }


    async function setuserqueryonmemo() {
      // // // // // // // // // // // // // // // ("setuserqueryonmemo!")
      var tempmemoone = <any>document.getElementById("memoone");
      var tempmemotwo = <any>document.getElementById("memotwo");
      var tempkeyword = <any>document.getElementById("Keyword");
      // var tempselectca = <any>document.getElementById('selectca');
      tempmemoone.textContent = tempkeyword.value;
      // tempmemotwo.textContent = tempselectca.innerHTML;
      tempmemotwo.textContent = "Movies and TV Shows"
      await testasyncawait();


    }

    function getuserquery() {

      var tempmemoone = <any>document.getElementById("memoone");
      var url = tempmemoone.textContent
      // var tempselectca = <any>document.getElementById('selectca');
      // var urlroute = tempselectca.innerHTML;
      var urlroute = "Movies and TV Shows";

      // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("getuserquery")
      // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(url)
      // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(urlroute)
      return [url, urlroute]

    }


    async function moviegenreget() {
      var apikey = "apikey=ebcb324f3d940e9599200a81e3b4c007";
      // apikeyand = apikey.concat("&")

      // This searchquery variable should receive the user input.
      // tvid = "1399";
      // tvidcre = tvid.concat("/reviews?")

      var goingtourl="";

      var metiap = apikey
      // metiap = tvidcre.concat(apikeyand)


      var routeurl = "/moviegenres?";
      var localurl = routeurl.concat(metiap);

      var localurl = goingtourl+"/moviegenres?" + "apikey=ebcb324f3d940e9599200a81e3b4c007"

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log"Catched Movie Genres!")
          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logxhttp.readyState)

          // Trend JSON data
          moviegenredata = JSON.parse(xhttp.responseText);

          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(moviegenredata["genres"])

          return moviegenredata;


        }
      };
      xhttp.open("GET", localurl, false);
      xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
      xhttp.send(null);

    }




    async function tvgenreget() {
      var apikey = "apikey=ebcb324f3d940e9599200a81e3b4c007";
      // apikeyand = apikey.concat("&")

      // This searchquery variable should receive the user input.
      // tvid = "1399";
      // tvidcre = tvid.concat("/reviews?")

      var goingtourl="";

      var metiap = apikey
      // metiap = tvidcre.concat(apikeyand)


      var routeurl = "/tvgenres?";
      var localurl = routeurl.concat(metiap);

      var localurl = goingtourl+"/tvgenres?" + "apikey=ebcb324f3d940e9599200a81e3b4c007"

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log"Catched Movie Genres!")
          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logxhttp.readyState)

          // Trend JSON data
          tvegenredata = JSON.parse(xhttp.responseText);

          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(tvegenredata)

          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(moviegenredata["genres"])

          return tvegenredata;


        }
      };
      xhttp.open("GET", localurl, false);
      xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
      xhttp.send(null);

    }




    // This function not only processes the query for the backend on Azure, but also asks request to the backend.
    // Output: user search response data.
    async function processingqueryandmainsearchdata(userquery: any) {
      // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log("userquery in askquery!!!")
      // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(userquery)
      var goingtourl="";  
      var apikey = "apikey=ebcb324f3d940e9599200a81e3b4c007";
      var apikeyand = apikey.concat("&")

      // This searchquery variable should receive the user input.
      // searchquery=searchqueryPara
      var searchquery = "query=";
      searchquery = searchquery.concat(userquery[0]);

      userquery[1] = userquery[1].replace(/\s\s+/g, ' ');

      // https://api.themoviedb.org/3/search/movie?apikey=apikey=ebcb324f3d940e9599200a81e3b4c007&language=en-US&query=avengers&page=1&include_adult=false

      // https://api.themoviedb.org/3/search/movie?apikey=apikey=ebcb324f3d940e9599200a81e3b4c007&language=en-US&query=avengers&page=1&include_adult=false


      // https://api.themoviedb.org/3/search/movie?apikey=<<apikey>>&query=<<search_query>>&language=en-US&page=1&include_adult=false

      // metiap = apikey
      var metiap = apikeyand.concat(searchquery)

      userquery[1] = "Movies and TV Shows"

      var routeurl: any;
      if (userquery[1] == "Movies") {
        var routeurl: any = "/searchmovie?";
        // // // // // // // // // // // // // // // ("/searchmovie?")
      }
      if (userquery[1] == "TV Shows") {
        var routeurl: any = "/searchtv?";
        // // // // // // // // // // // // // // // ("/searchtv?")
      }
      if (userquery[1] == "Movies and TV Shows") {
        var routeurl: any = "/multisearch?";
        // // // // // // // // // // // // // // // ("/multisearch?")

      }


      var localurl = routeurl.concat(metiap);
      localurl = localurl.replace(/ /g, '%20')

      localurl=goingtourl+localurl

      // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(localurl)
      // await document.write(localurl.replace(/ /g, '%20'));


      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log"Catched Movie query!")
          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...logxhttp.readyState)

          // Trend JSON data
          maindatabyusersearch = JSON.parse(xhttp.responseText);
          searchdata = maindatabyusersearch
          console.log(searchdata)

          // for(let i=0;searchdata.l)


          // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console...log(maindatabyusersearch);
          // return xhttp.responseText;
          return maindatabyusersearch
          // resolve(obj);

        }
      };
      xhttp.open("GET", localurl, false);
      xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
      xhttp.send(null);



    }


    async function testasyncawait() {
      // // // // // // // // // // // // // // // ("testasyncawait")
      userquery = await getuserquery();


      if (userquery[0] != 0) {

        // moive genre
        // await moviegenreget();
        // // // // // // // // // // // // // // // ("moviegenreget()")

        // tv genres 
        // await tvgenreget();
        // // // // // // // // // // // // // // // ("tvgenreget()")

        await processingqueryandmainsearchdata(userquery);


        // checkpoint

        // No results found
        // if (maindatabyusersearch["results"].length == 0) {
        //   // alert("No search result!")

        //   if (searchtimes != 0) {
        //     // // // // // // // // // // // // // // ("I am here in temp A")   
        //     var parent = document.getElementById("searchshow");
        //     if (parent != null) {
        //       while (parent.firstChild) {
        //         parent.firstChild.remove()
        //       }
        //       parent.remove();
        //     }

        //     // If there is "Showing results...", remove it before display "No search found"
        //     if (document.getElementById("shwrel") != null) {
        //       var tempshrel = <any>document.getElementById("shwrel");
        //       tempshrel.remove();
        //     }

        //   }





        //   if (document.getElementById("noresultfound") == null) {
        //     var nonrf = document.createElement("div")
        //     nonrf.setAttribute("id", "noresultfound")
        //     nonrf.setAttribute("class", "noresultfoundclass")
        //     var tempsb = <any>document.getElementById("showingbox")
        //     // tempsb.appendChild(nonrf)

        //     var paranorf = document.createElement("p")
        //     paranorf.setAttribute("id", "norefound")
        //     paranorf.textContent = "No results found."
        //     // nonrf.appendChild(paranorf)

        //     // document.getElementById("showingbox").appendChild(nonrf)
        //     var tempnrf = <any>document.getElementById("noresultfound")
        //     tempnrf.style.display = "block";
        //   }


        //   // <div id="noresultfound">
        //   //     <p id="norefound">No results found.</p>
        //   // </div>


        //   // Add logo at the end of search result for search page
        //   // developbottomlogoforsearchpage();



        // }

        // if (maindatabyusersearch["results"].length != 0) {

        //   // document.getElementById("noresultfound").style.display = "none";
        //   if (document.getElementById("noresultfound") != null) {
        //     var tempnrf = <any>document.getElementById("noresultfound")
        //     tempnrf.remove()

        //   }

        //   if (document.getElementById("shwrel") == null) {
        //     // var showresult = document.createElement("div")
        //     // showresult.setAttribute("id", "shwrel");
        //     // // document.getElementById("mainboth").appendChild(showresult);
        //     // var tempsb = <any>document.getElementById("showingbox")
        //     // // tempsb.appendChild(showresult)

        //     // var tempshwrel = <any>document.getElementById("shwrel")
        //     // tempshwrel.textContent = "Showing results...";
        //     // tempshwrel.style.color = "white";
        //     // // document.getElementById("shwrel").style.marginLeft = "1%";
        //     // tempshwrel.style.marginTop = "2%";
        //     // tempshwrel.style.marginBottom = "2%";
        //   }


        //   var tempsb = <any>document.getElementById("showingbox");
        //   // if (tempsb.style.height != "auto") {

        //   //   tempsb.style.height = "auto";

        //   // }

        //   // data showing on webpage
        //   await userquerypaint(maindatabyusersearch);

        //   // 이체커가 두번 이상씩 같은 정보 웨페이지에 그리는 것 방지
        //   checker = 0;

        //   // seearchtime이 한번 이상이면 무조건 기존 페이지에 있던 검색 결과 지우고 시작하게 하는 변수임.
        //   searchtimes += 1

        //   // Add logo at the end of search result for search page
        //   // developbottomlogoforsearchpage();

        // }
        // data showing on webpage
        // await userquerypaint(maindatabyusersearch);

        // moviegenredata
        // tvegenredata

        // tvdetailinfor



      }
    }


    // function removeAllChildNodes(parent: any) {
    //   while (parent.firstChild) {
    //     parent.removeChild(parent.firstChild);
    //   }
    // }

    // User query process and response part
    // var tempsk = <any>document.getElementById("searchkey")

    var tempsk = <any>document.getElementById("Keyword")

    // tempsk.addEventListener("click", async function (e: any) {
    tempsk.addEventListener("input", async function (e: any) {


      // document.getElementById("blackpageforsearch").remove()
      // document.getElementById("devinfo").remove()


      // document.getElementById("showingbox").style.display="block";

      // // // // // // // // // // // // // // // // // // // // // // console..log("2")



      // setup user query information on memo
      var tempkw = <any>document.getElementById("Keyword")
      var keyval = tempkw.value;
      var tempselta = <any>document.getElementById('selectca')
      // var selca = tempselta.textContent;
      var selca = "Movies and TV Shows";
      // // // // // console.log(selca)

      selca = selca.replace(/\s+/g, ' ');
      // var cate = ["Movies", "TV Shows", "Movies and TV Shows"];
      var cate = ["Movies and TV Shows"];

      var n = cate.includes(selca);

      // // // // // // // // // console(keyval)
      // // // // // // // // // console(selca)

      if (keyval === "" && n === false) {

        // alert("Please enter valid values.")
      }

      if (keyval != "" && n === false) {

        // alert("Please enter valid values.")
      }

      if (keyval === "" && n === true) {

        // alert("Please enter valid values.")
      }

      if (keyval != "" && n === true) {

        // // // // // // // // // // ("Ah?")

        await setuserqueryonmemo();



        // // // Remove the logo bottom
        // if (document.getElementById("devinfosearchpage")!=null)
        // {
        //     document.getElementById("devinfosearchpage").remove()
        //     // // // // // // // // // // // // // // // // // // // // // // console..log(document.getElementById("devinfosearchpage"))
        // }


        // // reset searchpanal height and gradation
        // document.getElementById("searchpage").style.height = "200px";
        // document.getElementById("searchpage").style.background = "linear-gradient(to top, black 2%, #a51916 100%)";


      }









    });



    // var tempcclearkey = <any>document.getElementById("clearkey")

    // tempcclearkey.addEventListener("click", async function (e: any) {

    //   // make the searchpage reset like origin
    //   // document.getElementById("searchpage").style.height = "85vh";
    //   // document.getElementById("searchpage").style.background = "linear-gradient(to top, rgb(0, 0, 0) 62%, #a51916 100%)";



    //   /// keyword and category clear
    //   var tempkw = <any>document.getElementById("Keyword")
    //   tempkw.value = "";
    //   var tempselt = <any>document.getElementById('selectca')
    //   tempselt.innerHTML = "";

    //   // Dropdown clear
    //   var tempfirtick = <any>document.getElementById('firtick')
    //   var tempsectick = <any>document.getElementById('sectick')
    //   var tempthetick = <any>document.getElementById('thetick')
    //   var tempfoutick = <any>document.getElementById('foutick')

    //   tempfirtick.textContent = tics;
    //   tempsectick.textContent = "";
    //   tempthetick.textContent = "";
    //   tempfoutick.textContent = "";

    //   tempfirtick.className = "custom-option selected"
    //   tempsectick.className = "custom-option"
    //   tempthetick.className = "custom-option"
    //   tempfoutick.className = "custom-option"



    //   // All search result clear
    //   var checkexist = document.getElementById("searchshow");

    //   if (checkexist != null) {
    //     removeAllChildNodes(checkexist)
    //   }


    //   // Remove the "Show results..."
    //   var elemshowresult = <any>document.getElementById("shwrel");

    //   if (elemshowresult != null) { elemshowresult.parentNode.removeChild(elemshowresult); }

    //   // black page renew
    //   var tempsb = <any>document.getElementById("showingbox")
    //   tempsb.style.height = "700px";

    //   // Remove noresultfound
    //   // document.getElementById("noresultfound").
    //   if (document.getElementById("noresultfound") != null) {
    //     var tempnrf = <any>document.getElementById("noresultfound")
    //     tempnrf.style.display = "none";
    //   }





    // });


    // checkpoint
    // developbottom logo for mainpage
    // The first time to show developbottom logo for mainpage
    // developbottomlogoformainpage();
  }


  
  maindatabyusersearchpublic: OperatorFunction<string, readonly { names: any, poster: any }[]> = (text$: Observable<string>) =>
    // maindatabyusersearchpublic = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? []

        : searchdata.results.filter(v => v.media_type.toLowerCase().indexOf("tv") + v.media_type.toLowerCase().indexOf("movie") === -1)

      )
    )

  
    /**
 * Used to format the result data from the lookup into the
 * display and list values. Maps `{name: "band", id:"id" }` into a string
*/
  // [resultFormatter]="resultFormatBandListValue"
  resultFormatBandListValue(value: any) {
    var names;
    var check = 0;
    // // // console.log(value)

    //
    if (value.media_type.toLowerCase() === "tv") {
      // // // // console.log("AAA!")
      value.poster_path
      names = value.name;
      check = 1;
    }
    if (value.media_type.toLowerCase() === "movie") {
      // // // // console.log("BBB!")
      value.poster_path
      names = value.title;
      check = 1
    }

    if (check == 1) {
      return names
    }






  }
  /**
    * Initially binds the string value and then after selecting
    * an item by checking either for string or key/value object.
  */

  //  [inputFormatter]="inputFormatBandListValue"
  inputFormatBandListValue(value: any) {
    var names;
    var poster;
    var check = 0;
    // // // console.log(value)

    //
    if (value.media_type.toLowerCase() === "tv") {
      // // // // console.log("AAA!")
      poster = value.poster_path
      names = value.name;
      check = 1;
    }
    if (value.media_type.toLowerCase() === "movie") {
      // // // // console.log("BBB!")
      poster = value.poster_path
      names = value.title;
      check = 1
    }

    if (check == 1) {
      return names
    }
  }



  

  // refreshPage() {
  //   // console.log("refreshPage()")
  //   window.location.reload();
  // }







}



