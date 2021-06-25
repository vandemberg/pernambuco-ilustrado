import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 20px;
  border-radius: 30px;

  .card {
    background-image: url(${(url) => url});

    @media screen and (max-width: 992px) {
      width: 336px;
      height: 180px;
    }

    @media screen and (min-width: 992px) {
      width: 400px;
      height: 565px;
    }

    :hover {
      background: transparent
        linear-gradient(180deg, #26262600 0%, #262626 100%) 0% 0% no-repeat
        padding-box;
    }

    .card-footer {
      padding-bottom: 58px;
      padding-left: 48px;
      font-weight: bold;
      font-size: 28px;
      border: none;
      background: none;
      color: #fff;
    }
  }
`;
