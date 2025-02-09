import { render, screen } from '@testing-library/react';

import { Flex } from './Flex';
import styles from './flex.module.scss';

describe('Flex component', () => {
  const testId = 'flex';
  const defaultContent = 'Test Content';

  // Base rendering tests
  describe('Base rendering', () => {
    it('renders with children correctly', () => {
      render(<Flex data-testid={testId}>{defaultContent}</Flex>);
      expect(screen.getByTestId(testId)).toHaveTextContent(defaultContent);
    });

    it('renders with custom className', () => {
      const customClass = 'custom-class';
      render(
        <Flex data-testid={testId} className={customClass}>
          {defaultContent}
        </Flex>,
      );
      expect(screen.getByTestId(testId)).toHaveClass(customClass);
    });
  });

  // Flex direction tests
  describe('Flex direction', () => {
    test.each([
      ['row', styles.row],
      ['row-reverse', styles.rowReverse],
      ['column', styles.column],
      ['column-reverse', styles.columnReverse],
    ] as const)('renders with class when flexDirection is "%s"', (direction, expectedClass) => {
      render(
        <Flex data-testid={testId} flexDirection={direction}>
          {defaultContent}
        </Flex>,
      );
      expect(screen.getByTestId(testId)).toHaveClass(expectedClass);
    });
  });

  // Flex wrap tests
  describe('Flex wrap', () => {
    test.each([
      ['nowrap', styles.noWrap],
      ['wrap', styles.wrap],
      ['wrap-reverse', styles.wrapReverse],
    ] as const)('renders with class when flexWrap is "%s"', (wrap, expectedClass) => {
      render(
        <Flex data-testid={testId} flexWrap={wrap}>
          {defaultContent}
        </Flex>,
      );
      expect(screen.getByTestId(testId)).toHaveClass(expectedClass);
    });
  });

  // Justify content tests
  describe('Justify content', () => {
    test.each([
      ['flex-start', styles.justifyStart],
      ['center', styles.justifyCenter],
      ['flex-end', styles.justifyEnd],
      ['space-between', styles.justifySpaceBetween],
    ] as const)('renders with class when justifyContent is "%s"', (justify, expectedClass) => {
      render(
        <Flex data-testid={testId} justifyContent={justify}>
          {defaultContent}
        </Flex>,
      );
      expect(screen.getByTestId(testId)).toHaveClass(expectedClass);
    });
  });

  // Align items tests
  describe('Align items', () => {
    test.each([
      ['flex-start', styles.alignStart],
      ['center', styles.alignCenter],
      ['flex-end', styles.alignEnd],
    ] as const)('renders with class when alignItems is "%s"', (align, expectedClass) => {
      render(
        <Flex data-testid={testId} alignItems={align}>
          {defaultContent}
        </Flex>,
      );
      expect(screen.getByTestId(testId)).toHaveClass(expectedClass);
    });
  });

  // Gap tests
  describe('Gap', () => {
    test.each([[8], [16], [24]])('applies gap style correctly with value %i', (gapValue) => {
      render(
        <Flex data-testid={testId} gap={gapValue}>
          {defaultContent}
        </Flex>,
      );
      expect(screen.getByTestId(testId)).toHaveStyle({ gap: `${gapValue}px` });
    });
  });
});
