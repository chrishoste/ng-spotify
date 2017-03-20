import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

import { Artist } from '../../../Artist';
import { Album } from '../../../Album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  id:String;
  album:Album[];

  constructor(
    private _sp:SpotifyService,
    private _route:ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params
        .map(params => params['id'])
        .subscribe((id) =>{
            this._sp.getAlbum(id)
                .subscribe((album) => {
                   this.album = album;
              })
        })
  }

}
