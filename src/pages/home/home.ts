import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PProvider} from "../../providers/p/p";
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // myValue: string;

  // countries={};
countries :any=[];
  error="";
   selected_name="";
  constructor(public navCtrl: NavController, public cp:PProvider,private vibration: Vibration  ) {
  }

  ionViewDidLoad()
  {
    this.vibrate();
     // this.cp.load();

  }




  // itemSelected() {
  //   console.log('hey there');
  // }

  // function itemSelected(item) {
  //   document.getElementById("demo").innerHTML = "Hello World";

  /*
  ngOnInit() {
   this.myProvider.getData()
   .subscribe(
returnedData => { this.data = returnedData; },  );
returnedError => { this.error = returnedError; }
}
*/
//    firstStep(element) {
//
//      var selected_name = element.name;
//     var option_value = element.value;
//      console.log(this.selected_name);
//      console.log(option_value);
// //      this.fn()
// //      {
// // // if( this.countries.name=="denmark")
// // // {
// // //
// // // }
// //
// //        // var hour = new Date().getHours();
// // //        var greeting;
//        if (this.countries.name==this.firstStep)
//
//        {
//          greeting = "Correct";
//        } else {
//          greeting = "Incorrect";
//        }
//        document.getElementById("demo").innerHTML = greeting;
// //
// //      }
//   }


  // compareFn(e1, e2): boolean {
  //
  //   //console.log (e1.name, e1.population);
  //   //console.log (e2.name, e2.population);
  //   var greeting;
  //
  //   console.log(e1);
  //
  // if (e1.population > e2.population)
  // {
  //   greeting = "population is high" ;
  //
  // }
  // else {
  //   greeting = "Incorrect";
  // }
  // document.getElementById("demo1").innerHTML = greeting;
  //   return e1 && e2 ? e1.population === e2.population : e1 === e2;
  //
  // }

  onChange(selectedValue){
    console.log('s',selectedValue)
  }

  fn(selectedValue){
    console.log("Country selected "+selectedValue);
    var greeting;

    if( selectedValue.name=="Denmark")
    {
      greeting = "Yes!! this is the match!";
    }
    else
      {
      greeting = "Nah...Try again!!";
    }

    console.log(greeting);

    document.getElementById("demo").innerHTML = greeting;
    // console.log(this.countries.name);
    // // console.log(this.firstStep(name));
    // // var hour = new Date().getHours();
    // var greeting;
    // if (this.countries.name=='Denmark')
    //
    // {
    //   greeting = "Correct";
    //
    //   console.log(this.countries.name);
    //   // console.log(this.firstStep(name));
    // } else {
    //   greeting = "Incorrect";
    // }
    // document.getElementById("demo").innerHTML = greeting;

  }

  fn1(selectedValue) {
    console.log("Country selected " + selectedValue);
    var greeting;

    if (selectedValue.name == "India") {
      greeting = "Yes!! this is the match!";
    }
    else {
      greeting = "Nah...Try again!!";
    }

    console.log(greeting);

    document.getElementById("demo1").innerHTML = greeting;
  }

  fn2(selectedValue) {
    console.log("Country selected " + selectedValue);
    var greeting;

    if (selectedValue.name == "United Kingdom of Great Britain and Northern Ireland") {
      greeting = "Yes!! this is the match!";
    }
    else {
      greeting = "Nah...Try again!!";
    }

    console.log(greeting);

    document.getElementById("demo2").innerHTML = greeting;
  }

  fn3(selectedValue) {
    console.log("Country selected " + selectedValue);
    var greeting;

    if (selectedValue.name == "Ireland") {
      greeting = "Yes!! this is the match!";
    }
    else {
      greeting = "Nah...Try again!!";
    }

    console.log(greeting);

    document.getElementById("demo3").innerHTML = greeting;
  }

  vibrate() {

    this.vibration.vibrate(10000);

  }
  ngOnInit(){
    this.getCountryList();
  }

  getCountryList()
  {
    this.cp.getCountryData()
      .subscribe(
        countries => {this.countries=countries; console.log(countries)},

        error => this.error= error
      );
  }

}



