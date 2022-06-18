import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employes } from 'src/app/interfaces/employes';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-dbcontent',
  templateUrl: './dbcontent.component.html',
  styleUrls: ['./dbcontent.component.css']
})
export class DbcontentComponent implements OnInit {
  projects?: Project[];
  teams:Employes[] = [];
  a:any[] = [1,2,3,5,5]
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // console.log(params['tukhoa']);
      if( params['tukhoa'] == undefined) {
        this.getAllProject()
        console.log(this.projects);
      } else {
        this.projectService.getProjectByName(String(params['tukhoa']))
          .subscribe((data:any) => {
            if(data.data){
              return
            }
            
            this.projects = data as Project[]
            console.log(data);
            
          })
      }
    })
  }
  asEmploye(val:Employes|string):Employes {
    return (val as Employes)
  }
  addProject(Project: Project) {
    this.projectService.addProject(Project)
      .subscribe((listProject:any) => {
        console.log(listProject);
        if(this.projects)
        this.projects.push(listProject);
      },err => {
        if(err.status = 401) {
          localStorage.removeItem('state');
          alert('token het han')
        }
      })
    console.log(Project);
    
  }
  getAllProject() {
    this.projectService.getAll()
        .subscribe((data:any) => {
          console.log(data);
          
          this.projects = data.data
        },err => {
          if(err.status = 401) {
            localStorage.removeItem('state');
            alert('token het han')
          }
        })
  }

  deleteProject(id?:string) {
    console.log(id);
    
    if(confirm('Are you sure ??')) {
      this.projectService.Delete(id)
                    .subscribe(projectss => {
                      console.log(projectss);
                      
                      if(this.projects)
                      this.projects = this.projects.filter(project => project._id != id)
                    },err => {
                      if(err.status = 401) {
                        localStorage.removeItem('state');
                        alert('token het han')
                      }
                    })
    }
  }

}
