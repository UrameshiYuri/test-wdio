import formsPage from "../pageobjects/forms.page";
describe('funcionalidade: tela de formulario', () => {
    beforeEach(async () => {
        formsPage.abrirMenuForm()
    });

    it('deve validar se o texto foi preenchido corretamente', async () => {
        await formsPage.preencherTexto('automação appium')
        expect(await formsPage.validarTexto()).toEqual('automação appium')
    });
    it('validar açao do dropdowm', async () => {
        await formsPage.selecionarOpcao('Appium is awesome')
        expect(await formsPage.validarOpcao()).toEqual('Appium is awesome')
    });
    it.only('deve trocar o botao de on pra off', async () => {
        //trocar para on
        const botaoOnOff = await driver.$("accessibility id:switch");
        await botaoOnOff.click();
        //trocar para off
        await browser.swipe({
            direction: 'left',                  // Swipe from right to left
            duration: 5000,                     // Last for 5 seconds
            percent: 0.1,                       // Swipe 50% of the scrollableElement
            scrollableElement: botaoOnOff,  // The element to swipe within
        })
        await driver.pause(5000)
    });

});