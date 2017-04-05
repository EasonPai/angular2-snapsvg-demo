import {Component} from "@angular/core";

// import "snapsvg-cjs";
// declare var Snap: any;
import * as Snap from "snapsvg-cjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  public svgCanvas: Snap.Paper;
  public bigCircle: Snap.Element;

  ngOnInit(){
    this.createSvg();
    this.svgCanvas.click(() => {
      console.log(`svgCanvas.clicked`);
    });
  }

  //Create svg
  createSvg() {

    this.svgCanvas = Snap("#svg");

    // Lets create big circle in the middle:
    this.bigCircle = this.svgCanvas.circle(150, 150, 100);
    // By default its black, lets change its attributes
    this.bigCircle.attr({
      fill: "#bada55",
      stroke: "#000",
      strokeWidth: 5
    });
    // Now lets create another small circle:
    var smallCircle = this.svgCanvas.circle(100, 150, 70);

  }
}
