import React from 'react'

import Table from '../components/table/Table'

import manager_sale from '../assets/JsonData/manager_sale.json'

const managerSale = [

    'name',
    'quantity',
    'money'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        
        <td>{item.Name}</td>
        <td>{item.Quantity}</td>
        <td>{item.Money}</td>
        
    </tr>
)

const Product = () => {
    return (
        <div>
            <h2 className="page-header">
                Discount
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={managerSale}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={manager_sale}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
