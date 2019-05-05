export class Email {

    nome         = '';
    email        = '';
    mensagem     = '';

    constructor(
        { nome, email, mensagem }:{ nome:string, email:string, mensagem:string}){ 
        
        this.nome       = nome;
        this.email      = email;
        this.mensagem   = mensagem;
    }

}