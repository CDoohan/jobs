import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  color = 'all';

  changeColor(type: string){
    switch(type){

      case 'all':
        this.color = "all";
        return "sb__chooseAll";

      case 'yellow':
        this.color = "yellow";
        return "sb__chooseYellow";
      
      case 'grey':
        this.color = "grey";
        return "sb__chooseGrey";

      case 'purple':
        this.color = "purple";
        return "sb__choosePurple";

      default:
        this.color="all";
        return "sb__chooseAll";

    }
  }

}
