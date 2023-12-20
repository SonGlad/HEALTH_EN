import styled from "styled-components";



export const FormTitle = styled.h2`
    font-weight: 600;
    color: #fff;
    font-size: 35px;
    letter-spacing: 1px;
    margin-bottom: 20px;
    margin-top: 90px;
    text-shadow: 6px 6px 10px rgba(0, 0, 0, 0.8);
`

export const LoginFormStyles = styled.form`
    width: 400px;
    height: 270px;
    border-radius: 30px;
    font-size: 40px;
    font-family: 'Open Sans',sans-serif;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.6);
    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.6);
    .descr-div{
        position: absolute;
        transform: translateY(-15px);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
    .icon{
        /* fill: #fff; */
        fill: transparent;
        stroke: #fff;
    }
    .input-title{
        font-size: 20px;
    }
    .input{
        width: 340px; 
        height: 40px;
        margin-bottom: 30px; 
        background: rgba(0,0,0,0.3);
        border: none;
        outline: none;
        padding: 5px;
        font-size: 20px;
        color: #fff;
        text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
        border: 1px solid rgba(0,0,0,0.3);
        border-radius: 4px;
        box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2);
        -webkit-transition: box-shadow .5s ease;
        -moz-transition: box-shadow .5s ease;
        -o-transition: box-shadow .5s ease;
        -ms-transition: box-shadow .5s ease;
        transition: box-shadow .5s ease;
    }
    .input:focus { 
        box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2); 
    }
    .btn { 
        display: inline-block;
        display: inline; 
        zoom: 1; 
        padding: 4px 10px 4px; 
        margin-bottom: 0; 
        font-size: 13px; 
        line-height: 18px; 
        color: #333333; 
        text-align: center;
        text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); 
        vertical-align: middle; 
        background-color: #f5f5f5; 
        background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6); 
        background-image: -ms-linear-gradient(top, #ffffff, #e6e6e6); 
        background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#e6e6e6)); 
        background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6);
        background-image: -o-linear-gradient(top, #ffffff, #e6e6e6); 
        background-image: linear-gradient(top, #ffffff, #e6e6e6); 
        background-repeat: repeat-x; filter: progid:dximagetransform.microsoft.gradient(startColorstr=#ffffff, endColorstr=#e6e6e6, GradientType=0);
        border-color: #e6e6e6 #e6e6e6 #e6e6e6; 
        border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25); 
        border: 1px solid #e6e6e6; 
        -webkit-border-radius: 4px; 
        -moz-border-radius: 4px; 
        border-radius: 4px; 
        -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); 
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); cursor: pointer; 
        *margin-left: .3em; 
    }
    .btn-large { 
        padding: 9px 14px; 
        font-size: 15px; 
        line-height: normal; 
        -webkit-border-radius: 5px; 
        -moz-border-radius: 5px; 
        border-radius: 5px; 
    }
    .btn:hover { 
        color: #333333;
        text-decoration: none;  
        background-color: #e6e6e6; 
        background-position: 0 -15px; 
        -webkit-transition: background-position 0.1s linear; 
        -moz-transition: background-position 0.1s linear; 
        -ms-transition: background-position 0.1s linear; 
        -o-transition: background-position 0.1s linear; 
        transition: background-position 0.1s linear;
    }
    .btn-primary, .btn-primary:hover { 
        text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25); 
        color: #ffffff; 
    }
    .btn-primary { 
        background-color: #4a77d4; 
        background-image: -moz-linear-gradient(top, #6eb6de, #4a77d4); 
        background-image: -ms-linear-gradient(top, #6eb6de, #4a77d4); 
        background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#6eb6de), to(#4a77d4)); 
        background-image: -webkit-linear-gradient(top, #6eb6de, #4a77d4); 
        background-image: -o-linear-gradient(top, #6eb6de, #4a77d4); 
        background-image: linear-gradient(top, #6eb6de, #4a77d4); 
        background-repeat: repeat-x; filter: progid:dximagetransform.microsoft.gradient(startColorstr=#6eb6de, endColorstr=#4a77d4, GradientType=0);  
        border: 1px solid #3762bc; 
        text-shadow: 1px 1px 1px rgba(0,0,0,0.4); 
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.5); 
    }
    .btn-primary:hover, .btn-primary:active, .btn-primary.active{ 
        filter: none; 
        background-color: #4a77d4;
    }
    .btn-block { 
        width: 200px; 
        height: 40px;
        display:block; 
    }

* { -webkit-box-sizing:border-box; 
    -moz-box-sizing:border-box; 
    -ms-box-sizing:border-box;
    -o-box-sizing:border-box; 
    box-sizing:border-box; 
    }
`