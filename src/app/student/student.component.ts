import {Component,Input} from "@angular/core";

@Component({
  selector:"student",
  // template:"<h1>Student component</h1>"// chỗ khai báo mã html của component
  templateUrl:"./student.component.html"
})
export class StudentComponent{
  @Input("name") name!:string;
  @Input("tel") tel!:string;
}
// tạo 1 component lớp học Classroom hiển thị ra 5 sinh viên trong lớp
