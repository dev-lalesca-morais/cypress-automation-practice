describe('Fluxo completo de uma compra', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Deve buscar um produto, adicionar ao carrinho e finalizar a compra', ()=> {

    cy.get('#search_query_top').type('dress');
    cy.get('button[name="submit_search"]').click();
    cy.get('.product_list').should('contain', 'Dress');
    cy.screenshot('busca_produto');

    cy.get('.product_list .product-container').first().trigger('mouseover');
    cy.get('.product_list .ajax_add_to_cart_button').first()
    .should('be.visible')
    .and('not.have.class', 'disabled')
    .click();
    
    cy.get('.layer_cart_product h2').should('contain', 'Product successfully added to your shopping cart');
    cy.screenshot('produto_adicionado');

    cy.get('.button-container a[title="Proceed to checkout"]').click();
    
    cy.get('#cart_title').should('contain', 'Shopping-cart summary');
    cy.screenshot('resumo_carrinho');

    cy.get('.cart_navigation a[title="Proceed to checkout"]').first()
    .click();
    
    cy.get('#email_create').type(`testeqa${Date.now()}@mail.com`);
    cy.get('#SubmitCreate')
    .click();

    cy.get('#account-creation_form').should('be.visible');
    cy.screenshot('cadastro_usuario');
  });
});