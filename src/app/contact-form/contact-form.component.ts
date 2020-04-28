import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  listOfOptions = [
    {id: 1, name: "Shashi"},
    {id: 2, name: "Bhushan"},
    {id: 3, name: "Bhagat"}
  ];

  contactMethods = [
    {id: 1, name: 'email'},
    {id:2, name: 'phone'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  log(x) {
    console.log(x.control);
  }

  submit(f) {
    console.log(f.value.contact.firstNameSecond)
  }

}
