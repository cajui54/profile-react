import styled from "styled-components";

const HomeStyled = styled.section`
    color:#fff;
    z-index: -1;
    transform: translateY(150px);
    width: 90%;
    box-sizing: border-box;
    height: 600px;
    margin: 0 auto;
    position: relative;

    .conteiner-photo{
        width: 300px;
        height: 300px;
        border: 5px solid #fff;
        box-shadow: 0 0 5px #fff;
        overflow: hidden;
        border-radius: 50%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    .conteiner-photo div{
        width: 280px;
        height: 280px;
        overflow: hidden;
        background-color: transparent;
        margin: 0 auto;
        border-radius: 50%;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
    img {
        width: 400px;
        height: 100%;
        margin: 0 auto; 
        filter: brightness(.5) ;
    }

    section {
        width: 90%;
        min-height: 300px;
        margin: 0 auto;
        padding: 5px;
        margin-top: 25px;
        box-sizing: border-box ;
        overflow: hidden;
        padding-left: 20px;
        border-left: none;
    }
    section h2 {
        
    }
    section h2 span {
        border-left: 5px solid #8B008B;
        margin-right: 10px;
    }
    section p:nth-child(2) {
        font-size: 60px;
        font-weight: bold;
        margin-top: -25px;
    }
    section p:nth-child(3) {
        font-size: 60px;
        font-weight: bold;
        margin-top: -80px;
    }
    section p:nth-child(4) {
        font-size: 25px;
        font-weight: bold;
        margin-top: -70px;
        margin-left: 30px;
        background: -webkit-linear-gradient(-45deg, #8257E6, #f588ec, #5515e9, #ea5c82) no-repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 300% 300%;
    }

    section ul {
        display: flex;
        align-items: center;
        justify-content: space-around;
        list-style: none;
        margin-top: 10px;
        box-sizing: border-box;
    }
    section ul a {
        text-decoration: none;
        font-size: 30px;
        background: -webkit-linear-gradient(-45deg, #8257E6, #f588ec, #5515e9, #ea5c82) no-repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 300% 300%;
        cursor: pointer;
        filter: brightness(.5);
        padding: 20px;
        
    }

    @media screen and (min-width: 550px){
        section h2, 
        section p:nth-child(2),
         section p:nth-child(3),
         section p:nth-child(4) {
            margin-left: 100px;
        }
    }
    @media screen and (min-width: 700px){
       width: 100%;
       display: flex;
       align-items: center;

       .conteiner-photo{
        }
       section {
            width: 50%;
            border-left: 5px solid #fff;
            
        }
        section h2, 
        section p:nth-child(2),
         section p:nth-child(3),
         section p:nth-child(4) {
            margin-left: 20px;
        }
    
        section ul {
            justify-content: space-between ;
            align-items: center;
            width: 300px;
            height: 150px;   
        }
        
        section ul a {
            font-size: 50px;
            padding: 15px;
        }
    
    }
    @media screen and (min-width: 1000px){
        .conteiner-photo {
            transform: translateX(10px);
        }
        section {
            padding-left: 55px;
        }
        section h2, 
        section p:nth-child(2),
         section p:nth-child(3),
         section p:nth-child(4) {
            margin-left: 10px;
        }
        section p:nth-child(3) {
            font-size: 100px;
        }
        section p:nth-child(4) {
            transform: translateY(-45px);
            font-size: 30px;
        }
        section ul{
         width: 150px;
        }
    }
    @media screen and (min-width: 1100px) {
        .conteiner-photo{
            transform: translateX(-10px);
        }
        section ul {
            width: 400px;
        }
    }
  
`
export default HomeStyled;