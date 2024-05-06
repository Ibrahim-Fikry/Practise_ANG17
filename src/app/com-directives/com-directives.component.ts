import { Component } from '@angular/core';

@Component({
  selector: 'com_directives',
  templateUrl: './com-directives.component.html',
  styleUrl: './com-directives.component.scss'
})
export class com_directives {
  IsActive:boolean=true;
  Employees:any[]=[];
  empname!:string;
  empage!:number;
  addemp():void{
    debugger
    this.Employees.push({
      emp_name:this.empname,
      emp_age:this.empage
    }
    )
  }
  
  classtyle={
    styleA:true,
    styleB:false,
    styleC:false,
    
  }
  style={
    color:"blue",
    background: "rgb(140, 0, 255)",
    border: "2px solid fuchsia",
  }
}
