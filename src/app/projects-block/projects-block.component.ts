import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects-block',
  templateUrl: './projects-block.component.html',
  styleUrls: ['./projects-block.component.scss']
})
export class ProjectsBlockComponent implements OnInit {
  projectsArray: any = [] 

  constructor(private projects: ProjectsService) { }

  ngOnInit() {
    this.projectsArray = this.projects.projects;
  }

}
