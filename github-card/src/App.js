import './App.css';
import axios from 'axios';
import React from 'react';

class App extends React.Component {
  state = {

  }

  componentDidMount() {
    axios.get("https://api.github.com/users/Kotsumo")
      .then(res => {
        const gitCard = cardMethod(res.data)
        //console.log(res.data)
        cards.appendChild(gitCard)
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className='cards'>
        <h1>Github User Card</h1>
        <p>
          
        </p>
      </div>

    )
  }

}

const cards = document.querySelector('.cards');

function cardMethod({avatar_url, bio, login, name, location, html_url, followers, following}){

  const cardDiv = document.createElement('div')
  const cardImg = document.createElement('img')
  const cardInfo = document.createElement('div')
  const cardName = document.createElement('h3')
  const cardUser = document.createElement('p')
  const cardLocation = document.createElement('p')
  const cardProfile = document.createElement('p')
  const cardFollowers = document.createElement('p')
  const cardFollowing = document.createElement('p')
  const cardBio = document.createElement('p')

  cardDiv.appendChild(cardImg)
  cardDiv.appendChild(cardInfo)
  cardInfo.appendChild(cardName)
  cardInfo.appendChild(cardUser)
  cardInfo.appendChild(cardLocation)
  cardInfo.appendChild(cardProfile)
  cardInfo.appendChild(cardFollowers)
  cardInfo.appendChild(cardFollowing)
  cardInfo.appendChild(cardBio)

  cardDiv.classList.add('card')
  cardInfo.classList.add('card-info')
  cardName.classList.add('name')
  cardUser.classList.add('username')

  cardName.textContent = name
  cardUser.textContent = login
  cardLocation.textContent = location
  cardProfile.textContent = html_url
  cardFollowers.textContent = `followers ${followers}`
  cardFollowing.textContent = `following ${following}`
  cardBio.textContent = bio

  cardImg.src = avatar_url


  return cardDiv;
}

export default App;
