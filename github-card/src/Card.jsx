import React from 'react';
import axios from 'axios';


export default class Card extends React.Component {
    state = {
        gitCard: {}
    };
    
    componentDidMount() {
        axios.get("https://api.github.com/users/Kotsumo")
          .then(res => {
            //console.log(res.data)
            this.setState({ gitCard: res.data });
          })
          .catch(err => {
            console.log(err);
          });
      }

      render() {
          const { gitCard } = this.state;
          if(gitCard.length === 0) return <p>Loading...</p>;
        return (
          <div className='cards'>
             <img 
                style={{width: "150px", borderRadius: "50%"}} 
                src= {gitCard.avatar_url}
                alt={gitCard.name}></img>
             <h3> {gitCard.name}</h3>
             <p>username: {gitCard.login}</p>
             <p>location: {gitCard.location}</p>
          </div>
    
        )
    }
}