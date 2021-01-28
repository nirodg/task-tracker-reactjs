import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

const CustomButton = ({ color, text, onClick, variant }) => {
     return <Button onClick={onClick} color={ color } variant={variant}>{text}</Button>
}

CustomButton.defaultProps = {
    color: 'primary'
}

CustomButton.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default CustomButton
