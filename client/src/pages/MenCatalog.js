import React from 'react';
import CatalogCard from '../components/CatalogCard'
import Catalog from '../components/CatalogArr'
import catalog from '../components/CatalogArr';

function MenCatalog() {

    return (
        <div className="page container">
            <h2 className="lead mt-2">available packages for men</h2>
            {Catalog.filter((product) => product.category == "men").map((product) => (
                <CatalogCard product={product} />
            ))}
        </div>
    )
}

export default MenCatalog;