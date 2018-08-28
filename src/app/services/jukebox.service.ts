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
    return this.http.get(`https://theaudiodb.com/api/v1/json/${jukeboxAPIKey}/searchalbum.php?s=${artist}`);
  }

  getAlbumTracks(albumId: string) {
    return this.http.get(`https://theaudiodb.com/api/v1/json/${jukeboxAPIKey}/track.php?m=${albumId}`);
  }

  getAlbumById(albumId: string) {
    return this.http.get(`https://theaudiodb.com/api/v1/json/${jukeboxAPIKey}/album.php?m=${albumId}`)
  }


}
