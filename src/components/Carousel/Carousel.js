import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const images = {"bolsonaro": require('../../../assets/images/pres/bolsonaro.jpg'),
"aldo": require('../../../assets/images/pres/aldo.jpg'),
"alessandro": require('../../../assets/images/pres/alessandro.jpg'),
"avila": require('../../../assets/images/pres/avila.jpg'),
"ciro": require('../../../assets/images/pres/ciro.jpg'),
"doria": require('../../../assets/images/pres/doria.jpg'),
"janones": require('../../../assets/images/pres/janones.png'),
"leonardo": require('../../../assets/images/pres/leonardo.png'),
"lula": require('../../../assets/images/pres/lula.jpg'),
"moro": require('../../../assets/images/pres/moro.jpg'),
"simone": require('../../../assets/images/pres/simone.jpg'),
"gladson": require('../../../assets/images/gov/ac/gladson.jpg'),
"hall": require('../../../assets/images/gov/ac/hall.jpg'),
"jorge": require('../../../assets/images/gov/ac/jorge.jpg'),
"leite": require('../../../assets/images/gov/ac/leite.jpg'),
"sergio": require('../../../assets/images/gov/ac/sergio.jpg'),
"antonio": require('../../../assets/images/gov/al/antonio.jpg'),
"cunha": require('../../../assets/images/gov/al/cunha.jpg'),
"dantas": require('../../../assets/images/gov/al/dantas.jpg'),
"jhc": require('../../../assets/images/gov/al/jhc.jpg'),
"pereira": require('../../../assets/images/gov/al/pereira.jpg'),
"jose": require('../../../assets/images/gov/am/jose.jpg'),
"lima": require('../../../assets/images/gov/am/lima.jpg'),
"mendes": require('../../../assets/images/gov/am/mendes.jpg'),
"pazuello": require('../../../assets/images/gov/am/pazuello.jpg'),
"clecio": require('../../../assets/images/gov/ap/clecio.jpg'),
"gesiel": require('../../../assets/images/gov/ap/gesiel.jpg'),
"lucas": require('../../../assets/images/gov/ap/lucas.jpg'),
"piedade": require('../../../assets/images/gov/ap/piedade.jpg'),
"damico": require('../../../assets/images/gov/ba/damico.jpg'),
"jeronimo": require('../../../assets/images/gov/ba/jeronimo.jpg'),
"kleber": require('../../../assets/images/gov/ba/kleber.jpg'),
"neto": require('../../../assets/images/gov/ba/neto.jpg'),
"adelita": require('../../../assets/images/gov/ce/adelita.jpg'),
"cap": require('../../../assets/images/gov/ce/cap.jpg'),
"evandro": require('../../../assets/images/gov/ce/evandro.jpg'),
"grass": require('../../../assets/images/gov/df/grass.jpg'),
"izalci": require('../../../assets/images/gov/df/izalci.jpg'),
"keka": require('../../../assets/images/gov/df/keka.jpg'),
"parente": require('../../../assets/images/gov/df/parente.jpg'),
"rosilene": require('../../../assets/images/gov/df/rosilene.jpg'),
"salles": require('../../../assets/images/gov/df/salles.jpg'),
"audifax": require('../../../assets/images/gov/es/audifax.jpg'),
"casagrande": require('../../../assets/images/gov/es/casagrande.jpg'),
"elvis": require('../../../assets/images/gov/es/elvis.jpg'),
"hartung": require('../../../assets/images/gov/es/hartung.jpg'),
"majeski": require('../../../assets/images/gov/es/majeski.jpg'),
"manato": require('../../../assets/images/gov/es/manato.jpg'),
"rigoni": require('../../../assets/images/gov/es/rigoni.jpg'),
"zanon": require('../../../assets/images/gov/es/zanon.jpg'),
"caiado": require('../../../assets/images/gov/go/caiado.jpg'),
"darrot": require('../../../assets/images/gov/go/darrot.jpg'),
"gustavo": require('../../../assets/images/gov/go/gustavo.jpg'),
"perillo": require('../../../assets/images/gov/go/perillo.jpg'),
"carl": require('../../../assets/images/gov/ma/carl.jpg'),
"lahesio": require('../../../assets/images/gov/ma/lahesio.jpg'),
"weverton": require('../../../assets/images/gov/ma/weverton.jpg'),
"kalil": require('../../../assets/images/gov/mg/kalil.jpg'),
"medioli": require('../../../assets/images/gov/mg/medioli.jpg'),
"viana": require('../../../assets/images/gov/mg/viana.jpg'),
"zema": require('../../../assets/images/gov/mg/zema.jpg'),
"pucinelli": require('../../../assets/images/gov/ms/pucinelli.jpg'),
"renan": require('../../../assets/images/gov/ms/renan.jpg'),
"riedel": require('../../../assets/images/gov/ms/riedel.jpg'),
"rose": require('../../../assets/images/gov/ms/rose.jpg'),
"trad": require('../../../assets/images/gov/ms/trad.jpg'),
"trutis": require('../../../assets/images/gov/ms/trutis.jpg'),
"zeca": require('../../../assets/images/gov/ms/zeca.jpg'),
"ari": require('../../../assets/images/gov/mt/ari.jpg'),
"mauro": require('../../../assets/images/gov/mt/mauro.jpg'),
"wilson": require('../../../assets/images/gov/mt/wilson.jpg'),
"fer": require('../../../assets/images/gov/pa/fernando.jpg'),
"helder": require('../../../assets/images/gov/pa/helder.jpg'),
"marcio": require('../../../assets/images/gov/pa/marcio.jpg'),
"zequinha": require('../../../assets/images/gov/pa/zequinha.jpg'),
"adjany": require('../../../assets/images/gov/pb/adjany.jpg'),
"joao": require('../../../assets/images/gov/pb/joao.jpg'),
"lima": require('../../../assets/images/gov/pb/lima.jpg'),
"nilvan": require('../../../assets/images/gov/pb/nilvan.jpg'),
"vital": require('../../../assets/images/gov/pb/vital.jpg'),
"anderson": require('../../../assets/images/gov/pe/anderson.jpg'),
"armando": require('../../../assets/images/gov/pe/armando.jpg'),
"arnaldo": require('../../../assets/images/gov/pe/arnaldo.jpg'),
"arraes": require('../../../assets/images/gov/pe/arraes.jpg'),
"cabral": require('../../../assets/images/gov/pe/cabral.jpg'),
"jones": require('../../../assets/images/gov/pe/jones.jpg'),
"lyra": require('../../../assets/images/gov/pe/lyra.jpg'),
"miguel": require('../../../assets/images/gov/pe/miguel.jpg'),
"fonteles": require('../../../assets/images/gov/pi/fonteles.jpg'),
"gessy": require('../../../assets/images/gov/pi/gessy.jpg'),
"joa": require('../../../assets/images/gov/pi/joa.jpg'),
"major": require('../../../assets/images/gov/pi/major.jpg'),
"silvio": require('../../../assets/images/gov/pi/silvio.jpg'),
"fier": require('../../../assets/images/gov/pr/fier.jpg'),
"ratinho": require('../../../assets/images/gov/pr/ratinho.jpg'),
"requiao": require('../../../assets/images/gov/pr/requiao.jpg'),
"castro": require('../../../assets/images/gov/rj/castro.jpg'),
"cyro": require('../../../assets/images/gov/rj/cyro.jpg'),
"felipe": require('../../../assets/images/gov/rj/felipe.jpg'),
"freixo": require('../../../assets/images/gov/rj/freixo.jpg'),
"ganime": require('../../../assets/images/gov/rj/ganime.jpg'),
"neves": require('../../../assets/images/gov/rj/neves.jpg'),
"serra": require('../../../assets/images/gov/rj/serra.jpg'),
"benes": require('../../../assets/images/gov/rn/benes.jpg'),
"bezerra": require('../../../assets/images/gov/rn/bezerra.jpg'),
"carlos": require('../../../assets/images/gov/rn/carlos.jpg'),
"clorisa": require('../../../assets/images/gov/rn/clorisa.jpg'),
"dias": require('../../../assets/images/gov/rn/dias.jpg'),
"ezequiel": require('../../../assets/images/gov/rn/ezequiel.jpg'),
"fernando": require('../../../assets/images/gov/rn/fernando.jpg'),
"sty": require('../../../assets/images/gov/rn/sty.jpg'),
"hildon": require('../../../assets/images/gov/ro/hildon.jpg'),
"marcos": require('../../../assets/images/gov/ro/marcos.jpg'),
"moura": require('../../../assets/images/gov/ro/moura.jpg'),
"rocha": require('../../../assets/images/gov/ro/rocha.jpg'),
"ant": require('../../../assets/images/gov/rr/ant.jpg'),
"pastor": require('../../../assets/images/gov/rr/pastor.jpg'),
"teresa": require('../../../assets/images/gov/rr/teresa.jpg'),
"beto": require('../../../assets/images/gov/rs/beto.jpg'),
"edegar": require('../../../assets/images/gov/rs/edegar.jpg'),
"heinze": require('../../../assets/images/gov/rs/heinze.jpg'),
"nina": require('../../../assets/images/gov/rs/nina.jpg'),
"onyx": require('../../../assets/images/gov/rs/onyx.jpg'),
"ruas": require('../../../assets/images/gov/rs/ruas.jpg'),
"amin": require('../../../assets/images/gov/sc/amin.jpg'),
"berger": require('../../../assets/images/gov/sc/berger.jpg'),
"car": require('../../../assets/images/gov/sc/car.jpg'),
"coruja": require('../../../assets/images/gov/sc/coruja.jpg'),
"decio": require('../../../assets/images/gov/sc/decio.jpg'),
"jo": require('../../../assets/images/gov/sc/jo.jpg'),
"mello": require('../../../assets/images/gov/sc/mello.jpg'),
"edvaldo": require('../../../assets/images/gov/se/edvaldo.jpg'),
"fabio": require('../../../assets/images/gov/se/fabio.jpg'),
"valmir": require('../../../assets/images/gov/se/valmir.jpg'),
"vieira": require('../../../assets/images/gov/se/vieira.jpg'),
"abraham": require('../../../assets/images/gov/sp/abraham.jpg'),
"franca": require('../../../assets/images/gov/sp/franca.jpg'),
"garcia": require('../../../assets/images/gov/sp/garcia.jpg'),
"haddad": require('../../../assets/images/gov/sp/haddad.jpg'),
"poit": require('../../../assets/images/gov/sp/poit.jpg'),
"tarcisio": require('../../../assets/images/gov/sp/tarcisio.jpg'),
"damaso": require('../../../assets/images/gov/to/damaso.jpg'),
"dimas": require('../../../assets/images/gov/to/dimas.jpg'),
"laurez": require('../../../assets/images/gov/to/laurez.jpg'),
"luana": require('../../../assets/images/gov/to/luana.jpg'),
"mourao": require('../../../assets/images/gov/to/mourao.jpg')}

export default class MyCarouselPresident extends React.Component {

    constructor(props) {
        super(props);
        this.type = props.type;
        var list = []
        if(this.type == 'pres'){
            for(var i = 0; i < global.presidents.length; i++){
                list.push({title: global.presidents[i].data.name, text: global.presidents[i].data.party, src: global.presidents[i].data.img_path.substring(19, global.presidents[i].data.img_path.indexOf("."))});
            }
        }
        else{
            for(var i = 0; i < global.governors.length; i++){
                if(global.governors[i].data.uf == global.user.data.uf){
                    list.push({title: global.governors[i].data.name, text: global.governors[i].data.party, src: global.governors[i].data.img_path.substring(21, global.governors[i].data.img_path.indexOf("."))});
                }
            }
        }
        this.data = list;
    }

    state = {
        activeIndex: 0,
    }

    _renderItem({ item, index }) {
        return (
            <View>
                <Image style={{
                    height: windowHeight*0.2,
                    borderRadius: 5,
                    width: windowWidth*0.7,
                    padding: 10,
                    marginLeft: 25,
                    marginRight: 25,
                    borderWidth: 2,
                    borderColor: '#023047',
                    alignContent: 'center'
                }} source={images[item.src]}/>
                <Text style={{ fontSize: RFValue(22, 844), color: '#023047', textAlign: 'center', paddingTop: 15, paddingBottom: 5, fontFamily: 'Oswald-Medium' }}>{item.title}</Text>
                <Text style={{ fontSize: RFValue(20, 844), color: '#023047', textAlign: 'center', fontFamily: 'Oswald-Light' }}>{item.text}</Text>
            </View>

        )
    }

    render() {
        this.type == 'gov' ? global.activeIndexGov = this.state.activeIndex : global.activeIndexPres = this.state.activeIndex;
        console.log("Governor Index: "+global.activeIndexGov);
        console.log("President Index: "+global.activeIndexPres);
        return (
            <Carousel
                layout={"default"}
                ref={ref => this.carousel = ref}
                data={this.data}
                sliderWidth={windowWidth*0.85}
                itemWidth={windowWidth*0.85}
                renderItem={this._renderItem}
                onSnapToItem={index => this.setState({ activeIndex: index })} />
        );
    }
}