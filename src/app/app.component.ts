import { Component } from '@angular/core';

var n = prompt("Enter your numbers").split(",");
console.log(n);

var counts : { [nr: string]: number } = {};
n.forEach((x) => { 
    counts[x] = (counts[x] || 0) +1; 
});

document.write(
`
  <h1>Enter numbers when prompted!</h1>
  <p>You entered following numbers:</p>${n}<br/>
  <p>The occurence is as follows:</p>${JSON.stringify(counts)}
`
);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counting Duplicates';
}
