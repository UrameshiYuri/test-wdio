class DragPage {
    //Seletores 
    get menuDrag() {
        return $("~Drag")
    }
    //Seletores Peças
    get leftArm() {
        return $('~drag-l2')
    }
    get rightHand() {
        return $('~drag-r3')
    }
    get rightEar() {
        return $('~drag-r1')
    }
    get eyes() {
        return $('~drag-c1')
    }
    get pants() {
        return $('~drag-c3')
    }
    get rightArm() {
        return $('~drag-r2')
    }
    get belly() {
        return $('~drag-c2')
    }
    get leftEar() {
        return $('~drag-l1')
    }
    get leftHand() {
        return $('~drag-l3')
    }
    //Seletores Encaixes
    get leftEarDrop() {
        return $('~drop-l1')
    }
    get eyesDrop() {
        return $('~drop-c1')
    }
    get rightEarDrop() {
        return $('~drop-r1')
    }
    get leftArmDrop() {
        return $('~drop-l2')
    }
    get bellyDrop() {
        return $('~drop-c2')
    }
    get rightArmDrop() {
        return $('~drop-r2')
    }
    get leftHandDrop() {
        return $('~drop-l3')
    }
    get pantsDrop() {
        return $('~drop-c3')
    }
    get rightHandDrop() {
        return $('~drop-r3')
    }
    //Metodos
    async abrirMenuDrag() {
        const menu = this.menuDrag;
        await menu.waitForExist({ timeout: 5000 });
        await menu.click();
    }
    async puzzleSolve() {
        await this.leftArm.dragAndDrop(this.leftArmDrop);
        await this.rightHand.dragAndDrop(this.rightHandDrop);
        await this.rightEar.dragAndDrop(this.rightEarDrop);
        await this.eyes.dragAndDrop(this.eyesDrop);
        await this.pants.dragAndDrop(this.pantsDrop);
        await this.rightArm.dragAndDrop(this.rightArmDrop);
        await this.belly.dragAndDrop(this.bellyDrop);
        await this.leftEar.dragAndDrop(this.leftEarDrop);
        await this.leftHand.dragAndDrop(this.leftHandDrop);
    }
}

export default new DragPage()