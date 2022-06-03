import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

  }



  getNewRelases() {

    const headers = new HttpHeaders({

      'Authorization': 'Bearer BQB9JY5y20GYjnHv_iTKCSBqImlI9Huc5vnbhn_LjOoMVekbrmzrhkNpfZq4yb2DQnf2rgHO93TbEfmY7fc'


    })

   return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
