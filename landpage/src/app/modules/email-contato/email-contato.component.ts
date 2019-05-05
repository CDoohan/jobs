import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Email } from '../../models/email';

@Component({
  selector: 'app-email-contato',
  templateUrl: './email-contato.component.html',
  styleUrls: ['./email-contato.component.less']
})
export class EmailContatoComponent implements OnInit {
  formContato: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formContato = this.formBuilder.group({
        nome: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        mensagem: ['', Validators.required]
    });
  
  }

  handleEnviarEmail(){
    this.submitted = true;

    if( this.formContato.valid ){
      const email = new Email(this.formContato.value);

      alert('Email enviado com sucesso!');
      this.submitted = false;
      this.formContato.reset();

    }else{
      console.log('Campos precisam ser preenchidos');
      this.validarTodosOsCamposDoFormulario(this.formContato);
    }

  }

  validarTodosOsCamposDoFormulario( form: FormGroup ){

    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      control.markAsTouched({ onlySelf : true });
    })

  }


}
