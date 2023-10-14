import { AskCheck } from '@/Interfaces/askCheck';
import { Typography } from 'antd';
import React from 'react';

interface Props {
  formSentences: AskCheck;
}

const Check: React.FC<Props> = ({ formSentences }) => {
  return (
    <>
      <div className='title'>
        <Typography>
          {formSentences.title}
        </Typography>
        <Typography>
          {formSentences.subTitle}
        </Typography>
      </div>

      <div className='Form'>
        <Typography>
          Me conte seu nome:
        </Typography>

        <Typography>
          Me conte também seu email:
        </Typography>

        <Typography>
          {formSentences.ask}
        </Typography>
      </div>
    </>
  );
}

export default Check;