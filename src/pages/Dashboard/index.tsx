import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHubExplorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório." />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#none">
          <img
            src="https://avatars2.githubusercontent.com/u/49838202?s=460&u=87f1bd097ae6a80491278dd8f6130e2dd2808723&v=4"
            alt="Maick Souza"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS and React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="#none">
          <img
            src="https://avatars2.githubusercontent.com/u/49838202?s=460&u=87f1bd097ae6a80491278dd8f6130e2dd2808723&v=4"
            alt="Maick Souza"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS and React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="#none">
          <img
            src="https://avatars2.githubusercontent.com/u/49838202?s=460&u=87f1bd097ae6a80491278dd8f6130e2dd2808723&v=4"
            alt="Maick Souza"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS and React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
