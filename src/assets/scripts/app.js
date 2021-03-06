import General         from  '../../../src/assets/scripts/General';
import LazyLoad         from  '../../../src/assets/scripts/LazyLoad';
import OnLoadModal     from  '../../../src/assets/scripts/OnLoadModal';

import FormCheckbox     from  '../../../src/atoms/FormCheckbox/FormCheckbox';
import FormFileInput    from  '../../../src/atoms/FormFileInput/FormFileInput';
import FormInput        from  '../../../src/atoms/FormInput/FormInput';
import FormTextarea     from  '../../../src/atoms/FormTextarea/FormTextarea';
import Hamburger        from  '../../../src/atoms/Hamburger/Hamburger';
import Progressbar      from  '../../../src/atoms/Progressbar/Progressbar';

import Accordion        from  '../../../src/molecules/Accordion/Accordion';
import Carousel         from  '../../../src/molecules/Carousel/Carousel';
import Map              from  '../../../src/molecules/Map/Map';
import Modal            from  '../../../src/molecules/Modal/Modal';
import RemoteCheck      from  '../../../src/molecules/RemoteCheck/RemoteCheck';
import SearchBar        from  '../../../src/molecules/SearchBar/SearchBar';
import Slider           from  '../../../src/molecules/Slider/Slider';
import SelectNav        from  '../../../src/molecules/SelectNav/SelectNav';

import Sidebar          from  '../../../src/organisms/Sidebar/Sidebar';
import Contact          from  '../../../src/organisms/Contact/Contact';
import Header           from  '../../../src/organisms/Header/Header';
import Services         from  '../../../src/organisms/Services/Services';
import ProductNav       from  '../../../src/organisms/ProductNav/ProductNav';

const Components = {
  LazyLoad,
  OnLoadModal,

  FormCheckbox,
  FormFileInput,
  FormInput,
  FormTextarea,
  Hamburger,
  Progressbar,

  Accordion,
  Carousel,
  Map,
  Modal,
  RemoteCheck,
  SearchBar,
  Slider,
  SelectNav,
  
  Sidebar,
  Contact,
  Header,
  Services,
  ProductNav,
};

function buildComponent( that, type, data ) {
  const options = data || {};
  let Component = Components[type];
  if ( Component ) {
    Component = new Component($(that), options);
    that.setComponent( type, Component);
    $(that).data(`component${type}`, Component).removeAttr("data-component").removeData("component");
  }
}

HTMLElement.prototype.getComponent = function( type ) {
  const Component = this[ type ];
  if ( Component ) {
    return Component;
  }
  return undefined;
}

HTMLElement.prototype.setComponent = function( type, Component ) {
  this[type] = Component;
}

window.initiateComponents = function() {
  $('[data-component]').each(function() {
    const data = $( this ).data('component');
    if ( Array.isArray( data ) ) {
      for( var i in data ) {
        buildComponent( this, data[i].type, data[i] );
      }
    } else if ( typeof data == "object" ) {
      buildComponent( this, data.type, data );
    } else if ( typeof data == "string" ) {
      buildComponent( this, data, $( this ).data() );
    }

  });
}

$(document).ready(() => initiateComponents());
