import styled from "styled-components";

const Section = styled.section`
    transform: translateY(100px);
    min-height: 700px;
    color: #fff;
    height: auto;
    .container-subtitle {
        width: 80%;
        margin: 50px auto;
    }
    .container-subtitle .subtitle {
        background: -webkit-linear-gradient(-45deg, #8257E6, #f588ec, #5515e9, #ea5c82) no-repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 100% 100%;
    }
    .container-subtitle .subtitleH3 {
        font-size: 30px;
        transform: translateY(-30px);
    }
    article p {
        width: 80%;
        margin: 0 auto ;
        margin-top: -55px;
        font-size: 20px;
        letter-spacing: 1.2px;
        line-height: 35px;
    }
    .container-skills {
        box-sizing: border-box;
        margin-top: 50px;
        margin-bottom: 100px;
        padding: 20px;
        
    }
    .subtitle-hard-skills {
        font-size: 40px;
        margin-bottom: 50px;
    }
    .subtitle-hard-skills i {
        transform: rotate(90deg);        
        margin-right: 10px;
    }
    .skills{
        display: flex;
        width: 350px;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        margin: 10px auto;
    }
    .card{
        filter: brightness(.8);
        width: 30%;
        margin-bottom: 30px;
        text-align: center;
        background-color: red;
        background: -webkit-linear-gradient(-45deg, #8257E6, #f588ec, #5515e9, #ea5c82) no-repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 300% 300%;
    }

    .card i {
        font-size: 70px;
    }
    .card h3 {
        font-weight: bold;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    @media only screen and (min-width: 700px) {
        article {
            width: 70%;
            height: 300px;
            margin: 0 auto ;
            margin-top: -10px;
            margin-bottom: 100px;
            padding-top: 20px;
        }
        .subtitle-hard-skills {
            font-size: 35px;
            text-align: center;
        }

        .skills {
            justify-content: center;
            margin-left: 20px;
            width: 100%;
        }
        .card {
            margin-left: 0;
        }
    }
    @media only screen and (min-width: 1000px){
        .container-subtitle {
            width: 60%;
            margin: 50px auto;
        }
        .subtitle {
            width: 100%;
            font-size: 40px;
        }
        .subtitleH3 {
            font-size: 155px;
        }
        article {
            width: 900px;
        }
        article p {
            width: 60%;
            font-size: 25px;
        }

        .subtitle-hard-skills {
            width: 100%;
            text-align: center;
            margin: 100px auto;
            font-size: 45px;
        }
        .skills {
            width: 50%;
            margin: 0 auto;
        }
        .card {
            margin-left: 0;
        }
    }
`

export default Section;
