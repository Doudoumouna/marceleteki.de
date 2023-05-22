import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {
  images = ['macbook.png', 'mingole.jpg', 'code.jpg', 'min.png'];
  headlines = [
    'Born to code',
    'Bring engineering to the next level',
    'Schritt-für-Schritt Anleitung zum Erstellen einer Website',
    'Wie man seine Softwareentwickler-Website vermarktet',
  ];
  currentImage = 0;
  showImage = true;
  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);
  }
}
