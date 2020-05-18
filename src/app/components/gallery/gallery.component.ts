import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  musicNames = ['1', '2', '3', '4','1', '2', '3','1', '2', '3'];
  constructor() { }

  ngOnInit(): void {
  }

}
