import { Component, Prop, h, Method, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  // Indicate that name should be a public property on the component
  @Prop() name: string;

  @State() show: boolean = false;

  @Method()
  async display() {
    // show a prompt
    this.show?
    this.show = false: this.show = true
    console.log(this.show)
  }
  render() {
    return (
      <div>

           <input onClick={this.display} type="submit" value="Ouvrir" id="modal"/>
         {
           this.show && <div class="overlay">
           <div class="modal">
              <div class="modal-header">
                <h3>Modal Title</h3>
                    <label htmlFor="modal">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAdVBMVEUAAABNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU0N3NIOAAAAJnRSTlMAAQIDBAUGBwgRFRYZGiEjQ3l7hYaqtLm8vsDFx87a4uvv8fP1+bbY9ZEAAAB8SURBVBhXXY5LFoJAAMOCIP4VBRXEv5j7H9HFDOizu2TRFljedgCQHeocWHVaAWStXnKyl2oVWI+kd1XLvFV1D7Ng3qrWKYMZ+MdEhk3gbhw59KvlH0eTnf2mgiRwvQ7NW6aqNmncukKhnvo/zzlQ2PR/HgsAJkncH6XwAcr0FUY5BVeFAAAAAElFTkSuQmCC" width="16" height="16" alt=""/>
                    </label>
                </div>
                <p>Content for the modal</p>
            </div>
        </div>
         } 
   
      </div>
   );
  }
}
