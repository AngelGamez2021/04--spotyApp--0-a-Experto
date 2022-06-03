import { Component, OnInit } from '@angular/core';
import  {HttpClient} from '@angular/common/http'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  newAlbumList: any[] = []

  constructor(private http: HttpClient,
    private _spotifyService: SpotifyService) {

      
this._spotifyService.getNewRelases().subscribe((data: any) =>{
  
   this.newAlbumList = data.albums.items;
   
   console.log('ArrayLocal',this.newAlbumList);
})
      
  
   }

 

}
