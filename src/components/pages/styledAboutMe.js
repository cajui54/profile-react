import styled from 'styled-components';
import tecnologiPhoto from '../../assets/images/star02.jpg';

const About = styled.section`
    margin-top: 50px;
    box-sizing: border-box;
    color: #fff;
    position: absolute;
    width: 100%;
    min-height: 700px;
    overflow-x: hidden;

    .container-img {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 250px;
        border-radius: 5px;
        overflow: hidden;
        margin: 15px auto;
    }
    .container-img img {
        width: 100%;
        height: 340px;
        filter: brightness(.5);
    }
    article {
        margin-top: 20px;
        padding: 15px;
        background-image: url(${tecnologiPhoto});
    }
    article h2 {
        font-size: 40px;
        text-align: left;
        margin-left: 20px;
    }
    article span {
        margin-left: 2px;
    }
    article h2 span:nth-child(1), article h2 span:nth-child(3)  {
        background: -webkit-linear-gradient(-45deg, #8257E6, #f588ec, #5515e9, #ea5c82) no-repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 300% 300%;
        font-weight: bold;
    }
    article p {
        font-size: 18px;
        letter-spacing: 1.5px;
        padding: 20px;
        line-height: 40px;
        color: #fff;
        text-shadow: 1px 2px 2px black;
    }
    @media only screen and (min-width: 700px){
        .container-img {
            width: 100%;
            height: 500px;
            margin: -50px auto;
            border-radius: 0 10px 10px 10px ;
        }
        .container-article article {
            width: 100%;
            margin: 150px auto;
            background-attachment: fixed;
            background-position-y: 250px ;
        }
        .container-article article p {
            font-size: 25px;  
        }
    }
    @media only screen and (min-width: 1000px) {
        .container-article {
            width: 100%;
        }
        .container-article article {
            width: 950px;
            margin-top: 50px;
        }
        .container-article article h2 {
            font-size: 40px;
        }
        .container-img img {
            border-radius: 0;
            height: 100%;
            width: 100%;
        }
        .container-img {
            width: 100%;
            height: 450px;
            margin: 50px 0;
            box-shadow: 0 0 5px #4F4F4F;
        }
    }
`
export default About;
