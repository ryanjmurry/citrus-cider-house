import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { jukeboxAPIKey } from '../api-keys';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { JukeboxSong } from '../models/jukebox';

@Injectable({
  providedIn: 'root'
})
export class JukeboxService {

  private dbPath = '/songs';

  songsRef: AngularFireList<any> = null;

  constructor(private http: Http, private db: AngularFireDatabase) {
    this.songsRef = db.list(this.dbPath);
  }

  addSong(song: JukeboxSong): void {
    this.songsRef.push(song);
  }

  getSongsList(): AngularFireList<any> {
    return this.songsRef;
  }

  finishSong() {
    let songToFinish = this.db.list(this.dbPath, ref => ref.orderByKey().limitToFirst(1)).remove();
  }

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
