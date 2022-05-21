import { Scrollbars } from 'react-custom-scrollbars';

const thumbStyle = {
    backgroundColor: '#dbdbdb',
    borderRadius: '8px'
}
const renderThumb = ({ style, ...props }: any) => {
    return <div style={{...style, ...thumbStyle}} {...props} />;
};
  
const CustomScrollbar = ({ children, ...props }: any) => {
    return (
        <Scrollbars {...props} 
            renderThumbHorizontal={renderThumb}
            renderThumbVertical={renderThumb}>
            {children}
        </Scrollbars>
    )
};
export default CustomScrollbar