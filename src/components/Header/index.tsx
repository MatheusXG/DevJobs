import * as S from './styles';
import LogoImg from '../.././assets/desktop/logo.svg';
import { Slider } from '../Slider';
import { useTheme } from '@/contexts/useTheme';
import { Container } from '../Container';
import { Input } from '../Input';
import { BiSearchAlt2 } from 'react-icons/Bi';
import { MdLocationOn } from 'react-icons/Md';

import Checkbox from '../Checkbox';
import { Button } from '../Button';

export function Header() {
  const { toggleTheme } = useTheme();
  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <img src={LogoImg} alt="devjobs" />
          <Slider onChange={toggleTheme} />
        </S.Content>
      </Container>
      <Container
        style={{
          position: 'relative',
          top: '35px',
          height: '8rem',
        }}
      >
        <S.ContentFilter>
          <Input
            placeholder="Filter by title, companies, expertise..."
            icon={<BiSearchAlt2 size={24} />}
          />
          <Input
            placeholder="Filter by location..."
            icon={<MdLocationOn size={24} />}
          />
          <Checkbox label="Full Time Only" labelFor="checkbox" />
          <Button>Search</Button>
        </S.ContentFilter>
      </Container>
    </S.Wrapper>
  );
}
