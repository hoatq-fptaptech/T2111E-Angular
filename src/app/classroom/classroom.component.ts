import {Component,Input} from "@angular/core";

@Component({
  selector:"classroom",
  templateUrl:"./classroom.component.html"
})
export class ClassroomComponent{
  color = "color:red";
  @Input("name") name !:string;
  @Input("numberOfStudents") numberOfStudents !:number;
}
// Viết 1 component Teacher gồm các giá trị: name, age, tel, address
// và gọi vào trong classroom

// viết 1 component School gồm: name, address và tạo 5 lớp học trong school
