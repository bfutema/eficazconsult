import { motion } from 'framer-motion';
import * as S from './Hero.styles';

export function Hero() {
  return (
    <S.HeroWrapper id="inicio">
      <S.HeroInner>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
        >
          <S.Badge>Contabilidade & Assessoria Fiscal</S.Badge>
        </motion.div>
        <S.Title
          as={motion.h1}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] }}
        >
          Excelência contábil para o{' '}
          <S.Highlight>crescimento do seu negócio</S.Highlight>
        </S.Title>
        <S.Subtitle
          as={motion.p}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0, 0, 0.2, 1] }}
        >
          Oferecemos soluções completas em contabilidade, fiscal e
          assessoria empresarial. Profissionalismo e transparência em
          cada etapa do processo.
        </S.Subtitle>
        <S.CtaGroup
          as={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0, 0, 0.2, 1] }}
        >
          <S.CtaPrimary href="#contato">Fale Conosco</S.CtaPrimary>
          <S.CtaSecondary href="#servicos">Nossos Serviços</S.CtaSecondary>
        </S.CtaGroup>
      </S.HeroInner>
    </S.HeroWrapper>
  );
}
