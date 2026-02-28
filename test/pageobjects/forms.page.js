class FormPages {
    //seletores
    get menuForm() {
        return $("accessibility id:Forms")
    }
    get campoTexto() {
        return $("accessibility id:text-input")
    }
    get labelResultado() {
        return $("accessibility id:input-text-result")
    }
    get dropDown() {
        return $("-android uiautomator:new UiSelector().resourceId(\"text_input\")")
    }
    // metodos
    async abrirMenuForm() {
        await this.menuForm.click()
    }
    async preencherTexto(texto) {
        await this.campoTexto.addValue(texto)
    }
    async validarTexto() {
        return await this.labelResultado.getText()
    }
    async selecionarOpcao(txtOpcao) {
        //TO DO: MELHORAR METODO
        await this.dropDown.click()
        const opcao = $(`-android uiautomator:new UiSelector().text(\"${txtOpcao}\")`)
        await opcao.click()
    }
    async validarOpcao() {
        return await this.dropDown.getText()
    }
}
export default new FormPages()