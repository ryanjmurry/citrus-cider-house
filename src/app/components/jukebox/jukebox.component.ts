import { Component, OnInit } from '@angular/core';
import { JukeboxService } from '../../services/jukebox.service';

@Component({
  selector: 'app-jukebox',
  templateUrl: './jukebox.component.html',
  styleUrls: ['./jukebox.component.css'],
  providers: [JukeboxService]
})
export class JukeboxComponent implements OnInit {

  constructor(private jukebox: JukeboxService) { }
  artistInfo;
  albumGot: boolean = false;
  trackInfo;
  trackGot: boolean = false;
  ngOnInit() {
  }

  getArtist(artist: string){
    this.jukebox.getArtistInfo(artist)
      .subscribe(artistData => {this.artistInfo = artistData.json()
      this.albumGot = true;
      console.log('got here, albumGot Status: ' + this.albumGot)
    });
  }

  getTracks(albumId: string) {
    this.jukebox.getAlbumTracks(albumId)
      .subscribe(trackData => {this.trackInfo = trackData.json()
        this.albumGot = false;
        this.trackGot = true;
        console.log(this.trackInfo);
      })
  }

  backToAlbums(){
    this.trackGot = false;
    this.albumGot = true;
  }

}
