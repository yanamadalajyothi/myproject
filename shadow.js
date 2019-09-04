const shadowRoot = document.getElementById('example').attachShadow({ mode: 'open' });
shadowRoot.innerHTML = `<style>
button {
  background: tomato;
  color: white;
}
</style>
<slot></slot><button id="button">tomato</button>`;
//shadow DOM cannot be applied on tags like select,img,a,button,input