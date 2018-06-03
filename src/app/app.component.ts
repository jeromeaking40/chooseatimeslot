import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from './User';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private modalService: NgbModal) { }

  selectedLink: string;
  modalRef: NgbModalRef;
  time: '';
  name: '';
  number: '';
  backgroundColor: '#e6060600'

  setradio(e: string): void {
    this.selectedLink = e;
    console.log('Appointment Time', this.selectedLink);
  }

  submitInfo() {
    localStorage.setItem('number', this.number);
    localStorage.setItem('name', this.name);
    console.log('Info submitted');
    this.modalRef.close();
  }

  open(content) {
    this.modalRef = this.modalService.open(content, { windowClass: 'dark-modal' })
  }

}
