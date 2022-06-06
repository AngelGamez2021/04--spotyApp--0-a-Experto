import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent  {

  artistData: any = {};
  topTracks: any[] = [];


  constructor(private router: ActivatedRoute,
              private _spotifyService: SpotifyService) { 


    this.router.params.subscribe(params => {
           this.getArtistData(params['id']);
           this.getTopMusic(params['id'])
      
    }); 
  }

  getArtistData(id: string){

    this._spotifyService.getArtist(id).subscribe(data =>{
     
      this.artistData = data;
      
    })

  }

  getTopMusic(id: string){
    this._spotifyService.getTopTracks(id).subscribe(data =>{
      this.topTracks = data;
      console.log(this.topTracks);
      
      
    })
  }




}
