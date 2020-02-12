
import { Pet } from './pet';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

$(document).ready(function() {
    let pet;
  $("#startdiv").click(function(event) {
      
    let petName = prompt("Please name your pet:");
    pet = new Pet(petName);
    pet.foodDecDog();
    $("div#startdiv").hide();
    $("div#pet-name").show();
    setInterval(() => {
        $("#foodlvl").text(pet.food);
        $("#pet-name").text(pet.name);
        console.log(pet.food);
    }, 1000);
    event.preventDefault();
    
    
    
    
});

$("#feed").click(function() {
    pet.feed();
    
});
});

