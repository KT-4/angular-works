import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  //<----------------- INTERPOLATION CODE-------------->
  
   dyName:string="successfully"


  // // Create Method

  //   myMethod(){
  //     return "My Channel name is" + this.dyName
  //   }


  
    //  appStatus:boolean = false;
    //  Status1 = "online";
    //  Status2 = "offline"

  //<----------------- INTERPOLATION CODE END-------------->

  // enable:boolean = true;




    //<-------------  STYLEBINDING AND CLASS BINDING --------------->

    // myproperty:boolean = false
    
    // isActive:boolean = false
    // myStyle = "15px"
      
     


    // mltcls = {
    //   class1:true,
    //   class2:true,
    //   class3:false
    // }
    //<-------------  STYLEBINDING AND CLASS BINDING --------------->
     


    // EVENTBINDING   START
    message!:string
         
    AddCart(){
       this.message = "Add Cart Successfully"
     }            



    // EVENT BINDING END
}
 