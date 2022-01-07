import { Component, Input, OnInit } from '@angular/core';
import { ArtDetails } from '../myInterfaces/artInterface';

@Component({
  selector: 'app-json-exhibit',
  templateUrl: './json-exhibit.component.html',
  styleUrls: ['./json-exhibit.component.css']
})
export class JsonExhibitComponent implements OnInit {

  @Input() artList!: ArtDetails[];

  constructor() { }

  ngOnInit(): void {
  }

}
