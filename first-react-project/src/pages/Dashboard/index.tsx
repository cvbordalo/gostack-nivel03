import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/github-logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositories on Github</Title>

      <Form>
        <input placeholder="Type repository's name" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/54056008?s=460&u=fe05ec37b163c5f89f97eb3ff171ff8ec5d8b128&v=4Ca"
            alt="Carlos Bordalo"
          />
          <div>
            <strong>cvbordalo/aircnc</strong>
            <p>An AirBnB clone using React.JS. Code and Coffee</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/54056008?s=460&u=fe05ec37b163c5f89f97eb3ff171ff8ec5d8b128&v=4Ca"
            alt="Carlos Bordalo"
          />
          <div>
            <strong>cvbordalo/aircnc</strong>
            <p>An AirBnB clone using React.JS. Code and Coffee</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/54056008?s=460&u=fe05ec37b163c5f89f97eb3ff171ff8ec5d8b128&v=4Ca"
            alt="Carlos Bordalo"
          />
          <div>
            <strong>cvbordalo/aircnc</strong>
            <p>An AirBnB clone using React.JS. Code and Coffee</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
