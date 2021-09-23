import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'cookie-getter',
  styleUrl: 'cookie-getter.css',
  shadow: true,
})
export class CookieGetter {

  @Prop() title: string;
  @Prop() modalTitle: string;
  @Prop() modalContent: string;
  @Prop() src: string;

  @State() value: string

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.value);
    // send data to our backend
  }

  handleChange(event) {
    this.value = event.target.value;
    console.log(this.value)
  }


  render() {
    return (
      <div>
   <input type="checkbox" id="modal"/>
<label htmlFor="modal" class="example-label"> {this.title} </label>
<label htmlFor="modal" class="modal-background"></label>
<div class="modal">
	<div class="modal-header">
		<h3> {this.modalTitle} </h3>
        <label htmlFor="modal">
        	<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAdVBMVEUAAABNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU0N3NIOAAAAJnRSTlMAAQIDBAUGBwgRFRYZGiEjQ3l7hYaqtLm8vsDFx87a4uvv8fP1+bbY9ZEAAAB8SURBVBhXXY5LFoJAAMOCIP4VBRXEv5j7H9HFDOizu2TRFljedgCQHeocWHVaAWStXnKyl2oVWI+kd1XLvFV1D7Ng3qrWKYMZ+MdEhk3gbhw59KvlH0eTnf2mgiRwvQ7NW6aqNmncukKhnvo/zzlQ2PR/HgsAJkncH6XwAcr0FUY5BVeFAAAAAElFTkSuQmCC" width="16" height="16" alt=""/>
        </label>
    </div>
    <p> {this.modalContent} 
    </p>
    <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          Name:
          <input type="text" value={this.value} onInput={(event) => this.handleChange(event)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
      </div>

    );
  }

}
