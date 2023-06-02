import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "../../reusecore/Layout";

const ActionsHeaderWrapper = styled.div`
  .cloud-native-catalog.header {
    min-height: 40rem;
    background: ${({ theme }) => theme.linearToGreen};
    display: flex;
    align-items: center;
    align-content: space-between;
    flex-direction: column;
    justify-content: center;
    .header__detail {
      display: flex;
      flex-direction: column;
    }
    .header__title {
      color: ${(props) => props.theme.secondaryColor};
      padding-right: 80px;
      margin-bottom: 20px;
    }
    .header__title_description {
      color: ${(props) => props.theme.tertiaryColor};
      font-weight: 400;
      font-size: 1.438rem;
      line-height: 2rem;
      padding-right: 80px;
      margin-bottom: 30px;
    }
    .catalog {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }

    @media screen and (max-width: 992px) {
      padding-bottom: 100px;
      .catalog {
        margin: 50px 0 0 0;
      }
    }

    @media screen and (max-width: 768px) {
      padding: 50px 0;
      .header__detail {
        display: flex;
        flex-direction: column;
      }
      .header__title {
        padding-right: 0;
        text-align: center;
        margin-bottom: 10px;
      }
      .header__title_description {
        padding-right: 0;
        text-align: center;
        margin-bottom: 20px;
      }
      .header__button_section {
        display: flex;
        justify-content: center;
      }
    }
  }
`;

const Header = () => {
  return (
    <ActionsHeaderWrapper>
      <div className="github-actions header">
        <Container>
          <Row className="row">
            <Col className="col header__detail" md={6}>
              <h1 className="header__title">Pipelining Cloud Native Insights and GitOps</h1>
              <p className="header__title_description">
                Using SMP specs on your CI/CD pipelines with Meshery's GitHub Actions and MeshMap GitHub Action
              </p>

            </Col>
            <Col className="col catalog" md={6}>
              {/* <img src alt="catalog" /> */}
            </Col>
          </Row>
        </Container>
      </div>
    </ActionsHeaderWrapper>
  );
};

export default Header;
