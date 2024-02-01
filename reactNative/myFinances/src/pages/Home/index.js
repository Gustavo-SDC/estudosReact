import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';


import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';


const list = [
  // Type = 0 Despesas
  // Type = 1 Ganhos
  {
    id:1,
    label: 'Boleto Faculdade',
    value: '530,00',
    date: '18/02/2024',
    type: 0 
  },
  {
    id:2,
    label: 'Salario Inspira',
    value: '3.400,00',
    date: '15/02/2024',
    type: 1
  },
  {
    id:3,
    label: 'Boleto Curso',
    value: '320,00',
    date: '20/02/2024',
    type: 0 
  }
]


export default function App() {
  return (
    <View style={styles.container}>
        <Header name="Gustavo S.Campos"/>
        <Balance saldo='2.500,00' gastos='1.780,33'/>
        <Actions/>

        <View style={styles.listContainer}>
          <Text style={styles.title}>Últimas movimentações</Text>  

          <FlatList 
            style={styles.list}
            data={list}
            keyExtractor={ (item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item })=> <Movements data={item} />}
          />
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  listContainer:{
    padding: 24,
  },
  title:{
    marginBottom:12,
    fontSize:18,
    fontWeight: 'bold',
    color:'#777',
  }
});
