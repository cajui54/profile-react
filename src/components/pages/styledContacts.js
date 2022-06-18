import styled from 'styled-components'


const Section = styled.section`
    
    width: 100%;
    min-height: 300px;
    margin-top: 100px;

    .container-info {
        width: 80%;
        min-height: 300px;
        margin: 50px auto;
        display: flex;
        flex-direction: column ;
    }
    .container-titles h2 {
        color: #fff;
        font-size: 30px;
    }
    .container-titles h3 {
        font-size: 40px;
        margin-top: -30px;
        background: -webkit-linear-gradient(-45deg, #8257E6, #f588ec, #5515e9, #ea5c82) no-repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 300% 300%;
    }
    .container-info ul {
        min-height: 200px;
    }
    .container-info li {
        margin: 30px 0;
        padding: 20px;
        color: #fff;
        font-weight: bold;
        letter-spacing: 1.2px;
    }
    .container-info li i{
        margin: 0 10px;
        font-size: 25px;
        background: -webkit-linear-gradient(-45deg, #8257E6, #f588ec, #5515e9, #ea5c82) no-repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 300% 300%;
    }
    .container-info li a {
        text-decoration: none ;
        cursor: pointer;
        color: #fff;
    }
`;

export default Section;