import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'cookie-getter',
  styleUrl: 'cookie-getter.css',
  shadow: true,
})
export class CookieGetter {

  @Prop() boutonTitle: string;
  @Prop() logoTitle: string;
  @Prop() informationText: string;
  @Prop() modalcontent: string;
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
      <div class="container">
   <input type="checkbox" id="modal"/>
<label htmlFor="modal" class="example-label"> {this.boutonTitle} </label>
<label htmlFor="modal" class="modal-background"></label>
<div class="modal">
	<div class="modal-header">
		<h3> {this.informationText} </h3>
        <label htmlFor="modal">
        	<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAdVBMVEUAAABNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU0N3NIOAAAAJnRSTlMAAQIDBAUGBwgRFRYZGiEjQ3l7hYaqtLm8vsDFx87a4uvv8fP1+bbY9ZEAAAB8SURBVBhXXY5LFoJAAMOCIP4VBRXEv5j7H9HFDOizu2TRFljedgCQHeocWHVaAWStXnKyl2oVWI+kd1XLvFV1D7Ng3qrWKYMZ+MdEhk3gbhw59KvlH0eTnf2mgiRwvQ7NW6aqNmncukKhnvo/zzlQ2PR/HgsAJkncH6XwAcr0FUY5BVeFAAAAAElFTkSuQmCC" width="16" height="16" alt=""/>
        </label>
    </div>
    <p> {this.modalcontent} 
    </p>
    <div class="outer">
        <details open>
            <summary> <span> What is Lorem Ipsum?</span> <span class="required"> REQUIS </span></summary>
            <div class="faq-content">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </details>

        <details>
            <summary><span>Why do we use it? </span> <span class="required">
              <label class="switch">
                <input type="checkbox"/>
                <span class="slider round"></span>
              </label> </span>
              </summary>
            <div class="faq-content">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </div>
        </details>
        <details>
            <summary>
            <span>Where does it come from? </span> <span class="required">
              <label class="switch">
                <input type="checkbox"/>
                <span class="slider round"></span>
              </label> </span>
              
            </summary>
            <div class="faq-content">
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
            </div>
        </details>
  
  <div class="bottom-buttons">
<span>
<label htmlFor="modal" class="example-label"> Sauvegarder et sortir </label>

</span>
<span>
<label htmlFor="modal" class="example-label"> Annuler </label>
<label htmlFor="modal" class="example-label accept"> Tout accepter </label>

</span>

  </div>
    </div>
    <form onSubmit={(e) => this.handleSubmit(e)}>
        {/*<label>
          Name:
          <input type="text" value={this.value} onInput={(event) => this.handleChange(event)} />
        </label>
        <input type="submit" value="Submit" />*/}

      </form>
      </div>
      </div>

    );
  }

}
