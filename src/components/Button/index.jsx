import { ContainerButton } from './styles'
import PropTypes from 'prop-types';

export function Button({children, ...props}){
    
    console.log(props)
    console.log(children)
    return (    
        <ContainerButton {...props}>{children}</ContainerButton>
    )
}

Button.propTypes = {
    children: PropTypes.string
  };