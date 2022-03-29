import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: 'Sora', sans-serif;
        height: 100%;
        /* min-height: 100% !important; */
    /* height: 100%; */
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        /* &::-webkit-scrollbar {
            display: none;
        } */
        /* Hide scrollbar for IE, Edge and Firefox */
        /* -ms-overflow-style: none;  IE and Edge */
        /* scrollbar-width: none;  Firefox */
        /* scroll-behavior: smooth; */
   }

   :root {
       --black-shade-primary:  #1a1a1a;
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
       --opal:  #C2D6CF;
       --border-1 : 1px solid #ccc;       
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
