import React from "react";
import { View, Text, ScrollView } from "react-native";
import { MyStyles } from '../../../assets/style/MyStyles';
import CustomButton from '../../components/CustomButton';
import firestore from '@react-native-firebase/firestore';

const ReactNativePaymentsVersion = require('react-native-payments/package.json')
    .version;

    
const handlePressPremium = (navigation) => {

    const supportedMethods = [
        {
            supportedMethods: ['basic-card'],
            data: {
              supportedNetworks: ['visa', 'mastercard', 'amex']
            }
          },
          {
            supportedMethods: ['apple-pay'],
            data: {
              merchantIdentifier: 'org.reactjs.native.example.appName',
              supportedNetworks: ['visa', 'mastercard'],
              countryCode: 'BR',
              currencyCode: 'BRL'
            }
          },
          {
            supportedMethods: ['android-pay'],
            data: {
              supportedNetworks: ['visa', 'mastercard', 'amex'],
              countryCode: 'BR',
              currencyCode: 'BRL',
              environment: 'TEST',
              paymentMethodTokenizationParameters: {
                tokenizationType: 'NETWORK_TOKEN',
                parameters: {
                  publicKey: 'BOdoXP+9Aq473SnGwg3JU1aiNpsd9vH2ognq4PtDtlLGa3Kj8TPf+jaQNPyDSkh3JUhiS0KyrrlWhAgNZKHYF2Y='
                }
              }
            }
          }
    ];

    const details = {
        id: 'basic-example',
        displayItems: [
            {
                label: 'Plano Premium',
                amount: { currency: 'BRL', value: '8.00' }
            }
        ],
        total: {
            label: 'Plano Premium',
            amount: { currency: 'BRL', value: '8.00' }
        }
    };

    const pr = new PaymentRequest(supportedMethods, details);

    pr.show()
    .then(paymentResponse => {
      if (Platform.OS === 'android') {
        // Fetch PaymentToken
        paymentResponse.details.getPaymentToken().then(console.log);
      }

      paymentResponse.complete('success');

      firestore()
      .collection('users')
      .doc(global.id)
      .update({
          plan: 'Premium',
      }).then(() => {
          console.log('Plan Registered!');
      });

    })
    .catch(console.warn);
    navigation.navigate('Home');
}
const handlePressInter = (navigation) => {

  const supportedMethods = [
      {
          supportedMethods: ['basic-card'],
          data: {
            supportedNetworks: ['visa', 'mastercard', 'amex']
          }
        },
        {
          supportedMethods: ['apple-pay'],
          data: {
            merchantIdentifier: 'org.reactjs.native.example.appName',
            supportedNetworks: ['visa', 'mastercard'],
            countryCode: 'BR',
            currencyCode: 'BRL'
          }
        },
        {
          supportedMethods: ['android-pay'],
          data: {
            supportedNetworks: ['visa', 'mastercard', 'amex'],
            countryCode: 'BR',
            currencyCode: 'BRL',
            environment: 'TEST',
            paymentMethodTokenizationParameters: {
              tokenizationType: 'NETWORK_TOKEN',
              parameters: {
                publicKey: 'BOdoXP+9Aq473SnGwg3JU1aiNpsd9vH2ognq4PtDtlLGa3Kj8TPf+jaQNPyDSkh3JUhiS0KyrrlWhAgNZKHYF2Y='
              }
            }
          }
        }
  ];

  const details = {
      id: 'basic-example',
      displayItems: [
          {
              label: 'Plano Premium',
              amount: { currency: 'BRL', value: '7.00' }
          }
      ],
      total: {
          label: 'Plano Premium',
          amount: { currency: 'BRL', value: '7.00' }
      }
  };

  const pr = new PaymentRequest(supportedMethods, details);

  pr.show()
  .then(paymentResponse => {
    if (Platform.OS === 'android') {
      // Fetch PaymentToken
      paymentResponse.details.getPaymentToken().then(console.log);
    }

    paymentResponse.complete('success');

    firestore()
      .collection('users')
      .doc(global.id)
      .update({
          plan: 'Intermediário',
      }).then(() => {
          console.log('Plan Registered!');
      });
  })
  .catch(console.warn);
  navigation.navigate('Home');

}
const handlePressBasic = (navigation) => {
  firestore()
  .collection('users')
  .doc(global.id)
  .update({
      plan: 'Básico',
  }).then(() => {
      console.log('Plan Registered!');
  });
  navigation.navigate('Home');
};

const SubscriptionScreen = ({ navigation }) => {
    return (
        <ScrollView style={MyStyles.container1}>
            <View >
                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                    <View style={MyStyles.containerSubs}>
                        <Text style={MyStyles.text}>Básico</Text>
                        <Text style={MyStyles.textSmall}>Gráficos simples com as intenções de voto. Acesso apenas ao estado no qual se cadastrou.</Text>
                        <CustomButton text="R$0,00" onPress={handlePressBasic(navigation)}/>
                    </View>
                    <View style={MyStyles.containerSubs}>
                        <Text style={MyStyles.text}>Intermediário</Text>
                        <Text style={MyStyles.textSmall}>Gráficos simples com as intenções de voto em todos os estados.</Text>
                        <CustomButton text="R$7,00" onPress={handlePressInter} />
                    </View>
                    <View style={MyStyles.containerSubs}>
                        <Text style={MyStyles.text}>Premium</Text>
                        <Text style={MyStyles.textSmall}>Gráficos elaborados com informações demográficas sobre as intenções de voto.</Text>
                        <CustomButton text="R$8,00" onPress={handlePressPremium} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default SubscriptionScreen;