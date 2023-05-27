import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private patients = [
    {
      name: 'Tom Banks',
      age: 23,
      id: 1
    },
    {
      name: 'Mary Ford',
      age: 12,
      id: 2
    },
    {
      name: 'Lebron James',
      age: 35,
      id: 3
    },
    {
      name: 'Harry Kane',
      age: 29,
      id: 4
    },
    {
      name: 'Marcus Jojo',
      age: 10,
      id: 5
    },
  ];

  constructor() {}

  doSomething() {
    const today = new Date();
    const referenceDate = new Date(2023, 2, 1);
    const diffDays = this.findDays(today, referenceDate);
    const datepipe: DatePipe = new DatePipe('en-US');
    //console.log(`Number of days since ${datepipe.transform(referenceDate, 'dd/MM/yyyy')} is ${diffDays}`);
    //console.log('something');

    //console.log(this.replaceSpaceWithHyphen('Today we will learn Javascript and Typescript'));

    // const myWord = 'immediately';
    // console.log(myWord.charAt(7)); //t
    // console.log(myWord.indexOf('m')); //1
    // console.log(myWord.lastIndexOf('m')); //2

    //console.log(this.whatShouldIWear('sunny'));

    const isLightOnArrow = (luminosity: number) => luminosity > 20 ? 'Light is on' : 'Light is off';
    //console.log(this.isLightOn(30));
    // console.log(isLightOnArrow(30));
    // console.log(isLightOnArrow(10));

    const fruits = ['apple', 'mango', 'grape', 'orange'];
    const juice = fruits.map((fruit) => {
      return `${fruit} juice`;
    });
    const lengths = fruits.map((fruit) => fruit.length);
    // console.log(juice);
    // console.log(lengths);

    console.log(this.patients);
    const patientsWithAppointment = this.patients.map(patient => {
      const patientWithAppointment = {...patient, 'appointmentDate': new Date(), 'doctor': 'Dr. Jones'};
      return patientWithAppointment;
    });
    console.log(patientsWithAppointment);

    const adultPatients = patientsWithAppointment.filter(patient => patient.age > 18);
    console.log(adultPatients);

    // $LastName with $id has an appointment on $Date with $doctor;

    patientsWithAppointment.forEach(patient => {
      const patientNames = patient.name.split(' ');
      const patientLastName = patientNames[1];

      const firstSpaceIndex = patient.name.indexOf(' ');
      const lastName = patient.name.substring(firstSpaceIndex + 1);

      console.log(`${lastName} with ID:${patient.id} has an appointment on ${patient.appointmentDate.toLocaleDateString()} with ${patient.doctor}`);
    });
  }

  private findDays(date1: Date, date2: Date): number {
    const diffMillis = date1.getTime() - date2.getTime();
    const diffDays = Math.floor(diffMillis/(1000*3600*24));
    return diffDays;
  }

  private replaceSpaceWithHyphen(sentence: string): string {
    const words = sentence.split(' ');
    return words.join('-');
  }

  private whatShouldIWear(weather: string): string {
    if(weather == 'rainy') {
      return 'You need a rain coat';
    } else if (weather === 'sunny') {
      return 'Go out freely';
    } else {
      return "You don't need a rain coat";
    }
  }

  private isLightOn(luminosity: number): string {
    // if (luminosity > 20) {
    //   return 'Light is on';
    // } else {
    //   return 'Light is off';
    // }

    return luminosity > 20 ? 'Light is on' : 'Light is off';
  }
}
