import React from 'react';
import axios from 'axios';
import okImg from '../assets/ok2.png';
import errorImg from '../assets/reject.png';
import noresImg from '../assets/wait.png';

export default class StatusList extends React.Component{
  state = {
    banks:[
      {
        id: 1,
        name: 'Santander',
        url: 'https://www.santander.cl',
        status: 0,
        error : '',
        imgStatus: '',
        txtStatus: ''
      },
      {
        id: 2,
        name: 'Banco de Chile',
        url: 'https://duckduckgo.com',
        status: 0,
        error : '',
        imgStatus: '',
        txtStatus: ''
      },
      {
        id: 3,
        name: 'Banco UwU',
        url: 'https://www.google.cl',
        status: 0,
        error : '',
        imgStatus: '',
        txtStatus: ''
      },
    ]

  };

  componentDidMount(){
    let $this = this;
    function checkStatus(index){
      axios.get($this.state.banks[index].url).then(res => {
        console.log(index);
        console.log('is this even working');
        const banco = $this.state.banks[index];
        banco.status = res.status;
        banco.imgStatus = okImg;
        banco.txtStatus = 'Everything seems alright';
        $this.setState({
          banco
        });
      }).catch(err => {
        console.log(index);
        console.log(err);
        console.log('there is an error');
        const banco = $this.state.banks[index];
        banco.error = err.message;
        banco.imgStatus = errorImg;
        banco.txtStatus = 'There is an error';
        $this.setState({
          banco
        });
      });
    }
    let i;
    for (i = 0; i < this.state.banks.length;++i){
      checkStatus(i);
    }
  }

  render(){
    return (
      <ul>{this.state.banks.map( bank =>
          <li key={bank.id}>{ bank.name }
          <img className="Status-icon" src={ bank.imgStatus }
          alt={ bank.txtStatus }></img>
          </li>)}
      </ul>
    )
  }

}
