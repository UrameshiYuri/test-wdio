class signUp {
    //seletores
    get menuSignUp() {
        return $('~button-sign-up-container')
    }
    get criarEmail() {
        return $('~input-email')
    }
    get criarSenha() {
        return $('~input-password')
    }
    get repetirSenha() {
        return $('~input-repeat-password')
    }
    get botaoCriar() {
        return $('~button-SIGN UP')
    }
    get signupBotao() {
        return $('~button-sign-up-container')
    }
    get botaoLogin() {
        return $('~button-login-container')
    }
    //metodos
    async criarConta(emailCria, senhaCria) {
        await this.criarEmail.clearValue()
        await this.criarEmail.setValue(emailCria)
        await this.criarSenha.clearValue()
        await this.criarSenha.setValue(senha)
        await this.repetirSenha.clearValue()
        await this.repetirSenha.setValue(senhaCria)
        await this.botaoCriar.click()
        await this.botaoLogin.click()
    }
    async signupPage() {
        await this.signupBotao.click()
    }
    async botaoConfirmarPopUp() {
        const botao = ('~android:id/button1')
        await botao.click()
    }
}
export default new signUp()