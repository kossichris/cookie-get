import { Component, h, Prop, State, Watch } from '@stencil/core';
import { PanelProperties } from './helpers/utils';

@Component({
  tag: 'cookie-getter',
  styleUrl: 'cookie-getter.css',
  shadow: true,
})
export class CookieGetter {

  @Prop() boutontitle: string;
  @Prop() logotitle: string;
  @Prop() logo: string;
  @Prop() informationtext: string;
  @Prop() modalcontent: string;
  @Prop() src: string;

  @Prop() panels: string;
  @State() internalPanels: any[];

  @State() isVisible = true;
  @State() value: string
  @State() isRequired = false
  @State() isActivated = false
  @State() errorMsg: string

  componentWillLoad() {
  if(this.parseOptions(this.panels)&&this.parseOptions(this.panels).length > 0){
   this.internalPanels = this.parseOptions(this.panels);
    }else{
    this.internalPanels = []
    }

  }


 @Watch('panels')
  parseOptions(panels) {
    if (this.panels) {
     const Ioptions = JSON.parse(panels);
      let propertyCount = 0
      for (const element of Ioptions) {
        for (const key in element) {
          propertyCount++
          //const element = object[key];
        if (!PanelProperties.includes(key)) {
            this.errorMsg = ("Field not acceptable: "+ [key]);        
        }
        if (element[key]==='') {
            this.errorMsg = "Field is required: " +  [key];
        }
        }
        if(propertyCount !== PanelProperties.length){
            this.errorMsg = ("Some Missing Fields")        
        }
      }
    
    return Ioptions
    }
  }

  handleSelect(item) {
    console.log(item);
    this.internalPanels = JSON.parse(this.panels).map((Ip)=>  {Ip.isActivated === true ? Ip.isActivated = false: Ip.isActivated = true})
  }


  handleChange(event) {
    this.value = event.target.value;
  }

  showButton() {
    this.isVisible ? this.isVisible = false : this.isVisible = true
    console.log(this.isVisible)
  }

  RequiredFieldChange = (e) =>{
      this.isRequired = e.target.value
      this.isActivated = e.target.value
  }



  render() {

    return (
      <div class="container">
        <input type="checkbox" id="modal" />
        {this.isVisible && <label htmlFor="modal" onClick={() => this.showButton()} class="example-label-open"> {this.boutontitle} </label>}
         <br/> <div class="error"> {this.errorMsg} </div>
        <label htmlFor="modal" onClick={() => this.showButton()} class="modal-background"></label>
        <div onClick={() => this.showButton()} class="modal">
          <div class="modal-header">
            <img src={this.logo} alt="" /> 
            <h3> {this.logotitle} </h3>
            <label htmlFor="modal">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAdVBMVEUAAABNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU0N3NIOAAAAJnRSTlMAAQIDBAUGBwgRFRYZGiEjQ3l7hYaqtLm8vsDFx87a4uvv8fP1+bbY9ZEAAAB8SURBVBhXXY5LFoJAAMOCIP4VBRXEv5j7H9HFDOizu2TRFljedgCQHeocWHVaAWStXnKyl2oVWI+kd1XLvFV1D7Ng3qrWKYMZ+MdEhk3gbhw59KvlH0eTnf2mgiRwvQ7NW6aqNmncukKhnvo/zzlQ2PR/HgsAJkncH6XwAcr0FUY5BVeFAAAAAElFTkSuQmCC" width="16" height="16" alt="" />
            </label>
          </div>
          <p> {this.informationtext}
          </p>
          <div class="outer">
                { (this.internalPanels).map((P)=> <details  open>
              <summary> <span> {P.title} </span>{P.required && <span class="required"> REQUIS </span>}
               {P.isActivated &&   <span class="required">
                <label onClick={()=>this.handleSelect(P)} class="switch">
                  <input type="checkbox" name="switch" checked={P.isActivated} onChange={this.RequiredFieldChange} />
                  <span class="slider round"></span>
                </label> </span>}
              </summary>
              <div class="faq-content">
                <p> {P.description} </p>
              </div>
            </details>) }

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
          <form >
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
