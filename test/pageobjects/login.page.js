class LoginPage {
    //seletores 
    get menuLogin() {
        return $('~Login')
    }
    get emailLogin() {
        return $('~input-email')
    }
    get senhaLogin() {
        return $('~input-password')
    }
    get botaoLogin() {
        return $('~button-LOGIN')
    }
    get mensagemSucesso() {
        return $('id=android:id/message')
    }
    //metodos
    async abrirMenu() {
        await this.menuLogin.click()
    }
    async preencherLogin(email, senha) {
        //TO DO: MELHORAR TESTE COM USO DE BOAS PRATICAS
        await this.emailLogin.clearValue()
        await this.emailLogin.setValue(email)
        await this.senhaLogin.clearValue()
        await this.senhaLogin.setValue(senha)
        await this.botaoLogin.click()
    }
    async mensagemAlerta() {
        return await this.mensagemSucesso.getText()
    }
    async mensagemErro(texto){
        const elemento = $(`//android.widget.TextView[@text="${texto}"]`)
        await expect(elemento).toHaveText(texto)
    }
}
export default new LoginPage()