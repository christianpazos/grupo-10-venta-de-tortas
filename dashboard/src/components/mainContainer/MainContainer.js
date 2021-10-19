import React from 'react';
import Products from './Products'
import AmountSales from './AmountSales';
import Users from './Users';
import LastProduct from './LastProduct';
import ProductsCategories from './ProductCategories';

function MainContainer() {
    return (
        <React.Fragment>
            <div className="container-fluid color-back-pp">


                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 title-sp" Text style={{fontStyle: 'italic', fontWeight: 'bold'}}>Dashboard de Administración</h1>
                </div>
                <div className="row">
                    <Products /> 
                    <AmountSales />
                    <Users />
                </div>
                <div className="row">
                    <LastProduct />
                    <ProductsCategories/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default MainContainer;