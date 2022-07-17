import styled from "styled-components";

const Nav = styled.nav`
    position: absolute;
    margin-top: 350px;
    width: 100%;
    height: 750px;
    padding: 0;
    transform: translateX(550px);
    opacity: 0;
    background-color: rgba(0,0,0,1);
    transition: all .8s ease-in-out .5s ;
    
    letter-spacing: 1.1px;
    ul {
        margin: 0;
        padding: 0;
        height: 100%;
        list-style: none;
        font-weight: bold;
        font-family: 'Poppins', sans-serif, Arial, Helvetica;
    }
    ul li {
        text-align: center;
        transition: all .8s ease;
        
    }
    ul a {
        background: -webkit-linear-gradient(-45deg, #8257E6, #f588ec, #5515e9, #ea5c82) no-repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 300% 300%;
        text-decoration: none;
        display: block;
        padding: 30px 0;
        cursor: pointer;
        filter: brightness(.7) ;
        font-weight: bold;
        font-size: 25px;
    }
    ul li:hover{
        background-color: rgba(54,54,54);
    }

    @media screen and (min-width: 662px) {
        transform: translateX(0);
        opacity: 1;
        height:50px;
        margin-top: 0;
        position: relative;
        width: 70%;
        margin-right: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        
        ul {
            background-color: transparent;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        ul li:hover{
            background-color: transparent;
        }
        ul a{
            font-size: 15px;
            transition: all .5s ease ;
            margin-left: 10px;
        }
        ul a:hover {
            filter: brightness(1) ;
        }
    }
    @media screen and (min-width: 1000px){
        ul a{
            font-size: 20px;
        }
    }
`

export default Nav;