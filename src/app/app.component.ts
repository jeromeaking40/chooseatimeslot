import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private modalService: NgbModal) { }
  modalRef: NgbModalRef;
  name: '';
  number: '';

  times = [
    {
      _id: 1,
      time: "9:00",
    },
    {
      _id: 2,
      time: "10:00",
    },
    {
      _id: 3,
      time: "11:00",
    },
    {
      _id: 4,
      time: "12:00",
    },
    {
      _id: 5,
      time: "1:00",
    },
    {
      _id: 6,
      time: "2:00",
    },
    {
      _id: 7,
      time: "3:00",
    },
    {
      _id: 8,
      time: "4:00",
    },
    {
      _id: 9,
      time: "5:00"
    }
  ]

  submitTime() {
    this.name = this.name;
    this.number = this.number;
    console.log('Time submitted');
    this.modalRef.close();
  }

  open(content) {
    this.modalRef = this.modalService.open(content, { windowClass: 'dark-modal' })
  }

}
