import { Button, Typography } from 'antd';
import React from 'react';
import styles from './MainContent.module.css';

interface Props {
  openCheck: (buttonCheck: string) => void;
}

const MainContent: React.FC<Props> = ({ openCheck }) => {
  const styleButton = {
    color: '#254CFA',
    fontWeight: 'bold',
    borderColor:'#254CFA',
    boxShadow: '2px 2px 5px #254CFA',
    marginBottom: '1.5rem'
  }

  const styleTypography = {
    color: '#254CFA',
    fontSize: '18px', 
    fontWeight: '600', 
    marginBottom: '0.2rem',
    padding: '0.4rem'
  }

  return (
    <>
      <div className={styles.title}>
        <Typography.Title level={4} style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          EBA! quanto mais, melhor :D - me conte:
        </Typography.Title>
      </div>

      <div className={styles.buttonCheck}>
        <Typography style={styleTypography}>
          Está chegando?
        </Typography>

        <Button style={styleButton} onClick={() => openCheck('in')}>
          CHECKING
        </Button>
      </div>

      <div className={styles.buttonCheck}>
      <Typography style={styleTypography}>
          ou já está indo?
        </Typography>

        <Button style={styleButton} onClick={() => openCheck('out')}>
          CHECKOUT
        </Button>
      </div>
    </>
  );
}

export default MainContent;