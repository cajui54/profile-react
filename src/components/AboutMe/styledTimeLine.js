import styled from 'styled-components';

const Section = styled.section`
    margin-top: 100px;
    .subtitle {
        text-align: center;
        margin-bottom: 50px;
        font-size: 45px;
    }
    .subtitle i {
        background: -webkit-linear-gradient(-45deg, #8257E6, #f588ec, #5515e9, #ea5c82) no-repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 300% 300%;
        display: inline-block;
        margin-right: 20px;
    }
    .container {
        min-height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #101010;
        padding: 50px 0;

    }
    .timeline {
        width: 95%;
        height: auto;
        max-width: 800px;
        margin: 100px auto;
        position: relative;
    }
    .timeline ul {
        list-style: none;
        width: 80%;
    }
    .timeline ul li {
        padding: 20px;
        background-color: #1e1f22;
        border-radius: 10px;
        margin-bottom: 30px;
    }
    .timeline ul li:last-child {
        margin-bottom: 0;
    } 
    .timeline-content summary{
        cursor: pointer;
    }
    .timeline-content summary h2 {
        background: -webkit-linear-gradient(-45deg, #8257E6, #f588ec, #5515e9, #ea5c82) no-repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 300% 300%;
        text-decoration: none;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing: 1.5px;
        font-weight: bold;
        
    }
    .timeline-content summary h2 i {
        font-size: 30px;
        padding: 5px;
      
    }
    .timeline-content .fa-code {
        color: #708090	; 
    }
    .timeline-content .fa-css3 {
        color: #5DACEA; 
    }
    .timeline-content .fa-js-square {
        color: #EFD81D;
    }
    .timeline-content .fa-code-pull-request {
        color: #E84E31; 
    }
    .timeline-content .fa-react{
        color: #5ed3f3;
    }
    details i {
        margin-right: 20px;
        display: inline-block;
    }
    .list-details li{
        list-style: inside;
        margin: 0;
    }
    .timeline-content h2 {
        font-size: 25px;
        font-weight: 500;
        line-height: 30px;
        margin-bottom: 10px;
        display: inline-block;
        margin: 0 25px;
    }
    .timeline-content p {
        font-size: 16px;
        line-height: 30px;
        font-weight: 300;
    }
    @media only screen and (min-width: 768px){
        .subtitle {
            margin: 150px 120px;
        }
        .timeline {
            box-sizing: border-box;
        }
        .timeline ul{
            margin: 50px auto;
            width: 80%;

        }
        .timeline::before{
            content: '';
            position: absolute;
            height: 100%;
            width: 3px;
            left: 50%;
            background-color: silver;
            transform: translate(-50%);
        }
        .timeline ul li {
            width: 50%;
            margin-bottom: 50px;
            position: relative;
            margin-left: -90px;
        }
        .timeline ul li::after {
            content: '';
            position: absolute;
            height: 20px;
            width: 20px;
            border-radius: 100%;
            background-color: #fff;
            top: 0;
            right: -30px;
            transform: translate(50%, -50%);
            cursor: pointer;
            
        }
        .timeline ul li:hover::after{
            background-image: linear-gradient(to right, #8A2BE2, #DDA0DD);
            transition: all .8s ease-in-out;
        }
    }
`

export default Section
