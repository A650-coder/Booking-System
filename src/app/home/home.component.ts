import { Component, OnInit } from '@angular/core';
interface ClientFeedback {
  name: string;
  comment: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  slides = [
    { title: '50% Diwali Sale', description: 'Enjoy 50% off on selected items this Diwali!' },
    { title: 'Flexible Ticket Cancel Policy', description: 'Book with confidence - cancel or reschedule your tickets easily.' },
    { title: 'Delicious Food Service', description: 'Discover our in-flight food options and pre-order your meals.' }
  ];
  currentIndex = 0;

  topClientFeedbacks: ClientFeedback[] = [
    { name: 'Rohan naik', comment: 'Great experience with their ticket cancel policy. Very easy and hassle-free.' },
    { name: 'Smith Thakre', comment: 'The food service was excellent, and the meal options were delicious!' },
    { name: 'Aditya Yadhav', comment: 'I highly recommend their services. Amazing discounts and customer-friendly policies.' },
    { name: 'Emily Watson ', comment: 'Smooth booking process with the flexible ticket cancel option. Impressed!' },
    { name: 'Michael Wilson', comment: 'The in-flight meals exceeded my expectations. Fantastic service overall.' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.showSlides();
  }

  showSlides(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 3000); // Change slide every 3 seconds
  }

  showSlide(index: number): void {
    this.currentIndex = index;
  }

}