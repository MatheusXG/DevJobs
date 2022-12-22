import * as S from './styles';
import LogoImg from '../.././assets/desktop/logo.svg';
import { Slider } from '../Slider';
import { useTheme } from '@/contexts/useTheme';
import { Container } from '../Container';

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
    </S.Wrapper>
  );
}
