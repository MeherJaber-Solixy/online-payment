import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PayService} from "../Services/pay.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-credit-card-payement',
  templateUrl: './credit-card-payement.component.html',
  styleUrls: ['./credit-card-payement.component.css']
})
export class CreditCardPayementComponent implements OnInit {
  amount:any = 46.98;
  public sendForm: FormGroup;
  minDate = new Date();
  constructor(private formBuilder: FormBuilder,private payService: PayService, private router: Router) {
    this.sendForm = this.formBuilder.group({

      cardNumber: ['', Validators.required],
      holder: ['', Validators.required],
      expDate: ['', [Validators.required]],
      ccv: ['', [Validators.maxLength(3)]],


    });
  }


  ngOnInit(): void {
    this.sendForm = this.formBuilder.group({

      cardNumber: ['', Validators.required],
      holder: ['', Validators.required],
      expDate: ['', [Validators.required]],
      ccv: ['', [Validators.maxLength(3)]],


    });
  }
  onSubmit() {
    const sendObject= {
      amount: this.amount,
      card: this.sendForm.value
    }
    if (!this.sendForm.valid){
      alert('Form not valid');
      return;
    }
    this.payService.pay(sendObject).subscribe(data => alert('Sended'), error => {
      alert('API error');
    });
  }
}
