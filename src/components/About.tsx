import styled from 'styled-components';
import { theme } from '../styles/theme';

function About() {
  return (
    <Container>
      <Title>About Filet Crochet</Title>
      <Content>
        <Section>
          <SectionTitle>What is Filet Crochet?</SectionTitle>
          <Paragraph>
            Filet crochet is an easy technique that can have stunning results. Filet crochet
            patterns are made up of open meshes and solid meshes with patterns that depict this (so
            the patterns are crochet charts, not written instructions).
          </Paragraph>
          <Paragraph>
            The mesh is made using double crochet stitches (the solid blocks) separated by spaces
            (the open blocks). The blocks can be made using 3dc or 4 dc stitches, depending on the
            version of filet crochet that you're working.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Understanding the Grid</SectionTitle>
          <Paragraph>
            The first thing that you must understand about filet crochet is that you won't have any
            written instructions for these patterns. You also won't have symbol charts. Instead, you
            will have grids; the grids will consist of "open" spaces and "solid" spaces. You use
            double crochet stitches to create your solid spaces and add chains over skipped stitches
            to create the open boxes.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>3 DC vs 4 DC Blocks</SectionTitle>
          <Paragraph>
            Some patterns use 4 dc to form a block (solid mesh), while other patterns use 3 dc to
            form a block (solid mesh).
          </Paragraph>
          <List>
            <ListItem>
              <strong>3 DC filet explained:</strong> In a pattern that uses 3 double crochet (dc) to
              form each block (solid mesh), each block consists of 3 dc. When there are two blocks
              side by side, the blocks share a common dc in the center, so there will be 5 dc in
              that group of two blocks. Three blocks side by side = 7 dc.
            </ListItem>
            <ListItem>
              <strong>4 DC filet explained:</strong> In a pattern that uses 4 double crochet (dc) to
              form each block (solid mesh), each block consists of 4 dc. When there are two blocks
              side by side, the blocks share a common dc in the center, so there will be 7 dc in
              that group of two blocks. Three blocks side by side = 10 dc.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Making Solid Squares</SectionTitle>
          <Paragraph>
            On a chart, the X or completely filled in block equals a solid mesh. To make a solid
            mesh: dc in next 3 dc or 2 dc in next chain space, dc in next dc.
          </Paragraph>
          <Paragraph>
            The Beginning Solid Mesh (Beginning Block) is made by: ch 3 (counts as dc), 2 dc in
            first chain space, dc in next dc or dc in next 3 dc.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Making Open Mesh Squares</SectionTitle>
          <Paragraph>
            On a chart, the blank square equals an open mesh. To make an open mesh: ch2, skip next 2
            chains, dc in next dc or skip next 2 dc, dc in next dc.
          </Paragraph>
          <Paragraph>
            The Beginning Open Mesh (Beginning Space) is made by: ch 5, skip next 2 stitches, dc in
            next dc.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Calculating Starting Chains</SectionTitle>
          <Paragraph>
            First, count the number of squares across the first row that you will be working on the
            chart. Charts are usually begun at the bottom of the chart.
          </Paragraph>
          <SubSection>
            <SubTitle>3 DC Mesh</SubTitle>
            <Paragraph>
              If working the chart in a 3 dc mesh, multiply the number of squares across on the
              first row of the chart, times 2, then add 1. That's your starting chain.
            </Paragraph>
          </SubSection>
          <SubSection>
            <SubTitle>4 DC Mesh</SubTitle>
            <Paragraph>
              If working the chart in a 4 dc mesh, multiply the number of squares across on the
              first row of the chart, times 3, then add 1. That's your starting chain.
            </Paragraph>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>Beyond the Basics</SectionTitle>
          <Paragraph>You can go beyond these basics in filet crochet by:</Paragraph>
          <List>
            <ListItem>
              Using half double crochet or treble crochet stitches instead of double crochet
              stitches to alter the shape and size of the finished pattern
            </ListItem>
            <ListItem>
              Learning advanced crochet stitches in filet crochet, including the long mesh and the
              lacet (also called "fancy mesh")
            </ListItem>
          </List>
        </Section>
      </Content>
    </Container>
  );
}

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

const SectionTitle = styled.h2`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize.xxlarge};
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
`;

const SubSection = styled.div`
  margin: 1rem 0;
`;

const SubTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize.xlarge};
  color: ${theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const Paragraph = styled.p`
  font-family: ${theme.typography.fontFamily.primary};
  font-size: ${theme.typography.fontSize.medium};
  color: ${theme.colors.text};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
`;

const ListItem = styled.li`
  font-family: ${theme.typography.fontFamily.primary};
  font-size: ${theme.typography.fontSize.medium};
  color: ${theme.colors.text};
  line-height: 1.6;
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default About;
