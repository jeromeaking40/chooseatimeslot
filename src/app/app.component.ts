import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsService } from 'angular2-notifications';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(
    private modalService: NgbModal,
    private notifyService: NotificationsService
  ) { }

  selectedLink: string;
  modalRef: NgbModalRef;
  time: '';
  name: '';
  number: '';
  options: {
    timeOut: 5000,
    position: 'middle'
  }

  submitInfo() {
    localStorage.setItem('number', this.number);
    localStorage.setItem('name', this.name);
    console.log('Info submitted');
    this.modalRef.close();
    this.notifyService.info('Choose A Time', ' Your infomation was submitted');
  }

  open(content) {
    this.modalRef = this.modalService.open(content, { windowClass: 'dark-modal' })
  }

}
