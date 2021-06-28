import styled from "styled-components";
import { Carousel } from "react-bootstrap";

export const Container = styled(Carousel)`
  :hover {
    cursor: pointer;
  }
`;

export const Image = styled.div`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 30px;

  :hover {
    cursor: pointer;
  }

  .card {
    background-image: url(${({ imageUrl }) => imageUrl});
    background-size: cover;
    border: none;

    width: 800px;
    min-height: 600px;
    max-height: auto;

    .hover-effect {
      position: absolute;
      width: 100%;
      height: 100%;

      :hover {
        opacity: 0.8;
        background: transparent
          linear-gradient(180deg, #26262600 0%, #262626 100%) 0% 0% no-repeat
          padding-box;
      }
    }

    .card-footer {
      bottom: 1rem;
      left: 1rem;
      position: absolute;
      font-weight: bold;
      font-size: 28px;
      border: none;
      background: none;
      color: #fff;
      z-index: 999999;
    }
  }
`;
