import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ActionButton from 'react-native-action-button';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  FlatList,
  TouchableHighlight
} from 'react-native';

let data =[
  {
    title:"This is the title",
    body:"this is the description that will be displayed on the screen"
  },
  {
    title:"This is the 2nd title",
    body:"this is the description that will be displayed on the screen"
  },
  {
    title:"This is the 3nd title",
    body:"this is the description that will be displayed on the screen"
  },



]
export default class Start extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      
      title: this.props.route.params.title,
      body: this.props.route.params.body,
    
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    let x = nextProps.route.params.title;
    let y = nextProps.route.params.body;
    this.setState({title:x});
    this.setState({body:y});

    data = [...data,{title:x,body:y}]
 }
  render() {
    const { navigate } = this.props.navigation;

    function nextPage()
    {
      navigate('Add')
    }
    
    
    return (
      <View style={{flex:1, backgroundColor: "#262626",display:"flex",alignItems:"center"}}>
        {/* Rest of the app comes ABOVE the action button component !*/}
        <View style={styles.title}>
            <Text style={{color:"white",fontSize:23}}>Notes App</Text>
        </View>


        {/* <Text style={{color:"white"}}>t:{this.state.title} </Text> */}



        <View style={{display:"flex",width:"100%",paddingHorizontal:"5%"}}>

       
          <FlatList
         
          data={data}
          renderItem={({item, index, separators}) => (
            <View style={styles.post}>
             
              <View style={{flex:1}}>
                <Text style={{color:"white",textAlign:"left",fontSize:17}}>{item.title}
                </Text>
                <View
                style={{
                  borderBottomColor: 'red',
                  borderBottomWidth: 1,
                  minWidth:"100%",
                  marginTop:5
                }}
              />
              </View>
              <View style={{flex:4}}>
                <Text style={{color:"#828282"}}>{item.body}</Text>
              </View>
            </View>
          )}
        />
 </View>
        <ActionButton buttonColor="red"
        buttonText="Add"
        buttonTextStyle={{fontSize:20}}
        size={60}
        onPress={nextPage}
        >
        </ActionButton>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  title:{
    minHeight:60,
    backgroundColor:"red",
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  post:{
    marginVertical:13,
    minHeight:140,
    paddingVertical:10,
    backgroundColor:"#1B1B1B",
    display:"flex",
    alignItems:"flex-start",
    borderRadius:15,
    flex:1,
    paddingHorizontal:15
  }
});