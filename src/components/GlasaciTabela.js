import React from 'react'
import {
  Table,
  Col,
  Card,
  Row
} from 'antd';




const columns = [
  {
    title: 'Ime',
    dataIndex: 'ime',
    key: 'ime',
  },
  {
    title: 'Prezime',
    dataIndex: 'prezime',
    key: 'prezime',
  },
  {
    title: 'Ime oca',
    dataIndex: 'imeOca',
    key: 'imeOca',
  },
  {
    title: 'Datum rođenja',
    dataIndex: 'datumRodjenja',
    key: 'datumRodjenja',
  },
  {
    title: 'Plaćeno',
    dataIndex: 'iznosPlacanja',
    key: 'iznosPlacanja',
    render: text => text + "KM",
  },
  {
    title: 'Izborna jedinica',
    dataIndex: 'izbornaJedinica',
    key: 'izbornaJedinica',
  },
  {
    title: 'Glas dobavio',
    dataIndex: 'glasDobavio',
    key: 'glasDobavio',
  },
];

export default function GlasaciTabela(props) {

  const { glasaci } = props
  const [suma, setSuma] = React.useState(0)

  React.useEffect(() => {
    setSuma(0);
    glasaci.map(item => setSuma(prevSuma => prevSuma + item.iznosPlacanja))
  }, [glasaci])

  return (
    <Row style={{ background: "#d9d9d9", borderRadius: "10px", width: "1200px", padding: "15px" }} justify="center" >
      <Col>
        <Card title="Tabela sa upisanim glasačima" style={{ borderRadius: "10px",width: "1080px" }} bordered={true}>
          <Table
            columns={columns}
            dataSource={glasaci}
            style={{ borderRadius: '25px' }}
            bordered
            footer={() => <b>{`Ukupno potrošeno novca je: ${suma}KM`}</b>}
          />
        </Card>
      </Col>
    </Row>

  )
}

