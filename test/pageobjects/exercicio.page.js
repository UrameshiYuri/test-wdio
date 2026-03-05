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
    get mensagemSucesso() {
        return $('/hierarchy/android.widget.FrameLayout')
    }
    get botaoOk() {
        return $('~android:id/button1')
    }
    //metodos
    async criarConta(email, senha) {
        await this.signupBotao.click()
        await this.criarEmail.clearValue()
        await this.criarEmail.setValue(email)
        await this.criarSenha.clearValue()
        await this.criarSenha.setValue(senha)
        await this.repetirSenha.clearValue()
        await this.repetirSenha.setValue(senha)
        await this.botaoCriar.click()
        await this.botaoLogin.click()
    }
    async mensagemSucessoSignUp() {
        return await this.mensagemSucesso.getText()
    }
    async confirmarMensagem() {
        const el1 = await driver.$("id:android:id/button1");
        await el1.click();
    }

}
export default new signUp()