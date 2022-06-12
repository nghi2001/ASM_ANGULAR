import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
type menu={
  name:string,active:boolean
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  menu:menu[] = [
    {name:'Time Sheet',active:false},
    {name:'Project',active:true},
    {name:'Team',active:false}
  ]
  tukhoa: string = ''
  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }
  onKey(event:any){
    // alert(1)
    this.tukhoa = event.target.value
    // window.location.href = `http://localhost:4200?tukhoa=${this.tukhoa}`;
    this.route.navigate([``],{queryParams: {tukhoa:this.tukhoa}})
  }
  active(i:number) {
    for(let i =0;i<this.menu.length;i++) {
      if (this,this.menu[i].active === true) {
        this.menu[i].active = false
      }
    }

    this.menu[i].active = true 
  }
}
