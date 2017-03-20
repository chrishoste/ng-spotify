import { Component, OnInit } from '@angular/core';
import { Artist } from '../../../Artist';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchStr:String;
  searchRes: Artist;

  constructor(
    private _sp:SpotifyService
  ) { }

  ngOnInit() {
  }

  searchMusic(){
    this._sp.searchMusic(this.searchStr)
        .subscribe(res => {
          this.searchRes = (res.artists.items);

        });
    
  }

}
