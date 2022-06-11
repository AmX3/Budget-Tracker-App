interface IHeaderProps {
    children?: React.ReactNode;
}

const Header: React.FC<IHeaderProps> = ({ children }) => {
    return (
        <>
            <h1>{children}</h1>
        </>
    );
};

export default Header;
