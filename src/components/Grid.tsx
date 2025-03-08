import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

// Common styles
const commonInputStyles = `
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.typography.fontSize.medium};
  font-family: ${theme.typography.fontFamily.primary};
  transition: ${theme.transitions.default};
`;

const commonFlexCenter = `
  display: flex;
  align-items: center;
`;

// Common values
const CELL_SIZE = {
  desktop: '35px',
  mobile: '25px',
};

interface GridProps {
  onGridChange: (grid: boolean[][]) => void;
}

function Grid({ onGridChange }: GridProps) {
  const [rows, setRows] = useState(10);
  const [cols, setCols] = useState(10);
  const [grid, setGrid] = useState<boolean[][]>(Array(rows).fill(Array(cols).fill(false)));

  const toggleCell = (row: number, col: number) => {
    setGrid(prevGrid => {
      const newGrid = prevGrid.map(row => [...row]);
      newGrid[row][col] = !newGrid[row][col];
      onGridChange(newGrid);
      return newGrid;
    });
  };

  const clearGrid = () => {
    const newGrid = Array(rows).fill(Array(cols).fill(false));
    setGrid(newGrid);
    onGridChange(newGrid);
  };

  const updateGridSize = (newRows: number, newCols: number) => {
    if (newRows < 1 || newCols < 1) return;
    
    const newGrid = Array(newRows).fill(null).map(() => Array(newCols).fill(false));
    
    for (let i = 0; i < Math.min(rows, newRows); i++) {
      for (let j = 0; j < Math.min(cols, newCols); j++) {
        newGrid[i][j] = grid[i][j];
      }
    }
    
    setGrid(newGrid);
    setRows(newRows);
    setCols(newCols);
    onGridChange(newGrid);
  };

  return (
    <DesignPanel>
      <Controls>
        <GridControls>
          <ControlGroup>
            <Label>Rows:</Label>
            <NumberInput
              type="number"
              min="1"
              max="50"
              value={rows}
              onChange={(e) => updateGridSize(parseInt(e.target.value), cols)}
            />
          </ControlGroup>
          <ControlGroup>
            <Label>Columns:</Label>
            <NumberInput
              type="number"
              min="1"
              max="50"
              value={cols}
              onChange={(e) => updateGridSize(rows, parseInt(e.target.value))}
            />
          </ControlGroup>
        </GridControls>
        <Button onClick={clearGrid}>Clear Grid</Button>
      </Controls>
      <Canvas rows={rows} cols={cols}>
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              isFilled={cell}
              onClick={() => toggleCell(rowIndex, colIndex)}
            />
          ))
        )}
      </Canvas>
    </DesignPanel>
  );
}

interface CanvasProps {
  rows: number;
  cols: number;
}

const DesignPanel = styled.div`
  background: ${theme.colors.white};
  padding: 1rem;
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.soft};
  border: 1px solid ${theme.colors.border};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;

const Canvas = styled.div<CanvasProps>`
  background: ${theme.colors.white};
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.medium};
  display: grid;
  grid-template-columns: repeat(${props => props.cols}, ${CELL_SIZE.desktop});
  grid-template-rows: repeat(${props => props.rows}, ${CELL_SIZE.desktop});
  gap: 0;
  padding: 0.5rem;
  width: fit-content;
  height: fit-content;
  max-height: calc(100vh - 200px);
  max-width: calc(100vw - 2rem);
  margin: 0 auto;
  justify-self: center;
  align-self: center;
  flex: 1;
  min-height: 0;
  overflow: auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(${props => props.cols}, ${CELL_SIZE.mobile});
    grid-template-rows: repeat(${props => props.rows}, ${CELL_SIZE.mobile});
    padding: 0.25rem;
    max-height: calc(100vh - 180px);
  }
`;

const Cell = styled.div<{ isFilled: boolean }>`
  width: ${CELL_SIZE.desktop};
  height: ${CELL_SIZE.desktop};
  border: 1px solid ${theme.colors.border};
  background-color: ${props => props.isFilled ? theme.colors.primary : theme.colors.white};
  cursor: pointer;
  transition: ${theme.transitions.default};

  @media (max-width: 768px) {
    width: ${CELL_SIZE.mobile};
    height: ${CELL_SIZE.mobile};
  }

  &:hover {
    background-color: ${props => props.isFilled ? theme.colors.hover : theme.colors.secondary};
  }
`;

const Controls = styled.div`
  ${commonFlexCenter}
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-shrink: 0;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const GridControls = styled.div`
  ${commonFlexCenter}
  gap: 1rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    gap: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const ControlGroup = styled.div`
  ${commonFlexCenter}
  gap: 0.5rem;
  flex: 1;
  min-width: 120px;

  @media (min-width: 768px) {
    flex: 0;
    min-width: auto;
  }
`;

const Label = styled.label`
  color: ${theme.colors.text};
  font-size: ${theme.typography.fontSize.medium};
  white-space: nowrap;
`;

const NumberInput = styled.input`
  ${commonInputStyles}
  width: 60px;
  padding: 0.5rem;

  @media (max-width: 768px) {
    width: 50px;
    padding: 0.4rem;
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 2px ${theme.colors.secondary};
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Button = styled.button`
  ${commonInputStyles}
  padding: 0.5rem 1rem;
  border: none;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.medium};
  width: 100%;
  height: 38px;
  ${commonFlexCenter}
  justify-content: center;

  @media (min-width: 768px) {
    width: auto;
  }

  &:hover {
    background-color: ${theme.colors.hover};
    transform: translateY(-1px);
  }
`;

export default Grid; 