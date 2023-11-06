import { feelingOptions } from '@/constant/feelingOptions';
import { AskCheck } from '@/Interfaces/askCheck';
import { Form, Input, Typography, Radio, Button, Space } from 'antd';
import React from 'react';
import parse from 'html-react-parser';
import styles from './CheckForm.module.css';
import { useForm } from 'antd/lib/form/Form';
import emailjs from '@emailjs/browser';

interface Props {
  formSentences: AskCheck;
  backMain: (backPage: boolean) => void;
}

const Check = ({ formSentences, backMain }: Props) => {
  const handleSubmitForm = () => {
    const data = { ...form.getFieldsValue(), title: formSentences.title }

      emailjs.send(
        'service_fixt7q8',
        'template_8eqbqiw',
        { ...data }, 
        '81ki98WQf18jK4DWq'
    ).then((resopnse) => {
        alert('Suas informações foram enviadas com sucesso');
        backMain(false)
    }, (err) => {
        alert('Algo deu errado, tente novamente mais tarde');
    });
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
            rules={[{ required: true, min: 3, message: 'Seu nome é obrigatório!' }]}
          >
            <Input></Input>
          </Form.Item>

          <Form.Item
            name='email'
            label='Seu e-mail também:'
            style={{ fontSize: '19px' }}
            rules={[{ required: true, type: 'email', message: 'Seu e-mail é obrigatório' }]}  
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='feelingOptions'
            rules={[{ required: true, message: 'Selecione uma opção...' }]}
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