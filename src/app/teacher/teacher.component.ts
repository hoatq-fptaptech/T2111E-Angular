import {Component} from "@angular/core";

@Component({
  selector:"teacher",
  templateUrl:"./teacher.component.html"
})
export class TeacherComponent{
  name:string ="Trịnh Quang Hòa";
  age:number=18;
  tel:string="0987654321";
  address:string = "Hà Đông, Hà Nội, VN"
}
