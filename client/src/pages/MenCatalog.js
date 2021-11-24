import React from 'react';
import CatalogCard from '../components/CatalogCard'
import Catalog from '../components/CatalogArr'
import catalog from '../components/CatalogArr';

function MenCatalog() {

    return (
        <div className="page container">
            <h3 className="secondary-label">available packages :</h3>
            {Catalog.filter((product) => product.category == "men").map((product) => (
                <CatalogCard product={product} />
            ))}
        </div>
    )
}

export default MenCatalog;