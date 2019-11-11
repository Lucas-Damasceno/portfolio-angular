import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  projectParams: any = {};
  projects: any = [];
  project: any = {};

  constructor(private router: Router,private route: ActivatedRoute, private projectsService: ProjectsService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectParams = params;
    })

    this.projects = this.projectsService.projects;

    this.project = this.projects.find(element => element.link == this.projectParams.name);

    if(!this.project){
      this.router.navigateByUrl('/');
    }
  }

}
