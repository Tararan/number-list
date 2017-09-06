import { Component } from '@angular/core';

var n : string[];
n = prompt("Enter numbers separated by commas").split(",");

n.sort();

var current : string = null;
var count : number =  0;

for(var i = 0; i < n.length; i++)
  {
  if(n[i] != current)
    {
      if(count > 0)
        {
            document.write( 
            `
              ${current}   =>   ${count} </br>
            `);
        }
          current= n[i];
          count=1;
    }
  else {count++};
  }
if(count>0) 
  {
   document.write( 
            `
              ${current}  =>  ${count}  </br>
            `);
  }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Counting Duplicates';
}