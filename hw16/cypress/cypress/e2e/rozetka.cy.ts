describe('first e2e test', () => {
    const URL = 'https://rozetka.com.ua/';

    it('Should find first item in the recommended list', () => {
        cy.visit(URL);
        const itemSelector = 'rz-section-tiles-block-best rz-product-tile:nth-child(1)';
        cy.get(itemSelector).should('be.visible');

        const titleSelector = 'rz-section-tiles-block-best rz-product-tile:nth-child(1) .text-base';

        cy.get(titleSelector).should('be.visible');

        let textFromElement = '';

        cy.get(titleSelector)
            .invoke('text')
            .then((text) => {
                textFromElement = text;
            });

        cy.get(itemSelector).click();

        const selectedTitleSelector = '.product-about__right-inner h1';

        cy.get(selectedTitleSelector).should('be.visible');

        cy.get(selectedTitleSelector)
            .invoke('text')
            .then((text) => {
                cy.wrap(textFromElement).should('include', text);
            });

        cy.url().then((url) => {
            Cypress.env('savedUrl', url);
        });
    });

    it('Should check elements on the page', () => {
        const savedUrl = Cypress.env('savedUrl');
        cy.visit(savedUrl);

        const itemProductNameSelector = "//div[@class='product-about__right-inner']//h1";
        cy.xpath(itemProductNameSelector).should('be.visible');

        const itemMainPhotoSelector = "//rz-gallery-main-content-image//img[@fetchpriority='high']";
        cy.xpath(itemMainPhotoSelector).should('be.visible');

        const itemCartButtonSelector = '//rz-product-buy-btn/rz-buy-button/button ';
        cy.xpath(itemCartButtonSelector).should('be.visible');

        const itemMoreProductInfoSelector = `//*[@id="#scrollArea"]//button[normalize-space(text()) ='Детальніше про товар']`;
        cy.xpath(itemMoreProductInfoSelector).scrollIntoView().should('be.visible');
    });
});
