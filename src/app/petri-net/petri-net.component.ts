import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";
// import { PetriService } from '../service/petri.service';
// import * as exampleData from './place.json';

@Component({
  selector: 'app-petri-net',
  templateUrl: './petri-net.component.html',
  styleUrls: ['./petri-net.component.css']
})

export class PetriNetComponent implements OnInit {

  place: {id: string, transition: Array<number>, x: any, y: any}[] = [
    {id:'P1', transition:[0], x:100, y:100},
    {id:'P2', transition:[1], x:200, y:100},
    {id:'P3', transition:[2, 3], x:300, y:100},
    {id:'P4', transition:[4], x:350, y:300},
    {id:'P5', transition:[5], x:250, y:300},
    {id:'P6', transition:[6, 7], x:150, y:300},
    {id:'P7', transition:[8], x:100, y:500},
    {id:'P8', transition:[9], x:200, y:500},
    {id:'P9', transition:[10, 11], x:300, y:500},
    {id:'P10', transition:[12], x:400, y:500} ]
  transition: {id: string, place: number, x: number, y: number}[] = [
      {id:'T1', place:1, x:140, y:85},
      {id:'T2', place:2, x:240, y:85},
      {id:'T3', place:3, x:340, y:85},
      {id:'T4', place:0, x:190, y:0},
      {id:'T5', place:4, x:290, y:285},
      {id:'T6', place:5, x:190, y:285},
      {id:'T7', place:6, x:90, y:285},
      {id:'T8', place:3, x:240, y:185},
      {id:'T9', place:7, x:140, y:485},
      {id:'T10', place:8, x:240, y:485},
      {id:'T11', place:9, x:340, y:485},
      {id:'T12', place:6, x:190, y:385},
      {id:'T12', place:9, x:340, y:485}];
  activatedPlace = 0;
  messageA: string;
  messageB:any[] = [];
  // disable = false;
  constructor() {
    // console.log(this.place);

   }
  // place: any = exampleData;
  ngOnInit() {
    this.place.forEach(element => {

      // console.log(element.x, element.y);
    });
    var svg = d3.select("#table");
    this.place.forEach(place => {
      place.transition.forEach(element => {
        var line = svg.append("line")
        .style("stroke", "#125699")
        .attr("x1", place.x+50)
        .attr("y1", place.y+50)
        .attr("x2", this.transition[element].x+50)
        .attr("y2", this.transition[element].y+65);
      });
 
    });
    this.transition.forEach(transition => {
      // console.log(this.transition[place.transition].x, this.transition[place.transition].y);
      var line = svg.append("line")
      .style("stroke", "#125699")
      .attr("x1", transition.x+60)
      .attr("y1", transition.y+65)
      .attr("x2", this.place[transition.place].x+50)
      .attr("y2", this.place[transition.place].y+50);
    });
    this.place.forEach(place => {
      d3.select("#table").append('circle').attr('cx', place.x+50).attr('cy', place.y+50).attr('r',13).attr('fill', 'white').attr('stroke', 'white');
    });
    d3.select("#table").append('circle').attr('cx', this.place[0].x+50).attr('cy', this.place[0].y+50).attr('r',7).attr('fill', '#125699').attr('stroke', 'white');
    this.messageB.push(this.transition[this.activatedPlace].id);
    
    // d3.select("#petri").append('circle').attr('cx', 100).attr('cy', 100).attr('r', 20).attr('fill', 'orange');
    // d3.select("#petri2").append('rect').attr('cx', 250).attr('cy', 200).attr('width', 20).attr('height',40).attr('fill', 'orange');

  }

  assemble(){
    // this.disable = true;
  }
  next() {
    this.messageB = [];
    if(this.activatedPlace === 9) {
      window.alert('Process completed, back to the initial state');
      d3.select("#table").append('circle').attr('cx', this.place[this.activatedPlace].x+50).attr('cy', this.place[this.activatedPlace].y+50).attr('r',7).attr('fill', 'white').attr('stroke', 'white');
      d3.select("#table").append('circle').attr('cx', this.place[0].x+50).attr('cy', this.place[0].y+50).attr('r',7).attr('fill', '#125699').attr('stroke', 'white');
      this.messageA = 'T1';
      this.activatedPlace = 0;
      // this.disable = false;
    } else {
      console.log(this.activatedPlace);
      this.clearPrevious(this.activatedPlace);
      this.getNextTransition(this.activatedPlace);
    }
  
  }
  clearPrevious(previousPlace: number) {
    d3.select("#table").append('circle').attr('cx', this.place[previousPlace].x+50).attr('cy', this.place[previousPlace].y+50).attr('r',7).attr('fill', 'white');
  }
  getNextTransition(currentPlace: number) {
    // let randomTransition = 0;
    if(this.place[currentPlace].transition.length > 1) {
      const randomTransition = this.place[currentPlace].transition[Math.floor(Math.random() * 2)];
      this.getNextPlace(randomTransition);
    } else {
      const randomTransition = this.place[currentPlace].transition[0];
      this.getNextPlace(randomTransition);
    }
  }
  getNextPlace(transition: number) {
   const nextPlace = this.transition[transition].place;
   console.log(nextPlace);
   if(nextPlace < this.place.length) {
    d3.select("#table").append('circle').attr('cx', this.place[nextPlace].x+50).attr('cy', this.place[nextPlace].y+50).attr('r',7).attr('fill', '#125699').attr('stroke', 'white');
    this.messageA = this.transition[transition].id;
    this.place[nextPlace].transition.forEach(transitionIndex => {
      this.messageB.push(this.transition[transitionIndex].id);
    });
    this.activatedPlace = nextPlace;
  }
  }

}
