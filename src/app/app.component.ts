 import { Component } from '@angular/core';


function log(target, name ,discripter){
  console.log(target,name,discripter)
}
@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})


export class AppComponent {
  
  title = 'into2angular';


    @log
    asimpleMethod()
    {
      console.log("hey there")
    }
}
