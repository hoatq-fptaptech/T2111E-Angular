import {Component} from "@angular/core";

@Component({
  selector:"school",
  templateUrl:"./school.component.html"
})
export class SchoolComponent{
  name:string="FPT Aptech";
  address:string="Số 8 Tôn Thất Thuyết, Nam Từ Liêm, HN";
  listClasses = [
    {
      name:"T2110E",
      numberOfStudents:25,
      teacher:{
        name:'Nguyễn Tuân',
        age:28,
        tel:'099999',
        address:'8 TTT'
      },
      students: [
        {
          name:"Bùi Anh Tuấn",
          tel:"0987654321"
        },
        {
          name:"Đào Phương Nam",
          tel:"0987654321"
        },
        {
          name:"Nguyễn Đức Huy",
          tel:"0987654321"
        },
        {
          name:"Đỗ Đức Hiển",
          tel:"0987654321"
        },
        {
          name:"Hoàng Tuấn Linh",
          tel:"0987654321"
        }
      ]
    },
    {
      name:"T2111E",
      numberOfStudents:26,
      teacher:{
        name:'Trịnh Quang Hòa',
        age:18,
        tel:'099999',
        address:'8 TTT'
      },
      students: [
        {
          name:"Lê Văn Hùng",
          tel:"0987654321"
        },
        {
          name:"Đào Phương Nam",
          tel:"0987654321"
        },
        {
          name:"Nguyễn Đức Huy",
          tel:"0987654321"
        },
        {
          name:"Đỗ Đức Hiển",
          tel:"0987654321"
        },
        {
          name:"Hoàng Tuấn Linh",
          tel:"0987654321"
        }
      ]
    },
    {
      name:"T2112E",
      numberOfStudents:27,
      teacher:{
        name:'Đặng Kim Thi',
        age:18,
        tel:'099999',
        address:'8 TTT'
      },
      students: [
        {
          name:"Bùi Anh Tuấn",
          tel:"0987654321"
        },
        {
          name:"Đào Phương Nam",
          tel:"0987654321"
        },
        {
          name:"Nguyễn Đức Huy",
          tel:"0987654321"
        },
        {
          name:"Đỗ Đức Hiển",
          tel:"0987654321"
        },
        {
          name:"Hoàng Tuấn Linh",
          tel:"0987654321"
        }
      ]
    },
    {
      name:"T2010E",
      numberOfStudents:18,
      teacher:{
        name:'Đào Hồng Luyến',
        age:18,
        tel:'099999',
        address:'8 TTT'
      },
      students: [
        {
          name:"Bùi Anh Tuấn",
          tel:"0987654321"
        },
        {
          name:"Đào Phương Nam",
          tel:"0987654321"
        },
        {
          name:"Nguyễn Đức Huy",
          tel:"0987654321"
        },
        {
          name:"Đỗ Đức Hiển",
          tel:"0987654321"
        },
        {
          name:"Hoàng Tuấn Linh",
          tel:"0987654321"
        }
      ]
    },
    {
      name:"T2011E",
      numberOfStudents:19,
      teacher:{
        name:'Nguyễn Tuân',
        age:18,
        tel:'099999',
        address:'8 TTT'
      },
      students: [
        {
          name:"Bùi Anh Tuấn",
          tel:"0987654321"
        },
        {
          name:"Đào Phương Nam",
          tel:"0987654321"
        },
        {
          name:"Nguyễn Đức Huy",
          tel:"0987654321"
        },
        {
          name:"Đỗ Đức Hiển",
          tel:"0987654321"
        },
        {
          name:"Hoàng Tuấn Linh",
          tel:"0987654321"
        }
      ]
    }
  ];
}
