import React from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import FormCheck from 'react-bootstrap/FormCheck';
import { ceil } from 'lodash-es';
import { useMemo } from 'react';

const TableData = React.memo(({ divisao }) => {
                   
    const [leftColumn, rightColumn] = useMemo(() => {
        const items = divisao.subclasse ?? [];
        const middle = Math.ceil(items.length / 2);
        return [
            items.slice(0, middle),
            items.slice(middle)
        ];
    }, [divisao.subclasse]);

  return (
    <Tab.Pane eventKey={divisao.codigo}>
      <div className="p-4">

        <Row className="mb-3">
            <Col sm={1} className="text-sm-end col-form-label pt-0">          
            <span>
                
                Exemplos<i className="ti ti-chevrons-right"></i>
            </span>
            </Col>
            <Col sm={11}>
                    {divisao.exemplos?.map((exemplo, index) => (
                        <p key={index} className="mb-0">
                        {exemplo}
                        </p>
                    ))}
            </Col>
        </Row>

        <Row className="mt-3">
            <Col md={6}>
                {leftColumn.map((subclasse) => (
                    <FormCheck key={subclasse.codigo} className="p-1">
                        <FormCheck.Input
                            className="input-primary"
                            type="checkbox"
                            value={subclasse.codigo}
                            id={subclasse.codigo}
                        />

                        <FormCheck.Label htmlFor={subclasse.codigo}>
                            {subclasse.codigo_mascara} - {subclasse.descricao}
                        </FormCheck.Label>
                    </FormCheck>
                ))}
            </Col>

            <Col md={6}>
                {rightColumn.map((subclasse) => (
                    <FormCheck key={subclasse.codigo} className="p-1">
                        <FormCheck.Input
                            className="input-primary"
                            type="checkbox"
                            value={subclasse.codigo}
                            id={subclasse.codigo}
                        />

                        <FormCheck.Label htmlFor={subclasse.codigo}>
                            {subclasse.codigo_mascara} - {subclasse.descricao}
                        </FormCheck.Label>
                    </FormCheck>
                ))}
            </Col>
        </Row>
        
      </div>
    </Tab.Pane>
  );
});

export default TableData;