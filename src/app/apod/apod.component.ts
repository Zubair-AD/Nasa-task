import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent implements OnInit {

  
  
  constructor(private http: HttpClient) { }

  
  posts: Object | undefined;

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('https://api.nasa.gov/planetary/apod?api_key=etwq3aSX3PaId67FyL6Luwtg6tRKHvxgpnLnfXgJ&start_date=2021-01-01&end_date=2021-01-10').subscribe(data => {

      this.posts = data;
      console.log(data);
    });

   

  }

  doSomethingOnError(event:any) {
    event.target.src = 'https://apod.nasa.gov/apod/image/2101/30dor_hubble_960.jpg'
}

addToFavourites(post:any,event:any){
  console.log( 
    event.target.attributes.class.value
  )

  event.target.attributes.class.value = event.target.attributes.class.value.replace("unFavourite","")

  let availableFavourites = localStorage.getItem("favourites")
  let parsedAvailableFavourites = []
  if( availableFavourites ) {
   parsedAvailableFavourites= JSON.parse(availableFavourites) as Array<any>
   }
   parsedAvailableFavourites.unshift(post)
   localStorage.setItem("favourites",JSON.stringify(parsedAvailableFavourites))
  
}

loadFavoutrites(){
  let availableFavourites = localStorage.getItem("favourites")
  let parsedAvailableFavourites = []
  if( availableFavourites ) {
   parsedAvailableFavourites= JSON.parse(availableFavourites) as Array<any>
   }
   return parsedAvailableFavourites
}



}
