import styled, {keyframes} from "styled-components";
import Image from "next/image";


//     from {
//         transform:  translate(-20px, 20px) ;
//     }
//     to {
//         /* transform: translate(50px, -50px) rotate(-10deg); */
//     }
// `;

export const OrnamentBox = styled.div`
  position: relative;
  width: 390px;
  height: 105px;
  /* overflow: hidden; */
`;

export const OrnamentStripe = styled(Image)`
  position: absolute;
  /* top: 48px; */
  height: 30px;
  min-width: 1020px;
  /* transform: translate(-50%, -50%); */
  display: inline-flex;
 /* transform: rotate(10deg); */
  /* left:50%; */
 
  /* animation-direction */

  align-items: center;
  &:nth-child(1) {
    transform: rotate(-10deg);
    left: -10px;
  }
  &:nth-child(2) {
    transform: rotate(10deg);
    right: -10px;
  }
`;