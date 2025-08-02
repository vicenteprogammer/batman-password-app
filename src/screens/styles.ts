import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer:{
    flexDirection: 'column',
    justifyContent:'center',
    borderColor: '#ffff',
    borderWidth:2,
    padding: 30,
    marginBottom: 90,
    backgroundColor: '#4D4D4D'
  },
  inputContainer:{
    flexDirection:'column',
    width:'60%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});