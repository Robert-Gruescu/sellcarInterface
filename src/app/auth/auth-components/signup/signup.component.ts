import { Component ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoNgZorroAntdModule } from '../../../DemoNgZorroAntdModule';


@Component({
  selector: 'app-signup',
  imports: [CommonModule,
    NzSpinModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzGridModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule
  ], 
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class SignupComponent {

   signupForm!: FormGroup;
   isSpinning : boolean = false;

  constructor(private fb: FormBuilder ) {
    this.signupForm = this.fb.group({
      name:[null,[Validators.required]],  
      email:[null,[Validators.required,Validators.email]],  
      password:[null,[Validators.required]],
      confirmPassword:[null,[Validators.required]], 
    })
    

  }

  signup ()
  {
    console.log(this.signupForm.value);
  }

}
