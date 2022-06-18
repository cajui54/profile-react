import styled from "styled-components";
import backgoundStar from '../../assets/images/stars.jpg';
 

const Head = styled.header`
    background-color: rgba(28,28,28, 1);
    background-size: 500px;
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 3;
    top: 0;
    margin-top: 0;
    box-shadow: 0 0 2px black;
    .container-logo{
        margin-left: 15px;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        transition: all .6s ease-in-out ;
    }
    .container-logo:hover {
        text-shadow: 5px 8px 5px #fff;
    }
    .container-logo span:nth-child(1), .container-logo span:nth-child(3){
        color: #9400D3;
        margin: 0 5px;
    }
    .container-logo span:nth-child(2){
        color: #fff;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        letter-spacing: 1.2px;
    }
    
    .menu_btn {
        width: 50px;
        height: 70%;
        position: relative;
        margin-right: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all .5s ease-in-out;
    }
    .menu_btn__burger{
        height: 5px;
        width: 80%;
        background-color: #fff;
        box-shadow: 0 2px 5px rgba(255,101,47,.2);
        border-radius: 5px;
        transition: all .5s ease-in-out;
    }
    .menu_btn__burger::after, .menu_btn__burger::before {
        content: '';
        height: 5px;
        width: 80%;
        background-color: #fff;
        border-radius: 5px;
        position: absolute;
        box-shadow: 0 2px 5px rgba(255,101,47,.2);
        transition: all .5s ease-in-out;
    }
    .menu_btn__burger::after {
        transform: translateY(12px);
    }
    .menu_btn__burger::before {
        transform: translateY(-12px);
    }

    .menu_btn.open .menu_btn__burger {
        transform: translateX(-50px);
        background-color: transparent;
        box-shadow: none;
    }
    .menu_btn.open .menu_btn__burger::before {
        transform: rotate(45deg) translate(35px, -35px);
    }
    .menu_btn.open .menu_btn__burger::after {
        transform: rotate(-45deg) translate(35px, 35px);
    }

    .openMenu{
        opacity: 1;
        transform: translateX(0);
        transition: all .5s ease-in-out ;
    }
    @media screen and (min-width: 662px) {
        height: 90px;
        
        .menu_btn{
            display: none;
        }
    }

`

export default Head