import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() info: any[] = [];


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  SeeArtist(album: any) {

    

    let artistId;

    if (album.type === 'artist') {

      artistId = album.id

    } else {
      artistId = album.artists[0].id
    }

    this.router.navigate(['/artist', artistId])
  
  }

}
