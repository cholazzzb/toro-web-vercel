import { Box } from '@chakra-ui/react';
import { Children, ReactNode } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import styles from './Collection.module.css';

type VerticalCollectionProps = {
  children: ReactNode;
  itemHeight?: number;
};

export const VerticalCollection = ({
  children,
  itemHeight = 70,
}: VerticalCollectionProps) => {
  const arrOfChildren = Children.toArray(children);

  return (
    <Box position="relative" width="100%" height="300px">
      <AutoSizer>
        {({ height, width }) => (
          <List
            className={styles.list}
            height={height}
            width={width}
            itemCount={Children.count(children)}
            itemSize={itemHeight}
            itemData={{ arrOfChildren }}
          >
            {({ data, index, style }) => (
              <div style={style} className={styles.listItem}>
                {data.arrOfChildren[index]}
              </div>
            )}
          </List>
        )}
      </AutoSizer>
    </Box>
  );
};

type HorizontalCollectionProps = {
  children: ReactNode;
  itemWidth?: number;
};

export const HorizontalCollection = ({
  children,
  itemWidth = 70,
}: HorizontalCollectionProps) => {
  const arrOfChildren = Children.toArray(children);

  return (
    <div className={styles.horizontalCollection}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            className={styles.list}
            height={height}
            width={width}
            itemCount={Children.count(children)}
            itemSize={itemWidth}
            layout="horizontal"
            itemData={{
              arrOfChildren,
            }}
          >
            {({ data, index, style }) => (
              <div style={style} className={styles.listItem}>
                {data.arrOfChildren[index]}
              </div>
            )}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};
