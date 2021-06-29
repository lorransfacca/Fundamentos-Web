import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/model/User";
import { AuthService } from "src/app/Service/auth.service";

@Component({
    selector: 'app-cadastrar',
    templateUrl: './cadastrar.component.html',
    styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit{

    user: User = new User
    conformarSenha: string
    tipoUsuario: string
    tipoGenero: string


    constructor(
        private authService: AuthService,
        private router: Router
    ) {}
    
    ngOnInit() {
        window.scroll(0,0)
    } 
    
    confirmSenha(event: any) {
        this.confirmarSenha event.targe.value
    } 

    tipogenero(event: any) {
        this.tipoUsuario event.targe.value
    }

    tipoUser(event: any) {
        this.tipoUsuario event.targe.value
    }

    cadastrar(event: any) {
        this.user.tipo  this.tipoUsuario

        if(this.user.senha ! this.confirmarSenha){
            alert('A senha estão incorretas.')
        }else{
            this.authService.cadastrar(this.user).subscribe((resp: User) => {
                this.user = resp
                this.router.navigate(['/entrar'])
                alert('Usuário cadastrado com sucesso!.')
            } )

        }
    }
    
}
