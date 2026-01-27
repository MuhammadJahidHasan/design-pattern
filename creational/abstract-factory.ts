interface IButton {
    render(): any;
}

interface IInput {
    render(): any;
}

class DarkButton implements IButton {
    render() {
       console.log(`Rendering dark button`);
    }

}

class DarkInput  implements IInput {
    render() {
       console.log(`Rendering dark input`);
    }

}

class WhiteButton implements IButton {
    render() {
       console.log(`Rendering white button`);
    }

}

class WhiteInput  implements IInput {
    render() {
       console.log(`Rendering white input`);
    }

}

interface IUIFactory {
    createButton(): IButton;
    createInput(): IInput;
}

class DrakThemeFactory implements IUIFactory {
    createButton(): IButton {
        return new DarkButton();
    }
    createInput(): IInput {
        return new DarkInput();
    }
}

class WhiteThemeFactory implements IUIFactory {
    createButton(): IButton {
        return new WhiteButton();
    }
    createInput(): IInput {
        return new WhiteInput();
    }
}

const main = function() {

    const whiteTheme = new WhiteThemeFactory();
    const whiteButton = whiteTheme.createButton();
    const whiteInput = whiteTheme.createInput();

    whiteButton.render();
    whiteInput.render();

}

main();