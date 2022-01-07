import { Component, Input, OnInit } from '@angular/core';
import { ArtDetails, NationsFeatured } from '../myInterfaces/artInterface';

@Component({
  selector: 'app-json-nation',
  templateUrl: './json-nation.component.html',
  styleUrls: ['./json-nation.component.css']
})
export class JsonNationComponent implements OnInit {

  @Input() nationList!: NationsFeatured[];
  @Input() artList!: ArtDetails[];

  outArea!: string;

  displayNation(nation: number) {
    this.outArea = `<h3>${this.nationList[nation].nation} Art</h3>`;
    for (let art of this.artList) {
      if (art.nation === this.nationList[nation].nation) { 
        this.outArea += 
        `
        <table width="100%">
          <tr>
            <th width="10%">Art ID</th>
            <th width="38%">Title</th>
            <th width="38%">Creator</th>
            <th width="14%">Creation Date</th>
          </tr>
          <tr>
            <td>${art.id}</td>
            <td>${art.title}</td>
            <td>${art.creator}</td>
            <td>${art.creation_date}</td>
          </tr>
          <tr>
            <th>Technique<br>Used</th>
            <th colspan="3">Description</th>
          </tr>
          <tr>
            <td>${art.technique}</td>
            <td colspan="3">${art.description}</td>
          </tr>
        </table>
        <hr>
        `
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
