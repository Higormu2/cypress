

    describe('Transacao', () => {

        beforeEach(() => {
            
            // npx cypress open
            cy.visit ("https://devfinance-agilizei.netlify.app/#")

        });
        
        it('Cadastrar uma entrada', () => {     //< nome do teste
   
            criarTransacao("Freela", 100)
            cy.get("tbody tr td.description").should("have.text", "Freela")
           

         });

         it('Cadastrar uma saída', () => {
           
            criarTransacao("Cinema", -45)
            cy.get("tbody tr td.description").should("have.text", "Cinema")
            

         });

         it('Excluir transação', () => {
            criarTransacao("Freela", 100)
            criarTransacao("Mesada", 10)

            cy.contains(".description", "Freela")  //td => referencia
             //   .parent()  //tr
            //    .find('img')  //elemento que a gente precisa
            //   .click() 
            .siblings() // puxa todos os irmãos do elemento
            .children('img') // puxa o elemento filho que foi extraido do .siblings
            .click()

            cy.get('tbody tr').should("have.length",1)


         });
    });
    


    function criarTransacao(descricao, valor) {

        cy.contains ("Nova Transação").click()
            cy.get('#description').type(descricao)
            cy.get('#amount').type(valor)
            cy.get('#date').type("2023-02-15") // yyyy - mm - dd
            
            cy.contains('button', 'Salvar').click()


    };