import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-new',
  templateUrl: './preview-new.component.html',
  styleUrls: ['./preview-new.component.css']
})
export class PreviewNewComponent implements OnInit {

  @Input() title : String;
  @Input() resume : String;
  @Input() description : String;
  @Input() image : String;
  constructor() { }

  ngOnInit(): void {
  }

}
