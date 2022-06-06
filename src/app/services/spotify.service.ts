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
      'Authorization': 'Bearer BQAwlTY0XZ3KYDFG-MwTb-_619Z1VNzR8CzAg7A1Bw5b8Z-BDgTJF2-70gidludt61cHPNHtRsM_OSLkJaU'
    })
    return this.http.get(url, { headers });
  }



  getNewRelases() {

    return this.getQuery('browse/new-releases').pipe(map((data: any) => {
      return data.albums.items
    }))
  }



  getFilterArtists(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map((data: any) => {
      return data.artists.items
    }))
  }

  getArtist (id: string){
    return this.getQuery(`artists/${id}`);
    }


    getTopTracks (id: string){
      return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map((data: any) => data['tracks']));
      }



}


