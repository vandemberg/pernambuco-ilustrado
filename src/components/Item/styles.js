import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 20px;
  border-radius: 30px;

  :hover {
    cursor: pointer;
  }

  .card {
    background-image: url(${({ imageUrl }) => imageUrl});
    background-size: cover;
    border: none;

    @media screen and (max-width: 992px) {
      width: 180px;
      height: 140px;
    }

    @media screen and (min-width: 1560px) {
      width: 320px;
      height: 360px;
    }

    @media screen and (max-width: 1560px) {
      width: 240px;
      height: 260px;
    }

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
