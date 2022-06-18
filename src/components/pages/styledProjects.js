import styled from 'styled-components'

const Section = styled.section`
    width: 100%;

    .container-subtitles{
        padding: 10px;
        margin-top: 100px;
        margin-left: 40px;
        font-family: 'Cabin', Arial, Helvetica, sans-serif;
    }
    .container-subtitles h2{
        font-size: 25px;
        color: #fff;        
    }
    .container-subtitles h3{
        font-size: 30px;
        color: #fff;
        margin-top: -20px;
        background: -webkit-linear-gradient(-45deg, #8257E6, #f588ec, #5515e9, #ea5c82) no-repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 300% 300%;
    }
    .card-project {
        background-color: #363636;
        width: 90%;
        height: 120px;
        margin: 50px auto;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .container-logo {
        width: 70px;
        height: 90%;
        border-radius: 5px;
       display: flex;
       align-items: center;
       justify-content: center;
       font-size: 35px;
       background: -webkit-linear-gradient(-45deg, #8257E6, #f588ec, #5515e9, #ea5c82) no-repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        cursor: pointer;
    }
    .container-info-card {
        width: 60%;
    }
    .container-info-card h2 {
        font-size: 20px;
        margin-top: 10px;
        color: #8257E6;
    }
    .container-info-card p {
        color: silver;
        margin-top: -12px;
        font-size: 12px;
        font-weight: bold;
    }
    .container-info-card ul {
        display: flex;
        list-style: none;
        width: 90px;
        align-items: center ;
        justify-content: space-between;
        padding: 0;
    }
    .container-info-card li {
        margin-left: 10px;
    }
    .container-info-card a {
        font-size: 25px;
        cursor: pointer;
        text-decoration: none;
        color: silver;
        transition: all .5s ease;
    }
    .container-info-card a:hover {
        transform: scale(1.2);
    }
    @media only screen and (min-width: 620px){
        .container-projects {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            align-content: flex-start;
        }
        .card-project{
            width: 250px;
            height: 350px;
            flex-direction: column;
        }
        .card-project .container-logo {
            width: 100%;
            height: 150px;
            box-sizing: border-box;
        }
        
        .container-logo a {
            display: inline-block;
            width: 100%;
            height: 100%;
            display: flex ;
            justify-content: center;
            align-items: center;
            font-size: 90px;
        }
        .container-info-card {
            width: 100%;
            height: 100px;
        }
        .container-info-card {
            text-align: center;
        }
        .container-info-card p {
            font-size: 15px ;
            transform: translateY(-5px);
        }
        .container-info-card ul {
            width: 50%;
            margin: 2px auto;
            justify-content: space-evenly;
        }
    }
    @media only screen and (min-width: 1000px){
        .container-subtitles {
            margin-top: 200px;
        }
        .container-subtitles > h2, h3{
            margin-left: 50px;
        }
        .container-subtitles h2 {
            font-size: 50px;
        }
        .container-subtitles h3 {
            font-size: 60px;
            transform: translateY(-25px);
        }
        .container-projects {
            width: 900px;
            margin: 10px auto;
        }
    }
`;

export default Section;