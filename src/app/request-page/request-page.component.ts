import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-page',
  templateUrl: './request-page.component.html',
  styleUrls: ['./request-page.component.css'],
})
export class RequestPageComponent implements OnInit {
  symptoms = [
    {
      id: 1,
      name: 'xd',
    },
    {
      id: 1,
      name: 'sdad',
    },
  ];

  selectedSymptoms = [{}];
  xd = '';

  addSymptom() {
    this.selectedSymptoms.push({});
  }
  async handleSubmit() {
    try {
      const response = await fetch('', {
        method: 'POST',
        body: JSON.stringify({}),
        headers: {},
      });
      const data = response.json();

      this.router.navigate(['home']);
    } catch (error) {}
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
