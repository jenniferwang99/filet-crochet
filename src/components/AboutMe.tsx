import styled from 'styled-components';
import { theme } from '../styles/theme';

const AboutMe = () => {
  return (
    <Container>
      <Title>About Me</Title>
      <Content>
        <Section>
          <Paragraph>
            Hi! I'm Jenn, and I started crocheting last year. I'm a passionate crochet newbie who
            loves creating beautiful patterns. I developed this Filet Crochet Designer tool to help
            fellow crocheters easily create and visualize their filet crochet patterns.
          </Paragraph>
        </Section>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize.xxxlarge};
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  background: ${theme.colors.white};
  padding: 2rem;
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.soft};
  border: 1px solid ${theme.colors.border};
`;

const Section = styled.section`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Paragraph = styled.p`
  font-family: ${theme.typography.fontFamily.primary};
  font-size: ${theme.typography.fontSize.medium};
  color: ${theme.colors.text};
  line-height: 1.6;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default AboutMe;
