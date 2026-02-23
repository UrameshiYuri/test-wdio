describe('Testes em app mobile', () => {
    it.only('Deve fazer login com sucesso', async () => {
        await $('~Login').click()
        await $('~input-email').setValue('teste@correto.com')
        await $('~input-password').setValue('12345678')
        await $('~button-LOGIN').click()
        expect(await $('id="android:id/message"')).toBeDisplayed()
        await driver.acceptAlert()
    });
    it('Deve falhar ao tentar login com email invalido', async () => {
        await $('~Login').click()
        await $('~input-email').setValue('teste@invalido')
        await $('~input-password').setValue('12345678')
        await $('~button-LOGIN').click()
        let mensagem = await $('//android.widget.TextView[@text="Please enter a valid email address"]')
        expect(mensagem).toBeDisplayed()
    });
});