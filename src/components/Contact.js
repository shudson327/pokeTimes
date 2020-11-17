import React from 'react'

const Contact = (props) => {
    setTimeout(()=> {
        props.history.push('/about')
    }, 2000)

    return (
        <div className='container'>
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed sapiente dolor tempore, placeat fugiat magni eveniet cum, distinctio animi adipisci optio accusamus aliquam. Aperiam dolorem modi, expedita dicta adipisci nemo quia similique ipsum labore assumenda commodi blanditiis, deleniti possimus fuga fugiat ullam, dolor nam vitae. In quibusdam fugit libero dignissimos.</p>
        </div>
    )
}

export default Contact