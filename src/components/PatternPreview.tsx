import styled from 'styled-components';
import { theme } from '../styles/theme';

interface PatternPreviewProps {
  grid: boolean[][];
}

function PatternPreview({ grid }: PatternPreviewProps) {
  return (
    <PreviewContainer>
      <PreviewTitle>Pattern Preview</PreviewTitle>
      <PreviewGrid>
        {grid.map((row, rowIndex) => (
          <PreviewRow key={rowIndex}>
            {row.map((cell, colIndex) => (
              <PreviewCell key={`${rowIndex}-${colIndex}`} isFilled={cell}>
                {cell ? '■' : '□'}
              </PreviewCell>
            ))}
          </PreviewRow>
        ))}
      </PreviewGrid>
      <PatternInstructions>
        <h3>Instructions</h3>
        <p>■ = Double crochet (dc)</p>
        <p>□ = Chain 1, skip 1 (ch1, sk1)</p>
      </PatternInstructions>
    </PreviewContainer>
  );
}

// Styled Components
const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const PreviewTitle = styled.h2`
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
`;

const PreviewGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-family: monospace;
  font-size: 1.2rem;
  line-height: 1;
`;

const PreviewRow = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const PreviewCell = styled.span<{ isFilled: boolean }>`
  color: ${(props) => (props.isFilled ? '#333' : '#999')};
  width: 1.5rem;
  text-align: center;
`;

const PatternInstructions = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 4px;
  width: 100%;

  h3 {
    color: ${theme.colors.primary};
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0.5rem 0;
    color: #666;
  }
`;

export default PatternPreview;
