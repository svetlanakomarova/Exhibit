import { Component} from '@angular/core';
import { Student } from './myInterfaces/student';
import { ArtDetails, NationsFeatured } from './myInterfaces/artInterface';
import jsondata from '../assets/data/A4.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A4komarovs';

  student: Student = jsondata.myDetails;
  artList: ArtDetails[] = jsondata.artDetails;
  nationList: NationsFeatured[] = jsondata.nationsFeatured;
}
