import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: 'Noto Sans', sans-serif;
   }

   :root {
       /* --black-shade-primary:  #1a1a1a;
       --black-shade-secondary:  #292929;
       --white-shade-primary:  #ffffff;
       --white-shade-secondary:  #F4F5F6;
       --gray-shade-primary:  #e3e3e3;
       --gray-shade-secondary:  #535353;
       --blue-shade-primary:  #5665eb;
       --blue-shade-secondary:  #3c4478;
       --red-shade-primary:  #f16363;
       --green-shade-primary:  #31c879;
       --green-shade-secondary:  #307e54;
       --opal:  #C2D6CF; */
       --border-1 : 1px solid #ccc;
       
       
       --black-shade-1: #000000;
       --black-shade-2:  #292929;
       --black-shade-3: #35383F;


       --gray-shade-1:  #A3A8B0;
       --gray-shade-2:  #EDF3FA;
       --gray-shade-3:  #e3e3e3;


       --blue-shade-1:  #0E7CF2;

       --green-shade-1:  #18DF75;

       --color-1:
       --color-2:
       --color-3:
    }
   
    a {
        color: #000;
        text-decoration: none;
    }

    ul li {
        list-style-type: none;
    }
    
`;

export default GlobalStyle;
