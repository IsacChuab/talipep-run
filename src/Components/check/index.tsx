import { feelingOptions } from '@/Constant/feelingOptions';
import { AskCheck } from '@/Interfaces/askCheck';
import { Form, Input, Typography, Radio, Button, Space } from 'antd';
import React from 'react';
import parse from 'html-react-parser';
import styles from './CheckForm.module.css';
import { useForm } from 'antd/lib/form/Form';

interface Props {
  formSentences: AskCheck;
  backMain: (backPage: boolean) => void;
}

const Check: React.FC<Props> = ({ formSentences, backMain }) => {
  const handleSubmitForm = () => {
    console.log(formSentences.title, form.getFieldsValue());
  }

  const [form] = useForm();
  return (
    <>
      <div className='title'>
        <Typography.Title level={4} style={{ textAlign: 'center' }}>
          {formSentences.title}
        </Typography.Title>
        <Typography.Title level={5}>
          {formSentences.subTitle}
        </Typography.Title>
      </div>

      <div className={styles.form}>
        <Form 
          layout='vertical'
          form={form}
          onFinish={handleSubmitForm}
        >
          <Form.Item 
            name='user'
            label='Me conte seu nome:' 
            rules={[{ required: true, min: 3, message: 'Não esqueça seu nome!' }]}
          >
            <Input></Input>
          </Form.Item>

          <Form.Item
            name='email'
            label='Seu e-mail também:'
            style={{ fontSize: '19px' }}
            rules={[{ required: true, type: 'email', message: 'Não esqueça seu e-mail' }]}  
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='feelingOptions'
            rules={[{ required: true, message: 'Como se sente? falta selecionar...' }]}
          >
            <Radio.Group size='large' value={'bad'}>
            <Typography>
              {formSentences.ask} 
            </Typography>
              {feelingOptions.map((radioItem, i) => {
                return (
                  <Radio
                    value={radioItem.value}
                    key={i}
                    style={{
                      marginBottom: '1rem',
                      fontSize: '14px'
                    }}
                  >
                    {`${parse(radioItem.emoji)} - ${radioItem.label}`}
                  </Radio>
                );
              })}
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <Space>
              <Button type="dashed" onClick={() => backMain(false)}>
                Voltar
              </Button>

              <Button type="primary" htmlType="submit">
                Enviar
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default Check;