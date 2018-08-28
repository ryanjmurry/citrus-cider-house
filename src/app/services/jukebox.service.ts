import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { jukeboxAPIKey } from '../api-keys';

@Injectable({
  providedIn: 'root'
})
export class JukeboxService {

  constructor(private http: Http) { }


  getArtistInfo(artist: string) {
    return this.http.get(`https://theaudiodb.com/api/v1/json/${jukeboxAPIKey}/searchalbum.php?s=${artist}`)
  }


}
