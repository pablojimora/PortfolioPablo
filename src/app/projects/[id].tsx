import { useRouter } from 'next/router'
import React from 'react'
import { projects } from '../../helpers/projects';

const Details = () => {

    const router = useRouter();

    const { id } = router.query;

    
    const miElemento = projects.find(product => product.id === Number(id));



    return (
        <div>
            {miElemento && (
                <>
                    <div>{miElemento.name}</div>
                    <div>{miElemento.link}</div>
                    <img src={miElemento.img} alt={miElemento.name} />
                </>
            )}
        </div>
    )
}

export default Details