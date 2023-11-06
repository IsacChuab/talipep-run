import { Button, Typography } from 'antd';
import React from 'react';
import styles from './MainContent.module.css';

interface Props {
  openCheck: (buttonCheck: string) => void;
}

const MainContent = ({ openCheck }: Props) => {
  return (
    <>
      <div className={styles.title}>
        <Typography.Title level={4} style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          EBA! quanto mais, melhor :D - me conte:
        </Typography.Title>
      </div>

      <div className={styles.buttonCheck}>
        <Typography className={styles.styleTypography}>
          Está chegando?
        </Typography>

        <Button className={styles.styleButton} onClick={() => openCheck('in')}>
          CHECKING
        </Button>
      </div>

      <div className={styles.buttonCheck}>
      <Typography className={styles.styleTypography}>
          ou já está indo?
        </Typography>

        <Button className={styles.styleButton} onClick={() => openCheck('out')}>
          CHECKOUT
        </Button>
      </div>
    </>
  );
}

export default MainContent;