import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {

  iframeUrl: string;
  trustUrl: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.iframeUrl = '//lightwidget.com/widgets/fa7019b8a5d35e2b931b6f745c86f9bb.html';
    this.trustUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeUrl);
  }

}

