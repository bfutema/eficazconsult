import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import * as S from './About.styles';

const stats = [
  { number: '+15', label: 'Anos de experiência' },
  { number: '500+', label: 'Clientes atendidos' },
];

export function About() {
  const { ref, isInView } = useScrollReveal(0.2);

  return (
    <S.SectionWrapper id="sobre">
      <S.SectionInner ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <S.SectionLabel>Sobre nós</S.SectionLabel>
          <S.SectionTitle>
            Compromisso com a excelência contábil
          </S.SectionTitle>
          <S.SectionDescription>
            A Eficaz Consult nasceu da vontade de oferecer serviços
            contábeis e fiscais com o mais alto padrão de qualidade.
            Nossa equipe é formada por profissionais especializados,
            sempre atualizados com as mudanças legislativas e
            comprometidos com a transparência e a confiança dos nossos
            clientes.
          </S.SectionDescription>
          <S.SectionDescription>
            Trabalhamos como parceiros estratégicos, ajudando empresas
            de todos os portes a crescer de forma organizada e em
            conformidade com a legislação.
          </S.SectionDescription>
          <S.StatsGrid
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {stats.map((stat) => (
              <S.StatItem key={stat.label}>
                <S.StatNumber>{stat.number}</S.StatNumber>
                <S.StatLabel>{stat.label}</S.StatLabel>
              </S.StatItem>
            ))}
          </S.StatsGrid>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <S.VisualBlock>
            <S.VisualContent>
              <S.VisualIcon>✓</S.VisualIcon>
              <S.VisualText>
                Profissionalismo, transparência e resultados que fazem a
                diferença no seu negócio.
              </S.VisualText>
            </S.VisualContent>
          </S.VisualBlock>
        </motion.div>
      </S.SectionInner>
    </S.SectionWrapper>
  );
}
