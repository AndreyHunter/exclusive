const Separator = ({ style = {}, ...props }) => {
    return (
        <div
            style={{ width: '100%', height: 0.5, backgroundColor: 'black', opacity: 0.3, ...style }}
            {...props}
        />
    );
};

export default Separator;
