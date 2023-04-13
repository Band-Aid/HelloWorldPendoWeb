import { LightningElement } from 'lwc';
import pendo from '@salesforce/resourceUrl/pendosnippet';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
export default class HelloWorld extends LightningElement {
  greeting = 'World';
  changeHandler(event) {
    this.greeting = event.target.value;
  }


  connectedCallback() {
    Promise.all([
        loadScript(this, pendo).then(() => {
          window.pendo.initialize({
            visitor: {
              id: 'goku@son.db', // Unique identifier for visitor
            },
            account: {
              id: 'Z戦士' // Unique identifier for account
            }
          })
        })
    ])
    .then(() => {
        console.log('Pendo snippet loaded.');
    })
    .catch(error => {
        console.log('Error loading Pendo snippet: ' + error);
    });
}
  

}
