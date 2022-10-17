import * as React from 'react';
import { Avatar, Title, Paragraph } from 'react-native-paper';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import { PricingCard, lightColors } from '@rneui/themed';
import { AirbnbRating } from '@rneui/themed';

import Constants from 'expo-constants';
import Cosmesticos2 from '../assets/cosmesticos2.jpg';
import Cosmeticos3 from '../assets/cosmesticos3.jpg';
import Cosmeticos5 from '../assets/cosmesticos5.jpg';

export default function Products() {
  return (
    <ScrollView>
      <Card>
        <Card.Title>Mascara Terapeutica</Card.Title>
        <Card.Divider />
        <Card.Image style={{ height: 240 }} source={Cosmesticos2} />
        <AirbnbRating defaultRating={4.5} count={5} isDisabled={true} size={15}/>
        <Text style={{ marginBottom: 20,marginTop: 20, display:"flex", justifyContent:"center", fontSize: 30, fontWeight:"bold"  }}>
         R$20,00
        </Text>
        <Text style={{ marginBottom: 20,marginTop: 20, fontSize: 16 }}>
         Mascara Terapeutica para relaxamento facial, e limpeza de impurezas
        </Text>

        <Button
          icon={
            <Icon name="cart" type="ionicon" color="#ffffff" iconStyle={{ marginRight: 10 }} />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Comprar"
        />
      </Card>
            <Card>
        <Card.Title>Hidratante</Card.Title>
        <Card.Divider />
        <Card.Image style={{ height: 300}} source={Cosmeticos3} />
        <AirbnbRating defaultRating={4.5} count={5} isDisabled={true} size={15}/>
      <Text style={{ marginBottom: 20,marginTop: 20, display:"flex", justifyContent:"center", fontSize: 30, fontWeight:"bold" }}>
          R$30,00.
        </Text>
        <Text style={{ marginBottom: 20,marginTop: 20,  fontSize:17 }}>
          Hidratante que protege e ao mesmo tempo revitaliza a pele
        </Text>
        
        <Button
          icon={
            <Icon name="cart" type="ionicon" color="#ffffff" iconStyle={{ marginRight: 10 }} />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Comprar"
        />
      </Card>
            <Card>
        <Card.Title>Make up remover</Card.Title>
        <Card.Divider />
        <Card.Image style={{ height: 300}} source={Cosmeticos5} />
        <AirbnbRating defaultRating={4.5} count={5} isDisabled={true} size={15}/>
        <Text style={{ marginBottom: 20,marginTop: 20, display:"flex", justifyContent:"center", fontSize: 30, fontWeight:"bold"  }}>
          R$150,00
        </Text>
        <Text style={{ marginBottom: 20,marginTop: 20, fontSize: 18 }}>
          Removedor de maquiagens para as mulheres, que sentem dificuldades, ao tentar se limpar depois de uma festa
        </Text>
        
        <Button
          icon={
            <Icon name="cart" type="ionicon" color="#ffffff" iconStyle={{ marginRight: 10 }} />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Comprar"
        />
      </Card>

    </ScrollView>
  );
}

