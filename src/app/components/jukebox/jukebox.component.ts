import { Component, OnInit } from '@angular/core';
import { JukeboxService } from '../../services/jukebox.service';
import { JukeboxSong } from '../../models/jukebox';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-jukebox',
  templateUrl: './jukebox.component.html',
  styleUrls: ['./jukebox.component.css'],
  providers: [JukeboxService]
})
export class JukeboxComponent implements OnInit {

  constructor(private jukebox: JukeboxService) { }
  currentPlaylist: any;
  artistInfo;
  albumGot: boolean = false;
  trackInfo;
  trackGot: boolean = false;
  ngOnInit() {
    this.jukebox.getSongsList().valueChanges().subscribe(playlist => {this.currentPlaylist = playlist});
  }

  getArtist(artist: string){
    this.jukebox.getArtistInfo(artist)
      .subscribe(artistData => {this.artistInfo = artistData.json()
      this.albumGot = true;
    });
  }

  getTracks(albumId: string) {
    this.jukebox.getAlbumTracks(albumId)
      .subscribe(trackData => {this.trackInfo = trackData.json().track
        this.albumGot = false;
        this.trackGot = true;
      })
  }

  backToAlbums(){
    this.trackGot = false;
    this.albumGot = true;
  }

  addToPlaylist(trackName: string, albumName: string, artistName: string, albumId: string) {
    let albumImg;
    this.jukebox.getAlbumById(albumId)
      .subscribe(albumData => {albumImg = albumData.json().album[0].strAlbumThumb
        let newSong = new JukeboxSong(trackName, albumName, artistName, albumImg);
        this.jukebox.addSong(newSong);
        this.currentPlaylist = this.jukebox.getSongsList().valueChanges().subscribe(playlist => {this.currentPlaylist = playlist});
      })
  }

}
