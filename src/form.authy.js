var Authy = {};

Authy.UI = function() {
    // Attributes
    var self = this;
    var countriesList = [
      {"code":"US","name":"United States","call_code":"1"},{"code":"CA","name":"Canada","call_code":"1"},
      {"code":"UM","name":"United States Minor Outlying Islands","call_code":"1"},{"code":"BS","name":"Bahamas","call_code":"1 242"},
      {"code":"BB","name":"Barbados","call_code":"1 246"},{"code":"AI","name":"Anguilla","call_code":"1 264"},
      {"code":"AG","name":"Antigua and Barbuda","call_code":"1 268"},{"code":"VG","name":"Virgin Islands, British","call_code":"1 284"},
      {"code":"VI","name":"Virgin Islands, U.S.","call_code":"1 340"},{"code":"KY","name":"Cayman Islands","call_code":"1 345"},
      {"code":"BM","name":"Bermuda","call_code":"1 441"},{"code":"GD","name":"Grenada","call_code":"1 473"},
      {"code":"TC","name":"Turks and Caicos Islands","call_code":"1 649"},{"code":"MS","name":"Montserrat","call_code":"1 664"},
      {"code":"MP","name":"Northern Mariana Islands","call_code":"1 670"},{"code":"GU","name":"Guam","call_code":"1 671"},
      {"code":"AS","name":"American Samoa","call_code":"1 684"},{"code":"LC","name":"Saint Lucia","call_code":"1 758"},
      {"code":"DM","name":"Dominica","call_code":"1 767"},{"code":"VC","name":"Saint Vincent and the Grenadines","call_code":"1 784"},
      {"code":"DO","name":"Dominican Republic","call_code":"1 849"},{"code":"TT","name":"Trinidad and Tobago","call_code":"1 868"},
      {"code":"KN","name":"Saint Kitts and Nevis","call_code":"1 869"},{"code":"JM","name":"Jamaica","call_code":"1 876"},
      {"code":"PR","name":"Puerto Rico","call_code":"1 939"},{"code":"EG","name":"Egypt","call_code":"20"},
      {"code":"EH","name":"Western Sahara","call_code":"212"},{"code":"MA","name":"Morocco","call_code":"212"},
      {"code":"DZ","name":"Algeria","call_code":"213"},{"code":"TN","name":"Tunisia","call_code":"216"},
      {"code":"LY","name":"Libyan Arab Jamahiriya","call_code":"218"},{"code":"GM","name":"Gambia","call_code":"220"},
      {"code":"SN","name":"Senegal","call_code":"221"},{"code":"MR","name":"Mauritania","call_code":"222"},{"code":"ML","name":"Mali","call_code":"223"},
      {"code":"GN","name":"Guinea","call_code":"224"},{"code":"CI","name":"Cote d'Ivoire","call_code":"225"},
      {"code":"BF","name":"Burkina Faso","call_code":"226"},{"code":"NE","name":"Niger","call_code":"227"},{"code":"TG","name":"Togo","call_code":"228"},
      {"code":"BJ","name":"Benin","call_code":"229"},{"code":"MU","name":"Mauritius","call_code":"230"},{"code":"LR","name":"Liberia","call_code":"231"},
      {"code":"SL","name":"Sierra Leone","call_code":"232"},{"code":"GH","name":"Ghana","call_code":"233"},{"code":"NG","name":"Nigeria","call_code":"234"},
      {"code":"TD","name":"Chad","call_code":"235"},{"code":"CF","name":"Central African Republic","call_code":"236"},
      {"code":"CM","name":"Cameroon","call_code":"237"},{"code":"CV","name":"Cape Verde","call_code":"238"},
      {"code":"ST","name":"Sao Tome and Principe","call_code":"239"},{"code":"GQ","name":"Equatorial Guinea","call_code":"240"},
      {"code":"GA","name":"Gabon","call_code":"241"},{"code":"CG","name":"Congo","call_code":"242"},
      {"code":"CD","name":"Congo, The Democratic Republic of the","call_code":"243"},{"code":"AO","name":"Angola","call_code":"244"},
      {"code":"GW","name":"Guinea-Bissau","call_code":"245"},{"code":"IO","name":"British Indian Ocean Territory","call_code":"246"},
      {"code":"SC","name":"Seychelles","call_code":"248"},{"code":"SD","name":"Sudan","call_code":"249"},{"code":"RW","name":"Rwanda","call_code":"250"},
      {"code":"ET","name":"Ethiopia","call_code":"251"},{"code":"SO","name":"Somalia","call_code":"252"},{"code":"DJ","name":"Djibouti","call_code":"253"},
      {"code":"KE","name":"Kenya","call_code":"254"},{"code":"TZ","name":"Tanzania, United Republic of","call_code":"255"},
      {"code":"UG","name":"Uganda","call_code":"256"},{"code":"BI","name":"Burundi","call_code":"257"},
      {"code":"MZ","name":"Mozambique","call_code":"258"},{"code":"ZM","name":"Zambia","call_code":"260"},
      {"code":"MG","name":"Madagascar","call_code":"261"},{"code":"YT","name":"Mayotte","call_code":"262"},
      {"code":"RE","name":"Reunion","call_code":"262"},{"code":"ZW","name":"Zimbabwe","call_code":"263"},{"code":"NA","name":"Namibia","call_code":"264"},
      {"code":"MW","name":"Malawi","call_code":"265"},{"code":"LS","name":"Lesotho","call_code":"266"},{"code":"BW","name":"Botswana","call_code":"267"},
      {"code":"SZ","name":"Swaziland","call_code":"268"},{"code":"KM","name":"Comoros","call_code":"269"},{"code":"ZA","name":"South Africa","call_code":"27"},
      {"code":"SH","name":"Saint Helena","call_code":"290"},{"code":"ER","name":"Eritrea","call_code":"291"},{"code":"AW","name":"Aruba","call_code":"297"},
      {"code":"FO","name":"Faroe Islands","call_code":"298"},{"code":"GL","name":"Greenland","call_code":"299"},{"code":"GR","name":"Greece","call_code":"30"},
      {"code":"NL","name":"Netherlands","call_code":"31"},{"code":"BE","name":"Belgium","call_code":"32"},{"code":"FR","name":"France","call_code":"33"},
      {"code":"ES","name":"Spain","call_code":"34"},{"code":"GI","name":"Gibraltar","call_code":"350"},{"code":"PT","name":"Portugal","call_code":"351"},
      {"code":"LU","name":"Luxembourg","call_code":"352"},{"code":"IE","name":"Ireland","call_code":"353"},{"code":"IS","name":"Iceland","call_code":"354"},
      {"code":"AL","name":"Albania","call_code":"355"},{"code":"MT","name":"Malta","call_code":"356"},{"code":"CY","name":"Cyprus","call_code":"357"},
      {"code":"AX","name":"Aland Islands","call_code":"358"},{"code":"FI","name":"Finland","call_code":"358"},{"code":"BG","name":"Bulgaria","call_code":"359"},
      {"code":"HU","name":"Hungary","call_code":"36"},{"code":"LT","name":"Lithuania","call_code":"370"},{"code":"LV","name":"Latvia","call_code":"371"},
      {"code":"EE","name":"Estonia","call_code":"372"},{"code":"MD","name":"Moldova","call_code":"373"},{"code":"AM","name":"Armenia","call_code":"374"},
      {"code":"BY","name":"Belarus","call_code":"375"},{"code":"AD","name":"Andorra","call_code":"376"},{"code":"MC","name":"Monaco","call_code":"377"},
      {"code":"SM","name":"San Marino","call_code":"378"},{"code":"UA","name":"Ukraine","call_code":"380"},{"code":"RS","name":"Serbia","call_code":"381"},
      {"code":"ME","name":"Montenegro","call_code":"382"},{"code":"HR","name":"Croatia","call_code":"385"},{"code":"SI","name":"Slovenia","call_code":"386"},
      {"code":"BA","name":"Bosnia and Herzegovina","call_code":"387"},{"code":"MK","name":"Macedonia, The Former Yugoslav Republic of","call_code":"389"},
      {"code":"VA","name":"Holy See (Vatican City State)","call_code":"39"},{"code":"IT","name":"Italy","call_code":"39"},
      {"code":"RO","name":"Romania","call_code":"40"},{"code":"CH","name":"Switzerland","call_code":"41"},{"code":"CZ","name":"Czech Republic","call_code":"420"},
      {"code":"SK","name":"Slovakia","call_code":"421"},{"code":"LI","name":"Liechtenstein","call_code":"423"},{"code":"AT","name":"Austria","call_code":"43"},
      {"code":"GG","name":"Guernsey","call_code":"44"},{"code":"GB","name":"United Kingdom","call_code":"44"},{"code":"JE","name":"Jersey","call_code":"44"},
      {"code":"IM","name":"Isle of Man","call_code":"44"},{"code":"DK","name":"Denmark","call_code":"45"},{"code":"SE","name":"Sweden","call_code":"46"},
      {"code":"SJ","name":"Svalbard and Jan Mayen","call_code":"47"},{"code":"NO","name":"Norway","call_code":"47"},{"code":"PL","name":"Poland","call_code":"48"},
      {"code":"DE","name":"Germany","call_code":"49"},{"code":"FK","name":"Falkland Islands (Malvinas)","call_code":"500"},
      {"code":"BZ","name":"Belize","call_code":"501"},{"code":"GT","name":"Guatemala","call_code":"502"},{"code":"SV","name":"El Salvador","call_code":"503"},
      {"code":"HN","name":"Honduras","call_code":"504"},{"code":"NI","name":"Nicaragua","call_code":"505"},{"code":"CR","name":"Costa Rica","call_code":"506"},
      {"code":"PA","name":"Panama","call_code":"507"},{"code":"PM","name":"Saint Pierre and Miquelon","call_code":"508"},
      {"code":"HT","name":"Haiti","call_code":"509"},{"code":"PE","name":"Peru","call_code":"51"},{"code":"MX","name":"Mexico","call_code":"52"},
      {"code":"CU","name":"Cuba","call_code":"53"},{"code":"AR","name":"Argentina","call_code":"54"},{"code":"BR","name":"Brazil","call_code":"55"},
      {"code":"CL","name":"Chile","call_code":"56"},{"code":"CO","name":"Colombia","call_code":"57"},{"code":"VE","name":"Venezuela","call_code":"58"},
      {"code":"MF","name":"Saint Martin","call_code":"590"},{"code":"BL","name":"Saint Barthelemy","call_code":"590"},
      {"code":"GP","name":"Guadeloupe","call_code":"590"},{"code":"BO","name":"Bolivia","call_code":"591"},{"code":"GY","name":"Guyana","call_code":"592"},
      {"code":"EC","name":"Ecuador","call_code":"593"},{"code":"GF","name":"French Guiana","call_code":"594"},{"code":"PY","name":"Paraguay","call_code":"595"},
      {"code":"MQ","name":"Martinique","call_code":"596"},{"code":"SR","name":"Suriname","call_code":"597"},{"code":"UY","name":"Uruguay","call_code":"598"},
      {"code":"AN","name":"Netherlands Antilles","call_code":"599"},{"code":"MY","name":"Malaysia","call_code":"60"},
      {"code":"CC","name":"Cocos (Keeling) Islands","call_code":"61"},{"code":"CX","name":"Christmas Island","call_code":"61"},
      {"code":"AU","name":"Australia","call_code":"61"},{"code":"ID","name":"Indonesia","call_code":"62"},{"code":"PH","name":"Philippines","call_code":"63"},
      {"code":"PN","name":"Pitcairn","call_code":"64"},{"code":"NZ","name":"New Zealand","call_code":"64"},{"code":"SG","name":"Singapore","call_code":"65"},
      {"code":"TH","name":"Thailand","call_code":"66"},{"code":"TL","name":"Timor-Leste","call_code":"670"},{"code":"NF","name":"Norfolk Island","call_code":"672"},
      {"code":"AQ","name":"Antarctica","call_code":"672"},{"code":"BN","name":"Brunei Darussalam","call_code":"673"},{"code":"NR","name":"Nauru","call_code":"674"},
      {"code":"PG","name":"Papua New Guinea","call_code":"675"},{"code":"TO","name":"Tonga","call_code":"676"},{"code":"SB","name":"Solomon Islands","call_code":"677"},
      {"code":"VU","name":"Vanuatu","call_code":"678"},{"code":"FJ","name":"Fiji","call_code":"679"},{"code":"PW","name":"Palau","call_code":"680"},
      {"code":"WF","name":"Wallis and Futuna","call_code":"681"},{"code":"CK","name":"Cook Islands","call_code":"682"},{"code":"NU","name":"Niue","call_code":"683"},
      {"code":"WS","name":"Samoa","call_code":"685"},{"code":"KI","name":"Kiribati","call_code":"686"},{"code":"NC","name":"New Caledonia","call_code":"687"},
      {"code":"TV","name":"Tuvalu","call_code":"688"},{"code":"PF","name":"French Polynesia","call_code":"689"},{"code":"TK","name":"Tokelau","call_code":"690"},
      {"code":"FM","name":"Micronesia, Federated States of","call_code":"691"},{"code":"MH","name":"Marshall Islands","call_code":"692"},
      {"code":"RU","name":"Russian Federation","call_code":"7"},{"code":"KZ","name":"Kazakhstan","call_code":"7"},{"code":"JP","name":"Japan","call_code":"81"},
      {"code":"KR","name":"Korea, Republic of","call_code":"82"},{"code":"VN","name":"Viet Nam","call_code":"84"},
      {"code":"KP","name":"Korea, Democratic People's Republic of","call_code":"850"},{"code":"HK","name":"Hong Kong","call_code":"852"},
      {"code":"MO","name":"Macao","call_code":"853"},{"code":"KH","name":"Cambodia","call_code":"855"},
      {"code":"LA","name":"Lao People's Democratic Republic","call_code":"856"},{"code":"CN","name":"China","call_code":"86"},
      {"code":"BD","name":"Bangladesh","call_code":"880"},{"code":"TW","name":"Taiwan, Province of China","call_code":"886"},
      {"code":"TR","name":"Turkey","call_code":"90"},{"code":"IN","name":"India","call_code":"91"},{"code":"PK","name":"Pakistan","call_code":"92"},
      {"code":"AF","name":"Afghanistan","call_code":"93"},{"code":"LK","name":"Sri Lanka","call_code":"94"},{"code":"MM","name":"Myanmar","call_code":"95"},
      {"code":"MV","name":"Maldives","call_code":"960"},{"code":"LB","name":"Lebanon","call_code":"961"},{"code":"JO","name":"Jordan","call_code":"962"},
      {"code":"SY","name":"Syrian Arab Republic","call_code":"963"},{"code":"IQ","name":"Iraq","call_code":"964"},{"code":"KW","name":"Kuwait","call_code":"965"},
      {"code":"SA","name":"Saudi Arabia","call_code":"966"},{"code":"YE","name":"Yemen","call_code":"967"},{"code":"OM","name":"Oman","call_code":"968"},
      {"code":"PS","name":"Palestinian Territory, Occupied","call_code":"970"},{"code":"AE","name":"United Arab Emirates","call_code":"971"},
      {"code":"IL","name":"Israel","call_code":"972"},{"code":"BH","name":"Bahrain","call_code":"973"},{"code":"QA","name":"Qatar","call_code":"974"},
      {"code":"BT","name":"Bhutan","call_code":"975"},{"code":"MN","name":"Mongolia","call_code":"976"},{"code":"NP","name":"Nepal","call_code":"977"},
      {"code":"IR","name":"Iran, Islamic Republic of","call_code":"98"},{"code":"TJ","name":"Tajikistan","call_code":"992"},
      {"code":"TM","name":"Turkmenistan","call_code":"993"},{"code":"AZ","name":"Azerbaijan","call_code":"994"},{"code":"GE","name":"Georgia","call_code":"995"},
      {"code":"KG","name":"Kyrgyzstan","call_code":"996"},{"code":"UZ","name":"Uzbekistan","call_code":"998"}
    ];
    var countries = [];

    // Private Members
    var setupCellphoneValidation = function() {
        var cellPhone = document.getElementById("authy-cellphone");
        if(!cellPhone) return;

        cellPhone.onblur = function(){
          if(cellPhone.value != '' && cellPhone.value.match(/^([0-9][0-9][0-9])\W*([0-9][0-9]{2})\W*([0-9]{3,5})$/)){
            cellPhone.style.backgroundColor = "white";
          } else {
            cellPhone.style.backgroundColor = "#F2DEDE";
          }
        }
    };

    var setupAuthyToken = function() {
        var token = document.getElementById("authy-token");
        if(!token) return;

        token.onblur = function() {
          if(token.value != '' && token.value.match(/^\d+$/)){
            token.style.backgroundColor = "white";
          } else {
            token.style.backgroundColor = "#F2DEDE";
          }
        };
    };

    var setupTooltip = function() {
        var authy_help = document.getElementById("authy-help");
        if(!authy_help) return;

        var tooltip = document.createElement("div");
        tooltip.setAttribute("id", "authy-tooltip");
        var tooltipTop = document.getElementById('authy-help').offsetTop + 20;
        var tooltipLeft = document.getElementById('authy-help').offsetLeft + 20;
        tooltip.setAttribute("style", "top:" + tooltipTop + "px;left:" + tooltipLeft + "px;");
        tooltip.innerHTML = "<a id=\"authy-tooltip-close\"></a><h3>tooltip text</h3> <p>lorem isprum dolor</p>";
        document.body.appendChild(tooltip);
        document.getElementById('authy-help').onclick = function(){ document.getElementById("authy-tooltip").style.display = "block"; };
        document.getElementById('authy-tooltip-close').onclick = function(){ document.getElementById("authy-tooltip").style.display = "none"; };
    };

    var processKey40 = function() {
        var countriesArr = document.getElementById('countries-autocomplete').getElementsByTagName('li');
        for(var i=0; i<countriesArr.length; i++){
            if(document.getElementById('countries-autocomplete').getElementsByTagName('li')[i].className == 'active'){
                document.getElementById('countries-autocomplete').getElementsByTagName('li')[i].className = '';
                if((i+1) == countriesArr.length){
                    document.getElementById('countries-autocomplete').getElementsByTagName('li')[0].className = 'active';
                } else {
                    document.getElementById('countries-autocomplete').getElementsByTagName('li')[i+1].className = 'active';
                }
                return false;
            }
        }
        document.getElementById('countries-autocomplete').getElementsByTagName('li')[0].setAttribute('class', 'active');
    };

    var processKey38 = function() {
        var countriesArr = document.getElementById('countries-autocomplete').getElementsByTagName('li');
        for(var i=countriesArr.length-1; i>=0; i--){
            if(document.getElementById('countries-autocomplete').getElementsByTagName('li')[i].className == 'active'){
                document.getElementById('countries-autocomplete').getElementsByTagName('li')[i].className = '';
                if(i == 0){
                    document.getElementById('countries-autocomplete').getElementsByTagName('li')[countriesArr.length-1].className = 'active';
                } else {
                    document.getElementById('countries-autocomplete').getElementsByTagName('li')[i-1].className = 'active';
                }
                return false;
            }
        }
        document.getElementById('countries-autocomplete').getElementsByTagName('li')[0].setAttribute('class', 'active');
    }

    var processKey13 = function() {
        var obj = document.getElementById('countries-autocomplete').getElementsByClassName('active')[0];
        self.autocomplete(obj);
    }

    var setupEvents = function() {
        var countriesInput = document.getElementById('countries-input');

        if(!countriesInput) return;

        countriesInput.onfocus = function() {
            document.getElementById('countries-autocomplete').style.display = "block";
        }

        countriesInput.onkeyup = function(event) {
            document.getElementById('countries-autocomplete').style.display = "block";
            var keyID = event.keyCode;

            switch(keyID) {
                case 13:
                    if(processKey13() == false)
                        return false;
                break;
                case 40:
                    if(processKey40() == false)
                        return false;
                break;
                case 38:
                    if(processKey38() == false)
                        return false;
                break;
            }

            self.searchItem();
        };

        document.getElementById('countries-autocomplete').onclick = function(e){
            if(e && e.stopPropagation) {
                e.stopPropagation();
            } else {
                e = window.event;
                e.cancelBubble = true;
            }
        }

        document.getElementById('countries-input').onclick = function(e){
            if(e && e.stopPropagation) {
                e.stopPropagation();

                countriesInput.focus();
                countriesInput.select();
            } else {
                e = window.event;
                e.cancelBubble = true;
            }
        }

        document.onclick = function() {
            document.getElementById('countries-autocomplete').style.display = "none";
        }


    };

    var buildItem = function(classActive, country) {
        return '<li class="' + classActive + '" onclick="authyUi.autocomplete(this);return false;" rel="' + country.call_code + '" data-name="' + country.name + '"'+ '>'+
               '<span class="aflag flag_' + country.code.toLowerCase() + '"></span> '+
               ' <span>(+'+ country.call_code + ') ' + country.name + '</span></li>';
    }

    var absolutePosFor = function(element) {
        var absTop = 0;
        var absLeft = 0;
        while(element) {
            absTop += element.offsetTop;
            absLeft += element.offsetLeft;

            element = element.offsetParent;
        }

        return [absTop, absLeft];
    }

    var setupCountriesDropdown = function() {
        var countriesSelect = document.getElementById("authy-countries");

        if(!countriesSelect) return;

        self.countries = [];
        for( var i=0; i < countriesSelect.getElementsByTagName("option").length; i++){
            var buf = [];
            buf[0] = countriesSelect.getElementsByTagName("option")[i].value;
            buf[1] = countriesSelect.getElementsByTagName("option")[i].innerHTML;
            self.countries.push(buf);
        }

        countriesSelect.setAttribute("style", "display:none");

        var countriesAutocomplete = document.createElement("div");
        var countryCodeValue = document.createElement("input");
        countryCodeValue.setAttribute("type", "hidden");
        countryCodeValue.setAttribute("id", "country-code");
        countryCodeValue.setAttribute("name", "authy-country-code");

        var classActive = '';

        var countriesAutocompleteHTML = '<ul>';

        for( var i=0; i < countriesList.length; i++){
            classActive = (i == 0) ? 'active' : '';
            countriesAutocompleteHTML += buildItem(classActive, countriesList[i]);
        }
        countriesAutocompleteHTML += '</ul>';
        countriesAutocomplete.innerHTML = countriesAutocompleteHTML;

        document.body.appendChild(countriesAutocomplete);

        var countriesInput = document.createElement("input");
        countriesInput.setAttribute("id", "countries-input");
        countriesInput.setAttribute("type", "text");

        countriesSelect.parentNode.insertBefore(countriesInput, countriesSelect);
        countriesSelect.parentNode.appendChild(countryCodeValue);

        var pos = absolutePosFor(countriesInput);

        countriesAutocomplete.setAttribute("id", "countries-autocomplete");
        countriesAutocomplete.setAttribute("style", "width: "+(countriesInput.offsetWidth-5)+"px; top: " + (pos[0]+27)  + "px; left: " + pos[1]  + "px;");
    };

    // Public Members
    this.init = function() {
        setupAuthyToken();
        setupTooltip();
        setupCountriesDropdown();
        setupEvents();
        setupCellphoneValidation();
    }

    this.searchItem = function() {
        var classActive = 'active';
        var countriesInput = document.getElementById('countries-input');
        var str = countriesInput.value;
        var countriesAutocompleteHTML = '<ul>';
        var ok = false;

        str = str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        var reg = new RegExp(str, "g");
        for( var i=0; i < countriesList.length; i++){
            var country = countriesList[i];
            if(country.name.toLowerCase().match(reg)) {
                countriesAutocompleteHTML += buildItem(classActive, country);
                classActive = '';
                ok = true;
            }
        }
        countriesAutocompleteHTML += '</ul>';
        if(ok) {
            document.getElementById('countries-autocomplete').innerHTML = countriesAutocompleteHTML;
        }
    }

    this.autocomplete = function(obj) {
        document.getElementById('countries-input').value = obj.getAttribute("data-name");
        document.getElementById('countries-autocomplete').style.display = "none";

        document.getElementById('country-code').value = obj.getAttribute('rel');
    }
};

window.onload = function() {
    authyUi = new Authy.UI();
    authyUi.init();
}