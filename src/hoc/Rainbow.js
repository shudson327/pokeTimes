import React from 'react'


const Rainbow = (WrappedComponent) => {
    const colors = ['orange', 'pink', 'yellow', 'purple', 'blue', 'green'];
    const randomColor = colors[Math.floor(Math.random() * 5)];
    const className = randomColor + '-text';

        return(props) => (

                <div className={className}>
                    <WrappedComponent{...props}/>
                </div>
            )
        }


export default Rainbow

