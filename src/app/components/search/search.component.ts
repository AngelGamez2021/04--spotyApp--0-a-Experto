import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  filter: any[] = [];

  constructor(private _spotifyService: SpotifyService) { }

  searchArtist(termino: string) {

    this._spotifyService.getFilterArtist(termino).subscribe(data => this.filter = data
    )


  }
}
