/*------------------------------------------------
    Object Oriented JS
    Kunal mittal

    Assignment 04
    
-------------------------------------------------- */

'use strict';

import { select , onEvent, getElement, print} from './utilis.js';
import { User } from './User.js';
import { Subscriber } from './User.js';

const avatar = select('.avatar');
const message = select('.message');
const fileInput = select('.input');
const post = select('.post ');
// const data = select('.data');
const postBtn = select('.button');
const profile = select('.profile');
let postStorage = [];

onEvent('click',postBtn ,function(event){
    event.preventDefault();
   
    let postData = document.createElement("div");
    postData.classList.add('box');
    post.prepend(postData);
    const user = new User(name);
    let date = new Date();


    postData.innerHTML = `<div class="post-header>
                            <div class="img">
                                <img src="./assests/img/img_avatar.png" alt="" class="profile">
                            </div>
                            <h3 class="user">Kunal</h3>
                            <div class="date">
                                <p>${date.toDateString()}</p>
                            </div>
                          </div> `;

    let data2 = document.createElement("p");
    data2.classList.add('data');
    postData.appendChild(data2);

    
    data2.innerText=message.value;
    

    
});


onEvent('click', avatar, function(event){
    event.preventDefault();
    let div = document.createElement('div');

    div.classList.add('profile-info');
    post.appendChild(div);

    let subscriber = new Subscriber( 12, 'Kunal', 'Kunal','kunal@gmail.com',['cakes-shop' , 'Art and craft'], ['manitobaTeh','artshop']);
    div.innerHTML = subscriber.getInfo();

});