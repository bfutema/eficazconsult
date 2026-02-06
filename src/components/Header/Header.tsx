import { useEffect, useState } from 'react';
import * as S from './Header.styles';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <S.HeaderWrapper className={scrolled ? 'scrolled' : ''}>
      <S.HeaderInner>
        <S.Logo href="#">
          Eficaz<span>Consult</span>
        </S.Logo>
        <S.Nav>
          <S.NavLink href="#inicio">Início</S.NavLink>
          <S.NavLink href="#servicos">Serviços</S.NavLink>
          <S.NavLink href="#sobre">Sobre</S.NavLink>
          <S.NavLink href="#contato">Contato</S.NavLink>
        </S.Nav>
      </S.HeaderInner>
    </S.HeaderWrapper>
  );
}
