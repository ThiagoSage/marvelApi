import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background: #fff;
    justify-content: space-around;
    align-itens: center;
    height: auto;
    align-items: center;
    padding: 35px

    .logo {
      height: 115px;
    }
    form {
        outline: 0;
        float: left;
        -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        -webkit-border-radius: 4px;
        border-radius: 4px;
      }

      form > .textbox {
        font-size: 20px;
        outline: 0;
        height: 50px;
        width: 34vw;
        line-height: 42px;
        padding: 0 16px;
        background-color: rgba(255, 255, 255, 0.8);
        color: #212121;
        border: 0;
        float: left;
        -webkit-border-radius: 4px 0 0 4px;
        border-radius: 4px 0 0 4px;
      }

      form > .textbox:focus {
        outline: 0;
        background-color: #FFF;
      }

      form > .button {
        outline: 0;
        background: none;
        background-color: red;
        height: 50px;
        width: 50px;
        text-align: center;
        line-height: 42px;
        border: 0;
        color: #FFF;
        font: normal normal normal 14px/1 FontAwesome;
        font-size: 16px;
        text-rendering: auto;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
        -webkit-transition: background-color .4s ease;
        transition: background-color .4s ease;
        -webkit-border-radius: 0 4px 4px 0;
        border-radius: 0 4px 4px 0;
      }

      form > .button:hover {
        background-color: #802424;
      }
`;

