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
  albumGot: boolean = null
  ngOnInit() {
  }

  getArtist(artist: string){
    this.jukebox.getArtistInfo(artist)
      .subscribe(artistData => {this.artistInfo = artistData.json()
      this.albumGot = true;
      console.log('got here, albumGot Status: ' + this.albumGot)
    });

  }

}
