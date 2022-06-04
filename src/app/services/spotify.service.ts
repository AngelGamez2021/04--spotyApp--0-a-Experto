import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

  }

  //===== asi se hizo en un comienzo sin el operador MAP
  // getNewRelases() {
  //   const headers = new HttpHeaders({
  //     'Authorization': 'Bearer BQAQvrEqjhAEpNFD3fOeNWfMq2bYXY8WoAl2gwWSiCM8qxfhv0638N3XK5ys2Ea4f-schUlJmSKeq0wZmTY'
  //   })
  //   return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  // }


  //===== nueva forma usando pipe, map
  //   getNewRelases() {
  //   const headers = new HttpHeaders({
  //     'Authorization': 'Bearer BQAQvrEqjhAEpNFD3fOeNWfMq2bYXY8WoAl2gwWSiCM8qxfhv0638N3XK5ys2Ea4f-schUlJmSKeq0wZmTY'
  //   })
  //   return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers }).pipe(map((data: any) => {
  //     return data.albums.items
  //   }))
  // }


  //reduciendo codigo

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCJgdZdJ_pcQRPTHRUdlbjT1LSvuX02A3X31WQyjvLmYe21nrpC_AjF6eUPXW4HyjD1rjYq4f8DsMr7hZM'
    })
    return this.http.get(url, { headers });
  }



  getNewRelases() {

    return this.getQuery('browse/new-releases').pipe(map((data: any) => {
      return data.albums.items
    }))
  }



  getFilterArtist(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map((data: any) => {
      return data.artists.items
    }))
  }




}
