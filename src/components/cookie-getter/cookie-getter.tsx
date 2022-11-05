import { Component, h, Prop, State, Watch } from '@stencil/core';
import { PanelProperties } from './helpers/utils';

@Component({
  tag: 'cookie-getter',
  styleUrl: 'cookie-getter.scss',
  shadow: true,
})
export class CookieGetter {
  @State() boutontitle: string;
  @State() logotitle: string;
  @Prop() logo: string;
  @State() informationtext: string;
  @Prop() modalcontent: string;
  @Prop() src: string;

  @Prop() panels: string;
  @State() internalPanels: any[];

  @State() isVisible = true;
  @State() value: string;
  @State() isRequired = false;
  @State() isActivated = false;
  @State() errorMsg: string;

  componentWillLoad() {
    this.getDataFromServer();
    if (this.parseOptions(this.panels) && this.parseOptions(this.panels).length > 0) {
      this.internalPanels = this.parseOptions(this.panels);
    } else {
      this.internalPanels = [];
    }
  }

  async getDataFromServer() {
    try {
      let response = await fetch('https://cookie.nakod.net/popup');
      let cookieInfo = await response.json();
      if (cookieInfo) {
        this.logotitle = cookieInfo.logotitle;
        this.boutontitle = cookieInfo.boutontitle;
        this.informationtext = cookieInfo.informationtext;
        this.internalPanels = cookieInfo.panels;
      }
    } catch (error) {
      console.log(error);
      const data = {
        boutontitle: 'OUVRIR',
        logotitle: 'JETECH',
        informationtext:
          'Ce site utilise des technologies comme les cookies ou le ciblage afin de personnaliser la publicit\u00e9 que vous voyez. Cela nous aide \u00e0 vous montrer des publicit\u00e9s plus pertinentes et \u00e0 am\u00e9liorer votre exp\u00e9rience sur Internet. Nous l\u0027utilisons \u00e9galement pour mesurer les r\u00e9sultats ou adapter le contenu de notre site Web. Puisque nous respectons votre vie priv\u00e9e, nous vous demandons votre autorisation pour utiliser ces technologies.',
        panels: [
          {
            title: 'Confidentialit\u00e9',
            description:
              'Lorsque vous consultez un site Web, des donn\u00e9es peuvent \u00eatre stock\u00e9es dans votre navigateur ou r\u00e9cup\u00e9r\u00e9es \u00e0 partir de celui-ci, g\u00e9n\u00e9ralement sous la forme de cookies. Ces informations peuvent porter sur vous, sur vos pr\u00e9f\u00e9rences ou sur votre appareil et sont principalement utilis\u00e9es pour s\u0027assurer que le site Web fonctionne correctement. Les informations ne permettent g\u00e9n\u00e9ralement pas de vous identifier directement, mais peuvent vous permettre de b\u00e9n\u00e9ficier d\u0027une exp\u00e9rience Web personnalis\u00e9e. Parce que nous respectons votre droit \u00e0 la vie priv\u00e9e, nous vous donnons la possibilit\u00e9 de ne pas autoriser certains types de cookies. Cliquez sur les diff\u00e9rentes cat\u00e9gories pour obtenir plus de d\u00e9tails sur chacune d\u0027entre elles, et modifier les param\u00e8tres par d\u00e9faut. Toutefois, si vous bloquez certains types de cookies, votre exp\u00e9rience de navigation et les services que nous sommes en mesure de vous offrir peuvent \u00eatre impact\u00e9s.',
            isActivated: false,
            required: false,
          },
          {
            title: 'N\u00e9cessaires',
            description:
              'Ces cookies sont n\u00e9cessaires au fonctionnement du site Web et ne peuvent pas \u00eatre d\u00e9sactiv\u00e9s dans nos syst\u00e8mes. Ils sont g\u00e9n\u00e9ralement \u00e9tablis en tant que r\u00e9ponse \u00e0 des actions que vous avez effectu\u00e9es et qui constituent une demande de services, telles que la d\u00e9finition de vos pr\u00e9f\u00e9rences en mati\u00e8re de confidentialit\u00e9, la connexion ou le remplissage de formulaires. Vous pouvez configurer votre navigateur afin de bloquer ou \u00eatre inform\u00e9 de l\u0027existence de ces cookies, mais certaines parties du site Web peuvent \u00eatre affect\u00e9es. Ces cookies ne stockent aucune information d\u2019identification personnelle.',
            isActivated: true,
            required: true,
          },
          {
            title: 'Performances',
            description:
              'Ces cookies nous permettent de d\u00e9terminer le nombre de visites et les sources du trafic, afin de mesurer et d\u2019am\u00e9liorer les performances de notre site Web. Ils nous aident \u00e9galement \u00e0 identifier les pages les plus / moins visit\u00e9es et d\u2019\u00e9valuer comment les visiteurs naviguent sur le site Web. Toutes les informations collect\u00e9es par ces cookies sont agr\u00e9g\u00e9es et donc anonymis\u00e9es. Si vous n\u0027acceptez pas ces cookies, nous ne serons pas inform\u00e9 de votre visite sur notre site',
            isActivated: true,
            required: false,
          },
          {
            title: 'Fonctionnalit\u00e9',
            description:
              'Ces cookies permettent d\u2019am\u00e9liorer et de personnaliser les fonctionnalit\u00e9s du site Web. Ils peuvent \u00eatre activ\u00e9s par nos \u00e9quipes, ou par des tiers dont les services sont utilis\u00e9s sur les pages de notre site Web. Si vous n\u0027acceptez pas ces cookies, une partie ou la totalit\u00e9 de ces services risquent de ne pas fonctionner correctement.',
            isActivated: true,
            required: true,
          },
        ],
      };
      this.logotitle = data.logotitle;
      this.boutontitle = data.boutontitle;
      this.informationtext = data.informationtext;
      this.internalPanels = data.panels;
    }
  }

  @Watch('panels')
  parseOptions(panels) {
    if (this.panels) {
      const Ioptions = JSON.parse(panels);
      let propertyCount = 0;
      for (const element of Ioptions) {
        for (const key in element) {
          propertyCount++;
          if (!PanelProperties.includes(key)) {
            this.errorMsg = 'Field not acceptable: ' + [key];
          }
          if (element[key] === '') {
            this.errorMsg = 'Field is required: ' + [key];
          }
        }
        if (propertyCount !== PanelProperties.length) {
          this.errorMsg = 'Some Missing Fields';
        }
      }

      return Ioptions;
    }
  }

  handleSelect(item) {
    console.log(item);
    this.internalPanels = JSON.parse(this.panels).map(Ip => {
      Ip.isActivated === true ? (Ip.isActivated = false) : (Ip.isActivated = true);
    });
  }

  handleChange(event) {
    this.value = event.target.value;
  }

  showButton() {
    this.isVisible ? (this.isVisible = false) : (this.isVisible = true);
  }

  RequiredFieldChange = e => {
    this.isRequired = e.target.value;
    this.isActivated = e.target.value;
  };

  render() {
    return (
      <div class="container">
        <input type="checkbox" id="modal" />
        {this.isVisible && (
          <label htmlFor="modal" onClick={() => this.showButton()} class="example-label-open">
            {' '}
            {this.boutontitle}{' '}
          </label>
        )}
        <br /> <div class="error"> {this.errorMsg} </div>
        <label htmlFor="modal" onClick={() => this.showButton()} class="modal-background"></label>
        <div onClick={() => this.showButton()} class="modal">
          <div class="modal-header">
            <img src={this.logo} alt="" />
            <h3> {this.logotitle} </h3>
            <label htmlFor="modal">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAdVBMVEUAAABNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU0N3NIOAAAAJnRSTlMAAQIDBAUGBwgRFRYZGiEjQ3l7hYaqtLm8vsDFx87a4uvv8fP1+bbY9ZEAAAB8SURBVBhXXY5LFoJAAMOCIP4VBRXEv5j7H9HFDOizu2TRFljedgCQHeocWHVaAWStXnKyl2oVWI+kd1XLvFV1D7Ng3qrWKYMZ+MdEhk3gbhw59KvlH0eTnf2mgiRwvQ7NW6aqNmncukKhnvo/zzlQ2PR/HgsAJkncH6XwAcr0FUY5BVeFAAAAAElFTkSuQmCC"
                width="16"
                height="16"
                alt=""
              />
            </label>
          </div>
          <p> {this.informationtext}</p>
          <div class="outer">
            {this.internalPanels.map(P => (
              <details open={P === this.internalPanels[0]}>
                <summary>
                  <span class="panel-title"> {P.title} </span>
                  <span class="required-wrapper">
                    {P.required && <span class="required"> REQUIS </span>}
                    {P.isActivated && (
                      <span class="required">
                        <label onClick={() => this.handleSelect(P)} class="switch">
                          <input type="checkbox" name="switch" checked={P.isActivated} onChange={this.RequiredFieldChange} />
                          <span class="slider round"></span>
                        </label>{' '}
                      </span>
                    )}
                  </span>
                </summary>
                <div class="faq-content">
                  <p> {P.description} </p>
                </div>
              </details>
            ))}

            <div class="bottom-buttons">
              <span>
                <label htmlFor="modal" class="example-label">
                  {' '}
                  Sauvegarder et sortir{' '}
                </label>
              </span>
              <span>
                <label htmlFor="modal" class="example-label">
                  {' '}
                  Annuler{' '}
                </label>
                <label htmlFor="modal" class="example-label accept">
                  {' '}
                  Tout accepter{' '}
                </label>
              </span>
            </div>
          </div>
          <div class="footer">Powered by NAKOD</div>
        </div>
      </div>
    );
  }
}
