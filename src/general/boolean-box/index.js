import { LitElement, html, css } from 'lit-element';

class BooleanBox extends LitElement {

  static get styles() {
    return css`
      :host { 
        display: inline-block; 
        width: 100px;
        height: 100px;
        margin: 5px;
      }

      [part=box] {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
        background-color: var(--box-color);
        text-align: center;
      }
    `;
  }

  static get properties() {
    return {
      value: { type: Boolean, attribute: 'value' },
      trueColor: { type: String, attribute: 'true-color' },
      falseColor: { type: String, attribute: 'false-color' },
      label: { type: String, attribute: 'label' },
    };
  }

  constructor() {
    super();
    this.value = false;
    this.trueColor = 'green';
    this.falseColor = 'red';
    this.label = '';
  }

  updated() {
    const backgroundNode = this.shadowRoot.querySelector('[part=box]');
    const backgroundColor = this.value ? this.trueColor : this.falseColor;

    backgroundNode.style.setProperty('--box-color', backgroundColor);
  }

  render() {
    return html`
      <div part="box">
        ${this.label}
      </div>
    `;
  }
}

customElements.define('frc-boolean-box', BooleanBox);

export const config = {
  name: 'frc-boolean-box',
  properties: [
    { name: 'value', type: 'Boolean', attribute: 'value', primary: true },
    { name: 'trueColor', type: 'String', defaultValue: 'green', attribute: 'true-color' },
    { name: 'falseColor', type: 'String', defaultValue: 'red', attribute: 'false-color' },
    { name: 'label', type: 'String', attribute: 'label' },
  ]
};