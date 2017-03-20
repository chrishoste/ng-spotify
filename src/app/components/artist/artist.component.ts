import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

import { Artist } from '../../../Artist';
import { Album } from '../../../Album';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  id:String;
  artist:Artist[];
  albums:Album[];

  constructor(
    private _sp:SpotifyService,
    private _route:ActivatedRoute
  ) { }

  ngOnInit() {

    this._route.params
        .map(params => params['id'])
        .subscribe((id) =>{
            this._sp.getArtist(id)
                .subscribe((artist) => {
                   this.artist = artist;
              })

              this._sp.getAlbums(id)
                .subscribe((albums) => {
                   this.albums = albums.items;
              })
        })

  }

}
