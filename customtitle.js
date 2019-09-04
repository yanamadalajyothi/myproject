class CustomTitle extends HTMLElement{
    constructor()
    {
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.innerHTML=`<style>
        h1{
            font-size: 7rem;
            color: #000;
            font-family: Helvetica;
            text-align: center;
          }
        </style>
        <h1><slot></slot>My Custom Title!</h1>
      `
        }
}
customElements.define("custom-title",CustomTitle);
//short cut for defining custom element is
//window.customElements.define('custom-title', class extends HTMLElement {
  //  constructor() {
        
   //   }
   // })
//    <template id="custom-title-template">
//   <style>
//     h1 {
//       font-size: 7rem;
//       color: #000;
//       font-family: Helvetica;
//       text-align: center;
//     }
//   </style>
//   <h1>My Custom Title!</h1>
// </template>
// <custom-title></custom-title>
// class CustomTitle extends HTMLElement {
//     constructor() {
//       super()
//       this.attachShadow({ mode: 'open' })
//       const tmpl = document.querySelector('#custom-title-template')
//       this.shadowRoot.appendChild(tmpl.content.cloneNode(true))
//     }
//   }
//   window.customElements.define('custom-title', CustomTitle)