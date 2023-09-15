import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Scripting Lab';
  message: string = "This is the first message";
  message1: string = "This is second message";
  fruit = ["Mango","Kiwi","Banana","Walnut"];
  inputValue: string = "Initial value";
  isChecked: boolean = false;
  checkMe: string = "N";
  result: string = "checkbox checked";
  doSomething(){
  
    if(this.isChecked==true){
      console.log('checkbox is checked');
      this.message;
    }
    else{
      console.log('checkbox is unchecked');
    }
  }
  
}
//checkbox componenet
export class CheckboxComponent {
  checkMe = "N";

  isChecked = true;
}