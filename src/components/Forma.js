import React from 'react';

import axios from 'axios';

import {
    Form,
    Input,
    Button,
    Row,
    Col,
    Card,
    DatePicker,
    Select,
    message
} from 'antd';
import '../CSS/Forma.css'

const { Option } = Select;

const dateFormat = 'DD/MM/YYYY';

export default function Forma(props) {

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 0, span: 0 },
    };

    const { glasaci, fun } = props

    const [form] = Form.useForm();

    const onFinish = (values) => {
        values.datumRodjenja = values.datumRodjenja.format(dateFormat)
        if (values.iznosPlacanja === undefined) {
            values.iznosPlacanja = 0
        }
        else {
            values.iznosPlacanja = parseInt(values.iznosPlacanja)
        }
        axios.put("https://infinite-wildwood-69664.herokuapp.com/api/glasac/dodajGlasaca/",values)
        .then(res=>{
            console.log(values)
            fun([...glasaci, values])
            message.success('Glasač je uspješno dodat!')
            form.resetFields()
        })
        .catch(err=>console.log(err));
    };


    return (

        <Row style={{ background: "#d9d9d9", borderRadius: "10px", width: "650px", padding: "15px" }} justify="center" >
            <Col>
                <Card title="Unos podataka za glasača" style={{borderRadius:"10px"}}  bordered={true}>
                    <Form
                        form={form}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        size="large"
                        {...layout}
                    >
                        <Row justify="center">

                            <Col>
                                <Form.Item label={<b>Ime</b>} name="ime" rules={[{ required: true, message: 'Molimo Vas unesite ime glasača!' }]}>
                                    <Input style={{ width: "250px" }} placeholder='Ime' />
                                </Form.Item>
                                <Form.Item label={<b>Prezime</b>} name="prezime" rules={[{ required: true, message: 'Molimo Vas unesite prezime glasača!' }]}>
                                    <Input style={{ width: "250px" }} placeholder='Prezime' />
                                </Form.Item>
                                <Form.Item label={<b>Ime oca</b>} name="imeOca" rules={[{ required: true, message: 'Molimo Vas unesite ime oca glasača!' }]}>
                                    <Input style={{ width: "250px" }} placeholder='Ime oca' />
                                </Form.Item>
                                <Form.Item label={<b>Datum rođenja</b>} name="datumRodjenja" rules={[{ required: true, message: 'Molimo Vas unesite datum rođenja glasača!' }]}>
                                    <DatePicker style={{ width: "180px" }} placeholder="DD/MM/YYYY" format={dateFormat} />
                                </Form.Item>
                                <Form.Item label={<b>Iznos plaćanja</b>} name="iznosPlacanja">
                                    <Input type="number" suffix="KM" style={{ width: "100px" }} />
                                </Form.Item>
                                <Form.Item label={<b>Izborna jedinica</b>} name="izbornaJedinica" rules={[{ required: true, message: 'Molimo Vas odaberite izbornu jedinicu glasača!' }]}>
                                    <Select style={{ width: "250px" }} placeholder="Izaberite izbornu jedinicu glasača">
                                        <Option value="MZ1">MZ1</Option>
                                        <Option value="MZ2">MZ2</Option>
                                        <Option value="MZ3">MZ3</Option>
                                        <Option value="MZ4">MZ4</Option>
                                        <Option value="MZ5">MZ5</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label={<b>Glas dobavio</b>} name="glasDobavio" rules={[{ required: true, message: 'Molimo Vas odaberite dobavljača glasa!' }]}>
                                    <Select style={{ width: "250px" }} placeholder="Izaberite jednog od dobavljača glasova">
                                        <Option value="Mirko Ruso">Mirko Ruso</Option>
                                        <Option value="Stefan Đurić">Stefan Đurić</Option>
                                        <Option value="Milan Marinković">Milan Marinković</Option>
                                        <Option value="Marijan Jelić">Marijan Jelić</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit">
                                        Dodaj glasača
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </Col>
        </Row>

    );
}